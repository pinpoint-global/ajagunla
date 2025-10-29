'use client';

import { GhostBtn } from '@/components/atoms/GhostBtn';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import {
  LEGISLATIVE_PROJECT_CATEGORIES,
  LEGISLATIVE_PROJECTS,
  PROJECT_CATEGORY_BUTTONS,
} from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';
import { capitalize } from 'lodash';
import { Building2, GraduationCap, TrendingUp, Users, Wifi } from 'lucide-react';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useMemo } from 'react';

export const LegislativeProjects = () => {
  const [category, setCategory] = useQueryState(
    'category',
    parseAsStringLiteral(LEGISLATIVE_PROJECT_CATEGORIES).withDefault('all')
  );

  const { filteredProjects, projectsWrapKey } = useMemo(() => {
    const filteredProjects =
      category === 'all'
        ? LEGISLATIVE_PROJECTS
        : LEGISLATIVE_PROJECTS.filter(p => p.category === category);

    const projectsWrapKey = Date.now();

    return { filteredProjects, projectsWrapKey };
  }, [category]);

  return (
    <section className="section-padding">
      <div className="regular-container">
        <SectionHeading title="Key Initiatives & Projects" className="mb-12" />

        {/* Category Filter */}
        <FadeInUpWrap className="flex flex-wrap justify-center gap-3 mb-12">
          {PROJECT_CATEGORY_BUTTONS.map(item => (
            <ProjectCategoryBtn
              key={item.value}
              {...item}
              isActive={item.value === category}
              setCategory={setCategory}
            />
          ))}
        </FadeInUpWrap>

        {/* Projects Grid */}
        <FadeInUpWrap
          wrapKey={projectsWrapKey}
          amount={0}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectSummaryCard key={project.slug} {...project} index={idx} />
          ))}
        </FadeInUpWrap>
      </div>
    </section>
  );
};

export interface ProjectCategoryButton {
  LucideIcon: LucideIconComp;
  value: string;
  label: string;
}

interface ProjectCategoryBtnProps extends ProjectCategoryButton {
  isActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCategory: (...args: any[]) => any;
}

const ProjectCategoryBtn = ({
  LucideIcon,
  value,
  label,
  isActive,
  setCategory,
}: ProjectCategoryBtnProps) => {
  return (
    <RegularBtn
      variant={isActive ? 'hero' : 'outline'}
      onClick={() => setCategory(value, { shallow: false })}
      className="gap-2">
      <LucideIcon className="size-4" />
      {label}
    </RegularBtn>
  );
};

export interface ProjectSummary {
  slug: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  status: string;
}

const ProjectSummaryCard = ({
  slug,
  category,
  title,
  description,
  impact,
  status,
  index,
}: ProjectSummary & { index: number }) => {
  return (
    <GhostBtn
      linkProps={{ href: `/legislative-work/${slug}` }}
      className="w-full h-full animate-fade-in-up card-elegant hover:shadow-gold transition-shadow text-start py-8 px-4 sm:px-8 md:px-6 lg:px-8"
      wrapClassName="h-full"
      style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex items-start justify-between mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {capitalize(status)}
          </div>
          {category === 'education' && <GraduationCap className="text-primary size-6" />}
          {category === 'youth' && <Users className="text-primary size-6" />}
          {category === 'infrastructure' && <Building2 className="text-primary size-6" />}
          {category === 'technology' && <Wifi className="text-primary size-6" />}
        </div>

        <div className="">
          <h3 className="text-xl font-semibold text-foreground text-wrap mb-3">{title}</h3>
          <div className="h-[4.5rem] mb-4">
            <p className="text-base text-muted-foreground text-wrap break-words line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="font-medium text-accent">{impact}</span>
          </div>
        </div>
      </div>
    </GhostBtn>
  );
};
