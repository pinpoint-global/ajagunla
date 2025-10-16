'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { BIOGRAPHY_TEXTS } from '@/lib/constants/texts';

export const Biography = () => {
  return (
    <section className="section-padding">
      <div className="regular-container">
        <SectionHeading title="Biography" className="mb-10" />
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none space-y-8 text-base text-foreground">
            {BIOGRAPHY_TEXTS.map((text, idx) => (
              <p key={idx} className="">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
