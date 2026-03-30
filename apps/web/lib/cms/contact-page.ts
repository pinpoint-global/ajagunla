import 'server-only';

import { CONTACT_CARDS } from '@/lib/constants/texts';
import type { ContactCardProps } from '@/components/sections/contact/Content';

import { fetchPageContact, unwrapData } from './strapi';

type ContactPageDoc = Record<string, unknown>;

export interface ContactHeroContent {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ContactPageContentData {
  hero: ContactHeroContent;
  contactCards: ContactCardProps[];
}

const DEFAULT_CONTACT_HERO: ContactHeroContent = {
  title: 'Contact Us',
  subtitle: "Have questions, concerns, or need assistance? We're here to help and serve you.",
  imageSrc: 'https://static.ajagunla1.com/images/senator-fadeyi-4.webp',
  imageAlt: 'Senator Olubiyi Fadeyi-Ajagunla - Ready to serve and assist you',
};

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asCardTexts(value: unknown): ContactCardProps['texts'] | null {
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
    .filter(Boolean) as ContactCardProps['texts'];
  return out.length > 0 ? out : null;
}

function asContactCards(value: unknown): ContactCardProps[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .map(item => {
      if (!item || typeof item !== 'object') return null;
      const row = item as Record<string, unknown>;
      const iconName = asString(row.iconName) as ContactCardProps['iconName'] | undefined;
      const title = asString(row.title);
      const texts = asCardTexts(row.texts);
      if (!iconName || !title || !texts) return null;
      return {
        iconName,
        title,
        texts,
        href: asString(row.href),
        allowSameRow: Boolean(row.allowSameRow),
      } satisfies ContactCardProps;
    })
    .filter(Boolean) as ContactCardProps[];
  return out.length > 0 ? out : null;
}

export async function getContactPageContentAsync(): Promise<ContactPageContentData> {
  const raw = await fetchPageContact();
  const doc = unwrapData<ContactPageDoc>(raw);

  const title = asString(doc?.heroTitle) ?? DEFAULT_CONTACT_HERO.title;
  const subtitle = asString(doc?.heroSubtitle) ?? DEFAULT_CONTACT_HERO.subtitle;
  const contactCards = asContactCards(doc?.contactCards) ?? CONTACT_CARDS;

  return {
    hero: {
      title,
      subtitle,
      imageSrc: DEFAULT_CONTACT_HERO.imageSrc,
      imageAlt: DEFAULT_CONTACT_HERO.imageAlt,
    },
    contactCards,
  };
}
