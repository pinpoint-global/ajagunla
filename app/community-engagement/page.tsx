import { generatePageMetadata } from '@/lib/utils/general';
import { MainLayout } from '@/components/layout/MainLayout';
import { AjagunlaFoundation } from '@/components/sections/community/AjagunlaFoundation';
import { CommunityInitiatives } from '@/components/sections/community/CommunityInitiatives';
import { FeaturedImages } from '@/components/sections/community/FeaturedImages';
import { GetInvolved } from '@/components/sections/community/GetInvolved';
import { UpcomingEvents } from '@/components/sections/community/UpcomingEvents';
import { CommunityEngagementHero } from '@/components/sections/community/Hero';

export const metadata = generatePageMetadata(
  'Community Engagement & Initiatives',
  "Discover the Ajagunla Foundation's community initiatives including education support, youth empowerment programs, and healthcare interventions across Osun Central.",
  'community engagement, Ajagunla Foundation, youth empowerment, scholarships, healthcare, town halls, Osun Central development'
);

export default async function CommunityEngagementPage() {
  return (
    <MainLayout>
      <CommunityEngagementHero />
      <FeaturedImages />
      <AjagunlaFoundation />
      <CommunityInitiatives />
      <UpcomingEvents />
      <GetInvolved />
    </MainLayout>
  );
}
