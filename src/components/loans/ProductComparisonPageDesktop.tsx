import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import LenderCard from '@/components/loans/LenderCard';
import LenderDeepDiveSections, {
  useLenderDeepDiveScroll,
} from '@/components/loans/LenderDeepDiveSections';
import RecommendationWizard from '@/components/loans/RecommendationWizard';
import ExpandableExplanation from '@/components/loans/ExpandableExplanation';
import CrossPromo from '@/components/loans/CrossPromo';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import {
  BusinessDesktopConversionHero,
  BusinessLoanPrimaryCta,
} from '@/components/loans/BusinessDesktopConversionHero';
import { useComparisonDesignVariant } from '@/contexts/ComparisonDesignVariantContext';
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
      { value: 'lt_5k', label: 'Less than $5K' },
      { value: '5k_plus', label: '$5K+' },
      { value: '10k_plus', label: '$10K+' },
      { value: '20k_plus', label: '$20K+' },
      { value: '30k_plus', label: '$30K+' },
    ],
  },
  timeInBusiness: {
    label: 'Time in business',
    options: [
      { value: 'all', label: 'All' },
      { value: 'lt_6m', label: 'Less than 6 months' },
      { value: '6m_plus', label: '6 months+' },
      { value: '1y_plus', label: '1 year+' },
      { value: '5y_plus', label: '5 years+' },
      { value: '10y_plus', label: '10 years+' },
    ],
  },
  creditScore: {
    label: 'Credit score',
    options: [
      { value: 'all', label: 'All' },
      { value: 'lt_500', label: 'Less than 500' },
      { value: '500_plus', label: '500+' },
      { value: '550_plus', label: '550+' },
      { value: '600_plus', label: '600+' },
      { value: '650_plus', label: '650+' },
      { value: '700_plus', label: '700+' },
    ],
  },
};

interface ProductComparisonPageDesktopProps {
  productConfig: ProductTypeConfig;
  lendersData: Brand[];
  faqItems: FAQItem[];
  lastUpdated: string;

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
  const designVariant = useComparisonDesignVariant();
  const isBusinessConversionV1 =
    productConfig.id === 'business-loans' && designVariant === '1';
  const featuredLender = displayedLenders[0];
  const otherLenders = displayedLenders.slice(1);

  const comparisonMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const comparisonYear = new Date().getFullYear();
  const comparisonLendersForMonthYear = `${comparisonMonth} ${comparisonYear}`;
  const comparisonSubtitle = 'Apply in minutes. Get funded fast.';
  const comparisonSubtitleSecondary =
    'With lower rates, you can boost your business while saving thousands on payments. Compare our top\nlenders and lock in your rate today.';
  const scrollToLender = useLenderDeepDiveScroll();

  const desktopFilterBar = (
    <div className={styles.desktopFilterBar}>
      <div className={styles.desktopFilterBarHeader}>
        <div className={styles.desktopFilterBarTitle}>
          <Settings className={styles.desktopFilterBarTitleIcon} strokeWidth={2} aria-hidden />
          <span>Are you eligible for a better rate?</span>
        </div>
        <div className={styles.desktopFilterBarMeta}>
          Showing <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
          <span className={styles.resultsCount}>{lendersData.length}</span> lenders
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
  );

  const mainContentClassName = isBusinessConversionV1
    ? `${styles.mainContent} ${styles.mainContentConversion}`
    : styles.mainContent;

  return (
    <>
      {isBusinessConversionV1 ? (
        <BusinessDesktopConversionHero
          featuredLender={featuredLender}
          filteredLenderCount={filteredCount}
        />
      ) : (
        <Hero
          heroConfig={productConfig.hero}
          validDate={lastUpdated}
          comparisonTitlePrefix="Our Best "
          comparisonTitleHighlightText={
            productConfig.comparisonHeroHighlight ?? productConfig.displayName
          }
          comparisonLendersForMonthYear={comparisonLendersForMonthYear}
          comparisonSubtitle={comparisonSubtitle}
          comparisonSubtitleSecondary={comparisonSubtitleSecondary}
          showTrustBadges={false}
        />
      )}

      <section className={mainContentClassName}>
        <div className={styles.contentWrapper}>
          <main className={styles.mainArea}>
            {isBusinessConversionV1 ? (
              <>
                {featuredLender ? (
                  <div id="featured-lender-card" className={styles.featuredLenderWrap}>
                    <LenderCard
                      key={featuredLender.id}
                      lender={featuredLender}
                      rank={1}
                      amountLabel={productConfig.amountLabel}
                      onReadMore={scrollToLender}
                      conversionDesktop
                      conversionFeatured
                    />
                  </div>
                ) : null}

                {otherLenders.length > 0 ? (
                  <>
                    <h2 className={styles.conversionSectionTitle}>More financing options</h2>
                    <p className={styles.conversionSectionSub}>
                      Compare additional lenders when you&apos;re ready.
                    </p>
                  </>
                ) : null}

                <div className={styles.lenderCardsContainer}>
                  {otherLenders.length > 0 ? (
                    otherLenders.map((lender, index) => (
                      <LenderCard
                        key={lender.id}
                        lender={lender}
                        rank={index + 2}
                        amountLabel={productConfig.amountLabel}
                        onReadMore={scrollToLender}
                        conversionDesktop
                      />
                    ))
                  ) : !featuredLender ? (
                    <div className={styles.emptyState}>
                      <h3 className={styles.emptyStateTitle}>No lenders found</h3>
                      <p className={styles.emptyStateText}>
                        Try adjusting your filters below to see more results.
                      </p>
                      <Button variant="secondary" onClick={onReset}>
                        Reset Filters
                      </Button>
                    </div>
                  ) : null}
                </div>

                {featuredLender && displayedLenders.length > 0 ? (
                  <div className={styles.midConversionCta}>
                    <p className={styles.midConversionCtaTitle}>Still comparing? Lock in your top pick.</p>
                    <div className="flex justify-center">
                      <BusinessLoanPrimaryCta
                        lender={featuredLender}
                        label="Check your rates"
                        className="w-full max-w-md"
                      />
                    </div>
                  </div>
                ) : null}

                <p className={styles.filtersBelowFoldLabel}>Refine your matches</p>
                {desktopFilterBar}
              </>
            ) : (
              <>
                {desktopFilterBar}

                <div className={styles.lenderCardsContainer}>
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
              </>
            )}

            {hasMore && (
              <div className={styles.showMoreContainer}>
                <Button variant="secondary" onClick={onShowMore} className={styles.showMoreButton}>
                  Show More
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
      {productConfig.crossPromo ? <CrossPromo crossPromoConfig={productConfig.crossPromo} /> : null}

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
