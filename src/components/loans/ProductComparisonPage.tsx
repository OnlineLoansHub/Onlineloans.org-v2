'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { Brand } from '@/data/brands';
import type { ProductTypeConfig } from '@/data/productTypes';
import styles from '@/app/business-loan/best-business-loans/page.module.scss';

const INITIAL_DISPLAY_COUNT = 5;

interface FAQItem {
  question: string;
  answer: string;
}

type JsonObject = Record<string, unknown>;

type DesktopFilterKey = 'loanType' | 'monthlyRevenue' | 'timeInBusiness' | 'creditScore';

/** Initial “Are you eligible for a better rate?” presets (desktop filter bar). Reset still clears to All. */
const DESKTOP_FILTER_DEFAULTS: Record<DesktopFilterKey, string> = {
  loanType: 'term_loan',
  monthlyRevenue: '10k_20k',
  timeInBusiness: '1_2',
  creditScore: 'good',
};

const DESKTOP_FILTERS_ALL: Record<DesktopFilterKey, string> = {
  loanType: 'all',
  monthlyRevenue: 'all',
  timeInBusiness: 'all',
  creditScore: 'all',
};

function getInitialDesktopFilters(productId: string): Record<DesktopFilterKey, string> {
  if (productId === 'business-loans') {
    return { ...DESKTOP_FILTER_DEFAULTS };
  }

  return { ...DESKTOP_FILTERS_ALL };
}

interface ProductComparisonPageProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  pinnedLenderIds?: number[];
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

export default function ProductComparisonPage({
  productConfig,
  lendersData,
  faqItems,
  pinnedLenderIds,
  showAdvertisingDisclosure = true,
  advertisingDisclosureText = `We earn commissions from brands listed on this site, which influences how listings are presented. Advertising Disclosure`,
  structuredData,
}: ProductComparisonPageProps) {
  const lastUpdated = getLastUpdated();
  const isDesktop = useMediaQuery('(min-width: 1024px)', true);

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

  const normalizeCreditCategory = (minCreditScore?: string): 'poor' | 'fair' | 'good' | 'excellent' | null => {
    if (!minCreditScore) return null;
    const v = String(minCreditScore).trim().toLowerCase();
    if (v === 'poor' || v === 'fair' || v === 'good' || v === 'excellent') return v;
    const n = Number(v.replace(/[^\d]/g, ''));
    if (!Number.isFinite(n) || n <= 0) return null;

    if (n >= 720) return 'excellent';
    if (n >= 690) return 'good';
    if (n >= 630) return 'fair';

    return 'poor';
  };

  // Initialize filters based on filterOrder
  const initialFilters: Record<string, string> = {};
  productConfig.filterOrder.forEach((key) => {
    initialFilters[key] = 'all';
  });

  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState('ourScore');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const [desktopFilters, setDesktopFilters] = useState<Record<DesktopFilterKey, string>>(() =>
    getInitialDesktopFilters(productConfig.id)
  );

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleDesktopFilterChange = (key: DesktopFilterKey, value: string) => {
    setDesktopFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleReset = () => {
    const resetFilters: Record<string, string> = {};
    productConfig.filterOrder.forEach((key) => {
      resetFilters[key] = 'all';
    });
    setFilters(resetFilters);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleDesktopReset = () => {
    setDesktopFilters({ ...DESKTOP_FILTERS_ALL });
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Filter and sort lenders
  const filteredLenders = useMemo(() => {
    let result = [...lendersData];

    if (isDesktop) {
      const { loanType, monthlyRevenue, timeInBusiness, creditScore } = desktopFilters;

      if (loanType !== 'all') {
        result = result.filter((l) => l.productTypes?.includes(loanType));
      }

      if (monthlyRevenue !== 'all') {
        const revenueMap: Record<string, number> = {
          less_10k: 9999,
          '10k_20k': 20000,
          '20k_30k': 30000,
          more_30k: Number.POSITIVE_INFINITY,
        };
        const userRevenue = revenueMap[monthlyRevenue];
        result = result.filter((l) => {
          const min = parseMinRevenue(l.minRevenue);
          if (min == null) return true;

          return min <= userRevenue;
        });
      }

      if (timeInBusiness !== 'all') {
        const userMonthsMap: Record<string, number> = {
          '0_6m': 0,
          '6m_1y': 6,
          '1_2': 12,
          '2_plus': 24,
        };
        const userMonths = userMonthsMap[timeInBusiness];
        result = result.filter((l) => {
          const minMonths = parseMinTimeInBusinessMonths(l.minTimeInBusiness);
          if (minMonths == null) return true;

          return minMonths <= userMonths;
        });
      }

      if (creditScore !== 'all') {
        const creditOrder = ['poor', 'fair', 'good', 'excellent'] as const;
        const userIndex = creditOrder.indexOf(creditScore as (typeof creditOrder)[number]);
        result = result.filter((l) => {
          const cat = normalizeCreditCategory(l.minCreditScore);
          if (!cat) return true;
          const lenderIndex = creditOrder.indexOf(cat);

          return lenderIndex <= userIndex;
        });
      }
    } else {
      // Apply filters dynamically (mobile + existing behavior)
      Object.entries(filters).forEach(([key, value]) => {
        if (value === 'all') return;

        if (key === 'creditScore') {
          const creditOrder = ['poor', 'fair', 'good', 'excellent'];
          const filterIndex = creditOrder.indexOf(value);
          result = result.filter((l) => {
            const lenderIndex = creditOrder.indexOf(normalizeCreditCategory(l.minCreditScore) || '');

            return lenderIndex <= filterIndex;
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
          const revenueOrder = ['less_10k', '10k_20k', '20k_30k', 'more_30k'];
          const filterIndex = revenueOrder.indexOf(value);
          result = result.filter((l) => {
            const lenderIndex = revenueOrder.indexOf(l.minRevenue || '');

            return lenderIndex <= filterIndex;
          });
        } else if (key.includes('timeInBusiness')) {
          const timeOrder = ['0_6m', '6m_1y', '1_2', '2_plus'];
          const filterIndex = timeOrder.indexOf(value);
          result = result.filter((l) => {
            const lenderIndex = timeOrder.indexOf(l.minTimeInBusiness || '');

            return lenderIndex <= filterIndex;
          });
        }
      });
    }

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
  }, [filters, sortBy, lendersData, pinnedLenderIds, isDesktop, desktopFilters]);

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

      <div className={styles.page}>
        {isDesktop ? (
          <ProductComparisonPageDesktop
            productConfig={productConfig}
            lendersData={lendersData}
            faqItems={faqItems}
            lastUpdated={lastUpdated}
            filters={desktopFilters}
            sortBy={sortBy}
            displayedLenders={displayedLenders}
            filteredCount={filteredLenders.length}
            onSortChange={setSortBy}
            onFilterChange={handleDesktopFilterChange}
            onReset={handleDesktopReset}
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
    </>
  );
}
