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

  // Initialize filters based on filterOrder
  const initialFilters: Record<string, string> = {};
  productConfig.filterOrder.forEach((key) => {
    initialFilters[key] = 'all';
  });

  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState('ourScore');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
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

  // Filter and sort lenders
  const filteredLenders = useMemo(() => {
    let result = [...lendersData];

    // Apply filters dynamically
    Object.entries(filters).forEach(([key, value]) => {
      if (value === 'all') return;

      if (key === 'creditScore') {
        const creditOrder = ['poor', 'fair', 'good', 'excellent'];
        const filterIndex = creditOrder.indexOf(value);
        result = result.filter((l) => {
          const lenderIndex = creditOrder.indexOf(l.minCreditScore || '');

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

    // Apply sorting
    result.sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a] as number | null;
      const bValue = b[sortBy as keyof typeof b] as number | null;
      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return 1;
      if (bValue === null) return -1;

      return bValue - aValue;
    });

    // Optional: pin specific lenders to the top when sorting by Our Score
    if (sortBy === 'ourScore' && pinnedLenderIds && pinnedLenderIds.length > 0) {
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

      <div className={styles.page}>
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
    </>
  );
}
