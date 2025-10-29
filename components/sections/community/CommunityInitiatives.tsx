'use client';
import { GhostBtn } from '@/components/atoms/GhostBtn';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { COMMUNITY_INITIATIVE_SUMMARIES } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';

export const CommunityInitiatives = () => {
  return (
    <section className="section-padding">
      <div className="regular-container">
        <SectionHeading title="Key Community Initiatives" className="mb-12" />
        <FadeInUpWrap amount={0} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_INITIATIVE_SUMMARIES.map((initiative, idx) => (
            <InitiativeCard key={idx} {...initiative} index={idx} />
          ))}
        </FadeInUpWrap>
      </div>
    </section>
  );
};

export interface CommunityInitiativeSummary {
  slug: string;
  LucideIcon: LucideIconComp;
  title: string;
  description: string;
}

const InitiativeCard = ({
  slug,
  LucideIcon,
  title,
  description,
  index,
}: CommunityInitiativeSummary & { index: number }) => {
  return (
    <GhostBtn
      linkProps={{ href: `/community-engagement/${slug}` }}
      className="w-full h-full card-elegant animate-fade-in-up hover:shadow-gold transition-shadow py-6 px-6"
      wrapClassName="h-full"
      style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="w-full h-full flex flex-col text-start">
        <LucideIcon className="w-10 h-10 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </GhostBtn>
  );
};
