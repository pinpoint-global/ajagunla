import 'server-only';

import {
  LEGISLATIVE_IMPACT,
  PROJECT_CATEGORY_BUTTONS,
  SENATE_COMMITTEES,
} from '@/lib/constants/texts';

import type { CommitteeCardProps } from '@/components/sections/legislative-work/SenateCommittees';
import type { ImpactCardProps } from '@/components/sections/legislative-work/LegislativeImpact';
import type { ProjectCategoryButton } from '@/components/sections/legislative-work/LegislativeProjects';

import { fetchPageLegislative, getStrapiMediaUrl, unwrapData } from './strapi';

type PageLegislativeDoc = Record<string, unknown>;

export interface LegislativeListingPageContentData {
  senateCommittees: CommitteeCardProps[];
  legislativeImpact: ImpactCardProps[];
  projectCategoryButtons: ProjectCategoryButton[];
  featuredImageUrl: string;
}

const DEFAULT_FEATURED_IMAGE_URL = 'https://static.ajagunla1.com/images/legislative-work.webp';

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export async function getLegislativeListingPageContentAsync(): Promise<LegislativeListingPageContentData> {
  const raw = await fetchPageLegislative();
  const doc = unwrapData<PageLegislativeDoc>(raw);

  const featuredImageUrl =
    getStrapiMediaUrl(doc?.featuredImageUrl) ??
    asString(doc?.featuredImageUrl) ??
    DEFAULT_FEATURED_IMAGE_URL;

  const senateCommittees: CommitteeCardProps[] = Array.isArray(doc?.senateCommittees)
    ? (doc.senateCommittees
        .map(item => {
          if (!item || typeof item !== 'object') return null;
          const row = item as Record<string, unknown>;
          const iconName = asString(row.iconName);
          const position = asString(row.position);
          const committee = asString(row.committee);
          const note = asString(row.note);
          if (!iconName || !position || !committee || !note) return null;
          return { iconName: iconName as never, position, committee, note } as CommitteeCardProps;
        })
        .filter(Boolean) as CommitteeCardProps[])
    : SENATE_COMMITTEES;

  const legislativeImpact: ImpactCardProps[] = Array.isArray(doc?.legislativeImpact)
    ? (doc.legislativeImpact
        .map(item => {
          if (!item || typeof item !== 'object') return null;
          const row = item as Record<string, unknown>;
          const heading = asString(row.heading);
          const text = asString(row.text);
          if (!heading || !text) return null;
          return { heading, text } as ImpactCardProps;
        })
        .filter(Boolean) as ImpactCardProps[])
    : LEGISLATIVE_IMPACT;

  const projectCategoryButtons: ProjectCategoryButton[] = Array.isArray(doc?.projectCategoryButtons)
    ? (doc.projectCategoryButtons
        .map(item => {
          if (!item || typeof item !== 'object') return null;
          const row = item as Record<string, unknown>;
          const iconName = asString(row.iconName);
          const value = asString(row.value);
          const label = asString(row.label);
          if (!iconName || !value || !label) return null;
          return { iconName: iconName as never, value, label } as ProjectCategoryButton;
        })
        .filter(Boolean) as ProjectCategoryButton[])
    : PROJECT_CATEGORY_BUTTONS;

  return {
    senateCommittees,
    legislativeImpact,
    projectCategoryButtons,
    featuredImageUrl,
  };
}
