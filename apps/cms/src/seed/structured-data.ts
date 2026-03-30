/** JSON-LD payloads for `seo_structuredData` fields — mirrors rich SEO seeding in emmanuelakabe-style projects. */

const CTX = 'https://schema.org';

export function buildSiteGlobalJsonLd(siteUrl: string) {
  const personId = `${siteUrl}#senator`;
  return {
    '@context': CTX,
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Olubiyi Fadeyi-Ajagunla',
        honorificPrefix: 'Senator',
        jobTitle: 'Senator of the Federal Republic of Nigeria',
        memberOf: {
          '@type': 'Organization',
          name: 'National Assembly of Nigeria',
        },
        url: siteUrl,
        sameAs: [
          'https://www.instagram.com',
          'https://www.facebook.com',
          'https://www.linkedin.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Senator Olubiyi Fadeyi-Ajagunla — Official Site',
        description:
          'Official portfolio and constituent resources for Osun Central Senatorial District.',
        publisher: { '@id': personId },
        inLanguage: 'en-NG',
      },
      {
        '@type': 'GovernmentOrganization',
        name: "Senator Olubiyi Fadeyi-Ajagunla — Constituency Office",
        url: siteUrl,
        parentOrganization: {
          '@type': 'Organization',
          name: 'Senate of Nigeria',
        },
      },
    ],
  };
}

export function buildWebPageJsonLd(
  siteUrl: string,
  path: string,
  name: string,
  description: string
) {
  const url = `${siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': CTX,
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: { '@type': 'WebSite', url: siteUrl },
    inLanguage: 'en-NG',
  };
}

export function buildArticleJsonLd(
  siteUrl: string,
  pathSegments: string[],
  headline: string,
  description: string,
  datePublished?: string
) {
  const base = siteUrl.replace(/\/$/, '');
  const path = pathSegments.map(s => (s.startsWith('/') ? s.slice(1) : s)).join('/');
  const url = `${base}/${path}`;
  return {
    '@context': CTX,
    '@type': 'Article',
    headline,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'Office of Senator Olubiyi Fadeyi-Ajagunla',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Senator Olubiyi Fadeyi-Ajagunla',
    },
    ...(datePublished ? { datePublished } : {}),
    inLanguage: 'en-NG',
  };
}

export function buildNonprofitProgramJsonLd(
  siteUrl: string,
  pathSegments: string[],
  name: string,
  description: string
) {
  const base = siteUrl.replace(/\/$/, '');
  const path = pathSegments.map(s => (s.startsWith('/') ? s.slice(1) : s)).join('/');
  const url = `${base}/${path}`;
  return {
    '@context': CTX,
    '@type': 'CommunityOrganization',
    name,
    description,
    url,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Ajagunla Foundation',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Osun Central Senatorial District',
    },
  };
}
