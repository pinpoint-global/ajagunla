'use client';

import { SectionCard, CardGrid } from '@/components/general/Card';
import { FadeInUpCard } from '@/components/general/MotionContainers';
import { SectionContainer } from '@/components/general/SectionContainer';
import { SectionHeading } from '@/components/general/SectionHeading';
import { UPCOMING_EVENTS } from '@/lib/constants/texts';
import { Calendar, MapPin } from 'lucide-react';

export const UpcomingEvents = () => {
  return (
    <SectionContainer background="muted">
      <SectionHeading
        Icon={Calendar}
        title="Upcoming Events"
        text="Join us at upcoming community events and town hall meetings"
        className="mb-12"
      />

      <CardGrid columns={{ base: 1, md: 2, lg: 3 }} className="">
        {UPCOMING_EVENTS.map((event, index) => (
          <FadeInUpCard key={index} index={index} delayMultiplier={0.1}>
            <EventCard {...event} />
          </FadeInUpCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({ title, date, time, location, description }: UpcomingEvent) => {
  return (
    <SectionCard className="p-6">
      <div className="mb-4">
        <div className="text-sm text-primary font-semibold mb-1">{date}</div>
        <div className="text-sm text-muted-foreground">{time}</div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <div className="flex items-start gap-2 mb-3">
        <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
      <p className="text-base text-muted-foreground">{description}</p>
    </SectionCard>
  );
};
