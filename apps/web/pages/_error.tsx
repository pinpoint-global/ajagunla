import type { NextPageContext } from 'next';

type ErrorPageProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorPageProps) {
  const code = statusCode ?? 500;

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold text-accent">{code}</h1>
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
          Something went wrong
        </h2>
        <p className="text-lg text-muted-foreground">
          An unexpected error occurred while rendering this page.
        </p>
      </div>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorPageProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

export default ErrorPage;
