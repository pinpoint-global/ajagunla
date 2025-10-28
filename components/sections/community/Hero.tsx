import { SharedHero } from '../shared/Hero';

export const CommunityEngagementHero = () => {
  return (
    <SharedHero
      heading="Community Engagement"
      text="Building stronger communities through active engagement, meaningful partnerships, and impactful initiatives"
      image={{
        src: '/images/senator-fadeyi-6.webp',
        alt: 'Senator Olubiyi Fadeyi-Ajagunla - Community engagement and service',
        className: 'object-top',
      }}
      imageHeight={600}
    />
  );
};
