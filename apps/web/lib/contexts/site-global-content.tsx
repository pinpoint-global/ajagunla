'use client';

import { createContext, useContext } from 'react';

import {
  CONTACT_CARDS,
  CONTACT_CARDS_FOR_FOOTER,
  CONTACT_INFORMATION,
  NAV_LINKS,
  SOCIALS,
} from '@/lib/constants/texts';
import type { SiteGlobalContent } from '@/lib/types/site-global-content';

const defaultNavLinks = NAV_LINKS.filter(
  item => typeof (item as { href?: unknown }).href === 'string'
).map(item => ({
  text: item.text,
  href: item.href ?? '',
  footerOnlySuffix: item.footerOnlySuffix,
  showInHeaderOnly: item.showInHeaderOnly,
  showInFooterOnly: item.showInFooterOnly,
}));

const defaultSiteGlobalContent: SiteGlobalContent = {
  navLinks: defaultNavLinks,
  contactInformation: CONTACT_INFORMATION,
  contactCardsForFooter: CONTACT_CARDS_FOR_FOOTER,
  socials: SOCIALS,
  contactCards: CONTACT_CARDS,
};

const SiteGlobalContentContext = createContext<SiteGlobalContent>(defaultSiteGlobalContent);

export const SiteGlobalContentProvider = SiteGlobalContentContext.Provider;

export function useSiteGlobalContent() {
  return useContext(SiteGlobalContentContext);
}
