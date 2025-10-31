'use client';

import * as LucideIcons from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpCard } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LegislativeWork } from '@/lib/types/legislative-work';
import { LucideIconComp } from '@/lib/types/general';

interface OverviewProps {
  project: LegislativeWork;
}

export const Overview = ({ project }: OverviewProps) => {
  const LucideIcon =
    (LucideIcons[project.lucideIcon] as LucideIconComp) || LucideIcons['AlertTriangle'];

  return (
    <SectionContainer>
      <div className="max-w-6xl mx-auto">
        <SectionHeading Icon={LucideIcon} title="Project Overview" className="text-start mb-8" />

        <div className="prose prose-lg max-w-none space-y-4">
          {project.fullDescription.split('\n\n').map((paragraph, index) => (
            <FadeInUpCard key={index} index={index}>
              <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
            </FadeInUpCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
