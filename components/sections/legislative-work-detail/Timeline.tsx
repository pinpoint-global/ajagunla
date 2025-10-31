'use client';

import { Calendar } from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { SectionCard } from '@/components/general/Card';
import { LegislativeWork } from '@/lib/types/legislative-work';
import { cn } from '@/lib/utils';

interface TimelineProps {
  project: LegislativeWork;
}

export const Timeline = ({ project }: TimelineProps) => {
  const getStatusClasses = (status: string) => {
    if (status === 'Completed') {
      return 'bg-primary/10 text-primary';
    }
    if (status === 'In Progress' || status === 'Active' || status === 'Recurring') {
      return 'bg-accent/10 text-accent';
    }
    return 'bg-muted text-muted-foreground';
  };

  return (
    <SectionContainer>
      <div className="max-w-6xl mx-auto">
        <SectionHeading Icon={Calendar} title="Project Timeline" className="text-start mb-8" />

        <div className="space-y-4">
          {project.timeline.map((phase, index) => (
            <SectionCard key={index} className="p-6" wrapKey="timeline" index={index}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{phase.phase}</h3>
                  <div className="text-sm text-muted-foreground">{phase.date}</div>
                </div>
                <div
                  className={cn(
                    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                    getStatusClasses(phase.status)
                  )}>
                  {phase.status}
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
