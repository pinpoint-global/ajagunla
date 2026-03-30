'use client';

import { createContext, useContext } from 'react';

import type { SiteBranding } from '@/lib/types/site-branding';

const defaultBranding: SiteBranding = {
  siteName: 'Senator Olubiyi Fadeyi-Ajagunla',
  logoAlt: 'Senator Olubiyi Fadeyi-Ajagunla logo',
  useLocalDesktopLogo: true,
  useLocalMobileLogo: true,
  useLocalLoaderLogo: true,
};

const SiteBrandingContext = createContext<SiteBranding>(defaultBranding);

export const SiteBrandingProvider = SiteBrandingContext.Provider;

export function useSiteBranding() {
  return useContext(SiteBrandingContext);
}
