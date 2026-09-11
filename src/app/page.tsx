import type { Metadata } from "next";
import { LocaleHome } from "./[locale]/page";
import HtmlLangSetter from "@/components/HtmlLangSetter";
import { SITE, SITE_BASE_URL } from "@/i18n/site";

/**
 * 域名根路径（默认语言：葡萄牙语）
 * ------------------------------------------------------------------
 * crabcatwalk.com 直接渲染与 /pt 完全相同的葡语首页：
 *   - 不再出现需要用户手动点击的语言入口页
 *   - 不做任何重定向 / 跳转，地址栏保持 crabcatwalk.com
 * 语言切换统一由页面导航栏的 LanguageSwitcher 完成（pt / en / zh）。
 *
 * SEO：根路径与 /pt 内容一致，为避免同一内容出现两个 URL 造成
 * 重复内容，canonical 统一指向 /pt；hreflang 与 sitemap 保持一致。
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
  title: `${SITE.shortName} (${SITE.fullName}) ${SITE.city}: Guia & Restaurantes`,
  description: `Visite a ${SITE.shortName} (${SITE.fullName}) na ${SITE.streetAddress}, ${SITE.city} - ${SITE.stateCode}. Veja os melhores restaurantes de caranguejo, o caranguejo gigante, o pôr do sol e como chegar.`,
  keywords: [
    SITE.fullName,
    SITE.shortName,
    SITE.nameZh,
    `${SITE.fullName} ${SITE.city}`,
    `${SITE.shortName} ${SITE.city}`,
    `${SITE.shortName} restaurantes`,
    `restaurantes em ${SITE.city}`,
    `o que fazer em ${SITE.city}`,
    `pontos turisticos ${SITE.city}`,
    `caranguejo gigante ${SITE.city}`,
    `${SITE.city} tourism`,
    `${SITE.state} tourism`,
    "Brazil tourism",
    "Seaside promenade",
    `${SITE.city} attractions`,
    "蟹步道",
    "阿拉卡茹旅游",
    "阿拉卡茹餐厅",
    "巴西旅游",
  ],
  alternates: {
    canonical: "/pt",
    languages: HREFLANG,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "zh_CN"],
    url: `${baseUrl}/`,
    title: `${SITE.shortName} (${SITE.fullName}) - ${SITE.city}`,
    description: `Guia da ${SITE.shortName} (${SITE.fullName}) em ${SITE.city}: restaurantes de caranguejo, mapa, horários e como chegar.`,
    siteName: `Guia da ${SITE.shortName}`,
    images: [
      {
        url: SITE.heroImage,
        width: 1200,
        height: 630,
        alt: `${SITE.shortName} em ${SITE.city}, ${SITE.countryNamePt}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} (${SITE.fullName}) - ${SITE.city}`,
    description: `Guia da ${SITE.shortName} (${SITE.fullName}) em ${SITE.city}: restaurantes de caranguejo, mapa, horários e como chegar.`,
    images: [SITE.heroImage],
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

export default function RootPage() {
  return (
    <>
      <HtmlLangSetter htmlLang="pt-BR" />
      <LocaleHome locale="pt" />
    </>
  );
}
