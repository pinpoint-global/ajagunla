import 'server-only';

import { cache } from 'react';
import type { SiteBranding } from '@/lib/types/site-branding';
import type {
  SiteContactCard,
  SiteContactInformation,
  SiteFooterContactRow,
  SiteGlobalContent,
  SiteNavLink,
  SiteSocial,
} from '@/lib/types/site-global-content';
import type { SiteGlobalBrandingInput, SiteGlobalDocInput } from '@/lib/types/site-global-strapi';
import {
  CONTACT_CARDS,
  CONTACT_CARDS_FOR_FOOTER,
  CONTACT_INFORMATION,
  NAV_LINKS,
  SOCIALS,
} from '@/lib/constants/texts';
import { fetchSiteGlobal, getStrapiMediaUrl, unwrapData } from './strapi';
import { safeParseSiteGlobalBranding } from './site-global-branding-schema';

type SiteGlobalDoc = SiteGlobalDocInput;

const DEFAULT_SITE_NAME = 'Senator Olubiyi Fadeyi-Ajagunla';
const DEFAULT_LOGO_ALT = 'Senator Olubiyi Fadeyi-Ajagunla logo';
const DEFAULT_NAV_LINKS: SiteNavLink[] = NAV_LINKS.filter(
  item => typeof (item as { href?: unknown }).href === 'string'
).map(item => ({
  text: item.text,
  href: item.href ?? '',
  footerOnlySuffix: item.footerOnlySuffix,
  showInHeaderOnly: item.showInHeaderOnly,
  showInFooterOnly: item.showInFooterOnly,
}));
const DEFAULT_SITE_GLOBAL_CONTENT: SiteGlobalContent = {
  navLinks: DEFAULT_NAV_LINKS,
  contactInformation: CONTACT_INFORMATION,
  contactCardsForFooter: CONTACT_CARDS_FOR_FOOTER,
  socials: SOCIALS,
  contactCards: CONTACT_CARDS,
};

const warnedMessages = new Set<string>();
function warnOnce(message: string, detail?: unknown) {
  if (warnedMessages.has(message)) return;
  warnedMessages.add(message);
  if (detail !== undefined) console.warn(message, detail);
  else console.warn(message);
}

export const getSiteGlobalDocAsync = cache(async () => {
  const raw = await fetchSiteGlobal();
  return unwrapData<SiteGlobalDoc>(raw);
});

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object') return null;
  return value as Record<string, unknown>;
}

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function resolveLogoUrl(
  branding: Record<string, unknown>,
  mediaKey: string,
  urlKey: string
): string | undefined {
  const fromMedia = getStrapiMediaUrl(branding[mediaKey]);
  if (fromMedia) return fromMedia;
  return asString(branding[urlKey]);
}

/**
 * Normalized site-global branding mapper.
 * Uses media fields first, then URL fallbacks, then local component fallbacks in UI.
 */
export function mapSiteBranding(doc: SiteGlobalDoc | null): SiteBranding {
  const branding = asRecord(doc?.branding);

  if (!branding) {
    return {
      siteName: DEFAULT_SITE_NAME,
      logoAlt: DEFAULT_LOGO_ALT,
      useLocalDesktopLogo: true,
      useLocalMobileLogo: true,
      useLocalLoaderLogo: true,
    };
  }

  const brandingParsed = safeParseSiteGlobalBranding(branding) as SiteGlobalBrandingInput | null;
  if (!brandingParsed) {
    // Non-blocking: keep current fallback behavior while surfacing the bad payload for debugging.
    warnOnce('[cms] invalid site-global.branding shape (falling back safely)', {
      hasBrandingKeys: Object.keys(branding).slice(0, 20),
    });
  }
  const brandingForMapping = (brandingParsed ?? branding) as unknown as Record<string, unknown>;

  const desktopLogoUrl = resolveLogoUrl(brandingForMapping, 'logoDesktop', 'logoDesktopUrl');
  const mobileLogoUrl = resolveLogoUrl(brandingForMapping, 'logoMobile', 'logoMobileUrl');
  const loaderLogoUrl = resolveLogoUrl(brandingForMapping, 'logoLoader', 'logoLoaderUrl');

  return {
    siteName: asString(brandingForMapping.siteName) ?? DEFAULT_SITE_NAME,
    logoAlt: asString(brandingForMapping.logoAlt) ?? DEFAULT_LOGO_ALT,
    desktopLogoUrl,
    mobileLogoUrl,
    loaderLogoUrl,
    useLocalDesktopLogo: !desktopLogoUrl,
    useLocalMobileLogo: !mobileLogoUrl,
    useLocalLoaderLogo: !loaderLogoUrl,
  };
}

export async function getSiteBrandingAsync(): Promise<SiteBranding> {
  const doc = await getSiteGlobalDocAsync();
  return mapSiteBranding(doc);
}

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out = value.map(item => (typeof item === 'string' ? item.trim() : '')).filter(Boolean);
  return out.length > 0 ? out : null;
}

function linesFromTextLineComponents(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      return asString((item as Record<string, unknown>).text);
    })
    .filter(Boolean) as string[];
  return out.length > 0 ? out : null;
}

function asNavLinks(value: unknown): SiteNavLink[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const text = asString(row.text);
      const href = asString(row.href);
      if (!text || !href) return null;
      return {
        text,
        href,
        footerOnlySuffix: asString(row.footerOnlySuffix),
        showInHeaderOnly: Boolean(row.showInHeaderOnly),
        showInFooterOnly: Boolean(row.showInFooterOnly),
      } satisfies SiteNavLink;
    })
    .filter(Boolean) as SiteNavLink[];
  return out.length > 0 ? out : null;
}

function asOfficeHours(value: unknown): SiteContactInformation['officeHours'] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const days = asString(row.days);
      const time = asString(row.time);
      if (!days || !time) return null;
      return { days, time };
    })
    .filter(Boolean) as SiteContactInformation['officeHours'];
  return out.length > 0 ? out : null;
}

function asContactInformation(value: unknown): SiteContactInformation | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Record<string, unknown>;
  const address = linesFromTextLineComponents(v.address) ?? asStringArray(v.address);
  const constituencyOffice =
    linesFromTextLineComponents(v.constituencyOffice) ?? asStringArray(v.constituencyOffice);
  const tel = linesFromTextLineComponents(v.tel) ?? asStringArray(v.tel);
  const email = linesFromTextLineComponents(v.email) ?? asStringArray(v.email);
  const officeHours = asOfficeHours(v.officeHours);
  const whatsapp = asString(v.whatsapp);
  const locationUrl = asString(v.locationUrl);
  const mapEmbedUrl = asString(v.mapEmbedUrl) ?? '';
  if (
    !address ||
    !constituencyOffice ||
    !tel ||
    !email ||
    !officeHours ||
    !whatsapp ||
    !locationUrl
  ) {
    return null;
  }
  return {
    address,
    constituencyOffice,
    tel,
    email,
    officeHours,
    whatsapp,
    locationUrl,
    mapEmbedUrl,
  };
}

function asCardTexts(value: unknown) {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const text = asString(row.text);
      if (!text) return null;
      return {
        text,
        link: asString(row.link),
      };
    })
    .filter(Boolean);
  return out.length > 0 ? out : null;
}

function asFooterContactRows(value: unknown): SiteFooterContactRow[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const texts = asCardTexts(row.texts);
      if (!texts) return null;
      const iconName = asString(row.iconName) as SiteFooterContactRow['iconName'];
      return {
        iconName,
        href: asString(row.href),
        texts,
      };
    })
    .filter(Boolean) as SiteFooterContactRow[];
  return out.length > 0 ? out : null;
}

function asSocials(value: unknown): SiteSocial[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const label = asString(row.label);
      const href = asString(row.href);
      const iconKey = asString(row.iconKey);
      if (!label || !href || !iconKey) return null;
      return { label, href, iconKey };
    })
    .filter(Boolean) as SiteSocial[];
  return out.length > 0 ? out : null;
}

function buildContactCards(contactInformation: SiteContactInformation): SiteContactCard[] {
  return [
    {
      iconName: 'MapPin',
      title: 'Senate Office',
      href: contactInformation.locationUrl,
      texts: contactInformation.address.map(text => ({ text })),
      allowSameRow: true,
    },
    {
      iconName: 'MapPin',
      title: 'Constituency Office',
      texts: contactInformation.constituencyOffice.map(text => ({ text })),
      allowSameRow: true,
    },
    {
      iconName: 'Phone',
      title: 'Phone',
      texts: contactInformation.tel.map(phone => ({
        text: phone,
        link: `tel:${phone.replaceAll(' ', '')}`,
      })),
    },
    {
      iconName: 'Mail',
      title: 'Email',
      texts: contactInformation.email.map(text => ({
        text,
        link: `mailto:${text}`,
      })),
    },
  ];
}

export function mapSiteGlobalContent(doc: SiteGlobalDoc | null): SiteGlobalContent {
  if (!doc) return DEFAULT_SITE_GLOBAL_CONTENT;

  const navLinks = asNavLinks(doc.navLinks) ?? DEFAULT_SITE_GLOBAL_CONTENT.navLinks;
  const contactInformation =
    asContactInformation(doc.contactInformation) ?? DEFAULT_SITE_GLOBAL_CONTENT.contactInformation;
  const contactCardsForFooter =
    asFooterContactRows(doc.contactCardsForFooter) ??
    DEFAULT_SITE_GLOBAL_CONTENT.contactCardsForFooter;
  const socials = asSocials(doc.socials) ?? DEFAULT_SITE_GLOBAL_CONTENT.socials;

  return {
    navLinks,
    contactInformation,
    contactCardsForFooter,
    socials,
    contactCards: buildContactCards(contactInformation),
  };
}

export async function getSiteGlobalContentAsync(): Promise<SiteGlobalContent> {
  const doc = await getSiteGlobalDocAsync();
  return mapSiteGlobalContent(doc);
}
