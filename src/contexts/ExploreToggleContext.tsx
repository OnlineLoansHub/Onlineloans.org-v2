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
    const updateMobile = () => {
      const isMobileWidth = window.innerWidth <= 993;
      setIsMobile(isMobileWidth);
      // Set isOpen to true by default on mobile
      if (isMobileWidth) {
        setIsOpen(true);
      }
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);

    return () => {
      window.removeEventListener('resize', updateMobile);
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
