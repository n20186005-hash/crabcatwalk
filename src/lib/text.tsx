import React from "react";

/**
 * 轻量文本渲染：把翻译文案中的 **强调** 标记转成 <strong>，
 * 避免引入完整 Markdown 解析器。
 */
export function renderText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default renderText;
