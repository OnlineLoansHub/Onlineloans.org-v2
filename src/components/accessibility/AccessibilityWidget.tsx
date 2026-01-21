'use client';

import Script from 'next/script';

export function AccessibilityWidget() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
      strategy="lazyOnload"
    />
  );
}

