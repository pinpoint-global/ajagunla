'use client';

import { Award } from 'lucide-react';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { CardGrid } from '@/components/general/Card';
import { SectionCard } from '@/components/general/Card';
import { CommunityInitiative } from '@/lib/types/community-initiative';

interface AchievementsProps {
  initiative: CommunityInitiative;
}

export const Achievements = ({ initiative }: AchievementsProps) => {
  return (
    <SectionContainer>
      <div className="max-w-6xl mx-auto">
        <SectionHeading Icon={Award} title="Achievements" className="text-start mb-8" />

        <CardGrid columns={{ base: 1, md: 2 }}>
          {initiative.achievements.map((achievement, index) => (
            <SectionCard key={index} className="p-4" wrapKey="achievements" index={index}>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{achievement}</p>
              </div>
            </SectionCard>
          ))}
        </CardGrid>
      </div>
    </SectionContainer>
  );
};
