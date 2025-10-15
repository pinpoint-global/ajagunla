import { MainLayout } from '@/components/layout/MainLayout';
import { AboutPreview } from '@/components/sections/home/About';
import { CommunityPreview } from '@/components/sections/home/Community';
import { HomeHero } from '@/components/sections/home/Hero';
import { LegislativePreview } from '@/components/sections/home/Legislative';

export default function Home() {
  return (
    <MainLayout>
      <HomeHero />
      <AboutPreview />
      <LegislativePreview />
      <CommunityPreview />
    </MainLayout>
  );
}
