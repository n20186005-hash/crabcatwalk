"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";
import { TOPICS, TOPIC_SLUGS, type TopicLocale } from "@/i18n/topics";

const LABELS: Record<TopicLocale, { kicker: string; title: string; sub: string }> = {
  pt: {
    kicker: "Guias práticos",
    title: "Aprofunde seu passeio pela Passarela",
    sub: "Páginas focadas com dicas reais sobre onde comer, como chegar, a estátua gigante e a noite na orla.",
  },
  en: {
    kicker: "Practical guides",
    title: "Go deeper on the Crab Catwalk",
    sub: "Focused pages with real tips on where to eat, how to get there, the giant crab statue and the night by the sea.",
  },
  zh: {
    kicker: "实用攻略",
    title: "深入了解蟹步道",
    sub: "围绕「哪里吃蟹、怎么到达、巨型螃蟹雕像、夜晚海滨」的专门页面，提供真实可用的信息。",
  },
};

export function TopicLinks() {
  const { locale } = useLang();
  const labels = LABELS[locale as TopicLocale];
  return (
    <section id="topics" className="section" style={{ padding: "4rem 1.5rem", background: "var(--color-paper)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p className="section-label" style={{ color: "var(--color-terracotta)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
          {labels.kicker}
        </p>
        <h2 className="section-title" style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", color: "var(--color-deep)", margin: "0 0 0.5rem" }}>
          {labels.title}
        </h2>
        <p style={{ color: "var(--color-earth-soft)", fontSize: "1.02rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "640px" }}>
          {labels.sub}
        </p>
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {TOPIC_SLUGS.map((slug) => {
            const c = TOPICS[slug][locale as TopicLocale];
            return (
              <a key={slug} href={`/${locale}/${slug}`} style={{ display: "block", padding: "1.4rem 1.5rem", border: "1px solid var(--color-sand)", borderRadius: "14px", textDecoration: "none", color: "var(--color-deep)", background: "var(--color-cream)", transition: "transform .15s ease" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.5rem" }}>{c.title}</div>
                <div style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: 1.6 }}>{c.metaDescription}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
