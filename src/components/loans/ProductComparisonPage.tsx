'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { Brand } from '@/data/brands';
import type { ProductTypeConfig } from '@/data/productTypes';
import { ComparisonDesignVariantProvider } from '@/contexts/ComparisonDesignVariantContext';
import {
  parseComparisonDesignVariantFromSearchParam,
  type ComparisonDesignVariant,
} from '@/lib/comparisonDesignVariant';
import styles from '@/app/business-loan/best-business-loans/page.module.scss';

const INITIAL_DISPLAY_COUNT = 5;

interface FAQItem {
  question: string;
  answer: string;
}

type JsonObject = Record<string, unknown>;

function buildInitialFilters(productConfig: {
  id: string;
  filterOrder: string[];
}): Record<string, string> {
  const initial: Record<string, string> = {};
  productConfig.filterOrder.forEach((key) => {
    initial[key] = 'all';
  });
  if (productConfig.id === 'business-loans') {
    if ('monthlyRevenue' in initial) initial.monthlyRevenue = '5k_plus';
    if ('timeInBusiness' in initial) initial.timeInBusiness = '1y_plus';
    if ('creditScore' in initial) initial.creditScore = '550_plus';
  }

  return initial;
}

interface ProductComparisonPageProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  pinnedLenderIds?: number[];
  /** When set, overrides `?v=` from the URL (useful for tests or forced variants). */
  designVariant?: ComparisonDesignVariant;
  showAdvertisingDisclosure?: boolean;
  advertisingDisclosureText?: string;
  structuredData?: {
    faqSchema?: JsonObject;
    financialProductSchema?: JsonObject;
    breadcrumbSchema?: JsonObject;
  };
}

const ProductComparisonPageDesktop = dynamic(
  () =>
    import('@/components/loans/ProductComparisonPageDesktop').then((m) => m.ProductComparisonPageDesktop),
  { ssr: false }
);
const ProductComparisonPageMobile = dynamic(
  () =>
    import('@/components/loans/ProductComparisonPageMobile').then((m) => m.ProductComparisonPageMobile),
  { ssr: false }
);

// Calculate date 7 days before current date
const getLastUpdated = (): string => {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

function ProductComparisonPageCore({
  productConfig,
  lendersData,
  faqItems,
  pinnedLenderIds,
  designVariant,
  showAdvertisingDisclosure = true,
  advertisingDisclosureText = `We earn commissions from brands listed on this site, which influences how listings are presented. Advertising Disclosure`,
  structuredData,
}: ProductComparisonPageProps & { designVariant: ComparisonDesignVariant }) {
  const lastUpdated = getLastUpdated();
  const isDesktop = useMediaQuery('(min-width: 1024px)', true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== 'function') return;
    w.gtag('event', 'comparison_page_view', {
      comparison_design_variant: designVariant,
      page_path: window.location.pathname,
    });
  }, [designVariant]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.setAttribute('data-comparison-variant', designVariant);

    return () => {
      // Only remove if we still own the current value (avoid clobbering another page instance).
      if (document.body.getAttribute('data-comparison-variant') === designVariant) {
        document.body.removeAttribute('data-comparison-variant');
      }
    };
  }, [designVariant]);

  const parseMinRevenue = (minRevenue?: string): number | null => {
    if (!minRevenue) return null;
    const normalized = String(minRevenue).trim().toLowerCase();
    const match = normalized.match(/(\d+(?:\.\d+)?)\s*k/);
    if (match) return Math.round(parseFloat(match[1]) * 1000);

    const asNumber = Number(normalized);

    return Number.isFinite(asNumber) ? asNumber : null;
  };

  const parseMinTimeInBusinessMonths = (minTimeInBusiness?: string): number | null => {
    if (!minTimeInBusiness) return null;
    const v = String(minTimeInBusiness).trim().toLowerCase();
    const map: Record<string, number> = {
      '0_6m': 0,
      '6m_1y': 6,
      '1y': 12,
      '1_2': 12,
      '2_plus': 24,
    };
    if (v in map) return map[v];

    const yearMatch = v.match(/(\d+)\s*y/);
    if (yearMatch) return Number(yearMatch[1]) * 12;

    const monthMatch = v.match(/(\d+)\s*m/);
    if (monthMatch) return Number(monthMatch[1]);

    return null;
  };

  const parseMinCreditScoreNumber = (minCreditScore?: string): number | null => {
    if (!minCreditScore) return null;
    const v = String(minCreditScore).trim().toLowerCase();
    const n = Number(v.replace(/[^\d]/g, ''));
    if (Number.isFinite(n) && n > 0) return n;
    const map: Record<string, number> = {
      poor: 350,
      fair: 630,
      good: 690,
      excellent: 720,
    };

    return map[v] ?? null;
  };

  const getUserRevenueValue = (value: string): number | null => {
    const map: Record<string, number> = {
      lt_5k: 4999,
      '5k_plus': 5000,
      '10k_plus': 10000,
      '20k_plus': 20000,
      '30k_plus': 30000,
    };

    return map[value] ?? null;
  };

  const getUserTimeMonths = (value: string): number | null => {
    const map: Record<string, number> = {
      lt_6m: 5,
      '6m_plus': 6,
      '1y_plus': 12,
      '5y_plus': 60,
      '10y_plus': 120,
    };

    return map[value] ?? null;
  };

  const getUserCreditValue = (value: string): number | null => {
    const map: Record<string, number> = {
      lt_500: 499,
      '500_plus': 500,
      '550_plus': 550,
      '600_plus': 600,
      '650_plus': 650,
      '700_plus': 700,
    };

    return map[value] ?? null;
  };

  const [filters, setFilters] = useState(() => buildInitialFilters(productConfig));
  const [sortBy, setSortBy] = useState('ourScore');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleReset = () => {
    setFilters(buildInitialFilters(productConfig));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Filter and sort lenders
  const filteredLenders = useMemo(() => {
    let result = [...lendersData];

    Object.entries(filters).forEach(([key, value]) => {
      if (value === 'all') return;

      if (key === 'creditScore') {
        const userValue = getUserCreditValue(value);
        result = result.filter((l) => {
          const lenderMin = parseMinCreditScoreNumber(l.minCreditScore);
          if (lenderMin == null) return true;

          return userValue == null ? true : lenderMin <= userValue;
        });
      } else if (
        key.includes('loanType') ||
        key.includes('loanPurpose') ||
        key.includes('vehicleType') ||
        key.includes('policyType') ||
        key.includes('metalType') ||
        key.includes('accountType') ||
        key.includes('petType') ||
        key.includes('coverageType')
      ) {
        result = result.filter((l) => l.productTypes?.includes(value));
      } else if (
        key.includes('loanAmount') ||
        key.includes('coverageAmount') ||
        key.includes('priceRange')
      ) {
        result = result.filter((l) => l.amountRange === value || l.amountRange === '100k_plus');
      } else if (key.includes('monthlyRevenue') || key.includes('minRevenue')) {
        const userRevenue = getUserRevenueValue(value);
        result = result.filter((l) => {
          const min = parseMinRevenue(l.minRevenue);
          if (min == null) return true;

          return userRevenue == null ? true : min <= userRevenue;
        });
      } else if (key.includes('timeInBusiness')) {
        const userMonths = getUserTimeMonths(value);
        result = result.filter((l) => {
          const minMonths = parseMinTimeInBusinessMonths(l.minTimeInBusiness);
          if (minMonths == null) return true;

          return userMonths == null ? true : minMonths <= userMonths;
        });
      }
    });

    // Apply sorting
    result.sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a] as number | null;
      const bValue = b[sortBy as keyof typeof b] as number | null;
      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return 1;
      if (bValue === null) return -1;

      return bValue - aValue;
    });

    // Optional: pin specific lenders to the top (always, regardless of sort)
    if (pinnedLenderIds && pinnedLenderIds.length > 0) {
      const pinnedSet = new Set(pinnedLenderIds);
      const pinned = result
        .filter((l) => pinnedSet.has(l.id))
        .sort((a, b) => pinnedLenderIds.indexOf(a.id) - pinnedLenderIds.indexOf(b.id));
      const rest = result.filter((l) => !pinnedSet.has(l.id));

      return [...pinned, ...rest];
    }

    return result;
  }, [filters, sortBy, lendersData, pinnedLenderIds]);

  const displayedLenders = filteredLenders.slice(0, displayCount);
  const hasMore = displayCount < filteredLenders.length;

  // Generate structured data if not provided
  const faqSchema = structuredData?.faqSchema || {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const financialProductSchema = structuredData?.financialProductSchema || {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: productConfig.displayName,
    description: `Compare the best ${productConfig.displayName.toLowerCase()} of 2026 from top providers.`,
    provider: {
      '@type': 'Organization',
      name: 'OnlineLoans.org',
      url: 'https://www.onlineloans.org',
    },
    category: productConfig.displayName,
  };

  const breadcrumbSchema = structuredData?.breadcrumbSchema || {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.onlineloans.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: productConfig.displayName,
        item: `https://www.onlineloans.org/${productConfig.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="financial-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ComparisonDesignVariantProvider value={designVariant}>
        <div className={styles.page} data-comparison-variant={designVariant}>
          {isDesktop ? (
            <ProductComparisonPageDesktop
              productConfig={productConfig}
              lendersData={lendersData}
              faqItems={faqItems}
              lastUpdated={lastUpdated}
              filters={filters}
              sortBy={sortBy}
              displayedLenders={displayedLenders}
              filteredCount={filteredLenders.length}
              onSortChange={setSortBy}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              onShowMore={() => setDisplayCount((prev) => prev + 5)}
              hasMore={hasMore}
            />
          ) : (
            <ProductComparisonPageMobile
              productConfig={productConfig}
              lendersData={lendersData}
              faqItems={faqItems}
              lastUpdated={lastUpdated}
              filters={filters}
              sortBy={sortBy}
              displayedLenders={displayedLenders}
              filteredCount={filteredLenders.length}
              onSortChange={setSortBy}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              onShowMore={() => setDisplayCount((prev) => prev + 5)}
              hasMore={hasMore}
              showAdvertisingDisclosure={showAdvertisingDisclosure}
              advertisingDisclosureText={advertisingDisclosureText}
            />
          )}
        </div>
      </ComparisonDesignVariantProvider>
    </>
  );
}

function ProductComparisonPageUrlVariant(props: ProductComparisonPageProps) {
  const searchParams = useSearchParams();
  const fromUrl = parseComparisonDesignVariantFromSearchParam(searchParams.get('v'));
  const { designVariant: designVariantProp, ...rest } = props;
  const designVariant = designVariantProp ?? fromUrl;

  return <ProductComparisonPageCore {...rest} designVariant={designVariant} />;
}

export default function ProductComparisonPage(props: ProductComparisonPageProps) {
  const { designVariant: designVariantProp, ...rest } = props;
  const fallbackVariant = designVariantProp ?? 'default';

  return (
    <Suspense
      fallback={<ProductComparisonPageCore {...rest} designVariant={fallbackVariant} />}
    >
      <ProductComparisonPageUrlVariant {...props} />
    </Suspense>
  );
}
