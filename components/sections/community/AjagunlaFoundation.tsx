'use client';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { AJAGUNLA_FOUNDATION_ACHIEVEMENTS } from '@/lib/constants/texts';
import { Heart } from 'lucide-react';

export const AjagunlaFoundation = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="regular-container">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            Icon={Heart}
            title="The Ajagunla Foundation"
            text="Founded by Senator Fadeyi-Ajagunla, the Ajagunla Foundation is a non-profit
            organization dedicated to community development, education, and empowerment
            initiatives. Through the foundation, we have touched thousands of lives across
            Osun State and beyond."
          />

          <FadeInUpWrap amount={0.15} className="grid md:grid-cols-3 gap-6 mt-12">
            {AJAGUNLA_FOUNDATION_ACHIEVEMENTS.map((item, idx) => (
              <FoundationAchievementCard key={idx} {...item} />
            ))}
          </FadeInUpWrap>
        </div>
      </div>
    </section>
  );
};

export interface FoundationAchievement {
  value: number;
  text: string;
}

const FoundationAchievementCard = ({ value, text }: FoundationAchievement) => {
  return (
    <div className="card-elegant py-6 px-6">
      <div className="text-4xl font-bold text-primary mb-2">
        <span className="">{value}</span>+
      </div>
      <div className="text-muted-foreground">{text}</div>
    </div>
  );
};
