'use client';
import { FadeInUpWrap } from '@/components/general/MotionContainers';
import Image from 'next/image';

export const FeaturedImages = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeInUpWrap
            className={`w-full max-w-[400px] lg:max-w-[450px] h-[400px] lg:h-[550px] shadow-elegant rounded-lg mx-auto relative overflow-hidden`}>
            <Image
              src="https://static.ajagunla1.com/images/senator-fadeyi-7.webp"
              alt="Senator Fadeyi-Ajagunla at community event"
              className="w-full h-full object-cover object-top rounded-lg shadow-elegant"
              fill
              priority
            />
          </FadeInUpWrap>
          <FadeInUpWrap
            className={`w-full max-w-[400px] lg:max-w-[450px] h-[400px] lg:h-[550px] shadow-elegant rounded-lg mx-auto relative overflow-hidden`}>
            <Image
              src="https://static.ajagunla1.com/images/senator-fadeyi-8.webp"
              alt="Senator Olubiyi Fadeyi-Ajagunla engaging with constituents"
              className="w-full h-full object-cover object-top rounded-lg shadow-elegant"
              fill
              priority
            />
          </FadeInUpWrap>
        </div>
      </div>
    </section>
  );
};
