'use client';

import { useState, useMemo } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import LenderCard from '@/components/loans/LenderCard';
import FilterModule from '@/components/loans/FilterModule';
import SortControl from '@/components/loans/SortControl';
import RecommendationWizard from '@/components/loans/RecommendationWizard';
import ExpandableExplanation from '@/components/loans/ExpandableExplanation';
import CrossPromo from '@/components/loans/CrossPromo';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import type { Brand } from '@/data/brands';
import type { ProductTypeConfig } from '@/data/productTypes';
import styles from '@/app/business-loan/best-business-loans/page.module.scss';

const INITIAL_DISPLAY_COUNT = 5;

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductComparisonPageProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  structuredData?: {
    faqSchema?: any;
    financialProductSchema?: any;
    breadcrumbSchema?: any;
  };
}

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
  structuredData,
}: ProductComparisonPageProps) {
  const lastUpdated = getLastUpdated();

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
    if (sortBy === 'ourScore') {
      const priorityLenders = result.filter((l) => l.id === 1 || l.id === 2 || l.id === 3);
      const otherLenders = result.filter((l) => l.id !== 1 && l.id !== 2 && l.id !== 3);
      otherLenders.sort((a, b) => b.ourScore - a.ourScore);
      const sortedPriority = priorityLenders.sort((a, b) => a.id - b.id);

      return [...sortedPriority, ...otherLenders];
    } else {
      result.sort((a, b) => {
        const aValue = a[sortBy as keyof typeof a] as number | null;
        const bValue = b[sortBy as keyof typeof b] as number | null;
        if (aValue === null && bValue === null) return 0;
        if (aValue === null) return 1;
        if (bValue === null) return -1;

        return bValue - aValue;
      });

      return result;
    }
  }, [filters, sortBy, lendersData]);

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
        <Hero heroConfig={productConfig.hero} validDate={lastUpdated} />

        {/* Main Content */}
        <section className={styles.mainContent}>
          {/* Mobile Filter and Sort Row */}
          <div className={styles.mobileControlsRow}>
            <SortControl sortBy={sortBy} onSortChange={setSortBy} />
            <FilterModule
              filters={filters}
              filterConfig={productConfig.filters}
              filterOrder={productConfig.filterOrder}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              resultCount={filteredLenders.length}
            />
          </div>

          <div className={styles.contentWrapper}>
            {/* Sidebar Filters - Desktop */}
            <aside className={styles.sidebar}>
              <div className={styles.stickySidebar}>
                <FilterModule
                  filters={filters}
                  filterConfig={productConfig.filters}
                  filterOrder={productConfig.filterOrder}
                  onFilterChange={handleFilterChange}
                  onReset={handleReset}
                  resultCount={filteredLenders.length}
                />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className={styles.mainArea}>
              {/* Sort Control - Desktop */}
              <div className={styles.sortControlContainer}>
                <div className={styles.resultsText}>
                  Showing <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
                  <span className={styles.resultsCount}>{filteredLenders.length}</span> providers
                </div>
                <SortControl sortBy={sortBy} onSortChange={setSortBy} />
              </div>

              {/* Lender Cards */}
              <div className={styles.lenderCardsContainer}>
                {displayedLenders.length > 0 ? (
                  displayedLenders.map((lender, index) => (
                    <LenderCard
                      key={lender.id}
                      lender={lender}
                      rank={index + 1}
                      amountLabel={productConfig.amountLabel}
                    />
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <div className={styles.emptyStateIcon}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className={styles.emptyStateTitle}>No providers found</h3>
                    <p className={styles.emptyStateText}>
                      Try adjusting your filters to see more results.
                    </p>
                    <Button variant="secondary" onClick={handleReset}>
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Show More Button */}
              {hasMore && (
                <div className={styles.showMoreContainer}>
                  <Button
                    variant="secondary"
                    onClick={() => setDisplayCount((prev) => prev + 5)}
                    className={styles.showMoreButton}
                  >
                    Show More
                    <ChevronDown className="w-4 h-4 ml-2 inline-block" />
                  </Button>
                </div>
              )}
            </main>
          </div>
        </section>

        {/* Recommendation Wizard */}
        <section className={styles.unifiedSection}>
          <div className={styles.unifiedContainer}>
            <h2 className={styles.unifiedTitle}>
              Find Your Perfect {productConfig.displayName} Match
            </h2>
            <RecommendationWizard lenders={lendersData} wizardConfig={productConfig.wizard} />
          </div>
        </section>

        {/* How Our Total Score Works Section */}
        <section className={styles.unifiedSection}>
          <div className={styles.unifiedContainer}>
            <h2 className={styles.unifiedTitle}>How Our Total Score Works</h2>
            <ExpandableExplanation />
          </div>
        </section>

        {/* Cross Promo Section */}
        <CrossPromo crossPromoConfig={productConfig.crossPromo} />

        {/* FAQ Section */}
        <section className={styles.unifiedSection}>
          <div className={styles.unifiedContainer}>
            <h2 className={styles.unifiedTitle}>Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      </div>
    </>
  );
}
