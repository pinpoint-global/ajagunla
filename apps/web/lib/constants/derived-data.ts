import type {
  CommunityInitiative,
  CommunityInitiativeSummary,
} from '@/lib/types/community-initiative';
import type { LegislativeWork, ProjectSummary } from '@/lib/types/legislative-work';
import type { LucideIconName } from '@/components/general/DynamicIcon';

import { communityInitiativeSeeds } from './seeds/community-initiatives';
import { legislativeWorkSeeds } from './seeds/legislative-works';

export const LEGISLATIVE_WORKS: Record<string, Omit<LegislativeWork, 'slug'>> = Object.fromEntries(
  legislativeWorkSeeds.map(row => {
    const { slug, iconName, ...rest } = row;
    return [
      slug,
      {
        ...rest,
        lucideIcon: iconName as LucideIconName,
      },
    ] as [string, Omit<LegislativeWork, 'slug'>];
  })
);

export const COMMUNITY_INITIATIVES: Record<
  string,
  Omit<CommunityInitiative, 'slug'>
> = Object.fromEntries(
  communityInitiativeSeeds.map(row => {
    const { slug, iconName, ...rest } = row;
    return [
      slug,
      {
        ...rest,
        lucideIcon: iconName as LucideIconName,
      },
    ] as [string, Omit<CommunityInitiative, 'slug'>];
  })
);

export const LEGISLATIVE_PROJECT_SUMMARIES: ProjectSummary[] = Object.entries(
  LEGISLATIVE_WORKS
).map(([slug, work]) => ({
  slug,
  category: work.category,
  title: work.title,
  description: work.description,
  impact: work.impact,
  status: work.status.toLowerCase(),
}));

export const COMMUNITY_INITIATIVE_SUMMARIES: CommunityInitiativeSummary[] = Object.entries(
  COMMUNITY_INITIATIVES
).map(([slug, initiative]) => ({
  slug,
  lucideIcon: initiative.lucideIcon,
  title: initiative.title,
  description: initiative.description,
}));
