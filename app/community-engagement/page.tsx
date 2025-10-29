import { MainLayout } from '@/components/layout/MainLayout';
import { AjagunlaFoundation } from '@/components/sections/community/AjagunlaFoundation';
import { CommunityInitiatives } from '@/components/sections/community/CommunityInitiatives';
import { FeaturedImages } from '@/components/sections/community/FeaturedImages';
import { CommunityEngagementHero } from '@/components/sections/community/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Engagement & Initiatives | Senator Fadeyi-Ajagunla',
  description:
    "Discover the Ajagunla Foundation's community initiatives including \
    education support, youth empowerment programs, and healthcare \
    interventions across Osun Central.",
  keywords:
    'community engagement, Ajagunla Foundation, youth empowerment, \
    scholarships, healthcare, town halls, Osun Central development',
};

export default async function CommunityEngagementPage() {
  return (
    <MainLayout>
      <CommunityEngagementHero />
      <FeaturedImages />
      <AjagunlaFoundation />
      <CommunityInitiatives />
    </MainLayout>
  );
}
