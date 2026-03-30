import { useMemo, useSyncExternalStore } from 'react';

const MOBILE_BREAKPOINT = 768;

function subscribe(queryString: string, onStoreChange: () => void) {
  const mql = window.matchMedia(queryString);
  mql.addEventListener('change', onStoreChange);
  return () => mql.removeEventListener('change', onStoreChange);
}

export function useIsMobile(width?: number) {
  const queryString = useMemo(() => `(max-width: ${width ?? MOBILE_BREAKPOINT - 1}px)`, [width]);

  return useSyncExternalStore(
    onStoreChange => subscribe(queryString, onStoreChange),
    () => window.matchMedia(queryString).matches,
    () => false
  );
}
