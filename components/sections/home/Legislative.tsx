'use client';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LEGISLATIVE_HIGHLIGHTS } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';
import { ArrowRight } from 'lucide-react';

export const LegislativePreview = () => {
  return (
    <section id="legislative-preview" className="section-padding bg-muted/30">
      <div className="regular-container">
        <SectionHeading
          title="Legislative Achievements"
          text="Delivering results through strategic legislation and community-focused initiatives"
        />

        <div className="mb-12 animate-scale-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/legislative-work.webp"
            alt="Senator Fadeyi-Ajagunla at legislative work"
            className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LEGISLATIVE_HIGHLIGHTS.map((item, idx) => (
            <LegislativeHighlightCard key={idx} index={idx} {...item} />
          ))}
        </div>

        <div className="text-center">
          <RegularBtn
            variant="hero"
            size="lg"
            linkProps={{ href: '/legislative-work' }}
            text="View All Legislative Work"
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
        </div>
      </div>
    </section>
  );
};

export interface LegislativeHighlightProps {
  index?: number;
  Icon: LucideIconComp;
  title: string;
  description: string;
}

const LegislativeHighlightCard = ({
  index = 0,
  Icon,
  title,
  description,
}: LegislativeHighlightProps) => {
  return (
    <div
      className="card-elegant p-6 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}>
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
