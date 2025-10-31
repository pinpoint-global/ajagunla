'use client';

import { ArrowLeft } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { Btns404Page } from '@/components/general/Btns404Page';
import { SectionContainer } from '@/components/general/SectionContainer';

export const CommunityInitiativeNotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <SectionContainer>
        <div className="text-center space-y-8 mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
              Community Initiative Not Found
            </h2>
            <p className="text-lg text-muted-foreground">
              {`The community initiative you're looking for doesn't exist or has been moved.`}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <RegularBtn
              size="lg"
              linkProps={{ href: '/community-engagement' }}
              text="Back to Community Engagement"
              LeftIcon={ArrowLeft}
              leftIconProps={{ className: 'w-5 h-5 mr-2' }}
              className="group w-full sm:w-fit"
              wrapClassName="w-full sm:w-fit"
            />
            <Btns404Page />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
