import { FadeInUpWrap } from '@/components/general/MotionContainers';
import { SectionHeading } from '@/components/general/SectionHeading';
import { SENATE_COMMITTEES } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';

export const SenateCommittees = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="regular-container">
        <SectionHeading title="Senate Committee Leadership" />

        <FadeInUpWrap amount={0.15} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SENATE_COMMITTEES.map((item, idx) => (
            <CommitteeCard key={idx} {...item} />
          ))}
        </FadeInUpWrap>
      </div>
    </section>
  );
};

export interface CommitteeCardProps {
  LucideIcon: LucideIconComp;
  position: string;
  committee: string;
  note: string;
}

const CommitteeCard = ({ LucideIcon, position, committee, note }: CommitteeCardProps) => {
  return (
    <div className="card-elegant p-8 text-center">
      <LucideIcon className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-3">{position}</h3>
      <p className="text-lg text-primary font-medium mb-2">{committee}</p>
      <p className="text-muted-foreground">{note}</p>
    </div>
  );
};
