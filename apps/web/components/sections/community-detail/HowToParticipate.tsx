'use client';

import { Info } from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { CommunityInitiative } from '@/lib/types/community-initiative';

interface HowToParticipateProps {
  initiative: CommunityInitiative;
}

export const HowToParticipate = ({ initiative }: HowToParticipateProps) => {
  return (
    <SectionContainer background="muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeading Icon={Info} title="How to Participate" className="text-start mb-8" />

        <FadeInUpWrap>
          <div className="card-elegant p-6">
            <p className="text-foreground leading-relaxed">{initiative.howToParticipate}</p>
          </div>
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
