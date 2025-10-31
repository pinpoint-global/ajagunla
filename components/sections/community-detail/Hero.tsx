'use client';

import { ArrowLeft } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { CommunityInitiative } from '@/lib/types/community-initiative';

interface HeroProps {
  initiative: CommunityInitiative;
}

export const CommunityInitiativeDetailHero = ({ initiative }: HeroProps) => {
  return (
    <SectionContainer background="primary">
      <FadeInUpWrap className="mb-6">
        <RegularBtn
          variant="outline"
          linkProps={{ href: '/community-engagement' }}
          text="Back to Community Engagement"
          LeftIcon={ArrowLeft}
          leftIconProps={{ className: 'w-5 h-5 mr-2' }}
          className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
        />
      </FadeInUpWrap>

      <div className="max-w-6xl">
        <FadeInUpWrap>
          <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold text-primary-foreground mb-6">
            {initiative.title}
          </h1>
        </FadeInUpWrap>

        <FadeInUpWrap>
          <p className="text-lg md:text-xl text-primary-foreground/90">{initiative.description}</p>
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
