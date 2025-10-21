'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { BIOGRAPHY_TEXTS } from '@/lib/constants/texts';
import { useSiteStore } from '@/lib/store/siteStore';
import { motion } from 'motion/react';

export const Biography = () => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <section className="section-padding">
      <div className="regular-container">
        <SectionHeading title="Biography" className="mb-10" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="prose prose-lg max-w-none space-y-8 text-base text-foreground">
            {BIOGRAPHY_TEXTS.map((text, idx) => (
              <motion.p key={idx} className="">
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
