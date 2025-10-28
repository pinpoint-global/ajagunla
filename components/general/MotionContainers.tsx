'use client';
import { useSiteStore } from '@/lib/store/siteStore';
import { PropsWithChildren } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const FadeInUpWrap = ({
  children,
  className,
  amount = 0.3,
}: PropsWithChildren<{
  className?: string;
  /**
   * amount is a number between 0 and 1
   *
   * It represents how much of the element should be in view before the animation starts
   */
  amount?: number;
}>) => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount }}
      className={cn('', className)}>
      {children}
    </motion.div>
  );
};
