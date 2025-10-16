import { SectionHeading } from '@/components/general/SectionHeading';
import { AWARDS } from '@/lib/constants/texts';
import { Award } from 'lucide-react';

export const Recognition = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="regular-container">
        <SectionHeading Icon={Award} title="Recognition & Awards" className="mb-10" />

        <div className="flex justify-center gap-6">
          {AWARDS.map((award, idx) => (
            <AwardCard key={idx} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface AwardProps {
  year: `${number}`;
  name: string;
  desc: string;
}

const AwardCard = ({ year, name, desc }: AwardProps) => {
  return (
    <div className="max-w-3xl card-elegant text-center p-8">
      <div className="text-4xl font-bold text-accent mb-4">{year}</div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{name}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
};
