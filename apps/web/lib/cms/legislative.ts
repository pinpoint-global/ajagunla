import 'server-only';

import type { LucideIconName } from '@/components/general/DynamicIcon';
import type { LegislativeWork, ProjectSummary } from '@/lib/types/legislative-work';
import { legislativeWorkSeeds } from '@/lib/constants/seeds/legislative-works';

import {
  fetchLegislativeProjectBySlug,
  fetchLegislativeProjects,
  getStrapiMediaUrl,
  STRAPI_SLUG_LIST_REVALIDATE,
  unwrapList,
} from './strapi';
import { flattenSeoKeywords, flattenTextLines } from './strapi-normalize';

type StrapiDoc = Record<string, unknown> & {
  slug?: string;
  iconName?: string;
  seo_ogImage?: { url?: string } | null;
};

function mapDocToProject(doc: StrapiDoc): LegislativeWork {
  const slug = String(doc.slug ?? '');
  const keywordsFromPhrases = flattenSeoKeywords(doc.keywords);
  const keywords =
    keywordsFromPhrases ??
    (Array.isArray(doc.keywords)
      ? (doc.keywords as unknown[]).filter((x): x is string => typeof x === 'string')
      : []);
  const objectivesFromLines = flattenTextLines(doc.objectives);
  const objectives =
    objectivesFromLines ??
    (Array.isArray(doc.objectives)
      ? (doc.objectives as unknown[]).filter((x): x is string => typeof x === 'string')
      : []);
  const timeline = Array.isArray(doc.timeline) ? (doc.timeline as LegislativeWork['timeline']) : [];

  return {
    slug,
    category: String(doc.category ?? 'education'),
    lucideIcon: (String(doc.iconName ?? 'Briefcase') as LucideIconName) || 'Briefcase',
    title: String(doc.title ?? ''),
    description: String(doc.description ?? ''),
    status: String(doc.status ?? ''),
    impact: String(doc.impact ?? ''),
    fullDescription: String(doc.fullDescription ?? ''),
    objectives,
    timeline,
    beneficiaries: String(doc.beneficiaries ?? ''),
    location: String(doc.location ?? ''),
    keywords,
  };
}

export async function getLegislativeProjectBySlugAsync(
  slug: string
): Promise<LegislativeWork | null> {
  const raw = await fetchLegislativeProjectBySlug(slug);
  const list = unwrapList<StrapiDoc>(raw);
  const doc = list[0];
  if (!doc?.slug) return null;
  return mapDocToProject(doc);
}

export async function getAllLegislativeSlugsAsync(): Promise<string[]> {
  const raw = await fetchLegislativeProjects({ revalidate: STRAPI_SLUG_LIST_REVALIDATE });
  const list = unwrapList<StrapiDoc>(raw);
  const slugs = list.map(d => String(d.slug)).filter(Boolean);

  if (slugs.length > 0) return slugs;

  // Build-time fallback when CMS is offline.
  return legislativeWorkSeeds.map(row => row.slug);
}

export async function getLegislativeProjectSummariesAsync(): Promise<ProjectSummary[]> {
  const raw = await fetchLegislativeProjects();
  const list = unwrapList<StrapiDoc>(raw);
  return list
    .map(doc => ({
      slug: String(doc.slug ?? ''),
      category: String(doc.category ?? 'education'),
      title: String(doc.title ?? ''),
      description: String(doc.description ?? ''),
      impact: String(doc.impact ?? ''),
      status: String(doc.status ?? ''),
    }))
    .filter(item => Boolean(item.slug));
}

export function getOgImageForLegislativeProject(doc: StrapiDoc | undefined): string | undefined {
  if (!doc) return undefined;
  return getStrapiMediaUrl(doc.seo_ogImage as { url?: string } | undefined);
}
