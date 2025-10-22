import { cn } from '@/lib/utils';
import { ComponentPropsWithRef } from 'react';

type InputProps = ComponentPropsWithRef<'input'>;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex w-full min-w-0 bg-transparent px-4 py-4 border border-border \
        rounded-[6px] focus:ring-2 focus:ring-primary focus:border-transparent \
        transition-all duration-200 font-inter file:text-foreground \
        placeholder:text-muted-foreground selection:bg-primary \
        selection:text-primary-foreground text-sm outline-none \
        file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm \
        file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed \
        disabled:opacity-50 md:text-base',
        'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[2px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
