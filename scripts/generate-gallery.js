const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const manifestPath = path.join(__dirname, '../src/image-manifest.json');
const outputFilePath = path.join(__dirname, '../src/gallery-data.json');

// 由 scripts/optimize-images.js 生成，记录每张图的真实尺寸与响应式规格
const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  : {};

const isVariant = (f) => /-(?:400|800|1600)\.(jpg|jpeg|png)$/i.test(f);

const images = fs
  .readdirSync(galleryDir)
  .filter((f) => fs.statSync(path.join(galleryDir, f)).isFile())
  .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
  .filter((f) => !isVariant(f))
  .map((f) => `/gallery/${f}`)
  .sort((a, b) => {
    const numA = parseInt((a.match(/-(\d+)\./) || [])[1] || '0', 10);
    const numB = parseInt((b.match(/-(\d+)\./) || [])[1] || '0', 10);
    return numA - numB;
  })
  .map((src) => ({ src, ...(manifest[src] || {}) }));

fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2) + '\n');

console.log(`Generated gallery-data.json with ${images.length} images.`);
