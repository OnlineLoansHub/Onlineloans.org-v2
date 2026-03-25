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

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductComparisonPageMobileProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  lastUpdated: string;
  geoState?: string | null;

  filters: Record<string, string>;
  sortBy: string;
  displayedLenders: Brand[];
  filteredCount: number;

  onSortChange: (value: string) => void;
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  onShowMore: () => void;

  hasMore: boolean;

  showAdvertisingDisclosure: boolean;
  advertisingDisclosureText: string;
}

export function ProductComparisonPageMobile({
  productConfig,
  lendersData,
  faqItems,
  lastUpdated,
  geoState,
  filters,
  sortBy,
  displayedLenders,
  filteredCount,
  onSortChange,
  onFilterChange,
  onReset,
  onShowMore,
  hasMore,
  showAdvertisingDisclosure,
  advertisingDisclosureText,
}: ProductComparisonPageMobileProps) {
  const comparisonTitle = `Our Best ${productConfig.displayName} Lenders in ${geoState ?? 'your state'} 2026`;
  const comparisonSubtitle = 'Apply in minutes. Get funded fast.';

  return (
    <>
      {showAdvertisingDisclosure && (
        <div className={styles.advertisingDisclosure}>
          <p className={styles.disclosureText}>{advertisingDisclosureText}</p>
        </div>
      )}

      <Hero
        heroConfig={productConfig.hero}
        validDate={lastUpdated}
        comparisonTitle={comparisonTitle}
        comparisonSubtitle={comparisonSubtitle}
      />

      <section className={styles.mainContent}>
        {/* Mobile Filter and Sort Row */}
        <div className={styles.mobileControlsRow}>
          <SortControl sortBy={sortBy} onSortChange={onSortChange} />
          <FilterModule
            filters={filters}
            filterConfig={productConfig.filters}
            filterOrder={productConfig.filterOrder}
            onFilterChange={onFilterChange}
            onReset={onReset}
            resultCount={filteredCount}
          />
        </div>

        <div className={styles.contentWrapper}>
          <main className={styles.mainArea}>
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
                  <h3 className={styles.emptyStateTitle}>No lenders found</h3>
                  <p className={styles.emptyStateText}>
                    Try adjusting your filters to see more results.
                  </p>
                  <Button variant="secondary" onClick={onReset}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>

            {hasMore && (
              <div className={styles.showMoreContainer}>
                <Button variant="secondary" onClick={onShowMore} className={styles.showMoreButton}>
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
    </>
  );
}

