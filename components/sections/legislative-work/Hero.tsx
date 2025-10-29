import { SharedHero } from '../shared/Hero';

export const LegislativeWorkHero = () => {
  return (
    <SharedHero
      heading="Legislative Work & Achievements"
      text="Delivering tangible results through dedicated service, strategic legislation, and community-focused initiatives"
      image={{
        src: '/images/senator-fadeyi-5.webp',
        alt: 'Senator Olubiyi Fadeyi-Ajagunla - Legislative leadership',
        className: 'object-top',
      }}
      widthWrapperClass="max-w-[450px] aspect-[0.85] mx-auto"
      hideHeightClass
    />
  );
};
