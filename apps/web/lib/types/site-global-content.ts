import type { LucideIconName } from '@/components/general/DynamicIcon';
import type { ContactCardTextProps } from '@/components/sections/contact/Content';

export interface SiteNavLink {
  text: string;
  href: string;
  footerOnlySuffix?: string;
  showInHeaderOnly?: boolean;
  showInFooterOnly?: boolean;
}

export interface SiteOfficeHour {
  days: string;
  time: string;
}

export interface SiteContactInformation {
  address: string[];
  constituencyOffice: string[];
  tel: string[];
  whatsapp: string;
  email: string[];
  locationUrl: string;
  mapEmbedUrl: string;
  officeHours: SiteOfficeHour[];
}

export interface SiteFooterContactRow {
  iconName?: LucideIconName;
  href?: string;
  texts: ContactCardTextProps[];
}

export interface SiteSocial {
  label: string;
  href: string;
  iconKey: string;
}

export interface SiteContactCard {
  iconName: LucideIconName;
  title: string;
  href?: string;
  texts: ContactCardTextProps[];
  allowSameRow?: boolean;
}

export interface SiteGlobalContent {
  navLinks: SiteNavLink[];
  contactInformation: SiteContactInformation;
  contactCardsForFooter: SiteFooterContactRow[];
  socials: SiteSocial[];
  contactCards: SiteContactCard[];
}
