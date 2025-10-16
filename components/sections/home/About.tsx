'use client';
import { ArrowRight } from 'lucide-react';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { LucideIconComp } from '@/lib/types/general';
import { ABOUT_SUMMARIES } from '@/lib/constants/texts';
import { SectionHeading } from '@/components/general/SectionHeading';
import { motion } from 'motion/react';
import { useSiteStore } from '@/lib/store/siteStore';

export const AboutPreview = () => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <section id="about-preview" className="section-padding">
      <motion.div transition={{ delayChildren: 1.5 }} className="regular-container">
        <SectionHeading
          title="About Senator Fadeyi-Ajagunla"
          text="A dedicated public servant, accomplished businessman, and committed philanthropist"
        />

        <div className="h-fit grid md:grid-cols-2 lg:items-stretch gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={siteLoading ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-xl h-[500px] sm:h-[550px] md:h-full lg:h-[550px] justify-self-center md:justify-self-end relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/senator-fadeyi.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla - Dedicated public servant and philanthropist"
              className="w-full h-full absolute inset-0 object-cover lg:object-[top_center] rounded-lg shadow-elegant"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-full grid items-center">
            <div className="lg:h-fit grid gap-6 justify-items-center md:justify-items-start">
              {ABOUT_SUMMARIES.map((item, idx) => (
                <AboutSummaryCard key={idx} {...item} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
          className="text-center">
          <RegularBtn
            variant="hero"
            size="lg"
            linkProps={{ href: '/about' }}
            text="Learn More About the Senator"
            RightIcon={ArrowRight}
            rightIconProps={{ className: 'group-hover:translate-x-1 transition-transform' }}
            className="group"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export interface AboutSummary {
  Icon: LucideIconComp;
  title: string;
  text: string;
  index?: number;
}

const AboutSummaryCard = ({ Icon, title, text }: AboutSummary) => {
  return (
    <div className="max-w-xl h-fit card-elegant p-6">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};
