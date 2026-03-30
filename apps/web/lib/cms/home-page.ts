import 'server-only';

import {
  HERO_STATS,
  ABOUT_SUMMARIES,
  COMMUNITY_SUMMARIES,
  LEGISLATIVE_HIGHLIGHTS,
} from '@/lib/constants/texts';
import type { HeroQuickStats } from '@/components/sections/home/Hero';
import type { AboutSummary } from '@/components/sections/home/About';
import type { CommunityEngagementProps } from '@/components/sections/home/Community';
import type { LegislativeHighlightProps } from '@/components/sections/home/Legislative';

import { fetchPageHome, unwrapData } from './strapi';

type HomePageDoc = Record<string, unknown>;

export interface HomePageContentData {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    backgroundImageUrl: string;
    heroStats: HeroQuickStats[];
  };
  aboutSummaries: AboutSummary[];
  communitySummaries: CommunityEngagementProps[];
  legislativeHighlights: LegislativeHighlightProps[];
}

const DEFAULT_HERO = {
  title: 'Senator Olubiyi Fadeyi-Ajagunla',
  subtitle: 'Serving Osun Central Senatorial District',
  tagline: 'Empowering Communities Through Leadership, Education & Development',
  backgroundImageUrl: 'https://static.ajagunla1.com/images/senator-fadeyi-2.webp',
};

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asArray(value: unknown): unknown[] | null {
  if (!Array.isArray(value)) return null;
  return value;
}

export async function getHomePageContentAsync(): Promise<HomePageContentData> {
  const raw = await fetchPageHome();
  const doc = unwrapData<HomePageDoc>(raw);

  const hero = (doc?.hero && typeof doc.hero === 'object' ? doc.hero : null) as Record<
    string,
    unknown
  > | null;
  const heroTitle = asString(hero?.heroTitle) ?? DEFAULT_HERO.title;
  const heroSubtitle = asString(hero?.heroSubtitle) ?? DEFAULT_HERO.subtitle;
  const heroTagline = asString(hero?.heroTagline) ?? DEFAULT_HERO.tagline;
  const backgroundImageUrl = asString(hero?.backgroundImageUrl) ?? DEFAULT_HERO.backgroundImageUrl;

  const heroStatsRaw = asArray(doc?.heroStats) ?? [];
  const heroStats: HeroQuickStats[] =
    (heroStatsRaw
      .map(row => {
        if (!row || typeof row !== 'object') return null;
        const r = row as Record<string, unknown>;
        const title = asString(r.title);
        const text = asString(r.text);
        if (!title || !text) return null;
        return { title, text } satisfies HeroQuickStats;
      })
      .filter(Boolean) as HeroQuickStats[]) ?? HERO_STATS;

  const aboutRaw = asArray(doc?.aboutSummaries) ?? null;
  const aboutSummaries: AboutSummary[] =
    (aboutRaw
      ?.map(row => {
        if (!row || typeof row !== 'object') return null;
        const r = row as Record<string, unknown>;
        const iconName = asString(r.iconName);
        const title = asString(r.title);
        const text = asString(r.text);
        if (!iconName || !title || !text) return null;
        return { iconName: iconName as never, title, text } as AboutSummary;
      })
      .filter(Boolean) as AboutSummary[]) ?? ABOUT_SUMMARIES;

  const communityRaw = asArray(doc?.communitySummaries) ?? null;
  const communitySummaries: CommunityEngagementProps[] =
    (communityRaw
      ?.map(row => {
        if (!row || typeof row !== 'object') return null;
        const r = row as Record<string, unknown>;
        const iconName = asString(r.iconName);
        const title = asString(r.title);
        const description = asString(r.description);
        if (!iconName || !title || !description) return null;
        return { iconName: iconName as never, title, description } as CommunityEngagementProps;
      })
      .filter(Boolean) as CommunityEngagementProps[]) ?? COMMUNITY_SUMMARIES;

  const legislativeRaw = asArray(doc?.legislativeHighlights) ?? null;
  const legislativeHighlights: LegislativeHighlightProps[] =
    (legislativeRaw
      ?.map(row => {
        if (!row || typeof row !== 'object') return null;
        const r = row as Record<string, unknown>;
        const iconName = asString(r.iconName);
        const title = asString(r.title);
        const description = asString(r.description);
        if (!iconName || !title || !description) return null;
        return { iconName: iconName as never, title, description } as LegislativeHighlightProps;
      })
      .filter(Boolean) as LegislativeHighlightProps[]) ?? LEGISLATIVE_HIGHLIGHTS;

  return {
    hero: {
      title: heroTitle,
      subtitle: heroSubtitle,
      tagline: heroTagline,
      backgroundImageUrl,
      heroStats,
    },
    aboutSummaries,
    communitySummaries,
    legislativeHighlights,
  };
}
