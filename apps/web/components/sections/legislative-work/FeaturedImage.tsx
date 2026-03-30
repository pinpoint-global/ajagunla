import { FadeInUpWrap } from '@/components/general/MotionContainers';
import Image from 'next/image';

export interface FeaturedImageProps {
  imageUrl?: string;
  imageAlt?: string;
}

export const FeaturedImage = ({
  imageUrl = 'https://static.ajagunla1.com/images/legislative-work.webp',
  imageAlt = 'Senator Fadeyi-Ajagunla engaged in legislative work',
}: FeaturedImageProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeInUpWrap
          className={`w-full h-[500px] shadow-elegant rounded-lg relative overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
            fill
            priority
          />
        </FadeInUpWrap>
      </div>
    </section>
  );
};
