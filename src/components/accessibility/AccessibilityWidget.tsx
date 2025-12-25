'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export function AccessibilityWidget() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if we're on desktop (min-width: 1024px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check on mount
    checkDesktop();

    // Listen for resize events
    window.addEventListener('resize', checkDesktop);

    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  // Only load the script on desktop
  if (!isDesktop) {
    return null;
  }

  return (
    <Script
      src="https://dash.accessiblyapp.com/widget/019b565f-e784-73ed-a16a-6e4c0fb950ae/autoload.js"
      strategy="lazyOnload"
    />
  );
}

