'use client';

import { GhostBtn } from '../atoms/GhostBtn';
import { LogoFull } from '../icons';
import {
  CONTACT_CARDS_FOR_FOOTER,
  CONTACT_INFORMATION,
  NAV_LINKS,
  SOCIALS,
} from '@/lib/constants/texts';
import { HeaderLinkProps } from './Header';
import { IconComp, LucideIconComp } from '@/lib/types/general';
import { ContactCardText, ContactCardTextProps, OfficeHours } from '../sections/contact/Content';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-10 md:pt-12 lg:pt-14">
      <div className="regular-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[0.9375rem] mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GhostBtn
                Icon={LogoFull}
                iconClass="text-secondary-foreground/80 text-3xl"
                linkProps={{ href: '/' }}
              />
            </div>
            <p className="text-secondary-foreground/80 text-[0.9375rem] leading-[1.6]">
              Senator Olubiyi Fadeyi-Ajagunla - Committed to community development, education, and
              empowerment. Serving the people of Osun Central Senatorial District.
            </p>
            <div className="w-full flex items-center gap-4">
              {SOCIALS.map((social, idx) => (
                <SocialBtn key={idx} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.filter(item => !item.showInHeaderOnly).map((item, idx) => (
                <FooterLink key={idx} {...item} />
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Contact</h3>
            <div className="space-y-5 text-secondary-foreground/60">
              {CONTACT_CARDS_FOR_FOOTER.map((item, idx) => (
                <FooterContactRow key={idx} {...item} />
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Office Hours</h3>
            <ul className="space-y-2 text-[0.9375rem] text-secondary-foreground/80">
              {CONTACT_INFORMATION.officeHours.map((item, idx) => (
                <OfficeHourRow key={idx} {...item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 py-6 flex flex-col md:flex-row justify-between items-center text-secondary-foreground/50">
          <p className="text-[0.9375rem]">
            &copy; {currentYear} Senator Olubiyi Fadeyi-Ajagunla. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a
              href="#"
              className="hover:text-secondary-foreground hover:underline transition-all duration-200">
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-secondary-foreground hover:underline transition-all duration-200">
              Terms of Service
            </a> */}
            <p className="flex items-center gap-1 text-[0.9375rem]">
              <span className="">Powered by</span>{' '}
              <a
                href="https://pinpoint.ng"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-secondary-foreground hover:underline transition-all duration-200">
                Pinpoint Global
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text, href = '#', footerOnlySuffix = '', afterClick }: HeaderLinkProps) => {
  return (
    <li className={``}>
      <GhostBtn
        className={`w-fit py-0`}
        wrapClassName={`w-fit`}
        {...(href && { linkProps: { href } })}
        onClick={() => {
          afterClick?.();
        }}>
        <div className="w-fit px-0 relative">
          <p
            className={`text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth`}>
            {text + footerOnlySuffix}
          </p>
          {/* <div className="hidden lg:block w-full max-w-0 group-hover:max-w-full h-[2px] bg-gradient-primary absolute -bottom-1 left-0 transition-all duration-500 ease-in" /> */}
        </div>
      </GhostBtn>
    </li>
  );
};

export interface FooterContactRowProps {
  LucideIcon?: LucideIconComp;
  Icon?: IconComp;
  href?: string;
  texts: ContactCardTextProps[];
}

const FooterContactRow = ({ LucideIcon, Icon, texts, href = '' }: FooterContactRowProps) => {
  return (
    <div className="flex items-start gap-2">
      {LucideIcon && <LucideIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />}
      {Icon && (
        <i className="text-base text-accent flex-none mt-0.5">
          <Icon />
        </i>
      )}
      <GhostBtn
        {...(href ? { linkProps: { href, target: '_blank', rel: 'noreferrer noopener' } } : {})}
        className={`text-secondary-foreground/70 ${href ? 'hover:text-secondary-foreground' : ''}`}
        wrapClassName="">
        <div className="grid gap-3 text-start">
          {texts.map((item, idx) => (
            <ContactCardText
              key={idx}
              {...item}
              className={`${item.link ? 'hover:text-secondary-foreground' : ''}`}
            />
          ))}
        </div>
      </GhostBtn>
    </div>
  );
};

export interface SocialBtnProps {
  Icon: IconComp;
  href: string;
  label: string;
}

export function SocialBtn({ Icon, href, label }: SocialBtnProps) {
  return (
    <GhostBtn
      className="size-10 bg-secondary-foreground/10 grid place-items-center rounded-full hover:bg-accent hover:text-accent-foreground transition-all transition-smooth"
      linkProps={{ href, target: '_blank', rel: 'noopener noreferrer' }}
      aria-label={label}>
      <i className="text-xl">
        <Icon />
      </i>
    </GhostBtn>
  );
}

const OfficeHourRow = ({ days, time }: OfficeHours) => {
  return (
    <li className="flex justify-between">
      <span>{days}:</span>
      <span className="font-medium">{time}</span>
    </li>
  );
};
