import { useMemo } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import ComparisonHeroFundV4 from '@/components/loans/ComparisonHeroFundV4';
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
import { getComparisonConversionHeroCopy } from '@/lib/comparisonConversionHeroCopy';
import type { Brand } from '@/data/brands';
import type { ProductTypeConfig } from '@/data/productTypes';
import styles from '@/app/business-loan/best-business-loans/page.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductComparisonPageDesktopProps {
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
  const isConversionV1 = designVariant === '1';
  const isFundHeroV4 = designVariant === '4';
  const heroCopy = useMemo(
    () => getComparisonConversionHeroCopy(productConfig.id, productConfig.displayName),
    [productConfig.displayName, productConfig.id]
  );

  const featuredLender = displayedLenders[0];
  const otherLenders = displayedLenders.slice(1);

  const comparisonMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const comparisonYear = new Date().getFullYear();
  const comparisonLendersForMonthYear = `${comparisonMonth} ${comparisonYear}`;
  const isFundHeroV2 = designVariant === '2' && productConfig.id === 'business-loans';
  const isFundHeroDefault =
    designVariant === 'default' && productConfig.id === 'business-loans';
  const isFundHero = isFundHeroV2 || isFundHeroDefault;
  const comparisonSubtitle = isFundHero
    ? 'Find funding that fits your business'
    : 'Apply in minutes. Get funded fast.';
  const comparisonSubtitleSecondary =
    'With lower rates, you can boost your business while saving thousands on payments. Compare our top\nlenders and lock in your rate today.';
  const comparisonSubtitleSecondaryV2 = isFundHero
    ? undefined
    : comparisonSubtitleSecondary;
  const fundV4Title =
    productConfig.id === 'business-loans'
      ? `Best Business Loans of ${comparisonLendersForMonthYear}`
      : `Best ${productConfig.comparisonHeroHighlight ?? productConfig.displayName} of ${comparisonLendersForMonthYear}`;
  const fundV4Tagline =
    productConfig.id === 'business-loans'
      ? 'Find funding that fits your business'
      : 'Apply in minutes. Get funded fast.';
  const fundV4ExploreBlurb =
    productConfig.id === 'business-loans'
      ? 'Explore the top business lenders and compare offers to find financing that fits your goals—all in one place.'
      : undefined;
  const scrollToLender = useLenderDeepDiveScroll();

  const moreOptionsTitle = heroCopy.moreOptionsTitle ?? 'More financing options';
  const moreOptionsSub =
    heroCopy.moreOptionsSub ?? 'Compare additional lenders when you are ready.';

  const desktopFilterBar = (
    <div className={styles.desktopFilterBar}>
      <div className={styles.desktopFilterBarHeader}>
        <div className={styles.desktopFilterBarTitle}>
          <Settings className={styles.desktopFilterBarTitleIcon} strokeWidth={2} aria-hidden />
          <span>Narrow your matches</span>
        </div>
        <div className={styles.desktopFilterBarMeta}>
          Showing <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
          <span className={styles.resultsCount}>{lendersData.length}</span> results
        </div>
      </div>

      <div className={styles.desktopFilterBarControls}>
        <div className={styles.desktopFilterBarSelects}>
          {productConfig.filterOrder.map((key) => {
            const config = productConfig.filters[key];
            if (!config) return null;

            return (
              <label key={key} className={styles.desktopFilterControl}>
                <span className={styles.desktopFilterLabel}>{config.label}</span>
                <select
                  className={styles.desktopFilterSelect}
                  value={filters[key] ?? 'all'}
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
        </div>
        <button type="button" className={styles.desktopFilterReset} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );

  const mainContentClassName = isConversionV1
    ? `${styles.mainContent} ${styles.mainContentConversion}`
    : styles.mainContent;

  return (
    <>
      {isConversionV1 ? (
        <BusinessDesktopConversionHero
          featuredLender={featuredLender}
          filteredLenderCount={filteredCount}
          heroCopy={heroCopy}
        />
      ) : isFundHeroV4 ? (
        <ComparisonHeroFundV4
          title={fundV4Title}
          tagline={fundV4Tagline}
          validAsOf={lastUpdated}
          exploreBlurb={productConfig.id === 'business-loans' ? undefined : fundV4ExploreBlurb}
          benefitChips={
            productConfig.id === 'business-loans'
              ? [
                  'No impact to credit score',
                  'Compare lenders in minutes',
                  'From $5,000 to $1M+',
                ]
              : undefined
          }
          showTrustBadges
          badgeImagePath={productConfig.hero.badgeImagePath}
        />
      ) : (
        <Hero
          heroConfig={productConfig.hero}
          validDate={lastUpdated}
          comparisonTitle={
            isFundHero
              ? `Best Business Loans of ${comparisonLendersForMonthYear}`
              : undefined
          }
          comparisonTitlePrefix={isFundHero ? undefined : 'Our Best '}
          comparisonTitleHighlightText={
            isFundHero
              ? undefined
              : (productConfig.comparisonHeroHighlight ?? productConfig.displayName)
          }
          comparisonLendersForMonthYear={isFundHero ? undefined : comparisonLendersForMonthYear}
          comparisonSubtitle={comparisonSubtitle}
          comparisonSubtitleSecondary={comparisonSubtitleSecondaryV2}
          showTrustBadges={isFundHero ? true : false}
          designVariant={designVariant}
        />
      )}

      <section className={mainContentClassName}>
        <div className={styles.contentWrapper}>
          <main className={styles.mainArea}>
            {isConversionV1 ? (
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
                    <h2 className={styles.conversionSectionTitle}>{moreOptionsTitle}</h2>
                    <p className={styles.conversionSectionSub}>{moreOptionsSub}</p>
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
                    <p className={styles.midConversionCtaTitle}>
                      Still comparing? Lock in your top pick.
                    </p>
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

      {lendersData.length > 0 ? (
        <section className={styles.unifiedSection}>
          <div className={styles.unifiedContainer}>
            <h2 className={styles.unifiedTitle}>Read more about each lender</h2>
            <LenderDeepDiveSections lenders={displayedLenders} />
          </div>
        </section>
      ) : null}

      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>
            Find Your Perfect {productConfig.displayName} Match
          </h2>
          <RecommendationWizard lenders={lendersData} wizardConfig={productConfig.wizard} />
        </div>
      </section>

      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>How Our Total Score Works</h2>
          <ExpandableExplanation />
        </div>
      </section>

      {productConfig.crossPromo ? <CrossPromo crossPromoConfig={productConfig.crossPromo} /> : null}

      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
