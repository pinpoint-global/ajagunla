import { LucideIconComp } from '@/lib/types/general';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  Icon?: LucideIconComp;
  title: string;
  text?: string;
  className?: string;
}

export const SectionHeading = ({ Icon, title, text, className }: SectionHeadingProps) => {
  return (
    <div className={cn('text-center grid gap-4 mb-16', className)}>
      {Icon && (
        <Icon
          className={`size-12 text-primary ${className?.includes('text-start') ? '' : 'mx-auto'}`}
        />
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
        {title}
      </h2>
      <p
        className={`text-sm md:text-xl text-muted-foreground max-w-3xl ${className?.includes('text-start') ? '' : 'px-2 mx-auto'}`}>
        {text}
      </p>
    </div>
  );
};
