'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { ArrowRight } from 'lucide-react';

export interface CTAProps {
  isDark?: boolean;
  title?: string;
  desc?: string;
  priBtnText?: string;
  secBtnText?: string;
}

export const CTA = ({
  isDark,
  title = 'Ready to Transform Your Brand?',
  desc = `Let's embark on this exciting journey together to unlock your full potential and leave a
          remarkable mark on the world.`,
  priBtnText = 'Start Your Project',
  secBtnText = 'View Portfolio',
}: CTAProps) => {
  return (
    <section className={`${isDark ? 'bg-gradient-hero text-hero-light' : 'bg-muted/30'} py-24`}>
      <div className="regular-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">{title}</h2>
        <p className="text-xl text-hero-light/80 mb-8 leading-relaxed">{desc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RegularBtn
            linkProps={{ href: '/contact' }}
            text={priBtnText}
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'w-5 h-5 group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
          <RegularBtn
            variant="hero"
            linkProps={{ href: '/about' }}
            text={secBtnText}
            className=""
          />
        </div>
      </div>
    </section>
  );
};
