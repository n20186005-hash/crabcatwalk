import type { Metadata } from "next";
import { SITE, SITE_BASE_URL } from "@/i18n/site";
import { TOPICS, TOPIC_SLUGS, type TopicLocale, type TopicSlug } from "@/i18n/topics";
import { TopicPageView } from "@/components/TopicPageView";

export const dynamicParams = false;

export function generateStaticParams() {
  const locales: TopicLocale[] = ["pt", "en", "zh"];
  const params: { locale: string; topic: string }[] = [];
  for (const locale of locales) {
    for (const slug of TOPIC_SLUGS) {
      params.push({ locale, topic: slug });
    }
  }
  return params;
}

function locCode(locale: string) {
  return locale === "pt" ? "pt_BR" : locale === "zh" ? "zh_CN" : "en_US";
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; topic: string }> }): Promise<Metadata> {
  const { locale, topic } = await params;
  const content = TOPICS[topic as TopicSlug]?.[locale as TopicLocale];
  if (!content) return {};
  const baseUrl = SITE_BASE_URL;
  const url = `${baseUrl}/${locale}/${topic}`;
  return {
    metadataBase: new URL(baseUrl),
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `/${locale}/${topic}`,
      languages: {
        pt: `${baseUrl}/pt/${topic}`,
        en: `${baseUrl}/en/${topic}`,
        zh: `${baseUrl}/zh/${topic}`,
        "x-default": `${baseUrl}/pt/${topic}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: content.metaTitle,
      description: content.metaDescription,
      siteName: `Guia da ${SITE.shortName}`,
      locale: locCode(locale),
      images: [{ url: SITE.heroImage, width: 1200, height: 630, alt: content.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [SITE.heroImage],
    },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ locale: string; topic: string }> }) {
  const { locale, topic } = await params;
  const content = TOPICS[topic as TopicSlug]?.[locale as TopicLocale];
  if (!content) return null;
  return <TopicPageView locale={locale} content={content} />;
}
