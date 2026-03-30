import type { Metadata } from 'next';

import { getHomeMetadata } from '@/lib/cms/page-metadata';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutPreview } from '@/components/sections/home/About';
import { CommunityPreview } from '@/components/sections/home/Community';
import { HomeHero } from '@/components/sections/home/Hero';
import { LegislativePreview } from '@/components/sections/home/Legislative';
import { getHomePageContentAsync } from '@/lib/cms/home-page';

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata();
}

export default async function Home() {
  const content = await getHomePageContentAsync();

  return (
    <MainLayout>
      <HomeHero
        heroTitle={content.hero.title}
        heroSubtitle={content.hero.subtitle}
        heroTagline={content.hero.tagline}
        backgroundImageUrl={content.hero.backgroundImageUrl}
        heroStats={content.hero.heroStats}
      />
      <AboutPreview summaries={content.aboutSummaries} />
      <LegislativePreview highlights={content.legislativeHighlights} />
      <CommunityPreview summaries={content.communitySummaries} />
    </MainLayout>
  );
}
