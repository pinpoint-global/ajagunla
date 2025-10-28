import { FadeInUpWrap } from '@/components/general/MotionContainers';
import Image from 'next/image';

export const FeaturedImage = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeInUpWrap
          className={`w-full h-[500px] shadow-elegant rounded-lg relative overflow-hidden`}>
          <Image
            src="/images/legislative-work.webp"
            alt="Senator Fadeyi-Ajagunla engaged in legislative work"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </FadeInUpWrap>
      </div>
    </section>
  );
};
