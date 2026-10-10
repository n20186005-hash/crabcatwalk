import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import { SITE, SITE_BASE_URL } from "@/i18n/site";
import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = SITE_BASE_URL;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  pt: { htmlLang: "pt-BR", ogLocale: "pt_BR" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
};

// TDK：标题必须同时出现「当地官方葡语名 + 英文名」，并带上高意图词（餐厅 / 攻略）。
// 搜索数据显示纯英文名或纯葡语名都会造成语言割裂，双语并列可同时承接两边的查询。
const TITLES: Record<string, string> = {
  pt: `${SITE.shortName} em ${SITE.city}: Guia 2026`,
  en: `${SITE.fullName} (${SITE.shortName}) ${SITE.city}: Restaurants & Guide`,
  zh: `${SITE.nameZh}（${SITE.shortName}）${SITE.cityZh}：餐厅、攻略与游玩指南`,
};

const OG_TITLES: Record<string, string> = {
  pt: `${SITE.shortName} (${SITE.fullName}) - ${SITE.city}`,
  en: `${SITE.fullName} (${SITE.shortName}) - ${SITE.city} Guide`,
  zh: `${SITE.nameZh}（${SITE.shortName}）- ${SITE.cityZh}游玩指南`,
};

const SITE_NAMES: Record<string, string> = {
  pt: `Guia da ${SITE.shortName}`,
  en: `${SITE.fullName} Guide`,
  zh: `${SITE.nameZh}指南`,
};

// 描述里必须出现「具体地址 + 螃蟹美食 + 怎么去」，这三项是游客点击前最想确认的信息
const DESCRIPTIONS: Record<string, string> = {
  pt: `Conheça a ${SITE.shortName}, na ${SITE.streetAddress}, ${SITE.city} - ${SITE.stateCode}: onde fica, como chegar, o caranguejo gigante, restaurantes e dicas para visitar.`,
  en: `Visit ${SITE.fullName} (${SITE.shortName}) at ${SITE.streetAddress}, ${SITE.city} - ${SITE.stateCode}. Find the best crab restaurants, the giant crab statue, sunset spots and how to get there.`,
  zh: `${SITE.nameZh}（${SITE.shortName} / ${SITE.fullName}）位于${SITE.countryNameZh}${SITE.cityZh} ${SITE.streetAddress}。查看最佳蟹肉餐厅、巨型螃蟹雕像、日落观景点与交通指南。`,
};

const OG_DESCRIPTIONS: Record<string, string> = {
  pt: `Guia da ${SITE.shortName} (${SITE.fullName}) em ${SITE.city}: restaurantes de caranguejo, mapa, horários e como chegar.`,
  en: `Guide to ${SITE.fullName} (${SITE.shortName}) in ${SITE.city}: crab restaurants, map, opening hours and how to get there.`,
  zh: `${SITE.cityZh}（${SITE.city}）${SITE.nameZh}游览指南：蟹肉餐厅、地图位置、开放时间与交通方式。`,
};

const IMAGE_ALTS: Record<string, string> = {
  pt: `${SITE.shortName} em ${SITE.city}, ${SITE.countryNamePt}`,
  en: `${SITE.fullName} in ${SITE.city}, ${SITE.country}`,
  zh: `${SITE.cityZh}（${SITE.city}）的${SITE.nameZh}`,
};

function pick(map: Record<string, string>, locale: string) {
  return map[locale] || map.en;
}

// 生成绝对 URL 的 hreflang 映射
// x-default 指向语言入口页（/），它是「不针对任何特定语言」的页面，
// 与 sitemap 及根路径页自身的 alternates 保持完全一致。
function getHreflangAlternates(baseUrl: string) {
  return {
    pt: `${baseUrl}/pt`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    "x-default": `${baseUrl}/`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  const title = pick(TITLES, locale);
  const ogTitle = pick(OG_TITLES, locale);
  const description = pick(DESCRIPTIONS, locale);
  const ogDescription = pick(OG_DESCRIPTIONS, locale);
  const siteName = pick(SITE_NAMES, locale);
  const imageAlt = pick(IMAGE_ALTS, locale);

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template:
        locale === "pt"
          ? `%s | ${SITE.shortName}`
          : locale === "zh"
          ? `%s | ${SITE.nameZh}`
          : `%s | ${SITE.fullName}`,
    },
    description,
    applicationName: siteName,
    // 关键词覆盖三类真实查询意图：本地葡语、英文国际、中文
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
    authors: [{ name: `${SITE.fullName} Guide` }],
    creator: `${SITE.fullName} Guide`,
    publisher: `${SITE.fullName} Guide`,
    category: "travel",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "en_US",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter((l) => l !== (localeConfig[locale]?.ogLocale || "en_US")),
      url: `${baseUrl}/${locale}`,
      title: ogTitle,
      description: ogDescription,
      siteName,
      images: [
        {
          url: SITE.heroImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [SITE.heroImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "pt" },
    { locale: "en" },
    { locale: "zh" },
  ];
}

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "en";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
