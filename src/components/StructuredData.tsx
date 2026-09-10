"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";
import { SITE_BASE_URL } from "@/i18n/site";

/**
 * FAQPage 结构化数据
 * ------------------------------------------------------------------
 * 用于抢占 Featured Snippet / AI 概览卡片。
 * 实体（TouristAttraction）、WebSite、Organization、BreadcrumbList 等
 * 由 src/app/schema.ts 在 [locale]/layout.tsx 服务端统一输出，
 * 此处仅负责 FAQPage，避免同一页面出现重复/冲突的结构化数据。
 */
export function StructuredData() {
  const { t, locale } = useLang();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_BASE_URL}/${locale}#faq`,
    inLanguage:
      locale === "pt" ? "pt-BR" : locale === "zh" ? "zh-CN" : "en-US",
    mainEntity: t.faq.items.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
