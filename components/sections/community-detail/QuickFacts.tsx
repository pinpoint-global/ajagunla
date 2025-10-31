'use client';

import { MapPin, TrendingUp, Users } from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { CardGrid } from '@/components/general/Card';
import { SectionCard } from '@/components/general/Card';
import { CommunityInitiative } from '@/lib/types/community-initiative';

interface QuickFactsProps {
  initiative: CommunityInitiative;
}

export const QuickFacts = ({ initiative }: QuickFactsProps) => {
  const facts = [
    {
      icon: TrendingUp,
      label: 'Impact',
      value: initiative.impact,
    },
    {
      icon: Users,
      label: 'Beneficiaries',
      value: initiative.beneficiaries,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: initiative.location,
    },
  ];

  return (
    <SectionContainer background="muted">
      <CardGrid columns={{ base: 1, md: 3 }} className="max-w-6xl mx-auto">
        {facts.map((fact, index) => (
          <SectionCard
            key={fact.label}
            className="p-6 text-center h-full"
            wrapKey="quick-facts"
            index={index}>
            <fact.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <div className="text-sm text-muted-foreground mb-2">{fact.label}</div>
            <div className="font-semibold text-foreground">{fact.value}</div>
          </SectionCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};
