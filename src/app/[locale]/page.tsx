"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LangProvider, useLang } from "@/components/LangProvider";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { StructuredData } from "@/components/StructuredData";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SmartImage } from "@/components/SmartImage";
import { WeatherSection } from "@/components/WeatherSection";
import { TideSection } from "@/components/TideSection";
import galleryImagesData from "@/gallery-data.json";
import { SITE } from "@/i18n/site";
import { renderText } from "@/lib/text";
import { TopicLinks } from "@/components/TopicLinks";

// Temporary: using minimal translations for build
// import { translations } from "@/i18n/translations";
// TODO: Restore full translations after completing all language updates

const MAPS_URL = SITE.mapsShareUrl;

// 评价仅以聚合快照形式展示：评分与数量同步自 Google 地图（2026-10），
// 不逐条引用具名评价，以避免无法核实的引述内容。
const REVIEWS_UPDATED = "2026-10";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ width: "24px", height: "24px" }} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        padding: "0.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {/* 页眉清晰展示景点官方全称 + 当地俗称（NAP 一致性） */}
        <a href="#about" className="nav-brand" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
            {SITE.fullName}
          </span>
          <span className="nav-brand-sub">
            {SITE.shortName} · {SITE.city}
          </span>
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href="#history">{t.nav.history}</a>
          <a href="#nature">{t.nav.nature}</a>
          <a href="#culture">{t.nav.culture}</a>
          <a href="#architecture">{t.nav.architecture}</a>
          <a href="#monuments">{t.nav.monuments}</a>
          <a href="#weather">{t.nav.weather}</a>
          <a href="#tide">{t.nav.tide}</a>
          <a href="#facilities">{t.nav.facilities}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t, locale } = useLang();
  return (
    <section className="hero">
      {/* 首屏主视觉：使用压缩后的 WebP，并保留 JPEG 兜底 */}
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        {/* H1：全页唯一。同时写出葡语官方名与英文名，
            让「Passarela do Caranguejo」与「Crab Catwalk」在同一个标题里被绑定为同一实体 */}
        <h1 className="hero-title">
          {t.hero.title}{" "}
          <span className="hero-title-alt">({t.hero.titleAlt})</span>
          <span className="hero-title-city"> · {SITE.city}</span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "1.5rem" }}>
          {t.hero.tags?.map((tag: string, i: number) => (
            <span key={i} style={{ background: "rgba(255,255,255,0.2)", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600, color: "#fff", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", padding: "1rem 2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", margin: "2rem auto", flexWrap: "wrap", maxWidth: "800px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{locale === "zh" ? "地理位置" : locale === "pt" ? "Localização" : "Location"}</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>Aracaju, SE</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{locale === "zh" ? "Plus Code" : locale === "pt" ? "Plus Code" : "Plus Code"}</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>2W5X+6J</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{locale === "zh" ? "评分" : locale === "pt" ? "Avaliação" : "Rating"}</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>4.7/5</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{locale === "zh" ? "评价数量" : locale === "pt" ? "Avaliações" : "Reviews"}</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>{Number(SITE.reviewCount).toLocaleString("en-US")}</div>
          </div>
        </div>

        <a href="#history" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="hero-meta">
          <div className="hero-rating">4.7</div>
          <div className="hero-stars">★ ★ ★ ★ ★</div>
          <div className="hero-reviews">{Number(SITE.reviewCount).toLocaleString("en-US")} {t.rating.reviews} · {t.rating.source}</div>
        </div>
      </a>
    </section>
  );
}

function About() {
  const { t, locale } = useLang();

  const hierarchy = [
    { label: SITE.fullName, sub: SITE.shortName },
    { label: SITE.city, sub: locale === "zh" ? "城市" : locale === "pt" ? "Cidade" : "City" },
    { label: SITE.state, sub: locale === "zh" ? "州 / 省" : locale === "pt" ? "Estado" : "State" },
    { label: SITE.country, sub: locale === "zh" ? "国家" : locale === "pt" ? "País" : "Country" },
  ];

  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">{SITE.fullName} · {SITE.city}</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "2rem" }}>
          {renderText(t.about.intro)}
        </p>
      </ScrollReveal>
      <ScrollReveal>
        {/* 地理面包屑：实体 → 城市 → 州 → 国家 */}
        <nav className="entity-breadcrumb" aria-label={t.about.breadcrumbTitle}>
          <span className="entity-breadcrumb-label">{t.about.breadcrumbTitle}</span>
          <ol className="entity-breadcrumb-list">
            {hierarchy.map((item, i) => (
              <li key={i} className="entity-breadcrumb-item">
                <span className="entity-breadcrumb-name">{item.label}</span>
                <span className="entity-breadcrumb-sub">{item.sub}</span>
              </li>
            ))}
          </ol>
        </nav>
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginTop: "2rem" }}>
          {renderText(t.about.nearbyCluster)}
        </p>
      </ScrollReveal>
    </section>
  );
}

function SourcesSection() {
  const { t } = useLang();

  return (
    <section id="sources" className="section" style={{ background: "rgba(0,0,0,0.02)" }}>
      <ScrollReveal>
        <p className="section-label">Sources</p>
        <h2 className="section-title">{t.sources.title}</h2>
        <p className="section-subtitle">{t.sources.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <ul className="sources-list">
          {t.sources.items.map((item: { name: string; url: string; note: string }, i: number) => (
            <li key={i} className="source-item">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                {item.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
              <p className="source-note">{item.note}</p>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}

function History() {
  const { t } = useLang();

  return (
    <section id="history" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.history.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>{renderText(t.history.intro)}</p>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ padding: "2rem", background: "var(--color-cream)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-10px", right: "-10px", opacity: 0.05, transform: "rotate(15deg)" }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "1.5rem" }}>🔍</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", margin: 0 }}>
              {t.curiosities.title}
            </h3>
          </div>
          <p style={{ fontSize: "1rem", color: "var(--color-earth-soft)", lineHeight: "1.6", margin: 0, position: "relative", zIndex: 1, whiteSpace: "pre-line" }}>
            {renderText(t.curiosities.content)}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Nature() {
  const { t } = useLang();

  return (
    <section id="nature" className="section" style={{ background: "rgba(0,0,0,0.02)" }}>
      <ScrollReveal>
        <p className="section-label">02</p>
        <h2 className="section-title">{t.nature.title}</h2>
        <p className="section-subtitle">{t.nature.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>
          {renderText(t.nature.intro)}
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="content-grid">
          {t.nature.items.map((item, i) => (
            <article className="content-card" key={i}>
              <h3 className="content-card-title">{item.title}</h3>
              <p className="content-card-text">{renderText(item.content)}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="highlight-box">
          <h3 className="highlight-title">{t.nature.conservation.title}</h3>
          <p className="highlight-text" style={{ whiteSpace: "pre-line" }}>
            {renderText(t.nature.conservation.content)}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Culture() {
  const { t } = useLang();

  return (
    <section id="culture" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{t.culture.title}</h2>
        <p className="section-subtitle">{t.culture.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>
          {renderText(t.culture.intro)}
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="content-grid">
          {t.culture.items.map((item, i) => (
            <article className="content-card" key={i}>
              <h3 className="content-card-title">{item.title}</h3>
              <p className="content-card-text">{renderText(item.content)}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="highlight-box">
          <h3 className="highlight-title">{t.culture.legend.title}</h3>
          <p className="highlight-text" style={{ whiteSpace: "pre-line" }}>
            {renderText(t.culture.legend.content)}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Facilities() {
  const { t } = useLang();

  return (
    <section id="facilities" className="section" style={{ background: "rgba(0,0,0,0.02)" }}>
      <ScrollReveal>
        <p className="section-label">09</p>
        <h2 className="section-title">{t.facilities.title}</h2>
        <p className="section-subtitle">{t.facilities.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ marginBottom: "2.5rem" }}>
          {renderText(t.facilities.intro)}
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="facility-grid">
          {t.facilities.items.map((item, i) => (
            <div className="facility-card" key={i}>
              <span className="facility-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3 className="facility-name">{item.name}</h3>
                <p className="facility-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <p className="facility-note">{renderText(t.facilities.note)}</p>
      </ScrollReveal>
    </section>
  );
}

function Architecture() {
  const { t } = useLang();
  
  return (
    <section id="architecture" className="section">
      <ScrollReveal>
        <p className="section-label">04</p>
        <h2 className="section-title">{t.architecture.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>{renderText(t.architecture.intro)}</p>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: "3rem" }}>
          {Object.entries(t.architecture.specs).map(([key, spec]: [string, any]) => (
            <div key={key} style={{ padding: "1.5rem", background: "#fff", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {key === "structure" ? "🏗️" : key === "design" ? "⚙️" : "✨"} {spec.title}
              </h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: "1.6" }}>{renderText(spec.content)}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1.5rem" }}>
            {t.architecture.plaque.title}
          </h3>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {t.architecture.plaque.items.map((item: { label: string; value: string }, i: number) => (
              <div key={i} style={{ padding: "1rem", background: "rgba(0,0,0,0.02)", borderRadius: "6px", borderLeft: "3px solid var(--color-gold)" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--color-earth-soft)", marginBottom: "0.25rem", fontWeight: 600 }}>{item.label}</div>
                <div style={{ fontSize: "0.95rem", color: "var(--color-deep)", fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Monuments() {
  const { t } = useLang();
  
  return (
    <section id="monuments" className="section">
      <ScrollReveal>
        <p className="section-label">05</p>
        <h2 className="section-title">{t.monuments.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "2rem" }}>{renderText(t.monuments.intro)}</p>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {t.monuments.items.map((item: { name: string; description: string }, i: number) => (
            <div key={i} style={{ padding: "1.5rem", background: "#f8f9fa", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                {i + 1}
              </div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem" }}>
                {item.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.6", whiteSpace: "pre-line" }}>{renderText(item.description)}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function BestTimeToVisit() {
  const { t, locale } = useLang();
  return (
    // 补上锚点 id，供页脚「最佳游览时间」内链跳转
    <section id="best-time" className="section" style={{ background: "var(--color-cream)" }}>
      <ScrollReveal>
        <p className="section-label">06</p>
        <h2 className="section-title">{t.bestTime?.title || "最佳游览时间"}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>{renderText(t.bestTime?.intro || "阿拉卡茹全年气候温暖，是理想的海滨旅游目的地。")}</p>
      </ScrollReveal>

      <ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {t.bestTime?.seasons?.map((season: any, i: number) => (
            <div key={i} style={{ padding: "1.5rem", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem" }}>
                {season.name}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: "1.6", whiteSpace: "pre-line" }}>{renderText(season.description)}</p>
            </div>
          )) || (
            <>
              <div style={{ padding: "1.5rem", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem" }}>🌞 旱季（9月-次年3月）</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: "1.6" }}>旱季是游览阿拉卡茹的最佳时间。天气晴朗，降雨少，适合海滩活动和观赏日落。</p>
              </div>
              <div style={{ padding: "1.5rem", background: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem" }}>🌧️ 雨季（4月-8月）</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-earth-soft)", lineHeight: "1.6" }}>雨季降雨较多，但气温依然温暖。游客较少，是体验当地文化的绝佳时机。</p>
              </div>
            </>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
          <div>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)", marginBottom: "1rem" }}>
              <SmartImage
                src="/gallery/crab-catwalk-05.jpg"
                alt={`${SITE.fullName} (${SITE.shortName}) — daytime seaside view in ${SITE.city}, ${SITE.country}`}
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--color-earth-soft)", fontWeight: 600 }}>{locale === "zh" ? "白天的海滨风光" : locale === "pt" ? "Vista costeira durante o dia" : "Daytime seaside view"}</p>
          </div>
          <div>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.1)", marginBottom: "1rem" }}>
              <SmartImage
                src="/gallery/crab-catwalk-08.jpg"
                alt={`Golden-hour light over ${SITE.shortName} (${SITE.fullName}), ${SITE.city}`}
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--color-earth-soft)", fontWeight: 600 }}>{locale === "zh" ? "傍晚的街区灯光与海风" : locale === "pt" ? "Luzes da rua ao entardecer e brisa do mar" : "Evening street lights and sea breeze"}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note, icon: "🌅" },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note, icon: "🎟️" },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note, icon: "🛡️" },
  ];

  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">10</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="about-text" style={{ whiteSpace: "pre-line", marginBottom: "3rem" }}>{renderText(t.visiting.intro)}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content" style={{ whiteSpace: "pre-line" }}>{renderText(c.content)}</div>
                <div className="info-card-note">{renderText(c.note)}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bring-section" style={{ marginTop: "3rem" }}>
            <div className="bring-title">{t.visiting.tips.title}</div>
            <ul className="bring-list">
              {t.visiting.tips.items.map((item: string, i: number) => (
                <li key={i}>{renderText(item)}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();

  const sections = [
    {
      title: t.transportation.airport.title,
      content: t.transportation.airport.content,
      options: t.transportation.airport.options
    },
    ...(t.transportation.publicTransport ? [{
      title: t.transportation.publicTransport.title,
      content: t.transportation.publicTransport.content,
      options: t.transportation.publicTransport.options
    }] : []),
    ...(t.transportation.cycling ? [{
      title: t.transportation.cycling.title,
      content: t.transportation.cycling.content,
      options: []
    }] : []),
    {
      title: t.transportation.city.title,
      content: t.transportation.city.content,
      steps: t.transportation.city.steps
    }
  ];

  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">11</p>
        <h2 className="section-title">{t.transportation.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="faq-list">
          {sections.map((sec, i) => (
            <div className="faq-item expanded" key={i}>
              <div
                className="faq-question"
                style={{ cursor: "default" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: "var(--color-deep)", fontWeight: 600 }}>{sec.title}</span>
                </div>
              </div>
              <div className="faq-answer">
                <p style={{ whiteSpace: "pre-line", marginBottom: "1.5rem" }}>{renderText(sec.content)}</p>
                
                {sec.options && sec.options.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                    {sec.options.map((opt: any, j: number) => (
                      <div key={j} style={{ padding: "1.5rem", background: "#fff", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column" }}>
                        <div style={{ marginBottom: "0.75rem" }}>
                          <strong style={{ color: "var(--color-deep)", fontSize: "1.1rem" }}>{opt.name}</strong>
                        </div>
                        {(opt.price || opt.time) && (
                          <div style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                            {opt.price && <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>{opt.price}</span>}
                            {opt.time && <span>⏱️ {opt.time}</span>}
                          </div>
                        )}
                        {opt.description && (
                          <p style={{ fontSize: "0.95rem", color: "var(--color-earth)", marginBottom: "1rem", flexGrow: 1 }}>{renderText(opt.description)}</p>
                        )}
                        {opt.steps && opt.steps.length > 0 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", background: "rgba(0,0,0,0.02)", padding: "1rem", borderRadius: "8px" }}>
                            {opt.steps.map((step: string, k: number) => (
                              <div key={k} style={{ fontSize: "0.85rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                                • {renderText(step)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {sec.steps && sec.steps.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "rgba(0,0,0,0.02)", padding: "1.25rem", borderRadius: "6px", marginTop: "1rem" }}>
                    {sec.steps.map((step: string, j: number) => (
                      <div key={j} style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>
                        • {renderText(step)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(0,0,0,0.02)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem" }}>
            💡 {t.transportation.tips.title}
          </h3>
          <ul style={{ paddingLeft: "1.5rem", color: "var(--color-earth-soft)", lineHeight: "1.8" }}>
            {t.transportation.tips.items.map((tip: string, i: number) => (
              <li key={i}>{renderText(tip)}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Gallery() {
  const { t, locale } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryImages = galleryImagesData.map((item) => ({
    src: item.src,
    caption: {} as Record<string, string>,
    story: {} as Record<string, string>,
  }));

  useEffect(() => {
    if (lightboxIndex !== null && galleryImages.length > 0) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex, galleryImages.length]);

  const currentImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;
  const currentCaption = currentImage?.caption?.[locale] || "";
  const currentStory = currentImage?.story?.[locale] || "";

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">12</p>
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {galleryImages.map((item, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <SmartImage
                src={item.src}
                alt={`${SITE.fullName} (${SITE.shortName}) photo ${i + 1} — ${SITE.city}, ${SITE.country}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.caption?.[locale] && (
                <div className="gallery-caption-overlay">
                  <p className="gallery-caption-text">{item.caption[locale]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.gallery.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && galleryImages.length > 0 && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}>‹</button>
          <SmartImage
            src={galleryImages[lightboxIndex].src}
            alt={currentCaption || `${SITE.fullName} (${SITE.shortName}) photo ${lightboxIndex + 1} — ${SITE.city}`}
            sizes="90vw"
            className="lightbox-img"
          />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}>›</button>
          {(currentCaption || currentStory) && (
            <div className="lightbox-info">
              {currentCaption && <p className="lightbox-caption">{currentCaption}</p>}
              {currentStory && (
                <div className="lightbox-story">
                  {currentStory.split("\n").map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <ScrollReveal>
        <p className="section-label">13</p>
        <h2 className="section-title">{t.reviews.title}</h2>
        <p className="section-subtitle">{t.reviews.subtitle}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="reviews-snapshot" style={{ marginBottom: "4rem", display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="review-card">
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700, color: "var(--color-gold)", lineHeight: 1 }}>{SITE.ratingValue}</div>
              <div>
                <div style={{ color: "var(--color-gold)", fontSize: "1.1rem", letterSpacing: "2px" }}>{"★".repeat(5)}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)" }}>
                  {Number(SITE.reviewCount).toLocaleString("en-US")} {t.rating.reviews}
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", margin: 0, whiteSpace: "pre-line" }}>
              {renderText(t.reviews.snapshotNote)}
            </p>
            <div className="review-source" style={{ marginTop: "0.75rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
              </svg>
              Google · {REVIEWS_UPDATED}
            </div>
          </div>
          <div className="review-card">
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.75rem" }}>
              {t.reviews.themesTitle}
            </h4>
            <ul style={{ paddingLeft: "1.1rem", color: "var(--color-earth-soft)", lineHeight: "1.8", margin: 0 }}>
              {t.reviews.themes.map((item: string, i: number) => (
                <li key={i}>{renderText(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "2.5rem", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem", textAlign: "center" }}>
            {t.reviews.nearbyTitle}
          </h3>
          <p style={{ textAlign: "center", color: "var(--color-earth-soft)", marginBottom: "2rem" }}>{renderText(t.reviews.nearbyIntro)}</p>
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {t.reviews.nearbyItems.map((item: { name: string; description: string }, i: number) => (
              <div key={i} style={{ padding: "1.5rem", background: "rgba(0,0,0,0.02)", borderRadius: "8px" }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem" }}>
                  📍 {item.name}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)", lineHeight: "1.5" }}>{renderText(item.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {t.reviews.viewMore}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems = t.faq.items;

  return (
    <section id="faq" className="section">
      <div className="section">
        <ScrollReveal>
        <p className="section-label">14</p>
        <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-subtitle">{t.faq.subtitle}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item: { question: string; answer: string }, i: number) => (
              <div className={`faq-item ${expandedIndex === i ? "expanded" : ""}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span style={{ color: "var(--color-deep)", fontWeight: 600 }}>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {/* 答案始终输出到 HTML，只用 CSS 折叠。
                    原先的「展开才渲染」会让答案完全缺失于源码：
                    既拿不到精选摘要，也与 FAQPage 结构化数据声明的可见内容不一致 */}
                <div className={`faq-answer${expandedIndex === i ? "" : " faq-answer-collapsed"}`}>
                  {item.answer.split("\n\n").map((paragraph: string, j: number) => (
                    <p key={j}>{renderText(paragraph)}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t, locale } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">15</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe
              src={SITE.mapsEmbedSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`${SITE.fullName} (${SITE.shortName}) location map — ${SITE.city}, ${SITE.country}`}
            />
          </div>
          <div className="location-info">
            {/* NAP：名称 / 地址必须与 Google 地图资料完全一致 */}
            <p className="location-nap-name">{SITE.fullName} · {SITE.shortName}</p>
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <p className="location-official">
              {locale === "zh"
                ? "官方最新信息与区域旅游资讯，请访问 "
                : locale === "pt"
                ? "Para atualizações oficiais e informações turísticas da região, visite o "
                : "For official updates and regional tourism information, visit the "}
              <a href={SITE.govtTourismUrl} target="_blank" rel="noopener noreferrer">
                {locale === "zh"
                  ? `${SITE.countryNameZh}旅游部官方网站`
                  : locale === "pt"
                  ? `Portal Oficial de Turismo do ${SITE.countryNamePt} / ${SITE.state}`
                  : `${SITE.country} / ${SITE.state} Official Tourism Portal`}
              </a>
              {locale === "zh" ? "。" : "."}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      {/* 站内锚文本内链：使用描述性锚文本，避免「点击这里」这类无意义文本 */}
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.internalTitle}</p>
        <div className="footer-links-grid">
          {t.footer.internalLinks.map((link: { name: string; href: string }, i: number) => (
            <a key={i} href={link.href} className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <Link href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Terms of Service
        </Link>
        <Link href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          Cookie Settings
        </Link>
      </div>
      {/* NAP 一致性：页脚清晰展示景点官方全称与完整地址 */}
      <div className="footer-nap">
        <p className="footer-nap-name">{SITE.fullName} · {SITE.shortName}</p>
        <p className="footer-nap-address">{SITE.fullAddress}</p>
      </div>
      <p className="footer-copyright">{t.copyright}</p>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {t.footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{t.footer.text}</p>
    </footer>
  );
}

type SiteLocale = "en" | "zh" | "pt";

/**
 * 语言页面主体
 * ------------------------------------------------------------------
 * 由两条路由共用：
 *   - /[locale]（pt / en / zh）由 default export 的 Home 传入 URL 语言
 *   - /（域名根路径）直接传入 "pt"，使 crabcatwalk.com 默认显示葡语，
 *     不再出现需要用户点击的语言入口页，也不发生任何跳转。
 */
export function LocaleHome({ locale }: { locale: SiteLocale }) {
  return (
    <LangProvider initialLocale={locale}>
      <StructuredData />
      <Nav />
      <Hero />
      <About />
      <History />
      <Nature />
      <Culture />
      <Architecture />
      <Monuments />
      <BestTimeToVisit />
      <WeatherSection />
      <TideSection />
      <Facilities />
      <Visiting />
      <Transportation />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <SourcesSection />
      <TopicLinks />
      <Footer />
    </LangProvider>
  );
}

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const params = React.use(props.params);
  return <LocaleHome locale={params.locale as SiteLocale} />;
}