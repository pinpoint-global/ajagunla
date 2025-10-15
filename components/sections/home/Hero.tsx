'use client';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { HERO_STATS } from '@/lib/constants/texts';
import { scrollToSection } from '@/lib/utils/general';
import { ArrowRight, FileText, Users } from 'lucide-react';

export const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/senator-fadeyi.webp"
          alt="Senator Olubiyi Fadeyi-Ajagunla - Distinguished Senator representing Osun Central Senatorial District"
          className="w-full h-full object-cover object-[top_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/85" />
      </div>

      {/* Content */}
      <div className="regular-container relative z-10 text-center px-6 py-16 animate-fade-in-up">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold font-serif mb-6">
            Senator Olubiyi Fadeyi-Ajagunla
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Serving Osun Central Senatorial District
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Empowering Communities Through Leadership, Education & Development
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <RegularBtn
              variant="hero"
              size="xl"
              typo="large"
              text="Learn About My Work"
              RightIcon={ArrowRight}
              rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
              onClick={() => scrollToSection('about-preview')}
              className="w-full md:w-fit group bg-red hover:bg-red/90 text-red-foreground"
              wrapClassName="w-full md:w-fit"
            />
            <RegularBtn
              variant="accent"
              size="xl"
              typo="large"
              text="Legislative Achievements"
              LeftIcon={FileText}
              leftIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
              onClick={() => scrollToSection('legislative-preview')}
              className="w-full md:w-fit"
              wrapClassName="w-full md:w-fit"
            />
            <RegularBtn
              variant="outline"
              size="xl"
              typo="large"
              text="Community Impact"
              LeftIcon={Users}
              leftIconProps={{ className: 'group-hover:-translate-x-1 transition-transform' }}
              onClick={() => scrollToSection('community-preview')}
              className="w-full md:w-fit bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
              wrapClassName="w-full md:w-fit"
            />
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr_3fr_2fr] gap-8 max-w-4xl mx-auto">
            {HERO_STATS.map((items, idx) => (
              <QuickStats key={idx} {...items} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export interface HeroQuickStats {
  title: string;
  text: string;
  index?: number;
}

export const QuickStats = ({ title, text, index = 0 }: HeroQuickStats) => {
  return (
    <div
      className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg py-6 px-4 animate-scale-in"
      style={{ animationDelay: `${0.25 * index}s` }}>
      <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{title}</div>
      <div className="text-primary-foreground/90 font-medium">{text}</div>
    </div>
  );
};
