'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { ComparisonDesignVariant } from '@/lib/comparisonDesignVariant';

const ComparisonDesignVariantContext = createContext<ComparisonDesignVariant>('default');

export function ComparisonDesignVariantProvider({
  value,
  children,
}: {
  value: ComparisonDesignVariant;
  children: ReactNode;
}) {
  return (
    <ComparisonDesignVariantContext.Provider value={value}>
      {children}
    </ComparisonDesignVariantContext.Provider>
  );
}

export function useComparisonDesignVariant(): ComparisonDesignVariant {
  return useContext(ComparisonDesignVariantContext);
}
