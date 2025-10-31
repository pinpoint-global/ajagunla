'use client';

import { ArrowLeft } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { LegislativeWork } from '@/lib/types/legislative-work';

interface HeroProps {
  project: LegislativeWork;
}

export const LegislativeWorkDetailHero = ({ project }: HeroProps) => {
  return (
    <SectionContainer background="primary">
      <FadeInUpWrap className="mb-6">
        <RegularBtn
          variant="outline"
          linkProps={{ href: '/legislative-work' }}
          text="Back to Legislative Work"
          LeftIcon={ArrowLeft}
          leftIconProps={{ className: 'w-5 h-5 mr-2' }}
          className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
        />
      </FadeInUpWrap>

      <div className="max-w-4xl">
        <FadeInUpWrap className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
          {project.status}
        </FadeInUpWrap>

        <FadeInUpWrap>
          <h1 className="text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold text-primary-foreground mb-6">
            {project.title}
          </h1>
        </FadeInUpWrap>

        <FadeInUpWrap>
          <p className="text-lg md:text-xl text-primary-foreground/90">{project.description}</p>
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
