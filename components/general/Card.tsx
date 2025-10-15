import { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ref, ...props }: ComponentPropsWithRef<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ref, ...props }: ComponentPropsWithRef<'div'>) {
  return <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

export function CardTitle({ className, ref, ...props }: ComponentPropsWithRef<'h3'>) {
  return (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ref, ...props }: ComponentPropsWithRef<'p'>) {
  return <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

export function CardContent({ className, ref, ...props }: ComponentPropsWithRef<'div'>) {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
}

export function CardFooter({ className, ref, ...props }: ComponentPropsWithRef<'div'>) {
  return <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}
