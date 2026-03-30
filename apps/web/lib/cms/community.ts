import 'server-only';

import type { LucideIconName } from '@/components/general/DynamicIcon';
import type {
  CommunityInitiative,
  CommunityInitiativeSummary,
} from '@/lib/types/community-initiative';
import { communityInitiativeSeeds } from '@/lib/constants/seeds/community-initiatives';

import {
  fetchCommunityInitiativeBySlug,
  fetchCommunityInitiatives,
  STRAPI_SLUG_LIST_REVALIDATE,
  unwrapList,
} from './strapi';
import { flattenSeoKeywords, flattenTextLines } from './strapi-normalize';

type StrapiDoc = Record<string, unknown> & {
  slug?: string;
  iconName?: string;
};

function mapDoc(doc: StrapiDoc): CommunityInitiative {
  const slug = String(doc.slug ?? '');
  const objectives =
    flattenTextLines(doc.objectives) ??
    (Array.isArray(doc.objectives)
      ? (doc.objectives as unknown[]).filter((x): x is string => typeof x === 'string')
      : []);
  const achievements =
    flattenTextLines(doc.achievements) ??
    (Array.isArray(doc.achievements)
      ? (doc.achievements as unknown[]).filter((x): x is string => typeof x === 'string')
      : []);
  const keywords =
    flattenSeoKeywords(doc.keywords) ??
    (Array.isArray(doc.keywords)
      ? (doc.keywords as unknown[]).filter((x): x is string => typeof x === 'string')
      : undefined);

  return {
    slug,
    lucideIcon: (String(doc.iconName ?? 'Heart') as LucideIconName) || 'Heart',
    title: String(doc.title ?? ''),
    description: String(doc.description ?? ''),
    fullDescription: String(doc.fullDescription ?? ''),
    impact: String(doc.impact ?? ''),
    objectives,
    achievements,
    beneficiaries: String(doc.beneficiaries ?? ''),
    location: String(doc.location ?? ''),
    howToParticipate: String(doc.howToParticipate ?? ''),
    keywords,
  };
}

export async function getCommunityInitiativeBySlugAsync(
  slug: string
): Promise<CommunityInitiative | null> {
  const raw = await fetchCommunityInitiativeBySlug(slug);
  const list = unwrapList<StrapiDoc>(raw);
  const doc = list[0];
  if (!doc?.slug) return null;
  return mapDoc(doc);
}

export async function getAllCommunityInitiativeSlugsAsync(): Promise<string[]> {
  const raw = await fetchCommunityInitiatives({ revalidate: STRAPI_SLUG_LIST_REVALIDATE });
  const list = unwrapList<StrapiDoc>(raw);
  const slugs = list.map(d => String(d.slug)).filter(Boolean);

  if (slugs.length > 0) return slugs;

  // Build-time fallback when CMS is offline.
  return communityInitiativeSeeds.map(row => row.slug);
}

export async function getCommunityInitiativeSummariesAsync(): Promise<
  CommunityInitiativeSummary[]
> {
  const raw = await fetchCommunityInitiatives();
  const list = unwrapList<StrapiDoc>(raw);
  return list
    .map(doc => ({
      slug: String(doc.slug ?? ''),
      lucideIcon: (String(doc.iconName ?? 'Heart') as LucideIconName) || 'Heart',
      title: String(doc.title ?? ''),
      description: String(doc.description ?? ''),
    }))
    .filter(item => Boolean(item.slug));
}
