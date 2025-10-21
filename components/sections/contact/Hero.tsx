'use client';
import { useSiteStore } from '@/lib/store/siteStore';
import { motion } from 'motion/react';

export const ContactHero = () => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in">
              Have questions, concerns, or need assistance? We&apos;re here to help and serve you.
            </p>
          </div>
          <div className="animate-scale-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/senator-fadeyi-4.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla - Ready to serve and assist you"
              className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
