'use client';

import { CheckCircle2 } from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { CardGrid } from '@/components/general/Card';
import { SectionCard } from '@/components/general/Card';
import { LegislativeWork } from '@/lib/types/legislative-work';

interface ObjectivesProps {
  project: LegislativeWork;
}

export const Objectives = ({ project }: ObjectivesProps) => {
  return (
    <SectionContainer background="muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Key Objectives" className="text-start mb-8" />

        <CardGrid columns={{ base: 1, md: 2 }}>
          {project.objectives.map((objective, index) => (
            <SectionCard key={index} className="p-4" wrapKey="objectives" index={index}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{objective}</p>
              </div>
            </SectionCard>
          ))}
        </CardGrid>
      </div>
    </SectionContainer>
  );
};
