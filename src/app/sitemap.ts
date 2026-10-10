import { MetadataRoute } from 'next';
import { TOPIC_SLUGS } from "@/i18n/topics";

export const dynamic = 'force-static';

const LOCALES = ['pt', 'en', 'zh'] as const;
type Locale = (typeof LOCALES)[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'www.crabcatwalk.com'}`;

  function langAlternates(path: string) {
    return {
      pt: `${baseUrl}/pt${path}`,
      en: `${baseUrl}/en${path}`,
      zh: `${baseUrl}/zh${path}`,
      'x-default': `${baseUrl}/pt${path}`,
    };
  }

  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // 首页（根 / 与 /pt 同内容，x-default 指向葡语版本）
  entries.push({
    url: `${baseUrl}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages: langAlternates('') },
  });
  for (const locale of LOCALES) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: locale === 'pt' ? 1 : 0.9,
      alternates: { languages: langAlternates('') },
    });
  }

  // 4 个长尾专题页 × 3 语种
  for (const slug of TOPIC_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${baseUrl}/${locale}/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: langAlternates(`/${slug}`) },
      });
    }
  }

  return entries;
}
