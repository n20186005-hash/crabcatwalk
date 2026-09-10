import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'crabcatwalk.com'}`;

  // 每个语言页面都要声明完整的一组 hreflang，并包含 x-default，
  // 否则 Google 无法把「语言入口页 + 三个语言版本」识别为同一组。
  const languages = {
    pt: `${baseUrl}/pt`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    'x-default': `${baseUrl}/`,
  };

  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/pt`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
