'use client';

import { ComponentProps, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LogoFull } from '../icons';
import { RegularBtn } from '../atoms/RegularBtn';
import { GhostBtn } from '../atoms/GhostBtn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants/texts';

export type HeaderProps = ComponentProps<'section'>;

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn('sticky top-0 z-50 bg-card shadow-soft border-b border-border', className)}
      {...props}>
      <div className="regular-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <GhostBtn linkProps={{ href: '/' }}>
              <div className="flex items-center justify-between gap-2">
                <i className="text-[1.5rem] lg:text-[2.5rem]">
                  <LogoFull />
                </i>
                <div className="grid gap-1 lg:gap-2 text-start">
                  <span className="text-[0.8125rem] md:text-[1.125rem] leading-none font-semibold text-foreground">
                    Sen. Olubiyi Fadeyi-Ajagunla
                  </span>
                  <span className="text-[0.6875rem] lg:text-[0.75rem] leading-none text-muted-foreground">
                    Osun Central Senatorial District
                  </span>
                </div>
              </div>
            </GhostBtn>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="">
              <ul className="list-none hidden lg:flex items-center space-x-8">
                {NAV_LINKS.filter(s => !s.showInFooterOnly).map((item, idx) => (
                  <HeaderLink key={idx} {...item} activePath={pathname} />
                ))}
              </ul>
            </nav>

            {/* <RegularBtn
              size="lg"
              linkProps={{ href: '/contact' }}
              text="Order Now"
              className="gradient-accent"
            /> */}
          </div>

          {/* Mobile Menu Button */}
          <GhostBtn
            className="lg:hidden"
            wrapClassName="lg:hidden"
            iconClass={`size-6 ${isMenuOpen ? 'text-destructive' : ''}`}
            LucideIcon={isMenuOpen ? X : Menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden h-auto grid ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-all duration-500 ease-out animate-fade-in overflow-hidden`}>
          <nav className="overflow-hidden">
            <div className="pb-4">
              <ul className="list-none grid px-0 pb-6 space-y-2">
                {NAV_LINKS.filter(s => !s.showInFooterOnly).map((item, idx) => (
                  <MobileHeaderLink
                    key={idx}
                    {...item}
                    afterClick={() => setIsMenuOpen(false)}
                    activePath={pathname}
                  />
                ))}
              </ul>
              <div className="w-full px-6">
                {/* <RegularBtn
                  size="lg"
                  linkProps={{ href: '/contact' }}
                  text="Order Now"
                  className="gradient-accent w-full"
                /> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export type BaseHeaderLinkProps = {
  text: string;
  href?: string;
  basePath?: string;
  children?: HeaderDropdownLinkProps[];
  footerOnlySuffix?: string;
  showInHeaderOnly?: boolean;
  showInFooterOnly?: boolean;
  afterClick?: () => void;
  activePath?: string;
  dropdownOpen?: boolean;
  setDropdownOpen?: Dispatch<SetStateAction<boolean>>;
};

export type HeaderLinkProps =
  | {
      text: string;
      href: string;
      basePath?: never;
      children?: never;
      footerOnlySuffix?: string;
      showInHeaderOnly?: boolean;
      showInFooterOnly?: boolean;
      afterClick?: () => void;
      activePath?: string;
      dropdownOpen?: boolean;
      setDropdownOpen?: Dispatch<SetStateAction<boolean>>;
    }
  | {
      text: string;
      href?: never;
      basePath: string;
      children: HeaderDropdownLinkProps[];
      footerOnlySuffix?: never;
      showInHeaderOnly: true;
      showInFooterOnly?: never;
      afterClick?: () => void;
      activePath?: string;
      dropdownOpen?: boolean;
      setDropdownOpen?: Dispatch<SetStateAction<boolean>>;
    };

export interface HeaderDropdownLinkProps {
  text: string;
  href: string;
}

const HeaderLink = ({
  text,
  href,
  children,
  afterClick,
  activePath,
  basePath,
  dropdownOpen,
  setDropdownOpen,
}: HeaderLinkProps) => {
  return (
    <li className={``}>
      {children ? (
        <div className="relative group">
          <GhostBtn
            className={`w-fit flex items-center font-medium transition-smooth hover:text-primary ${activePath?.startsWith(basePath) ? 'text-primary' : 'text-foreground'}`}
            onMouseEnter={() => setDropdownOpen?.(true)}
            onMouseLeave={() => setDropdownOpen?.(false)}>
            <span>{text}</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </GhostBtn>

          {dropdownOpen && (
            <div
              className="absolute top-full left-0 mt-0 w-48 bg-card rounded-lg shadow-medium border border-border py-2 animate-fade-in"
              onMouseEnter={() => setDropdownOpen?.(true)}
              onMouseLeave={() => setDropdownOpen?.(false)}>
              {children.map((link, idx) => (
                <Link
                  key={`link-${text}-${idx}`}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-secondary transition-smooth">
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <GhostBtn
          className={`w-fit py-0`}
          wrapClassName={`w-fit`}
          {...(href && { linkProps: { href } })}
          onClick={() => {
            afterClick?.();
          }}>
          <div className="w-full lg:w-fit px-0 relative">
            <p
              className={`transition-smooth hover:text-primary ${
                activePath === href ? 'font-semibold text-primary' : 'font-medium text-foreground'
              }`}>
              {text}
            </p>
            {/* <div className="hidden lg:block w-full max-w-0 group-hover:max-w-full h-[2px] bg-gradient-primary absolute -bottom-1 left-0 transition-all duration-500 ease-in" /> */}
          </div>
        </GhostBtn>
      )}
    </li>
  );
};

const MobileHeaderLink = ({ text, href, children, afterClick, activePath }: HeaderLinkProps) => {
  return (
    <li className={``}>
      {children ? (
        <div className="flex flex-col space-y-2">
          <span className="font-medium text-foreground py-2">{text}</span>
          {children.map(({ href, text }, idx) => (
            <RegularBtn
              key={`mob-link-${text}-${idx}`}
              variant="none"
              size="icon"
              linkProps={{ href }}
              text={text}
              className={`w-full justify-start px-4 py-2 ${activePath === href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'} hover:bg-muted`}
              wrapClassName="w-full"
              onClick={() => afterClick?.()}
            />
          ))}
        </div>
      ) : (
        <RegularBtn
          variant="none"
          size="icon"
          linkProps={{ href }}
          text={text}
          className={`w-full justify-start px-4 py-2 ${activePath === href ? 'bg-primary text-primary-foreground' : 'text-foreground'} hover:bg-muted`}
          wrapClassName="w-full"
          onClick={() => afterClick?.()}
        />
      )}
    </li>
  );
};
