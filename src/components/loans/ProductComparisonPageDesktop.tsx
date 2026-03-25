import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import LenderCard from '@/components/loans/LenderCard';
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

type DesktopFilterKey = 'loanType' | 'monthlyRevenue' | 'timeInBusiness' | 'creditScore';

const DESKTOP_FILTER_OPTIONS: Record<
  DesktopFilterKey,
  { label: string; options: Array<{ value: string; label: string }> }
> = {
  loanType: {
    label: 'Loan type',
    options: [
      { value: 'all', label: 'All' },
      { value: 'term_loan', label: 'Term loan' },
      { value: 'line_of_credit', label: 'Line of credit' },
      { value: 'working_capital', label: 'Working capital' },
      { value: 'merchant_cash_advance', label: 'Merchant cash advance' },
      { value: 'invoice_financing', label: 'Invoice financing' },
      { value: 'equipment_financing', label: 'Equipment financing' },
      { value: 'sba_loan', label: 'SBA loan' },
      { value: 'other', label: 'Other' },
    ],
  },
  monthlyRevenue: {
    label: 'Monthly revenue',
    options: [
      { value: 'all', label: 'All' },
      { value: 'less_10k', label: 'Less than $10K' },
      { value: '10k_20k', label: '$10K–$20K' },
      { value: '20k_30k', label: '$20K–$30K' },
      { value: 'more_30k', label: 'More than $30K' },
    ],
  },
  timeInBusiness: {
    label: 'Time in business',
    options: [
      { value: 'all', label: 'All' },
      { value: '0_6m', label: '0–6 months' },
      { value: '6m_1y', label: '6 months–1 year' },
      { value: '1_2', label: '1–2 years' },
      { value: '2_plus', label: '2+ years' },
    ],
  },
  creditScore: {
    label: 'Credit score',
    options: [
      { value: 'all', label: 'All' },
      { value: 'poor', label: 'Poor (350–629)' },
      { value: 'fair', label: 'Fair (630–689)' },
      { value: 'good', label: 'Good (690–719)' },
      { value: 'excellent', label: 'Excellent (720–850)' },
    ],
  },
};

interface ProductComparisonPageDesktopProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  lastUpdated: string;
  geoState?: string | null;

  filters: Record<DesktopFilterKey, string>;
  sortBy: string;
  displayedLenders: Brand[];
  filteredCount: number;

  onSortChange: (value: string) => void;
  onFilterChange: (key: DesktopFilterKey, value: string) => void;
  onReset: () => void;
  onShowMore: () => void;

  hasMore: boolean;
}

export function ProductComparisonPageDesktop({
  productConfig,
  lendersData,
  faqItems,
  lastUpdated,
  geoState,
  filters,
  sortBy: _sortBy,
  displayedLenders,
  filteredCount,
  onSortChange: _onSortChange,
  onFilterChange,
  onReset,
  onShowMore,
  hasMore,
}: ProductComparisonPageDesktopProps) {
  const comparisonTitle = `Our Best ${productConfig.displayName} Lenders in ${geoState ?? 'your state'} 2026`;
  const comparisonSubtitle = 'Apply in minutes. Get funded fast.';

  return (
    <>
      <Hero
        heroConfig={productConfig.hero}
        validDate={lastUpdated}
        comparisonTitle={comparisonTitle}
        comparisonSubtitle={comparisonSubtitle}
      />

      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Main Content Area */}
          <main className={styles.mainArea}>
            {/* Desktop filter bar */}
            <div className={styles.desktopFilterBar}>
              <div className={styles.desktopFilterBarHeader}>
                <div className={styles.desktopFilterBarTitle}>
                  Are you eligible for a better rate?
                </div>
                <div className={styles.desktopFilterBarMeta}>
                  Showing{' '}
                  <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
                  <span className={styles.resultsCount}>{filteredCount}</span> lenders
                </div>
              </div>

              <div className={styles.desktopFilterBarControls}>
                {(Object.keys(DESKTOP_FILTER_OPTIONS) as DesktopFilterKey[]).map((key) => {
                  const config = DESKTOP_FILTER_OPTIONS[key];

                  return (
                    <label key={key} className={styles.desktopFilterControl}>
                      <span className={styles.desktopFilterLabel}>{config.label}</span>
                      <select
                        className={styles.desktopFilterSelect}
                        value={filters[key]}
                        onChange={(e) => onFilterChange(key, e.target.value)}
                      >
                        {config.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  );
                })}

                <button type="button" className={styles.desktopFilterReset} onClick={onReset}>
                  Reset
                </button>
              </div>
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

            {/* Show More Button */}
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

