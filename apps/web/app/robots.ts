import type { MetadataRoute } from 'next';

const liveUrl = process.env.live_url || process.env.NEXT_PUBLIC_SITE_URL || 'https://ajagunla1.com';

export default function robots(): MetadataRoute.Robots {
  const base = liveUrl.replace(/\/$/, '');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
