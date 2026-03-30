import { z } from 'zod';

import type { SiteGlobalBrandingInput } from '@/lib/types/site-global-strapi';

/**
 * Runtime validation for the "branding" object inside Strapi `site-global`.
 * This is intentionally permissive to avoid blocking the site if the CMS shape
 * changes, while still catching obviously invalid primitives.
 */

// Accept either a raw URL string or "media-like" objects.
// We intentionally allow arbitrary object keys because Strapi’s media payload
// shape can vary based on populate depth and Strapi version.
const StrapiMediaLikeSchema = z.union([z.string(), z.object({}).passthrough()]);

export const SiteGlobalBrandingSchema = z
  .object({
    siteName: z.string().optional(),
    logoAlt: z.string().optional(),

    logoDesktop: StrapiMediaLikeSchema.optional().nullable(),
    logoMobile: StrapiMediaLikeSchema.optional().nullable(),
    logoLoader: StrapiMediaLikeSchema.optional().nullable(),

    logoDesktopUrl: z.string().optional(),
    logoMobileUrl: z.string().optional(),
    logoLoaderUrl: z.string().optional(),
  })
  .partial()
  .passthrough();

export function safeParseSiteGlobalBranding(raw: unknown): SiteGlobalBrandingInput | null {
  if (!raw || typeof raw !== 'object') return null;

  const res = SiteGlobalBrandingSchema.safeParse(raw);
  if (!res.success) return null;
  return res.data as SiteGlobalBrandingInput;
}
