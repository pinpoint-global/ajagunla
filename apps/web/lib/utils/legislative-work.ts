import { LEGISLATIVE_WORKS } from '@/lib/constants/texts';
import { LegislativeWork } from '@/lib/types/legislative-work';

/**
 * Gets a full legislative work project by its slug
 * @param slug - The slug of the project
 * @returns The full legislative work object or null if not found
 */
export function getProjectBySlug(slug: string): LegislativeWork | null {
  const work = LEGISLATIVE_WORKS[slug];
  if (!work) return null;

  return {
    ...work,
    slug,
  };
}

/**
 * Gets all legislative work slugs for static generation
 * @returns Array of slug strings
 */
export function getAllProjectSlugs(): string[] {
  return Object.keys(LEGISLATIVE_WORKS);
}
