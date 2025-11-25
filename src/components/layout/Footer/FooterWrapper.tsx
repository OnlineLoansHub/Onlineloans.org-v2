'use client';

import { useExploreToggle } from '@/contexts/ExploreToggleContext';
import { Footer } from './Footer';

export const FooterWrapper = () => {
  const { isOpen, isMobile } = useExploreToggle();

  // Show footer if: on mobile (always) OR on desktop when ExploreToggle is open
  const shouldShow = isMobile || isOpen;

  if (!shouldShow) {
    return null;
  }

  return <Footer />;
};

