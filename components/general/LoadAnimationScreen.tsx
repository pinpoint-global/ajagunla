'use client';

import { debounce } from '@/lib/utils/general';
import { useEffect, useState } from 'react';
import { Logo } from '../icons';

const BASE_LOAD_TIME = 4000; // ms
const TRANSITION_DURATION = 2; // s

export const LoadAnimationScreen = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleLoad = async () => {
      await debounce(BASE_LOAD_TIME);

      setPageLoaded(true);

      setTimeout(() => {
        setAnimationComplete(true);
      }, TRANSITION_DURATION * 1000); // Based off of exit animation duration of this screen
    };

    // If already loaded (from cache)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {!animationComplete && (
        <section className="w-full h-screen bg-white grid place-items-center fixed inset-0 z-[99]">
          <div
            className={`transition-all duration-1500 ease-linear ${!pageLoaded ? '' : 'opacity-0'}`}>
            <i className={`text-9xl text-primary `}>
              <Logo className={`${!pageLoaded ? 'animate-loader' : ''}`} />
            </i>
          </div>
        </section>
      )}
    </>
  );
};
