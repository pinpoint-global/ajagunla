import { Facebook, Instagram, Linkedin, TwitterX } from '@/components/icons';
import type { IconComp } from '@/lib/types/general';

export const SOCIAL_ICON_MAP: Record<string, IconComp> = {
  Instagram,
  Facebook,
  Linkedin,
  TwitterX,
};

export function getSocialIcon(iconKey: string): IconComp {
  return SOCIAL_ICON_MAP[iconKey] ?? Instagram;
}
