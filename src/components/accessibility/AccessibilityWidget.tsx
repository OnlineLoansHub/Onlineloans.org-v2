'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export function AccessibilityWidget() {
  const pathname = usePathname();
  
  // Only show on home page
  const isHomePage = pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
      strategy="lazyOnload"
    />
  );
}

