'use client';

import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { EDUCATION } from '@/lib/constants/texts';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="regular-container">
        <SectionHeading Icon={GraduationCap} title="Education & Training" />

        <FadeInUpWrap
          amount={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {EDUCATION.map((item, idx) => (
            <EducationCard key={idx} {...item} />
          ))}
        </FadeInUpWrap>
      </div>
    </section>
  );
};

export interface EducationProps {
  degree: string;
  course: string;
  institution: string;
}

const EducationCard = ({ degree, course, institution }: EducationProps) => {
  return (
    <div className="card-elegant p-6">
      <h3 className="text-lg font-semibold text-foreground mb-3">{degree}</h3>
      <p className="text-muted-foreground mb-2">{course}</p>
      <p className="text-sm text-primary font-medium">{institution}</p>
    </div>
  );
};
