import type { Metadata } from 'next';

import { getCommunityListingMetadata } from '@/lib/cms/page-metadata';
import { getCommunityInitiativeSummariesAsync } from '@/lib/cms/community';
import { getCommunityListingPageContentAsync } from '@/lib/cms/community-listing-page';
import { MainLayout } from '@/components/layout/MainLayout';
import { AjagunlaFoundation } from '@/components/sections/community/AjagunlaFoundation';
import { CommunityInitiatives } from '@/components/sections/community/CommunityInitiatives';
import { FeaturedImages } from '@/components/sections/community/FeaturedImages';
import { GetInvolved } from '@/components/sections/community/GetInvolved';
import { UpcomingEvents } from '@/components/sections/community/UpcomingEvents';
import { CommunityEngagementHero } from '@/components/sections/community/Hero';

export async function generateMetadata(): Promise<Metadata> {
  return getCommunityListingMetadata();
}

export default async function CommunityEngagementPage() {
  const initiatives = await getCommunityInitiativeSummariesAsync();
  const listing = await getCommunityListingPageContentAsync();

  return (
    <MainLayout>
      <CommunityEngagementHero />
      <FeaturedImages />
      <AjagunlaFoundation achievements={listing.foundationAchievements} />
      <CommunityInitiatives initiatives={initiatives} />
      <UpcomingEvents events={listing.upcomingEvents} />
      <GetInvolved />
    </MainLayout>
  );
}
