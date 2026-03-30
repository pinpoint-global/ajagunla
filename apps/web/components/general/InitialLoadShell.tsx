/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useLayoutEffect, useState } from 'react';

/**
 * Full-screen cover for first paint before hydration. Unmounted via React state in
 * useLayoutEffect so the DOM stays consistent with React's tree.
 */
export function InitialLoadShell() {
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div id="initial-load-shell" className="fixed inset-0 z-[100] bg-white" aria-hidden="true" />
  );
}
