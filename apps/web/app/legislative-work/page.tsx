import type { Metadata } from 'next';

import { getLegislativeListingMetadata } from '@/lib/cms/page-metadata';
import { getLegislativeProjectSummariesAsync } from '@/lib/cms/legislative';
import { getLegislativeListingPageContentAsync } from '@/lib/cms/legislative-listing-page';
import { MainLayout } from '@/components/layout/MainLayout';
import { FeaturedImage } from '@/components/sections/legislative-work/FeaturedImage';
import { LegislativeWorkHero } from '@/components/sections/legislative-work/Hero';
import { LegislativeImpact } from '@/components/sections/legislative-work/LegislativeImpact';
import { LegislativeProjects } from '@/components/sections/legislative-work/LegislativeProjects';
import { SenateCommittees } from '@/components/sections/legislative-work/SenateCommittees';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return getLegislativeListingMetadata();
}

export default async function LegislativeWorkPage() {
  const projects = await getLegislativeProjectSummariesAsync();
  const listing = await getLegislativeListingPageContentAsync();

  return (
    <MainLayout>
      <LegislativeWorkHero />
      <FeaturedImage imageUrl={listing.featuredImageUrl} />
      <SenateCommittees committees={listing.senateCommittees} />
      <Suspense fallback={null}>
        <LegislativeProjects projects={projects} categoryButtons={listing.projectCategoryButtons} />
      </Suspense>
      <LegislativeImpact impacts={listing.legislativeImpact} />
    </MainLayout>
  );
}
