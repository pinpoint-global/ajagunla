export const AboutHero = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="regular-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl animate-fade-in-up mx-auto">
            <h1 className="text-primary-foreground text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-tight font-semibold mb-6">
              About Senator Fadeyi-Ajagunla
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-6">
              A dedicated public servant, accomplished businessman, and committed philanthropist
              serving the people of Osun Central Senatorial District.
            </p>
          </div>
          <div className="animate-scale-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/senator-fadeyi.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla"
              className="rounded-lg shadow-elegant w-[450px] max-w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
