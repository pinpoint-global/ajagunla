import { MainLayout } from '@/components/layout/MainLayout';
import { FeaturedImage } from '@/components/sections/legislative-work/FeaturedImage';
import { LegislativeWorkHero } from '@/components/sections/legislative-work/Hero';
import { LegislativeImpact } from '@/components/sections/legislative-work/LegislativeImpact';
import { LegislativeProjects } from '@/components/sections/legislative-work/LegislativeProjects';
import { SenateCommittees } from '@/components/sections/legislative-work/SenateCommittees';
import { Metadata } from 'next';
import { Suspense } from 'react';

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
      <Suspense fallback={null}>
        <LegislativeProjects />
      </Suspense>
      <LegislativeImpact />
    </MainLayout>
  );
}
