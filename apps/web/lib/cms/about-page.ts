import 'server-only';

import { AWARDS, BIOGRAPHY_TEXTS, BUSINESSES, EDUCATION } from '@/lib/constants/texts';

import type { AwardProps } from '@/components/sections/about/Recognition';
import type { EducationProps } from '@/components/sections/about/Education';
import type { BusinessProps } from '@/components/sections/about/Business';

import { fetchPageAbout, unwrapData } from './strapi';
import { flattenTextLines } from './strapi-normalize';

type PageAboutDoc = Record<string, unknown>;

export interface AboutPageContentData {
  biographyTexts: string[];
  education: EducationProps[];
  businesses: BusinessProps[];
  awards: AwardProps[];
}

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out = value.map(v => asString(v)).filter(Boolean) as string[];
  return out.length > 0 ? out : null;
}

function asBiographyTexts(value: unknown): string[] | null {
  const fromComponents = flattenTextLines(value);
  if (fromComponents) return fromComponents;
  return asStringArray(value);
}

function asEducation(value: unknown): EducationProps[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const degree = asString(row.degree);
      const course = asString(row.course);
      const institution = asString(row.institution);
      if (!degree || !course || !institution) return null;
      return { degree, course, institution } satisfies EducationProps;
    })
    .filter(Boolean) as EducationProps[];
  return out.length > 0 ? out : null;
}

function asBusinesses(value: unknown): BusinessProps[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const iconName = asString(row.iconName) as BusinessProps['iconName'] | undefined;
      const title = asString(row.title);
      const paragraphsRaw = row.paragraphs;
      let paragraphs: string[] = [];
      const fromComponents = flattenTextLines(paragraphsRaw);
      if (fromComponents) {
        paragraphs = fromComponents;
      } else if (Array.isArray(paragraphsRaw)) {
        paragraphs = paragraphsRaw.map(p => asString(p)).filter(Boolean) as string[];
      }
      if (!iconName || !title || paragraphs.length === 0) return null;
      return { iconName, title, paragraphs } satisfies BusinessProps;
    })
    .filter(Boolean) as BusinessProps[];
  return out.length > 0 ? out : null;
}

function asAwards(value: unknown): AwardProps[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const year = asString(row.year) as AwardProps['year'] | undefined;
      const name = asString(row.name);
      const desc = asString(row.desc);
      if (!year || !name || !desc) return null;
      return { year, name, desc } satisfies AwardProps;
    })
    .filter(Boolean) as AwardProps[];
  return out.length > 0 ? out : null;
}

export async function getAboutPageContentAsync(): Promise<AboutPageContentData> {
  const raw = await fetchPageAbout();
  const doc = unwrapData<PageAboutDoc>(raw);

  return {
    biographyTexts: asBiographyTexts(doc?.biographyTexts) ?? BIOGRAPHY_TEXTS,
    education: asEducation(doc?.education) ?? EDUCATION,
    businesses: asBusinesses(doc?.businesses) ?? BUSINESSES,
    awards: asAwards(doc?.awards) ?? AWARDS,
  };
}
