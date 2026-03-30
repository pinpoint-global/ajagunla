/**
 * Strapi REST: explicit populate for nested components and media.
 * `populate=*` only fills one level; nested component fields and media need deeper populate.
 */

export const STRAPI_POPULATE_SITE_GLOBAL =
  'populate[branding][populate]=*' +
  '&populate[navLinks]=*' +
  '&populate[contactInformation][populate]=*' +
  '&populate[contactCardsForFooter][populate]=*' +
  '&populate[socials]=*' +
  '&populate[seo_keywords]=*' +
  '&populate[seo_ogImage]=*';

export const STRAPI_POPULATE_PAGE_HOME =
  'populate[hero][populate]=*' +
  '&populate[heroStats]=*' +
  '&populate[aboutSummaries]=*' +
  '&populate[communitySummaries]=*' +
  '&populate[aboutPreviewHighlights]=*' +
  '&populate[legislativeHighlights]=*' +
  '&populate[seo_keywords]=*' +
  '&populate[seo_ogImage]=*';

export const STRAPI_POPULATE_PAGE_ABOUT =
  'populate[biographyTexts]=*' +
  '&populate[education]=*' +
  '&populate[businesses][populate]=*' +
  '&populate[awards]=*' +
  '&populate[senateCommittees]=*' +
  '&populate[legislativeImpact]=*' +
  '&populate[aboutPreviewHighlights]=*' +
  '&populate[seo_keywords]=*' +
  '&populate[seo_ogImage]=*';

export const STRAPI_POPULATE_PAGE_CONTACT =
  'populate[contactCards][populate]=*' + '&populate[seo_keywords]=*' + '&populate[seo_ogImage]=*';

export const STRAPI_POPULATE_PAGE_LEGISLATIVE =
  'populate[senateCommittees]=*' +
  '&populate[legislativeImpact]=*' +
  '&populate[projectCategoryButtons]=*' +
  '&populate[featuredImageUrl]=*' +
  '&populate[seo_keywords]=*' +
  '&populate[seo_ogImage]=*';

export const STRAPI_POPULATE_PAGE_COMMUNITY =
  'populate[foundationAchievements]=*' +
  '&populate[upcomingEvents]=*' +
  '&populate[seo_keywords]=*' +
  '&populate[seo_ogImage]=*';
