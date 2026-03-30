export type RobotsDirective = 'index_follow' | 'noindex_nofollow' | 'noindex_follow' | 'index_nofollow';

export type OgType = 'website' | 'article';

export type TwitterCardType = 'summary' | 'summary_large_image';

/**
 * Flat SEO fields used on Strapi content types (parity with prognera `seo_*` naming).
 */
export interface CmsSeoFields {
  seo_metaTitle?: string | null;
  seo_metaDescription?: string | null;
  seo_keywords?: string[] | null;
  seo_canonicalUrl?: string | null;
  seo_robots?: RobotsDirective | null;
  seo_ogType?: OgType | null;
  seo_ogTitle?: string | null;
  seo_ogDescription?: string | null;
  seo_twitterCard?: TwitterCardType | null;
  seo_articlePublishedAt?: string | null;
  seo_articleModifiedAt?: string | null;
  seo_structuredData?: unknown | null;
}
