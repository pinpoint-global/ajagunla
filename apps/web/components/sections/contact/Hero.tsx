import { SharedHero } from '../shared/Hero';

export interface ContactHeroProps {
  heading?: string;
  text?: string;
}

export const ContactHero = ({ heading = 'Contact Us', text }: ContactHeroProps) => {
  const heroText =
    text ?? "Have questions, concerns, or need assistance? We're here to help and serve you.";

  return (
    <SharedHero
      heading={heading}
      text={heroText}
      image={{
        src: 'https://static.ajagunla1.com/images/senator-fadeyi-4.webp',
        alt: 'Senator Olubiyi Fadeyi-Ajagunla - Ready to serve and assist you',
      }}
      widthWrapperClass="max-w-[450px] aspect-[0.95] mx-auto"
      hideHeightClass
    />
  );
};
