'use client';
import { GhostBtn } from '@/components/atoms/GhostBtn';
import { RegularForm } from '@/components/forms/RequestForms';
import { SocialBtnProps } from '@/components/layout/Footer';
import { CONTACT_CARDS, CONTACT_INFORMATION, SOCIALS } from '@/lib/constants/texts';
import { useSiteStore } from '@/lib/store/siteStore';
import { LucideIconComp } from '@/lib/types/general';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactPageContent = () => {
  const { siteLoading } = useSiteStore(state => state);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2">
            <RegularForm slug="contact_form" />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={siteLoading ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0 }}
            className="space-y-6">
            <div className="card-elegant py-6 px-4 md:px-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Office Information</h3>
              <div className="space-y-4 text-start">
                {CONTACT_CARDS.map((card, idx) => (
                  <ContactInfoCard key={idx} {...card} />
                ))}
              </div>
            </div>

            <div className="card-elegant py-6 px-4 md:px-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 text-sm">
                  {CONTACT_INFORMATION.officeHours.map((item, idx) => (
                    <OfficeHourCard key={idx} {...item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="card-elegant py-6 px-4 md:px-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {SOCIALS.map((item, idx) => (
                  <SocialBtn key={idx} {...item} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export interface ContactCardProps {
  LucideIcon: LucideIconComp;
  title: string;
  href?: string;
  texts: ContactCardTextProps[];
}

const ContactInfoCard = ({ LucideIcon, title, href, texts }: ContactCardProps) => {
  return (
    <div className="flex items-start gap-3">
      <LucideIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-medium text-foreground">{title}</p>
        <GhostBtn
          {...(href ? { linkProps: { href, target: '_blank', rel: 'noreferrer noopener' } } : {})}
          className={`w-full text-muted-foreground ${href ? 'hover:text-primary/60' : ''}`}
          wrapClassName="w-full">
          <div className="w-full grid gap-3 text-start text-sm">
            {texts.map((item, idx) => (
              <ContactCardText
                key={idx}
                {...item}
                className={`${item.link ? 'hover:text-primary/60' : ''}`}
              />
            ))}
          </div>
        </GhostBtn>
      </div>
    </div>
  );
};

export interface ContactCardTextProps {
  text: string;
  link?: string;
  className?: string;
}

export function ContactCardText({ text, link, className }: ContactCardTextProps) {
  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={cn('no-underline text-current cursor-pointer', className)}>
          <span>{text}</span>
        </a>
      ) : (
        <span>{text}</span>
      )}
    </>
  );
}

export interface OfficeHours {
  days: string;
  time: string;
}

const OfficeHourCard = ({ days, time }: OfficeHours) => {
  return (
    <p className="text-foreground">
      <span className="font-medium">{days}:</span>
      <br />
      <span className="text-muted-foreground">{time}</span>
    </p>
  );
};

export function SocialBtn({ Icon, href, label }: SocialBtnProps) {
  return (
    <GhostBtn
      className="size-10 bg-primary/10 grid place-items-center rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all transition-smooth"
      linkProps={{ href, target: '_blank', rel: 'noopener noreferrer' }}
      aria-label={label}>
      <i className="text-xl">
        <Icon />
      </i>
    </GhostBtn>
  );
}
