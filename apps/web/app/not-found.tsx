import { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionContainer } from '@/components/general/SectionContainer';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist. Return home.",
};

export default function NoPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <SectionContainer>
          <div className="max-w-2xl w-full text-center space-y-8 mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground">
                {`The page you're looking for doesn't exist or has been moved.`}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 bg-primary text-primary-foreground">
                Return Home
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 border border-border">
                Go Back Home
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
    </MainLayout>
  );
}
