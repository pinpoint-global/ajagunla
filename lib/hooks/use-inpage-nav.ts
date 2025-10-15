'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface UseInPageNavProps {
  href: string;
  trackElement?: boolean;
}

export const useInPageNav = ({ href, trackElement }: UseInPageNavProps) => {
  const [elementExists, setElementExists] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const targetElRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const inHomePage = useMemo(() => pathname === '/', [pathname]);

  useEffect(() => {
    const targetDescriptor = inHomePage && href.startsWith('/#') ? href.slice(2) : '';

    targetElRef.current = targetDescriptor ? document?.getElementById(targetDescriptor) : null;
    setElementExists(!!targetElRef.current);

    if (!trackElement) return;
    if (!targetElRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        // "rootMargin" shrinks the top and bottom of the viewport
        // Here: require the element to cover at least 60% of the screen
        rootMargin: `-40% 0px -40% 0px`, // top -40%, bottom -40%
        threshold: 0, // we only care about entering/exiting this zone
      }
    );

    observer.observe(targetElRef.current);

    return () => {
      observer.disconnect();
    };
  }, [href, trackElement, inHomePage]);

  return { elementExists, targetElRef, inHomePage, isActive };
};
