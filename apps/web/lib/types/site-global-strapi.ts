/**
 * Best-effort input types for Strapi `site-global`.
 * These are intentionally permissive (`unknown`) because Strapi payloads can vary
 * depending on populate/field configuration and CMS content state.
 */

export interface SiteGlobalBrandingInput {
  siteName?: unknown;
  logoAlt?: unknown;

  // Strapi media fields can come in different shapes, but from this app’s perspective
  // they are always "media-like" values that `getStrapiMediaUrl(...)` can normalize.
  logoDesktop?: unknown;
  logoMobile?: unknown;
  logoLoader?: unknown;

  // Fallback string URLs (some content editors may store raw URL strings instead of media).
  logoDesktopUrl?: unknown;
  logoMobileUrl?: unknown;
  logoLoaderUrl?: unknown;
}

export interface SiteGlobalDocInput extends Record<string, unknown> {
  branding?: SiteGlobalBrandingInput | null;

  // Content mapped elsewhere in this app; kept permissive here.
  navLinks?: unknown;
  contactInformation?: unknown;
  contactCardsForFooter?: unknown;
  socials?: unknown;

  // SEO fields are read for metadata generation; allow arbitrary keys.
}
