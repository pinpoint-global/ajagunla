import { Metadata } from 'next';
import { generatePageMetadata, getCommunityEngagementUrl } from '@/lib/utils/general';
import {
  getAllCommunityInitiativeSlugsAsync,
  getCommunityInitiativeBySlugAsync,
} from '@/lib/cms/community';
import { fetchCommunityInitiativeBySlug, getStrapiMediaUrl, unwrapList } from '@/lib/cms/strapi';
import { flattenSeoKeywords } from '@/lib/cms/strapi-normalize';
import { MainLayout } from '@/components/layout/MainLayout';
import { CommunityInitiativeNotFound } from '@/components/sections/community-detail/CommunityInitiativeNotFound';
import { CommunityInitiativeDetailHero } from '@/components/sections/community-detail/Hero';
import { QuickFacts } from '@/components/sections/community-detail/QuickFacts';
import { Overview } from '@/components/sections/community-detail/Overview';
import { Objectives } from '@/components/sections/community-detail/Objectives';
import { Achievements } from '@/components/sections/community-detail/Achievements';
import { HowToParticipate } from '@/components/sections/community-detail/HowToParticipate';
import { GetInvolved } from '@/components/sections/community-detail/GetInvolved';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllCommunityInitiativeSlugsAsync();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const raw = await fetchCommunityInitiativeBySlug(slug);
  const list = unwrapList<Record<string, unknown> & { seo_ogImage?: { url?: string } }>(raw);
  const doc = list[0];

  if (doc) {
    const title = String(doc.seo_metaTitle || doc.title || 'Community Initiative');
    const description = String(doc.seo_metaDescription || doc.description || '');
    const seoKw = flattenSeoKeywords(doc.seo_keywords) ?? [];
    const baseKw = flattenSeoKeywords(doc.keywords) ?? [];
    const canonical = doc.seo_canonicalUrl
      ? String(doc.seo_canonicalUrl)
      : getCommunityEngagementUrl(slug);
    const og = getStrapiMediaUrl(doc.seo_ogImage) || undefined;
    return generatePageMetadata(
      `${title} | Community Engagement`,
      description,
      [
        ...new Set([
          ...seoKw,
          ...baseKw,
          String(doc.title || '').toLowerCase(),
          'community engagement',
          'ajagunla foundation',
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
    title: 'Community Initiative Not Found',
    description: "The community initiative you're looking for doesn't exist.",
  };
}

export default async function CommunityInitiativePage({ params }: Props) {
  const { slug } = await params;
  const initiative = await getCommunityInitiativeBySlugAsync(slug);

  if (!initiative) {
    return (
      <MainLayout>
        <CommunityInitiativeNotFound />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <CommunityInitiativeDetailHero initiative={initiative} />
      <QuickFacts initiative={initiative} />
      <Overview initiative={initiative} />
      <Objectives initiative={initiative} />
      <Achievements initiative={initiative} />
      <HowToParticipate initiative={initiative} />
      <GetInvolved />
    </MainLayout>
  );
}
