import { LucideIconName } from '@/components/general/DynamicIcon';

export interface CommunityInitiative {
  slug: string;
  lucideIcon: LucideIconName;
  title: string;
  description: string;
  fullDescription: string;
  impact: string;
  objectives: string[];
  achievements: string[];
  beneficiaries: string;
  location: string;
  howToParticipate: string;
  keywords?: string[];
}

export interface CommunityInitiativeSummary {
  slug: string;
  lucideIcon: LucideIconName;
  title: string;
  description: string;
}
