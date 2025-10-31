/**
 * Generates detail page URL for legislative work items
 * @param slug - Item slug
 * @returns Full URL path
 */
export function getLegislativeWorkUrl(slug: string): string {
  return `/legislative-work/${slug}`;
}

/**
 * Generates detail page URL for community engagement items
 * @param slug - Item slug
 * @returns Full URL path
 */
export function getCommunityEngagementUrl(slug: string): string {
  return `/community-engagement/${slug}`;
}

/**
 * Generates detail page URL based on type
 * @param type - Type of detail page
 * @param slug - Item slug
 * @returns Full URL path
 */
export function getDetailUrl(type: 'legislative' | 'community', slug: string): string {
  switch (type) {
    case 'legislative':
      return getLegislativeWorkUrl(slug);
    case 'community':
      return getCommunityEngagementUrl(slug);
    default:
      return '/';
  }
}

/**
 * Validates if a slug is a valid format
 * @param slug - Slug to validate
 * @returns Boolean indicating if slug is valid
 */
export function isValidSlug(slug: string): boolean {
  // Allow lowercase letters, numbers, and hyphens
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Sanitizes a string to be used as a slug
 * @param text - Text to sanitize
 * @returns Sanitized slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
