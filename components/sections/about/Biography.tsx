'use client';

import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { BIOGRAPHY_TEXTS } from '@/lib/constants/texts';

export const Biography = () => {
  return (
    <SectionContainer>
      <SectionHeading title="Biography" className="mb-10" />
      <div className="max-w-4xl mx-auto">
        <FadeInUpWrap className="prose prose-lg max-w-none space-y-8 text-base text-foreground">
          {BIOGRAPHY_TEXTS.map((text, idx) => (
            <p key={idx} className="">
              {text}
            </p>
          ))}
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
