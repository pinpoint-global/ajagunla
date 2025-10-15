import { ArrowRight, Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/general/Card';
import Link from 'next/link';
import { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';

const values = [
  {
    icon: Heart,
    title: 'Authentic Storytelling',
    description:
      'Every brand has a unique story. I help uncover and articulate that story in ways that resonate deeply with audiences.',
  },
  {
    icon: Award,
    title: 'Excellence in Craft',
    description:
      'Commitment to the highest standards of design quality and strategic thinking in every project I undertake.',
  },
  {
    icon: Briefcase,
    title: 'Strategic Partnership',
    description:
      'I work as an extension of your team, providing strategic insights and creative solutions that drive real business results.',
  },
];

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Adepoju Olayode, a passionate brand designer and developer with expertise in personal branding, packaging design, and strategic brand development. Discover his journey and approach to creating impactful brands.',
  keywords: 'about Adepoju Olayode, brand designer biography, creative director, brand strategist',
};

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary leading-tight">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {`I'm Adepoju Olayode, a passionate brand designer and developer dedicated to
                  helping individuals and businesses create powerful, authentic brand identities
                  that drive meaningful connections and lasting success.`}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a keen eye for detail and a strong sense of creativity, I strive to create
                  visually impactful designs that effectively communicate the essence of a brand. My
                  approach combines strategic thinking with creative excellence to deliver solutions
                  that not only look exceptional but drive real business results.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {`Over the years, I've had the privilege of working with diverse clients across
                  various industries, helping them unlock their full potential and establish
                  remarkable market presence through thoughtful brand development.`}
                </p>
              </div>

              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  {`Let's Work Together`}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-large">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Adepoju Olayode - Brand Designer and Developer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/20 to-transparent" />
              </div>
              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
              My Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything I do and ensure that every project I work on
              delivers exceptional value and meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(value => (
              <Card
                key={value.title}
                className="group hover:shadow-medium transition-all duration-300 border-0 text-center">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-gold shadow-soft">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold font-heading text-primary group-hover:text-accent transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                  Experience & Expertise
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {`My journey in brand design and development has equipped me with a comprehensive
                  understanding of what it takes to build successful brands in today's competitive
                  landscape.`}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-gold shadow-soft mt-1">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Creative Education</h3>
                    <p className="text-muted-foreground">
                      Formal training in design principles, brand strategy, and creative
                      problem-solving that forms the foundation of my approach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-gold shadow-soft mt-1">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Industry Experience</h3>
                    <p className="text-muted-foreground">
                      Years of hands-on experience working with clients across diverse industries,
                      from startups to established enterprises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-gold shadow-soft mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      A track record of successful brand transformations that have driven measurable
                      business growth and market recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-gold-end/5">
                <h3 className="text-xl font-semibold text-primary mb-4">Specializations</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Personal Branding</span>
                    <span className="text-accent font-semibold">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Community Branding</span>
                    <span className="text-accent font-semibold">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Packaging Design</span>
                    <span className="text-accent font-semibold">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Brand Strategy</span>
                    <span className="text-accent font-semibold">Expert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Visual Identity</span>
                    <span className="text-accent font-semibold">Expert</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-hero-dark/5">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Brands Developed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gradient-hero text-hero-light">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">My Design Philosophy</h2>
          <blockquote className="text-xl text-hero-light/90 mb-8 leading-relaxed italic">
            {`"Great brands are not built overnight. They are crafted through strategic thinking,
            authentic storytelling, and relentless attention to detail. Every touchpoint matters,
            every interaction counts, and every design decision should serve the greater purpose of
            connecting people with brands that truly matter to them."`}
          </blockquote>
          <p className="text-lg text-hero-light/80 leading-relaxed">
            This philosophy drives every project I undertake and ensures that the brands I help
            create are not just visually appealing, but strategically sound and emotionally
            resonant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {`I'd love to learn about your brand challenges and explore how we can work together to
            create something truly remarkable.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/personal-branding">View My Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
