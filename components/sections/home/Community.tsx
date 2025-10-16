'use client';
import { ArrowRight } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LucideIconComp } from '@/lib/types/general';
import { COMMUNITY_SUMMARIES } from '@/lib/constants/texts';
import { motion } from 'motion/react';

export const CommunityPreview = () => {
  return (
    <section id="community-preview" className="section-padding">
      <motion.div className="regular-container">
        <SectionHeading
          title="Community Engagement"
          text="Building stronger communities through the Ajagunla Foundation and active engagement"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="animate-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/community-engagement.webp"
              alt="Community Engagement"
              className="w-full h-[400px] object-cover rounded-lg shadow-elegant"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 animate-fade-in">
            {COMMUNITY_SUMMARIES.map((item, idx) => (
              <CommunityEngagementCard key={idx} {...item} index={idx} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
          className="text-center">
          <RegularBtn
            variant="hero"
            size="lg"
            linkProps={{ href: '/community' }}
            text="Explore Community Initiatives"
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export interface CommunityEngagementProps {
  index?: number;
  Icon: LucideIconComp;
  title: string;
  description: string;
}

const CommunityEngagementCard = ({
  index = 0,
  Icon,
  title,
  description,
}: CommunityEngagementProps) => {
  return (
    <div
      style={{ animationDelay: `${index * 0.25}s` }}
      className="max-w-xl flex items-start gap-4 animate-fade-in">
      <Icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
