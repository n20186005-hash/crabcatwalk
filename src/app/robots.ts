import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "crab-catwalk.com"}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/gallery/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
