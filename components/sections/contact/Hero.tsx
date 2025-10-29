import { SharedHero } from '../shared/Hero';

export const ContactHero = () => {
  return (
    <SharedHero
      heading="Contact Us"
      text="Have questions, concerns, or need assistance? We're here to help and serve you."
      image={{
        src: '/images/senator-fadeyi-4.webp',
        alt: 'Senator Olubiyi Fadeyi-Ajagunla - Ready to serve and assist you',
      }}
      widthWrapperClass="max-w-[450px] aspect-[0.95] mx-auto"
      hideHeightClass
    />
  );
};
