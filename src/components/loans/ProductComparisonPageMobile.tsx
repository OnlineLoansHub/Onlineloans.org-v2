import { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import ComparisonHeroFundV4 from '@/components/loans/ComparisonHeroFundV4';
import LenderCard from '@/components/loans/LenderCard';
import LenderDeepDiveSections, {
  useLenderDeepDiveScroll,
} from '@/components/loans/LenderDeepDiveSections';
import FilterModule from '@/components/loans/FilterModule';
import SortControl from '@/components/loans/SortControl';
import RecommendationWizard from '@/components/loans/RecommendationWizard';
import ExpandableExplanation from '@/components/loans/ExpandableExplanation';
import CrossPromo from '@/components/loans/CrossPromo';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import type { Brand } from '@/data/brands';
import type { ProductTypeConfig } from '@/data/productTypes';
import { useComparisonDesignVariant } from '@/contexts/ComparisonDesignVariantContext';
import { getComparisonHeroFundV4Props } from '@/lib/comparisonFundV4Hero';
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
  const designVariant = useComparisonDesignVariant();
  const isFundHeroV4 = designVariant === '4';
  const fundV4HeroProps = useMemo(
    () => getComparisonHeroFundV4Props(productConfig, lastUpdated),
    [productConfig, lastUpdated]
  );
  const comparisonMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const comparisonTitlePrefix = 'Best ';
  const comparisonTitleHighlightText =
    productConfig.comparisonHeroHighlight ?? productConfig.displayName;
  const comparisonTitleSuffix = ` of ${comparisonMonth} ${new Date().getFullYear()}`;
  const comparisonSubtitleSecondary =
    'Apply in minutes. Get funded fast.';
  const scrollToLender = useLenderDeepDiveScroll();

  return (
    <>
      {showAdvertisingDisclosure && !isFundHeroV4 ? (
        <div className={styles.advertisingDisclosure}>
          <p className={styles.disclosureText}>{advertisingDisclosureText}</p>
        </div>
      ) : null}

      {isFundHeroV4 ? (
        <ComparisonHeroFundV4
          {...fundV4HeroProps}
          primaryCta={{ label: 'Compare top lenders', scrollToId: 'comparison-lenders' }}
        />
      ) : (
        <Hero
          heroConfig={productConfig.hero}
          validDate={lastUpdated}
          comparisonTitlePrefix={comparisonTitlePrefix}
          comparisonTitleHighlightText={comparisonTitleHighlightText}
          comparisonTitleSuffix={comparisonTitleSuffix}
          comparisonSubtitleSecondary={comparisonSubtitleSecondary}
          showTrustBadges={false}
        />
      )}

      <section
        className={
          isFundHeroV4
            ? `${styles.mainContent} ${styles.mainContentAfterFundV4Hero}`
            : styles.mainContent
        }
      >
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

        <div className={styles.mobileResultsMeta}>
          Showing <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
          <span className={styles.resultsCount}>{lendersData.length}</span> lenders
        </div>

        <div className={styles.contentWrapper}>
          <main className={styles.mainArea}>
            <div className={styles.lenderCardsContainer} id="comparison-lenders">
              {displayedLenders.length > 0 ? (
                displayedLenders.map((lender, index) => (
                  <LenderCard
                    key={lender.id}
                    lender={lender}
                    rank={index + 1}
                    amountLabel={productConfig.amountLabel}
                    onReadMore={scrollToLender}
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

      {/* Lender Deep Dives */}
      {lendersData.length > 0 ? (
        <section className={styles.unifiedSection}>
          <div className={styles.unifiedContainer}>
            <h2 className={styles.unifiedTitle}>Read more about each lender</h2>
            <LenderDeepDiveSections lenders={displayedLenders} />
          </div>
        </section>
      ) : null}

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
      {productConfig.crossPromo ? (
        <CrossPromo crossPromoConfig={productConfig.crossPromo} />
      ) : null}

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

