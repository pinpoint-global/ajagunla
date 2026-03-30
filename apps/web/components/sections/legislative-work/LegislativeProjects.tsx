'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionCard, CardGrid } from '@/components/general/Card';
import { SectionContainer } from '@/components/general/SectionContainer';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LEGISLATIVE_PROJECT_CATEGORIES, PROJECT_CATEGORY_BUTTONS } from '@/lib/constants/texts';
import { filterByCategory, getLegislativeWorkUrl } from '@/lib/utils/general';
import { DynamicIcon, LucideIconName } from '@/components/general/DynamicIcon';
import { ProjectSummary } from '@/lib/types/legislative-work';
import { Building2, GraduationCap, TrendingUp, Users, Wifi } from 'lucide-react';
import { capitalize } from 'lodash';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useMemo } from 'react';

interface LegislativeProjectsProps {
  projects: ProjectSummary[];
  categoryButtons?: ProjectCategoryButton[];
}

export const LegislativeProjects = ({ projects, categoryButtons }: LegislativeProjectsProps) => {
  const buttons = categoryButtons ?? PROJECT_CATEGORY_BUTTONS;

  const [category, setCategory] = useQueryState(
    'category',
    parseAsStringLiteral(LEGISLATIVE_PROJECT_CATEGORIES).withDefault('all')
  );

  const { filteredProjects, projectsWrapKey } = useMemo(() => {
    const filtered = filterByCategory(projects, category);
    const wrapKey = `${category}:${filtered.map(p => p.slug).join(',')}`;

    return { filteredProjects: filtered, projectsWrapKey: wrapKey };
  }, [category, projects]);

  return (
    <SectionContainer>
      <SectionHeading title="Key Initiatives & Projects" className="mb-12" />

      {/* Category Filter */}
      <FadeInUpWrap className="flex flex-wrap justify-center gap-3 mb-12">
        {buttons.map(item => (
          <ProjectCategoryBtn
            key={item.value}
            {...item}
            isActive={item.value === category}
            setCategory={setCategory}
          />
        ))}
      </FadeInUpWrap>

      {/* Projects Grid */}
      <CardGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {filteredProjects.map((project, idx) => (
          <ProjectSummaryCard
            key={project.slug}
            {...project}
            index={idx}
            wrapKey={projectsWrapKey}
          />
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export interface ProjectCategoryButton {
  iconName: LucideIconName;
  value: string;
  label: string;
}

interface ProjectCategoryBtnProps extends ProjectCategoryButton {
  isActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCategory: (...args: any[]) => any;
}

const ProjectCategoryBtn = ({
  iconName,
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
      <DynamicIcon name={iconName} props={{ className: 'size-4' }} />
      {label}
    </RegularBtn>
  );
};

// ProjectSummary interface moved to lib/types/legislative-work.ts

const ProjectSummaryCard = ({
  slug,
  category,
  title,
  description,
  impact,
  status,
  index,
  wrapKey,
}: ProjectSummary & { index: number; wrapKey?: string | number | null }) => {
  return (
    <SectionCard
      href={getLegislativeWorkUrl(slug)}
      className="w-full h-full text-start py-8 px-4 sm:px-8 md:px-6 lg:px-8"
      wrapClassName="h-full"
      wrapKey={wrapKey}
      index={index}>
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
    </SectionCard>
  );
};
