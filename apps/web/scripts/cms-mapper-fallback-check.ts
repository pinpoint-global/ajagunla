import assert from 'node:assert/strict';

import { getStrapiMediaUrl } from '../lib/cms/strapi-media';
import { mapSiteBranding, mapSiteGlobalContent } from '../lib/cms/site-global-mappers';
import type { SiteGlobalDocInput } from '../lib/types/site-global-strapi';

const base = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://127.0.0.1:1337';

function expect(condition: unknown, message: string): void {
  assert.ok(Boolean(condition), message);
}

function testMapSiteBrandingDefaults() {
  const out = mapSiteBranding(null);
  expect(out.siteName.length > 0, 'default branding should include siteName');
  expect(out.useLocalDesktopLogo === true, 'default desktop logo should fallback to local');
  expect(out.useLocalMobileLogo === true, 'default mobile logo should fallback to local');
  expect(out.useLocalLoaderLogo === true, 'default loader logo should fallback to local');
}

function testMapSiteBrandingPartialBranding() {
  const out = mapSiteBranding({ branding: {} } satisfies SiteGlobalDocInput);
  // No CMS values => still falls back to local.
  expect(
    out.siteName.includes('Senator') || out.siteName.length > 0,
    'default siteName should be used'
  );
  expect(out.logoAlt.length > 0, 'default logoAlt should be used');
  expect(out.useLocalDesktopLogo === true, 'missing desktop logo should fallback to local');
}

function testGetStrapiMediaUrlMediaObjects() {
  expect(
    getStrapiMediaUrl({ url: '/uploads/x.png' }) === `${base}/uploads/x.png`,
    'media.url should absolutize'
  );
  expect(
    getStrapiMediaUrl({ data: { attributes: { url: '/uploads/y.png' } } }) ===
      `${base}/uploads/y.png`,
    'data.attributes.url should absolutize'
  );
}

function testMapSiteBrandingMediaSelection() {
  const doc: SiteGlobalDocInput = {
    branding: {
      siteName: 'CMS Name',
      logoAlt: 'CMS Alt',
      logoDesktop: { url: '/uploads/desktop.png' },
      logoMobileUrl: '/uploads/mobile.png',
      logoLoader: { data: { attributes: { url: '/uploads/loader.png' } } },
    },
  };

  const out = mapSiteBranding(doc);

  expect(out.siteName === 'CMS Name', 'siteName should come from CMS branding');
  expect(out.logoAlt === 'CMS Alt', 'logoAlt should come from CMS branding');
  expect(out.useLocalDesktopLogo === false, 'desktop should use CMS media when provided');
  expect(
    out.desktopLogoUrl?.endsWith('/uploads/desktop.png'),
    'desktopLogoUrl should include CMS path'
  );
  expect(out.useLocalMobileLogo === false, 'mobile should use CMS URL when provided');
  expect(
    out.mobileLogoUrl?.endsWith('/uploads/mobile.png'),
    'mobileLogoUrl should include CMS path'
  );
  expect(out.useLocalLoaderLogo === false, 'loader should use CMS media when provided');
  expect(
    out.loaderLogoUrl?.endsWith('/uploads/loader.png'),
    'loaderLogoUrl should include CMS path'
  );
}

function testMapSiteBrandingSchemaFailureStillFallsBack() {
  const invalidDoc: SiteGlobalDocInput = { branding: { logoDesktop: 123 } };
  const out = mapSiteBranding(invalidDoc);

  // Zod schema should fail (number), but mapping must not crash and should fall back safely.
  expect(out.useLocalDesktopLogo === true, 'invalid desktop media should fallback to local');
}

function testMapSiteGlobalContentFallback() {
  const out = mapSiteGlobalContent(null);
  expect(Array.isArray(out.navLinks), 'site-global content fallback should return navLinks array');
  expect(out.contactInformation.address.length > 0, 'fallback should include contact info');
}

try {
  testMapSiteBrandingDefaults();
  testMapSiteBrandingPartialBranding();
  testGetStrapiMediaUrlMediaObjects();
  testMapSiteBrandingMediaSelection();
  testMapSiteBrandingSchemaFailureStillFallsBack();
  testMapSiteGlobalContentFallback();

  console.log('[cms-mapper-fallback-check] ok');
} catch (e) {
  console.error('[cms-mapper-fallback-check] failed', e);
  process.exitCode = 1;
}
