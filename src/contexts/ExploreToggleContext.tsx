'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ExploreToggleContextType {
  isOpen: boolean;
  isMobile: boolean;
  setIsOpen: (value: boolean) => void;
  setIsMobile: (value: boolean) => void;
}

const ExploreToggleContext = createContext<ExploreToggleContextType | undefined>(undefined);

export const ExploreToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Performance: Use requestAnimationFrame to batch layout reads and prevent forced reflow
    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const updateMobile = () => {
      // Performance: Batch DOM reads using requestAnimationFrame
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const isMobileWidth = window.innerWidth <= 993;
          setIsMobile(isMobileWidth);
          // Set isOpen to true by default on mobile
          if (isMobileWidth) {
            setIsOpen(true);
          }
          rafId = null;
        });
      }
    };

    // Performance: Throttle resize handler to prevent excessive layout calculations
    const throttledUpdateMobile = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        updateMobile();
        timeoutId = null;
      }, 150); // Throttle to max once per 150ms
    };

    updateMobile();
    window.addEventListener('resize', throttledUpdateMobile, { passive: true });

    return () => {
      window.removeEventListener('resize', throttledUpdateMobile);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <ExploreToggleContext.Provider value={{ isOpen, isMobile, setIsOpen, setIsMobile }}>
      {children}
    </ExploreToggleContext.Provider>
  );
};

export const useExploreToggle = () => {
  const context = useContext(ExploreToggleContext);
  if (context === undefined) {
    throw new Error('useExploreToggle must be used within ExploreToggleProvider');
  }

  return context;
};
