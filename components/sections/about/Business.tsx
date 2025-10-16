import { SectionHeading } from '@/components/general/SectionHeading';
import { BUSINESSES } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';

export const BusinessAndPhilanthropy = () => {
  return (
    <section className="section-padding">
      <div className="regular-container">
        <div className="max-w-6xl grid md:grid-cols-2 gap-16 mx-auto">
          {BUSINESSES.map((item, idx) => (
            <BusinessBlock key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface BusinessProps {
  Icon: LucideIconComp;
  title: string;
  paragraphs: string[];
}

const BusinessBlock = ({ Icon, title, paragraphs }: BusinessProps) => {
  return (
    <div className="animate-fade-in">
      <SectionHeading className="text-start mb-6" {...{ Icon, title }} />
      <div className="space-y-4 text-foreground">
        {paragraphs.map((text, idx) => (
          <p key={idx} className="">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
