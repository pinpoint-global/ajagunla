'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { Users } from 'lucide-react';

export const GetInvolved = () => {
  return (
    <SectionContainer background="primary" customContainer>
      <div className="text-center">
        <Users className="w-16 h-16 text-accent mx-auto mb-6" />
        <SectionHeading
          title="Get Involved"
          text="Your voice matters. Join us in building a better Osun Central through active participation and community engagement."
          whiteText
          className="mb-8"
        />
        <FadeInUpWrap className="flex flex-wrap gap-4 justify-center">
          <RegularBtn variant="accent" size="lg" text="Volunteer Opportunities" />
          <RegularBtn
            variant="outline"
            size="lg"
            text="Attend Town Hall"
            className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          />
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
