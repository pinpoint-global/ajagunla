import { type ComponentType } from 'react';
import { cn } from '@/lib/utils';
import { RegularBtn, RegularBtnProps } from './RegularBtn';
import { IconComp } from '@/lib/types/general';

interface BaseGhostBtnProps extends Omit<RegularBtnProps, 'text'> {
  iconClass?: string;
  Icon?: IconComp;
  LucideIcon?: ComponentType<{ className?: string }>;
}
interface GhostBtnPropsWithIcon extends BaseGhostBtnProps {
  Icon?: IconComp;
}
interface GhostBtnPropsWithLucideIcon extends BaseGhostBtnProps {
  LucideIcon?: ComponentType<{ className?: string }>;
}
export type GhostBtnProps = GhostBtnPropsWithIcon | GhostBtnPropsWithLucideIcon;

export const GhostBtn = ({
  children,
  Icon,
  LucideIcon,
  iconClass,
  className,
  ...props
}: GhostBtnProps) => {
  return (
    <RegularBtn
      variant="none"
      size="icon"
      typo="custom"
      className={cn('p-0 flex-none', className)}
      {...props}>
      {Icon ? (
        <i className={cn('text-2xl text-dark', iconClass)}>
          <Icon />
        </i>
      ) : LucideIcon ? (
        <LucideIcon className={cn('size-4 text-dark', iconClass)} />
      ) : (
        children
      )}
    </RegularBtn>
  );
};
