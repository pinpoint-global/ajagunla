import { COMMUNITY_INITIATIVES } from '@/lib/constants/texts';
import { CommunityInitiative } from '@/lib/types/community-initiative';

/**
 * Gets a full community initiative by its slug
 * @param slug - The slug of the initiative
 * @returns The full community initiative object or null if not found
 */
export function getInitiativeBySlug(slug: string): CommunityInitiative | null {
  const initiative = COMMUNITY_INITIATIVES[slug];
  if (!initiative) return null;

  return {
    ...initiative,
    slug,
  };
}

/**
 * Gets all community initiative slugs for static generation
 * @returns Array of slug strings
 */
export function getAllInitiativeSlugs(): string[] {
  return Object.keys(COMMUNITY_INITIATIVES);
}
