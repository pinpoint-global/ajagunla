'use client';

import * as LucideIcons from 'lucide-react';
import { SectionCard, CardGrid } from '@/components/general/Card';
import { FadeInUpCard } from '@/components/general/MotionContainers';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { getCommunityEngagementUrl } from '@/lib/utils/general';
import { COMMUNITY_INITIATIVE_SUMMARIES } from '@/lib/constants/texts';
import { CommunityInitiativeSummary } from '@/lib/types/community-initiative';
import { LucideIconComp } from '@/lib/types/general';

export const CommunityInitiatives = () => {
  return (
    <SectionContainer>
      <SectionHeading title="Key Community Initiatives" className="mb-12" />
      <CardGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {COMMUNITY_INITIATIVE_SUMMARIES.map((initiative, idx) => (
          <FadeInUpCard key={idx} index={idx} amount={0}>
            <InitiativeCard {...initiative} />
          </FadeInUpCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

const InitiativeCard = ({ slug, lucideIcon, title, description }: CommunityInitiativeSummary) => {
  const LucideIcon = (LucideIcons[lucideIcon] as LucideIconComp) || LucideIcons['AlertTriangle'];

  return (
    <SectionCard
      href={getCommunityEngagementUrl(slug)}
      className="py-6 px-6 h-full flex flex-col text-start">
      <LucideIcon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-base text-muted-foreground">{description}</p>
    </SectionCard>
  );
};
