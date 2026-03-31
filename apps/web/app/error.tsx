'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionContainer } from '@/components/general/SectionContainer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <SectionContainer>
          <div className="max-w-2xl w-full text-center space-y-8 mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-accent">500</h1>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
                Something went wrong
              </h2>
              <p className="text-lg text-muted-foreground">
                We hit an unexpected error while loading this page.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-md px-5 py-3 bg-primary text-primary-foreground">
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 border border-border">
                Return home
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
    </MainLayout>
  );
}
