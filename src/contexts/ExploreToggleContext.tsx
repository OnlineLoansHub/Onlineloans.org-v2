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
      setIsMobile(window.innerWidth <= 993);
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
