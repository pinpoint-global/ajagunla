'use client';

import * as LucideIcons from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpCard } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { CommunityInitiative } from '@/lib/types/community-initiative';
import { LucideIconComp } from '@/lib/types/general';

interface OverviewProps {
  initiative: CommunityInitiative;
}

export const Overview = ({ initiative }: OverviewProps) => {
  const LucideIcon =
    (LucideIcons[initiative.lucideIcon] as LucideIconComp) || LucideIcons['AlertTriangle'];

  return (
    <SectionContainer>
      <div className="max-w-6xl mx-auto">
        <SectionHeading Icon={LucideIcon} title="Initiative Overview" className="text-start mb-8" />

        <div className="prose prose-lg max-w-none space-y-4">
          {initiative.fullDescription.split('\n\n').map((paragraph, index) => (
            <FadeInUpCard key={index} index={index}>
              <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
            </FadeInUpCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
