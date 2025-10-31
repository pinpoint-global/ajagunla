'use client';

import { SectionCard, CardGrid } from '@/components/general/Card';
import { FadeInUpCard } from '@/components/general/MotionContainers';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { EDUCATION } from '@/lib/constants/texts';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <SectionContainer background="muted">
      <SectionHeading Icon={GraduationCap} title="Education & Training" />

      <CardGrid columns={{ base: 1, md: 2, lg: 3 }} className="max-w-5xl mx-auto">
        {EDUCATION.map((item, idx) => (
          <FadeInUpCard key={idx} index={idx} delayMultiplier={0.1}>
            <EducationCard {...item} />
          </FadeInUpCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export interface EducationProps {
  degree: string;
  course: string;
  institution: string;
}

const EducationCard = ({ degree, course, institution }: EducationProps) => {
  return (
    <SectionCard className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-3">{degree}</h3>
      <p className="text-muted-foreground mb-2">{course}</p>
      <p className="text-sm text-primary font-medium">{institution}</p>
    </SectionCard>
  );
};
