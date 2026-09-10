import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SITE_BASE_URL } from "@/i18n/site";

/**
 * 域名根路径（语言入口页）
 * ------------------------------------------------------------------
 * 背景：本站使用 `output: "export"` 静态导出，服务端 redirect() 不会生成
 * 真实的 301/307，只会产出 `<html id="__next_error__">` 的空白页，
 * 导致域名首页对用户和爬虫都是空的。
 *
 * 因此根路径改为一个「可抓取的静态语言入口页」：
 *   - 有真实可索引内容（H1 + 实体说明 + 三语入口），不再是空页
 *   - 通过 hreflang 声明与 /pt /en /zh 的关系，x-default 指向本页
 *   - 提供带精准锚文本的站内链接（葡语 / 英语 / 中文各一条）
 * 若后续接入 CDN / 反向代理，建议在托管层把 `/` 301 到 `/pt`。
 */

const baseUrl = SITE_BASE_URL;

const HREFLANG = {
  pt: `${baseUrl}/pt`,
  en: `${baseUrl}/en`,
  zh: `${baseUrl}/zh`,
  "x-default": `${baseUrl}/`,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${SITE.fullName} (${SITE.shortName}) — ${SITE.city}, ${SITE.country}`,
  description: `Guia de visitação da ${SITE.shortName} (${SITE.fullName}) em ${SITE.city}, ${SITE.country}. Escolha o idioma: restaurantes de caranguejo, mapa, horários e como chegar. | Official visitor guide — choose your language.`,
  keywords: [
    SITE.fullName,
    SITE.shortName,
    `${SITE.shortName} ${SITE.city}`,
    `${SITE.fullName} ${SITE.city}`,
    `${SITE.city} attractions`,
    `${SITE.city} turismo`,
  ],
  alternates: {
    canonical: "/",
    languages: HREFLANG,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/`,
    title: `${SITE.fullName} (${SITE.shortName}) — ${SITE.city}`,
    description: `Visitor guide to ${SITE.fullName} (${SITE.shortName}) in ${SITE.city}, ${SITE.country}.`,
    siteName: `${SITE.fullName} Guide`,
    images: [{ url: SITE.heroImage, width: 1200, height: 630, alt: SITE.heroImageAlt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ENTRIES = [
  {
    href: "/pt",
    lang: "pt-BR",
    native: "Português",
    label: "Guia da Passarela do Caranguejo em Aracaju",
    desc: "Restaurantes de caranguejo, mapa, horários, melhores horários para visitar e como chegar.",
    primary: true,
  },
  {
    href: "/en",
    lang: "en",
    native: "English",
    label: "Crab Catwalk Aracaju guide",
    desc: "Crab restaurants, map, opening hours, best time to visit and how to get there.",
    primary: false,
  },
  {
    href: "/zh",
    lang: "zh-CN",
    native: "简体中文",
    label: "阿拉卡茹蟹步道游览指南",
    desc: "蟹肉餐厅、地图位置、开放时间、最佳游览时段与交通指南。",
    primary: false,
  },
];

export default function RootPage() {
  return (
    <main className="lang-entry">
      <div className="lang-entry-inner">
        <p className="lang-entry-eyebrow">
          {SITE.city} · {SITE.state} · {SITE.countryNamePt}
        </p>

        {/* 双语 H1：域名是英文，但景点在当地是葡语官方名，两者必须同时出现 */}
        <h1 className="lang-entry-title">
          {SITE.fullName}
          <span className="lang-entry-title-alt"> ({SITE.shortName})</span>
        </h1>

        <p className="lang-entry-lede">
          <strong>{SITE.shortName}</strong> — conhecida internacionalmente como{" "}
          <strong>{SITE.fullName}</strong> — é a passarela à beira-mar mais famosa de{" "}
          {SITE.city}, no estado de {SITE.state}, {SITE.countryNamePt}. Famosa pelos
          restaurantes de caranguejo e pelo pôr do sol.
        </p>
        <p className="lang-entry-lede lang-entry-lede-en">
          The <strong>{SITE.fullName}</strong> (locally known as the{" "}
          <strong>{SITE.shortName}</strong>) is a seaside promenade in {SITE.city},{" "}
          {SITE.state}, {SITE.country} — known for its crab restaurants and sunsets.
        </p>

        <nav className="lang-entry-nav" aria-label="Escolha o idioma / Choose your language">
          {ENTRIES.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              hrefLang={entry.lang}
              className={`lang-entry-card${entry.primary ? " lang-entry-card-primary" : ""}`}
            >
              <span className="lang-entry-card-native" lang={entry.lang}>
                {entry.native}
              </span>
              <span className="lang-entry-card-label">{entry.label}</span>
              <span className="lang-entry-card-desc">{entry.desc}</span>
            </Link>
          ))}
        </nav>

        <p className="lang-entry-nap">
          {SITE.fullName} · {SITE.shortName}
          <br />
          {SITE.streetAddress}
          <br />
          {SITE.city} - {SITE.stateCode}, {SITE.postalCode} · {SITE.country}
        </p>
      </div>
    </main>
  );
}
