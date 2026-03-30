import type { MetadataRoute } from 'next';

import { getAllCommunityInitiativeSlugsAsync } from '@/lib/cms/community';
import { getAllLegislativeSlugsAsync } from '@/lib/cms/legislative';

const liveUrl = process.env.live_url || process.env.NEXT_PUBLIC_SITE_URL || 'https://ajagunla1.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = liveUrl.replace(/\/$/, '');
  const legislative = await getAllLegislativeSlugsAsync();
  const community = await getAllCommunityInitiativeSlugsAsync();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/legislative-work',
    '/community-engagement',
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const legislativeRoutes: MetadataRoute.Sitemap = legislative.map(slug => ({
    url: `${base}/legislative-work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const communityRoutes: MetadataRoute.Sitemap = community.map(slug => ({
    url: `${base}/community-engagement/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...legislativeRoutes, ...communityRoutes];
}
