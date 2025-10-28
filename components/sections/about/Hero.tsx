import { SharedHero } from '../shared/Hero';

export const AboutHero = () => {
  return (
    <SharedHero
      heading="About Senator Fadeyi-Ajagunla"
      text="A dedicated public servant, accomplished businessman, and committed philanthropist
        serving the people of Osun Central Senatorial District."
      image={{
        src: '/images/senator-fadeyi.webp',
        alt: 'Senator Olubiyi Fadeyi-Ajagunla - Legislative leadership',
      }}
      hideHeightClass
      widthWrapperClass="w-[450px] max-w-full aspect-[0.67] mx-auto"
    />
  );
};
