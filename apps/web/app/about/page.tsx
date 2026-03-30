import type { Metadata } from 'next';

import { getAboutMetadata } from '@/lib/cms/page-metadata';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutHero } from '@/components/sections/about/Hero';
import { Biography } from '@/components/sections/about/Biography';
import { Education } from '@/components/sections/about/Education';
import { BusinessAndPhilanthropy } from '@/components/sections/about/Business';
import { Recognition } from '@/components/sections/about/Recognition';
import { getAboutPageContentAsync } from '@/lib/cms/about-page';

export async function generateMetadata(): Promise<Metadata> {
  return getAboutMetadata();
}

export default async function About() {
  const content = await getAboutPageContentAsync();

  return (
    <MainLayout>
      <AboutHero />
      <Biography texts={content.biographyTexts} />
      <Education items={content.education} />
      <BusinessAndPhilanthropy businesses={content.businesses} />
      <Recognition awards={content.awards} />
    </MainLayout>
  );
}
