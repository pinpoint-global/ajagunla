'use client';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LEGISLATIVE_HIGHLIGHTS } from '@/lib/constants/texts';
import { useIsMobile } from '@/lib/hooks/use-mobile';
import { LucideIconComp } from '@/lib/types/general';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const LegislativePreview = () => {
  const isMobile = useIsMobile();

  return (
    <section id="legislative-preview" className="section-padding bg-muted/30">
      <motion.div transition={{ delayChildren: 1.5 }} className="regular-container">
        <SectionHeading
          title="Legislative Achievements"
          text="Delivering results through strategic legislation and community-focused initiatives"
        />

        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/legislative-work.webp"
            alt="Senator Fadeyi-Ajagunla at legislative work"
            className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LEGISLATIVE_HIGHLIGHTS.map((item, idx) => (
            <LegislativeHighlightCard key={idx} index={idx} {...item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
          className="text-center">
          <RegularBtn
            variant="hero"
            size="lg"
            linkProps={{ href: '/legislative-work' }}
            text="View All Legislative Work"
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export interface LegislativeHighlightProps {
  index?: number;
  Icon: LucideIconComp;
  title: string;
  description: string;
}

const LegislativeHighlightCard = ({ Icon, title, description }: LegislativeHighlightProps) => {
  return (
    <div className="card-elegant p-6 animate-scale-in">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
