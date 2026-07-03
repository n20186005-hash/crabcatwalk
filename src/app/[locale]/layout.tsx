import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

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

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "crab-catwalk.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  pt: { htmlLang: "pt-BR", ogLocale: "pt_BR" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
};

// 生成绝对 URL 的 hreflang 映射
function getHreflangAlternates(baseUrl: string) {
  return {
    pt: `${baseUrl}/pt`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    "x-default": `${baseUrl}/pt`,  // 默认回退页面设为葡萄牙文版
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "pt"
          ? "Passarela do Caranguejo — Aracaju, Brasil"
          : locale === "zh"
          ? "蟹步道 — 巴西阿拉卡茹"
          : "Crab Catwalk — Aracaju, Brazil",
      template:
        locale === "pt"
          ? "%s | Passarela do Caranguejo"
          : locale === "zh"
          ? "%s | 蟹步道"
          : "%s | Crab Catwalk",
    },
    description:
      locale === "pt"
        ? "Guia da Passarela do Caranguejo em Aracaju, Brasil. Famosa passeio marítimo conhecida pelos restaurantes de caranguejo e vista do pôr do sol."
        : locale === "zh"
        ? "蟹步道指南——探索巴西阿拉卡茹的著名海滨步道，品尝美味蟹肉料理，欣赏壮丽日落景色。"
        : "A guide to Crab Catwalk in Aracaju, Brazil. Famous seaside promenade known for crab restaurants and sunset views.",
    keywords: [
      "Crab Catwalk",
      "Passarela do Caranguejo",
      "Aracaju tourism",
      "Brazil tourism",
      "Seaside promenade",
      "Aracaju attractions",
      "蟹步道",
      "阿拉卡茹旅游",
      "巴西旅游",
    ],
    authors: [{ name: "Crab Catwalk Guide" }],
    creator: "Crab Catwalk Guide",
    publisher: "Crab Catwalk Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "pt_BR",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "pt_BR")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "pt"
          ? "Passarela do Caranguejo — Aracaju, Brasil"
          : locale === "zh"
          ? "蟹步道 — 巴西阿拉卡茹"
          : "Crab Catwalk — Aracaju, Brazil",
      description:
        locale === "pt"
          ? "Guia da Passarela do Caranguejo em Aracaju, Brasil. Famosa passeio marítimo."
          : locale === "zh"
          ? "蟹步道指南——探索巴西阿拉卡茹的著名海滨步道。"
          : "A guide to Crab Catwalk in Aracaju, Brazil.",
      siteName:
        locale === "pt"
          ? "Guia da Passarela do Caranguejo"
          : locale === "zh"
          ? "蟹步道指南"
          : "Crab Catwalk Guide",
      images: [
        {
          url: "/gallery/crab-catwalk (11).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "pt"
              ? "Passarela do Caranguejo - Aracaju, Brasil"
              : locale === "zh"
              ? "蟹步道 - 阿拉卡茹"
              : "Crab Catwalk - Aracaju, Brazil",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "pt"
          ? "Passarela do Caranguejo — Aracaju, Brasil"
          : locale === "zh"
          ? "蟹步道 — 巴西阿拉卡茹"
          : "Crab Catwalk — Aracaju, Brazil",
      description:
        locale === "pt"
          ? "Guia da Passarela do Caranguejo em Aracaju, Brasil."
          : locale === "zh"
          ? "蟹步道指南——探索巴西阿拉卡茹。"
          : "A guide to Crab Catwalk in Aracaju, Brazil.",
      images: ["/gallery/crab-catwalk (11).jpg"],
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

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

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
  const htmlLang = localeConfig[locale]?.htmlLang || "pt-BR";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
