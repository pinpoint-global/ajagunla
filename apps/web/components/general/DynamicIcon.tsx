import * as LucideIcons from 'lucide-react';
import { SVGProps } from 'react';

export type LucideIconName = keyof typeof LucideIcons.icons;

interface DynamicIconProps {
  name: LucideIconName;
  props: SVGProps<SVGSVGElement>;
}

export function DynamicIcon({ name, props }: DynamicIconProps) {
  const iconMap = LucideIcons.icons;
  const Icon = iconMap[name] ?? iconMap.TriangleAlert;
  return Icon ? <Icon {...props} /> : null;
}
