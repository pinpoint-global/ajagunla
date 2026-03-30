import { Metadata } from 'next';
import { generatePageMetadata, getLegislativeWorkUrl } from '@/lib/utils/general';
import {
  getAllLegislativeSlugsAsync,
  getLegislativeProjectBySlugAsync,
} from '@/lib/cms/legislative';
import { fetchLegislativeProjectBySlug, getStrapiMediaUrl, unwrapList } from '@/lib/cms/strapi';
import { flattenSeoKeywords } from '@/lib/cms/strapi-normalize';
import { MainLayout } from '@/components/layout/MainLayout';
import { LegislativeWorkNotFound } from '@/components/sections/legislative-work-detail/LegislativeWorkNotFound';
import { LegislativeWorkDetailHero } from '@/components/sections/legislative-work-detail/Hero';
import { QuickFacts } from '@/components/sections/legislative-work-detail/QuickFacts';
import { Overview } from '@/components/sections/legislative-work-detail/Overview';
import { Objectives } from '@/components/sections/legislative-work-detail/Objectives';
import { Timeline } from '@/components/sections/legislative-work-detail/Timeline';
import { GetInvolved } from '@/components/sections/legislative-work-detail/GetInvolved';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllLegislativeSlugsAsync();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const raw = await fetchLegislativeProjectBySlug(slug);
  const list = unwrapList<Record<string, unknown> & { seo_ogImage?: { url?: string } }>(raw);
  const doc = list[0];

  if (doc) {
    const title = String(doc.seo_metaTitle || doc.title || 'Legislative Work');
    const description = String(doc.seo_metaDescription || doc.description || '');
    const seoKw = flattenSeoKeywords(doc.seo_keywords) ?? [];
    const baseKw = flattenSeoKeywords(doc.keywords) ?? [];
    const canonical = doc.seo_canonicalUrl
      ? String(doc.seo_canonicalUrl)
      : getLegislativeWorkUrl(slug);
    const og = getStrapiMediaUrl(doc.seo_ogImage) || undefined;
    return generatePageMetadata(
      `${title} | Legislative Work`,
      description,
      [
        ...new Set([
          ...seoKw,
          ...baseKw,
          String(doc.category || ''),
          'legislative work',
          'senator',
          'osun central',
        ]),
      ],
      {
        url: canonical,
        image: og,
      }
    );
  }

  return {
    title: 'Legislative Work Not Found',
    description: "The legislative work project you're looking for doesn't exist.",
  };
}

export default async function LegislativeWorkPage({ params }: Props) {
  const { slug } = await params;
  const project = await getLegislativeProjectBySlugAsync(slug);

  if (!project) {
    return (
      <MainLayout>
        <LegislativeWorkNotFound />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <LegislativeWorkDetailHero project={project} />
      <QuickFacts project={project} />
      <Overview project={project} />
      <Objectives project={project} />
      <Timeline project={project} />
      <GetInvolved />
    </MainLayout>
  );
}
