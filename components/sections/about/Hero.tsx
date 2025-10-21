'use client';
import { useSiteStore } from '@/lib/store/siteStore';
import { motion } from 'motion/react';

export const AboutHero = () => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="regular-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={siteLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold mb-6">
              About Senator Fadeyi-Ajagunla
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-6">
              A dedicated public servant, accomplished businessman, and committed philanthropist
              serving the people of Osun Central Senatorial District.
            </p>
          </div>
          <div className="animate-scale-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/senator-fadeyi.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla"
              className="rounded-lg shadow-elegant w-[450px] max-w-full mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
