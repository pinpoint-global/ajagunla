'use client';
import { ArrowRight } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { LucideIconComp } from '@/lib/types/general';
import { ABOUT_SUMMARIES } from '@/lib/constants/texts';
import { SectionHeading } from '@/components/general/SectionHeading';

export const AboutPreview = () => {
  return (
    <section id="about-preview" className="section-padding">
      <div className="regular-container">
        <SectionHeading
          title="About Senator Fadeyi-Ajagunla"
          text="A dedicated public servant, accomplished businessman, and committed philanthropist"
        />

        <div className="h-fit grid md:grid-cols-2 lg:items-stretch gap-12 items-center mb-12">
          <div className="w-full md:max-w-xl h-[500px] md:h-full lg:h-[550px] justify-self-end animate-scale-in relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/senator-fadeyi.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla - Dedicated public servant and philanthropist"
              className="w-full h-full absolute inset-0 object-cover lg:object-[top_center] rounded-lg shadow-elegant"
            />
          </div>

          <div className="h-full grid items-center">
            <div className="lg:h-fit grid gap-6">
              {ABOUT_SUMMARIES.map((item, idx) => (
                <AboutSummaryCard key={idx} {...item} index={idx} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <RegularBtn
            variant="hero"
            size="lg"
            linkProps={{ href: '/about' }}
            text="Learn More About the Senator"
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
        </div>
      </div>
    </section>
  );
};

export interface AboutSummary {
  Icon: LucideIconComp;
  title: string;
  text: string;
  index?: number;
}

const AboutSummaryCard = ({ Icon, title, text, index = 0 }: AboutSummary) => {
  return (
    <div
      className="max-w-xl h-fit card-elegant p-6 animate-scale-in"
      style={{ animationDelay: `${0.25 * index}s` }}>
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};
