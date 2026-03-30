'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { FadeInUpWrap } from '@/components/general/MotionContainers';

export const GetInvolved = () => {
  return (
    <SectionContainer background="primary">
      <div className="text-center">
        <SectionHeading
          title="Get Involved"
          text="Have questions or want to learn more about this initiative? Contact our office."
          whiteText
          className="mb-8"
        />

        <FadeInUpWrap>
          <RegularBtn
            variant="accent"
            size="lg"
            linkProps={{ href: '/contact' }}
            text="Contact Our Office"
          />
        </FadeInUpWrap>
      </div>
    </SectionContainer>
  );
};
