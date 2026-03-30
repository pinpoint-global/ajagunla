/* eslint-disable @next/next/no-img-element */
'use client';

import { debounce } from '@/lib/utils/general';
import { useEffect, useState } from 'react';
import { Logo } from '../icons';
import { motion } from 'motion/react';
import { useSiteStore } from '@/lib/store/siteStore';
import { useSiteBranding } from '@/lib/contexts/site-branding';
import { useCmsDebugEnabled } from '@/lib/hooks/useCmsDebugEnabled';

const BASE_LOAD_TIME = 2000; // ms
const TRANSITION_DURATION = 1; // s

export const LoadAnimationScreen = () => {
  const {
    siteLoading,
    actions: { setSiteLoading },
  } = useSiteStore(state => state);
  const branding = useSiteBranding();
  const cmsDebugEnabled = useCmsDebugEnabled();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [loaderLogoErrored, setLoaderLogoErrored] = useState(false);

  useEffect(() => {
    const handleLoad = async () => {
      await debounce(BASE_LOAD_TIME);

      setPageLoaded(true);
    };

    // If already loaded (from cache)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {siteLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={pageLoaded ? { opacity: 0 } : {}}
          transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
          onAnimationComplete={() => setSiteLoading(false)}
          className="w-full h-screen bg-white grid place-items-center fixed inset-0 z-[99]">
          <div
            className={`transition-all duration-1500 ease-linear ${!pageLoaded ? '' : 'opacity-0'}`}>
            <div className="relative w-24 h-24 flex items-center justify-center">
              {!branding.useLocalLoaderLogo && branding.loaderLogoUrl && !loaderLogoErrored ? (
                <img
                  src={branding.loaderLogoUrl}
                  alt={branding.logoAlt}
                  width={96}
                  height={96}
                  className={`w-full h-full object-contain ${!pageLoaded ? 'animate-loader' : ''}`}
                  onError={() => setLoaderLogoErrored(true)}
                />
              ) : (
                <i className={`text-[6rem] text-primary leading-none`}>
                  <Logo className={`${!pageLoaded ? 'animate-loader' : ''}`} />
                </i>
              )}

              {cmsDebugEnabled && (
                <span className="absolute -top-2 left-0 z-10 text-[10px] leading-none px-2 py-0.5 rounded bg-primary text-primary-foreground border border-border">
                  {!branding.useLocalLoaderLogo && branding.loaderLogoUrl && !loaderLogoErrored
                    ? 'CMS'
                    : 'LOCAL'}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
