/**
 * 图库图片压缩与响应式规格生成脚本
 *
 * 作用：
 *  1. 将 public/gallery 下的原始大图统一命名为语义化短链（如 crab-catwalk-11.jpg）；
 *  2. 原地压缩主图（最长边限制 + 渐进式 JPEG），显著降低体积；
 *  3. 生成 WebP 版本，以及 800px 缩略规格，供 <picture>/srcset 使用；
 *  4. 输出 src/image-manifest.json，记录每张图的真实宽高，供页面写入
 *     width/height 属性，消除布局偏移（CLS）。
 *
 * 幂等：已处理且体积未变化的图片会被跳过，重复执行安全。
 */

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  console.log("未检测到 sharp，跳过图片优化（使用仓库中已优化好的图片）。");
  process.exit(0);
}

const ROOT = path.join(__dirname, "..");
const GALLERY_DIR = path.join(ROOT, "public", "gallery");
const OPT_DIR = path.join(GALLERY_DIR, "opt");
const MANIFEST_PATH = path.join(ROOT, "src", "image-manifest.json");

const MAIN_MAX = 1920; // 主图最长边
const SMALL_MAX = 800; // 缩略图最长边
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 66;

const VARIANT_RE = /-(?:400|800|1600)\.(?:jpg|jpeg|png)$/i;

/** 将 "crab-catwalk (11).jpg" 归一化为 "crab-catwalk-11.jpg" */
function toSlug(fileName) {
  const m = fileName.match(/^(.*?)\s*\((\d+)\)\.(jpg|jpeg|png)$/i);
  if (m) {
    const base = m[1].trim().replace(/\s+/g, "-").toLowerCase();
    return `${base}-${String(parseInt(m[2], 10)).padStart(2, "0")}.jpg`;
  }
  return fileName.replace(/\s+/g, "-").toLowerCase();
}

function baseName(fileName) {
  return fileName.replace(/\.(jpg|jpeg|png)$/i, "");
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

/** Windows 下文件可能被索引/杀软短暂占用，写入失败时重试 */
function writeFileWithRetry(target, data, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      fs.writeFileSync(target, data);
      return;
    } catch (err) {
      if (i === attempts - 1) throw err;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200);
    }
  }
}

const variantsOnly = process.argv.includes("--variants-only");
const force = process.argv.includes("--force");

async function main() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.log("gallery 目录不存在，跳过。");
    return;
  }
  fs.mkdirSync(OPT_DIR, { recursive: true });

  // ── 1. 归一化文件名 ──
  const rawFiles = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => fs.statSync(path.join(GALLERY_DIR, f)).isFile())
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
    .filter((f) => !VARIANT_RE.test(f));

  for (const file of rawFiles) {
    const slug = toSlug(file);
    if (slug !== file) {
      const from = path.join(GALLERY_DIR, file);
      const to = path.join(GALLERY_DIR, slug);
      if (fs.existsSync(to)) {
        fs.unlinkSync(from);
        console.log(`  去重删除 ${file}（已存在 ${slug}）`);
      } else {
        fs.renameSync(from, to);
        console.log(`  重命名 ${file} → ${slug}`);
      }
    }
  }

  // ── 2. 压缩 + 生成规格 ──
  const sources = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => fs.statSync(path.join(GALLERY_DIR, f)).isFile())
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
    .filter((f) => !VARIANT_RE.test(f))
    .sort((a, b) => {
      const na = parseInt((a.match(/-(\d+)\./) || [])[1] || "0", 10);
      const nb = parseInt((b.match(/-(\d+)\./) || [])[1] || "0", 10);
      return na - nb;
    });

  const previous = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"))
    : {};
  const manifest = {};

  let beforeTotal = 0;
  let afterTotal = 0;

  for (const file of sources) {
    const filePath = path.join(GALLERY_DIR, file);
    const beforeSize = fs.statSync(filePath).size;
    const base = baseName(file);
    const mainJpgUrl = `/gallery/${file}`;
    const mainWebpPath = path.join(OPT_DIR, `${base}.webp`);
    const smallJpgPath = path.join(OPT_DIR, `${base}-800.jpg`);
    const smallWebpPath = path.join(OPT_DIR, `${base}-800.webp`);

    const cached = previous[mainJpgUrl];
    const outputsExist =
      fs.existsSync(mainWebpPath) &&
      fs.existsSync(smallJpgPath) &&
      fs.existsSync(smallWebpPath);

    if (!force && cached && cached.bytes === beforeSize && outputsExist) {
      manifest[mainJpgUrl] = cached;
      beforeTotal += beforeSize;
      afterTotal += beforeSize;
      console.log(`  跳过 ${file}（已优化）`);
      continue;
    }

    // 全部基于内存缓冲处理，避免 Windows 下 sharp 持有源文件句柄导致覆盖写入失败
    const input = fs.readFileSync(filePath);
    const meta = await sharp(input, { failOn: "none" }).metadata();
    const srcW = meta.width || MAIN_MAX;
    const srcH = meta.height || MAIN_MAX;

    const mainW = Math.min(srcW, MAIN_MAX);
    const mainH = Math.round((srcH / srcW) * mainW);
    const smallW = Math.min(srcW, SMALL_MAX);
    const smallH = Math.round((srcH / srcW) * smallW);

    // 主图 JPEG（原地覆盖）
    const mainJpgBuffer = await sharp(input)
      .rotate()
      .resize({ width: mainW, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    // 仅在压缩后体积更小的时候才覆盖，避免小图被反向放大体积；
    // --variants-only 模式下主图已是最优，仅重建 WebP / 缩略规格，避免二次有损压缩
    if (!variantsOnly && mainJpgBuffer.length < beforeSize) {
      writeFileWithRetry(filePath, mainJpgBuffer);
    }

    await sharp(input)
      .rotate()
      .resize({ width: mainW, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toBuffer()
      .then((buf) => writeFileWithRetry(mainWebpPath, buf));

    await sharp(input)
      .rotate()
      .resize({ width: smallW, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer()
      .then((buf) => writeFileWithRetry(smallJpgPath, buf));

    await sharp(input)
      .rotate()
      .resize({ width: smallW, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toBuffer()
      .then((buf) => writeFileWithRetry(smallWebpPath, buf));

    const afterSize = fs.statSync(filePath).size;
    beforeTotal += beforeSize;
    afterTotal += afterSize;

    manifest[mainJpgUrl] = {
      bytes: afterSize,
      width: mainW,
      height: mainH,
      smallWidth: smallW,
      smallHeight: smallH,
      webp: `/gallery/opt/${base}.webp`,
      small: `/gallery/opt/${base}-800.jpg`,
      smallWebp: `/gallery/opt/${base}-800.webp`,
    };

    console.log(
      `  ${file}  ${srcW}×${srcH} → ${mainW}×${mainH}  ${kb(beforeSize)} → ${kb(afterSize)}`
    );
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  const reduction = beforeTotal > 0 ? (1 - afterTotal / beforeTotal) * 100 : 0;
  console.log(
    `\n共处理 ${Object.keys(manifest).length} 张图：主图体积 ${kb(beforeTotal)} → ${kb(
      afterTotal
    )}（下降 ${reduction.toFixed(1)}%）`
  );
  console.log(`已写入 ${path.relative(ROOT, MANIFEST_PATH)}`);
}

main().catch((err) => {
  console.error("图片优化失败：", err);
  process.exit(1);
});
