'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const IMPRESSION_STORAGE_KEY = 'impression_id';

interface ImpressionContextType {
  impressionId: string | null;
  setImpressionId: (id: string) => void;
}

const ImpressionContext = createContext<ImpressionContextType | undefined>(undefined);

export const ImpressionProvider = ({ children }: { children: ReactNode }) => {
  // Initialize from localStorage on mount (for page reloads)
  const [impressionId, setImpressionIdState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem(IMPRESSION_STORAGE_KEY);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Set impression ID in memory FIRST, then persist to localStorage SECOND
  const setImpressionId = (id: string) => {
    setImpressionIdState(id);
    
    // Persist to localStorage SECOND (for page reloads)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(IMPRESSION_STORAGE_KEY, id);
      } catch {
        // Silently fail if localStorage is unavailable
      }
    }
  };

  return (
    <ImpressionContext.Provider value={{ impressionId, setImpressionId }}>
      {children}
    </ImpressionContext.Provider>
  );
};

export const useImpression = () => {
  const context = useContext(ImpressionContext);
  if (context === undefined) {
    throw new Error('useImpression must be used within ImpressionProvider');
  }
  return context;
};

