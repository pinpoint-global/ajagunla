import { generatePageMetadata } from '@/lib/utils/general';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutHero } from '@/components/sections/about/Hero';
import { Biography } from '@/components/sections/about/Biography';
import { Education } from '@/components/sections/about/Education';
import { BusinessAndPhilanthropy } from '@/components/sections/about/Business';
import { Recognition } from '@/components/sections/about/Recognition';

export const metadata = generatePageMetadata(
  'About Senator Olubiyi Fadeyi-Ajagunla',
  "Learn about Senator Olubiyi Fadeyi-Ajagunla's background, education, business leadership, and philanthropic work through the Ajagunla Foundation. Serving Osun Central with dedication.",
  'Senator Fadeyi-Ajagunla biography, Osun Central Senator, Ajagunla Foundation, Nigerian politician, business leader, philanthropist'
);

export default function About() {
  return (
    <MainLayout>
      <AboutHero />
      <Biography />
      <Education />
      <BusinessAndPhilanthropy />
      <Recognition />
    </MainLayout>
  );
}
