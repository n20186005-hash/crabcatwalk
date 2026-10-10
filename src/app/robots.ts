import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.crabcatwalk.com"}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // 明确不屏蔽任何资源，保证 Google / GBP 可完整抓取
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/gallery/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
