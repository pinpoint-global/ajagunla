import type { Metadata } from 'next';

import { getContactMetadata } from '@/lib/cms/page-metadata';
import { MainLayout } from '@/components/layout/MainLayout';
import { ContactHero } from '@/components/sections/contact/Hero';
import { ContactPageContentWithOverrides } from '@/components/sections/contact/Content';
import { getContactPageContentAsync } from '@/lib/cms/contact-page';

export async function generateMetadata(): Promise<Metadata> {
  return getContactMetadata();
}

export default async function Contact() {
  const pageContent = await getContactPageContentAsync();

  return (
    <MainLayout>
      <ContactHero heading={pageContent.hero.title} text={pageContent.hero.subtitle} />
      <ContactPageContentWithOverrides contactCardsOverride={pageContent.contactCards} />
    </MainLayout>
  );
}
