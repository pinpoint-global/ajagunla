import 'server-only';

import { AJAGUNLA_FOUNDATION_ACHIEVEMENTS, UPCOMING_EVENTS } from '@/lib/constants/texts';

import type { FoundationAchievement } from '@/components/sections/community/AjagunlaFoundation';
import type { UpcomingEvent } from '@/components/sections/community/UpcomingEvents';

import { fetchPageCommunity, unwrapData } from './strapi';

type PageCommunityDoc = Record<string, unknown>;

export interface CommunityListingPageContentData {
  foundationAchievements: FoundationAchievement[];
  upcomingEvents: UpcomingEvent[];
}

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asNumber(value: unknown): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const n = Number(value.trim());
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

export async function getCommunityListingPageContentAsync(): Promise<CommunityListingPageContentData> {
  const raw = await fetchPageCommunity();
  const doc = unwrapData<PageCommunityDoc>(raw);

  const foundationAchievements: FoundationAchievement[] = Array.isArray(doc?.foundationAchievements)
    ? (doc.foundationAchievements
        .map(item => {
          if (!item || typeof item !== 'object') return null;
          const row = item as Record<string, unknown>;
          const value = asNumber(row.value);
          const text = asString(row.text);
          if (value == null || !text) return null;
          return { value, text } satisfies FoundationAchievement;
        })
        .filter(Boolean) as FoundationAchievement[])
    : AJAGUNLA_FOUNDATION_ACHIEVEMENTS;

  const upcomingEvents: UpcomingEvent[] = Array.isArray(doc?.upcomingEvents)
    ? (doc.upcomingEvents
        .map(item => {
          if (!item || typeof item !== 'object') return null;
          const row = item as Record<string, unknown>;
          const title = asString(row.title);
          const date = asString(row.date);
          const time = asString(row.time);
          const location = asString(row.location);
          const description = asString(row.description);
          if (!title || !date || !time || !location || !description) return null;
          return { title, date, time, location, description } satisfies UpcomingEvent;
        })
        .filter(Boolean) as UpcomingEvent[])
    : UPCOMING_EVENTS;

  return {
    foundationAchievements,
    upcomingEvents,
  };
}
