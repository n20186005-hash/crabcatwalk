import React from "react";
import imageManifest from "@/image-manifest.json";

type ImageMeta = {
  width?: number;
  height?: number;
  smallWidth?: number;
  smallHeight?: number;
  webp?: string;
  small?: string;
  smallWebp?: string;
};

const manifest = imageManifest as Record<string, ImageMeta>;

type SmartImageProps = {
  src: string;
  alt: string;
  /** 告诉浏览器该图在不同视口下的实际渲染宽度，用于挑选合适的规格 */
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 首屏关键图片：立即加载并提高抓取优先级 */
  priority?: boolean;
  onClick?: () => void;
};

/**
 * 响应式图片组件
 * - 输出 <picture>：现代浏览器取 WebP，其余回退 JPEG
 * - 通过 srcset 让手机只下载 800px 缩略图，桌面才取大图
 * - 始终写入 width/height，避免图片加载造成的布局偏移（CLS）
 */
export function SmartImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  style,
  priority = false,
  onClick,
}: SmartImageProps) {
  const meta = manifest[src];

  const loading = priority ? "eager" : "lazy";
  const decoding = priority ? "sync" : "async";

  if (!meta?.webp || !meta.width || !meta.height) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        onClick={onClick}
      />
    );
  }

  const webpSrcSet = `${meta.smallWebp} ${meta.smallWidth}w, ${meta.webp} ${meta.width}w`;
  const jpgSrcSet = `${meta.small} ${meta.smallWidth}w, ${src} ${meta.width}w`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={src}
        srcSet={jpgSrcSet}
        sizes={sizes}
        width={meta.width}
        height={meta.height}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        fetchPriority={priority ? "high" : "auto"}
        onClick={onClick}
      />
    </picture>
  );
}

export default SmartImage;
