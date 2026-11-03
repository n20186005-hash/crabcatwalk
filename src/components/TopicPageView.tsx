"use client";

import React from "react";
import { LangProvider, useLang } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { renderText } from "@/lib/text";
import { SITE } from "@/i18n/site";
import { TOPICS, TOPIC_SLUGS, type TopicContent, type TopicLocale } from "@/i18n/topics";

function TopicNav() {
  const { locale } = useLang();
  return (
    <header className="site-nav" style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--color-cream)", borderBottom: "1px solid var(--color-sand)" }}>
      <div className="nav-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 1.5rem" }}>
        <a href={`/${locale}`} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--color-deep)", textDecoration: "none" }}>
          {SITE.shortName}
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

function TopicFooter() {
  const { t, locale } = useLang();
  return (
    <footer className="site-footer" style={{ background: "var(--color-deep)", color: "var(--color-cream)", padding: "2.5rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", marginBottom: "1.25rem" }}>
          {t.footer.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-cream)", opacity: 0.85, textDecoration: "none", fontSize: "0.95rem" }}>
              {renderText(link.name)}
            </a>
          ))}
          <a href={`/${locale}/${TOPIC_SLUGS[0]}`} style={{ color: "var(--color-cream)", opacity: 0.85, textDecoration: "none", fontSize: "0.95rem" }}>
            {TOPICS[TOPIC_SLUGS[0]][locale as TopicLocale].title}
          </a>
        </div>
        <p style={{ fontSize: "0.85rem", opacity: 0.6, margin: 0 }}>
          {renderText(t.footer.text)}
        </p>
      </div>
    </footer>
  );
}

function FaqPageJsonLd({ content }: { content: TopicContent }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.baseUrl}/${content.slug}#faq`,
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\*\*/g, "") },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function View({ locale, content }: { locale: TopicLocale; content: TopicContent }) {
  const otherSlugs = TOPIC_SLUGS.filter((s) => s !== content.slug);
  return (
    <LangProvider initialLocale={locale}>
      <TopicNav />
      <main style={{ maxWidth: "820px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
        <p style={{ color: "var(--color-terracotta)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
          {SITE.shortName} · {SITE.city}
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", lineHeight: 1.15, color: "var(--color-deep)", margin: "0 0 1.25rem" }}>
          {content.title}
        </h1>
        <p style={{ fontSize: "1.08rem", color: "var(--color-earth-soft)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          {renderText(content.intro)}
        </p>

        {content.sections.map((section, i) => (
          <section key={i} style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--color-deep)", marginBottom: "0.75rem" }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: "1.02rem", color: "var(--color-earth-soft)", lineHeight: 1.75, margin: 0 }}>
              {renderText(section.body)}
            </p>
          </section>
        ))}

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            {locale === "pt" ? "Perguntas frequentes" : locale === "en" ? "Frequently asked questions" : "常见问题"}
          </h2>
          {content.faq.map((f, i) => (
            <details key={i} style={{ borderBottom: "1px solid var(--color-sand)", padding: "0.85rem 0" }}>
              <summary style={{ fontWeight: 600, color: "var(--color-deep)", cursor: "pointer" }}>{f.question}</summary>
              <p style={{ fontSize: "1rem", color: "var(--color-earth-soft)", lineHeight: 1.7, marginTop: "0.5rem" }}>
                {renderText(f.answer)}
              </p>
            </details>
          ))}
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            {locale === "pt" ? "Leia também" : locale === "en" ? "Read also" : "延伸阅读"}
          </h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {otherSlugs.map((s) => {
              const c = TOPICS[s][locale];
              return (
                <a key={s} href={`/${locale}/${s}`} style={{ display: "block", padding: "1.1rem 1.25rem", border: "1px solid var(--color-sand)", borderRadius: "12px", textDecoration: "none", color: "var(--color-deep)", background: "var(--color-paper)" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>{c.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: 1.5 }}>{c.metaDescription}</div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <TopicFooter />
      <FaqPageJsonLd content={content} />
    </LangProvider>
  );
}

export function TopicPageView({ locale, content }: { locale: string; content: TopicContent }) {
  return <View locale={locale as TopicLocale} content={content} />;
}
