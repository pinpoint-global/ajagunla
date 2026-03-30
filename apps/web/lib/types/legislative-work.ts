import { LucideIconName } from '@/components/general/DynamicIcon';

export interface TimelinePhase {
  phase: string;
  status: string;
  date: string;
}

export interface LegislativeWork {
  slug: string;
  category: string;
  lucideIcon: LucideIconName;
  title: string;
  description: string;
  status: string;
  impact: string;
  fullDescription: string;
  objectives: string[];
  timeline: TimelinePhase[];
  beneficiaries: string;
  location: string;
  keywords: string[];
}

export interface ProjectSummary {
  slug: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  status: string;
}
