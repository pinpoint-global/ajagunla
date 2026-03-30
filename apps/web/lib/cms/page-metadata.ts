import 'server-only';

import type { Metadata } from 'next';

import { generatePageMetadata } from '@/lib/utils/general';

import {
  fetchPageAbout,
  fetchPageCommunity,
  fetchPageContact,
  fetchPageHome,
  fetchPageLegislative,
  getStrapiMediaUrl,
  unwrapData,
} from './strapi';
import { flattenSeoKeywords } from './strapi-normalize';

const liveUrl = process.env.live_url || process.env.NEXT_PUBLIC_SITE_URL || 'https://ajagunla1.com';

function docSeo(
  doc: Record<string, unknown> | null,
  fallback: { title: string; description: string; keywords: string[]; path: string }
): Metadata {
  if (!doc) {
    return generatePageMetadata(fallback.title, fallback.description, fallback.keywords, {
      url: `${liveUrl.replace(/\/$/, '')}${fallback.path}`,
    });
  }
  const title = String(doc.seo_metaTitle || fallback.title);
  const description = String(doc.seo_metaDescription || fallback.description);
  const kw = flattenSeoKeywords(doc.seo_keywords) ?? fallback.keywords;
  const canonical = doc.seo_canonicalUrl
    ? String(doc.seo_canonicalUrl)
    : `${liveUrl.replace(/\/$/, '')}${fallback.path}`;
  const og = getStrapiMediaUrl(doc.seo_ogImage) || undefined;
  return generatePageMetadata(title, description, kw, { url: canonical, image: og });
}

export async function getAboutMetadata(): Promise<Metadata> {
  const raw = await fetchPageAbout();
  const doc = unwrapData<Record<string, unknown>>(raw);
  return docSeo(doc, {
    title: 'About Senator Olubiyi Fadeyi-Ajagunla',
    description:
      "Learn about Senator Olubiyi Fadeyi-Ajagunla's background, education, business leadership, and philanthropic work through the Ajagunla Foundation. Serving Osun Central with dedication.",
    keywords: [
      'Senator Fadeyi-Ajagunla biography',
      'Osun Central Senator',
      'Ajagunla Foundation',
      'Nigerian politician',
      'business leader',
      'philanthropist',
    ],
    path: '/about',
  });
}

export async function getContactMetadata(): Promise<Metadata> {
  const raw = await fetchPageContact();
  const doc = unwrapData<Record<string, unknown>>(raw);
  return docSeo(doc, {
    title: 'Contact Senator Fadeyi-Ajagunla',
    description:
      "Contact Senator Olubiyi Fadeyi-Ajagunla's office for constituent inquiries, media requests, or collaboration opportunities. Serving Osun Central Senatorial District.",
    keywords: [
      'contact senator',
      'Osun Central office',
      'constituent services',
      'senator contact form',
      'contact senator fadeyi',
      'contact senator ajagunla',
    ],
    path: '/contact',
  });
}

export async function getHomeMetadata(): Promise<Metadata> {
  const raw = await fetchPageHome();
  const doc = unwrapData<Record<string, unknown>>(raw);
  return docSeo(doc, {
    title: 'Senator Olubiyi Fadeyi-Ajagunla',
    description:
      'Official portfolio of Senator Olubiyi Fadeyi-Ajagunla. Committed to community development, education, and empowerment.',
    keywords: ['Ajagunla', 'Senator', 'Osun Central', 'Nigerian Senate'],
    path: '/',
  });
}

export async function getLegislativeListingMetadata(): Promise<Metadata> {
  const raw = await fetchPageLegislative();
  const doc = unwrapData<Record<string, unknown>>(raw);
  return docSeo(doc, {
    title: 'Legislative Work & Achievements',
    description:
      "Explore Senator Olubiyi Fadeyi-Ajagunla's legislative achievements, bills sponsored, and community-focused initiatives.",
    keywords: [
      'legislative work',
      'Senate bills',
      'Osun Central initiatives',
      'education infrastructure',
      'youth empowerment',
      'technology innovation',
    ],
    path: '/legislative-work',
  });
}

export async function getCommunityListingMetadata(): Promise<Metadata> {
  const raw = await fetchPageCommunity();
  const doc = unwrapData<Record<string, unknown>>(raw);
  return docSeo(doc, {
    title: 'Community Engagement & Initiatives',
    description:
      "Discover the Ajagunla Foundation's community initiatives including education support, youth empowerment programs, and healthcare interventions across Osun Central.",
    keywords: [
      'community engagement',
      'Ajagunla Foundation',
      'youth empowerment',
      'scholarships',
      'healthcare',
      'town halls',
      'Osun Central development',
    ],
    path: '/community-engagement',
  });
}
