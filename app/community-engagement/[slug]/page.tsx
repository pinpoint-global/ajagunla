import { Metadata } from 'next';
import {
  generatePageMetadata,
  getAllInitiativeSlugs,
  getInitiativeBySlug,
  getCommunityEngagementUrl,
} from '@/lib/utils/general';
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
  const slugs = getAllInitiativeSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

  if (!initiative) {
    return {
      title: 'Community Initiative Not Found',
      description: "The community initiative you're looking for doesn't exist.",
    };
  }

  return generatePageMetadata(
    `${initiative.title} | Community Engagement`,
    initiative.description,
    [
      ...(initiative.keywords || []),
      initiative.title.toLowerCase(),
      'community engagement',
      'ajagunla foundation',
      'osun central',
    ],
    {
      url: getCommunityEngagementUrl(slug),
    }
  );
}

export default async function CommunityInitiativePage({ params }: Props) {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

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
