import { MainLayout } from '@/components/layout/MainLayout';
import { FeaturedImage } from '@/components/sections/legislative-work/FeaturedImage';
import { LegislativeWorkHero } from '@/components/sections/legislative-work/Hero';
import { LegislativeImpact } from '@/components/sections/legislative-work/LegislativeImpact';
import { SenateCommittees } from '@/components/sections/legislative-work/SenateCommittees';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legislative Work & Achievements | Senator Fadeyi-Ajagunla',
  description:
    "Explore Senator Olubiyi Fadeyi-Ajagunla's legislative achievements,\
    bills sponsored, and community-focused initiatives. Vice Chairman of\
    Senate Communications and Trade & Investment committees.",
  keywords:
    'legislative work, Senate bills, Osun Central initiatives, education\
    infrastructure, youth empowerment, technology innovation',
};

export default async function LegislativeWorkPage() {
  return (
    <MainLayout>
      <LegislativeWorkHero />
      <FeaturedImage />
      <SenateCommittees />
      <LegislativeImpact />
    </MainLayout>
  );
}
