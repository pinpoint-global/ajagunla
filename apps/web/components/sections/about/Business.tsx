'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { BUSINESSES } from '@/lib/constants/texts';
import { useSiteStore } from '@/lib/store/siteStore';
import { LucideIconName } from '@/components/general/DynamicIcon';
import { motion } from 'motion/react';

export interface BusinessAndPhilanthropyProps {
  businesses?: BusinessProps[];
}

export const BusinessAndPhilanthropy = ({
  businesses = BUSINESSES,
}: BusinessAndPhilanthropyProps) => {
  return (
    <section className="section-padding">
      <div className="regular-container">
        <div className="max-w-6xl grid md:grid-cols-2 gap-16 mx-auto">
          {businesses.map((item, idx) => (
            <BusinessBlock key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface BusinessProps {
  iconName: LucideIconName;
  title: string;
  paragraphs: string[];
}

const BusinessBlock = ({ iconName, title, paragraphs }: BusinessProps) => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <div className="animate-fade-in">
      <SectionHeading className="text-start mb-6" iconName={iconName} title={title} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4 text-foreground">
        {paragraphs.map((text, idx) => (
          <p key={idx} className="">
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
};
