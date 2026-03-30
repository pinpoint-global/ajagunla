'use client';

import { useSyncExternalStore } from 'react';

function getCmsDebugEnabledFromUrl() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  const v = params.get('cmsDebug');
  if (!v) return false;
  return v === '1' || v === 'true' || v === 'cms';
}

function getCmsDebugSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  if (process.env.NODE_ENV === 'production') return false;
  const envEnabled =
    process.env.NEXT_PUBLIC_CMS_DEBUG === '1' || process.env.NEXT_PUBLIC_CMS_DEBUG === 'true';
  return Boolean(envEnabled || getCmsDebugEnabledFromUrl());
}

/**
 * Dev-only toggle that lets you see which CMS-backed values are in use.
 * Enable via `?cmsDebug=1` or `NEXT_PUBLIC_CMS_DEBUG=1`.
 */
export function useCmsDebugEnabled() {
  return useSyncExternalStore(
    () => () => {},
    getCmsDebugSnapshot,
    () => false
  );
}
