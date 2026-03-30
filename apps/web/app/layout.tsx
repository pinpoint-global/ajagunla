import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SEO_DETAILS } from '@/lib/constants/texts';
import { Providers } from '@/components/Providers';
import { ScrollRestorationHandler } from '@/components/general/ScrollRestorationHandler';
import { omit } from 'lodash';
import { LoadAnimationScreenMount } from '@/components/general/LoadAnimationScreenMount';
import { InitialLoadShell } from '@/components/general/InitialLoadShell';
import { getStrapiMediaUrl } from '@/lib/cms/strapi';
import {
  getSiteGlobalDocAsync,
  mapSiteBranding,
  mapSiteGlobalContent,
} from '@/lib/cms/site-global';
import { SiteBrandingProvider } from '@/lib/contexts/site-branding';
import { SiteGlobalContentProvider } from '@/lib/contexts/site-global-content';

export async function generateMetadata(): Promise<Metadata> {
  const doc = await getSiteGlobalDocAsync();
  const ogFromCms = doc ? getStrapiMediaUrl(doc.seo_ogImage) : undefined;
  const image = ogFromCms || SEO_DETAILS.image;
  const titleDefault = doc?.seo_titleDefault
    ? String(doc.seo_titleDefault)
    : SEO_DETAILS.title.default;
  const titleTemplate = doc?.seo_titleTemplate
    ? String(doc.seo_titleTemplate)
    : SEO_DETAILS.title.template;
  const description = doc?.seo_description ? String(doc.seo_description) : SEO_DETAILS.description;
  const ogDesc = doc?.seo_ogDesc ? String(doc.seo_ogDesc) : SEO_DETAILS.ogDesc;
  const siteUrl = doc?.seo_siteUrl ? String(doc.seo_siteUrl) : SEO_DETAILS.metadataBase.toString();

  return {
    ...omit(SEO_DETAILS, ['image', 'ogDesc']),
    title: { default: titleDefault, template: titleTemplate },
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: { default: titleDefault, template: titleTemplate },
      description: ogDesc,
      type: 'website',
      url: siteUrl,
      siteName: titleDefault,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@TheLonerider20',
      images: image,
    },
  };
}

/** Render on every request so CMS edits show without ISR windows. */
export const dynamic = 'force-dynamic';

/** Ensure no Data Cache / full-route caching of CMS fetches in this tree. */
export const fetchCache = 'force-no-store';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'only light',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const doc = await getSiteGlobalDocAsync();
  const branding = mapSiteBranding(doc);
  const siteGlobalContent = mapSiteGlobalContent(doc);

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <InitialLoadShell />
        <SiteBrandingProvider value={branding}>
          <SiteGlobalContentProvider value={siteGlobalContent}>
            <ScrollRestorationHandler />
            <LoadAnimationScreenMount />
            <Providers>{children}</Providers>
          </SiteGlobalContentProvider>
        </SiteBrandingProvider>
      </body>
    </html>
  );
}
