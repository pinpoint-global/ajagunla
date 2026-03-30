'use client';
import { useSiteStore } from '@/lib/store/siteStore';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';

export interface SharedHeroProps {
  heading: string;
  text: string;
  /** imageHeight is a number in pixels */
  imageHeight?: number;
  image: { src: string; alt: string; className?: string };
  widthWrapperClass?: string;
  hideHeightClass?: boolean;
}

export const SharedHero = ({
  heading,
  text,
  image,
  imageHeight = 500,
  widthWrapperClass,
  hideHeightClass,
}: SharedHeroProps) => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="regular-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold mb-6">
              {heading}
            </h1>
            <p className="text-xl text-primary-foreground/90">{text}</p>
          </div>
          <div className="">
            <div
              className={cn(`w-full shadow-elegant relative`, widthWrapperClass)}
              style={{ ...(!hideHeightClass && { height: `${imageHeight}px` }) }}>
              <Image
                src={image.src}
                alt={image.alt}
                className={cn('w-full h-full object-cover rounded-lg', image.className)}
                fill
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
