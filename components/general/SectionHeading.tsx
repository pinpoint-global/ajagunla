import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  text?: string;
  className?: string;
}

export const SectionHeading = ({ title, text, className }: SectionHeadingProps) => {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary mb-4">
        {title}
      </h2>
      <p
        className={`text-sm md:text-xl text-muted-foreground max-w-3xl ${className?.includes('text-start') ? '' : 'px-2 mx-auto'}`}>
        {text}
      </p>
    </div>
  );
};
