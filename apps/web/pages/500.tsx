const Custom500 = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-accent">500</h1>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
            Something went wrong
          </h2>
          <p className="text-lg text-muted-foreground">
            We hit an unexpected error while loading this page.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Custom500;
