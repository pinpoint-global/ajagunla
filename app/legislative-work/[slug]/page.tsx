import { Metadata } from 'next';
import {
  generatePageMetadata,
  getAllProjectSlugs,
  getProjectBySlug,
  getLegislativeWorkUrl,
} from '@/lib/utils/general';
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
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Legislative Work Not Found',
      description: "The legislative work project you're looking for doesn't exist.",
    };
  }

  return generatePageMetadata(
    `${project.title} | Legislative Work`,
    project.description,
    [...(project.keywords || []), project.category, 'legislative work', 'senator', 'osun central'],
    {
      url: getLegislativeWorkUrl(slug),
    }
  );
}

export default async function LegislativeWorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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
