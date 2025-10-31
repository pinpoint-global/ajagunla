import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { LEGISLATIVE_IMPACT } from '@/lib/constants/texts';

export const LegislativeImpact = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="regular-container">
        <SectionHeading title="Legislative Impact" whiteText />

        <FadeInUpWrap className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEGISLATIVE_IMPACT.map((item, idx) => (
            <ImpactCard key={idx} {...item} />
          ))}
        </FadeInUpWrap>
      </div>
    </section>
  );
};

export interface ImpactCardProps {
  heading: string;
  text: string;
}

const ImpactCard = ({ heading, text }: ImpactCardProps) => {
  return (
    <div className="text-center p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
      <div className="text-4xl font-bold text-accent mb-2">{heading}</div>
      <div className="text-primary-foreground/90">{text}</div>
    </div>
  );
};
