'use client';

import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import Hero from '@/components/loans/Hero';
import LenderCard from '@/components/loans/LenderCard';
import FilterModule from '@/components/loans/FilterModule';
import SortControl from '@/components/loans/SortControl';
import RecommendationWizard from '@/components/loans/RecommendationWizard';
import ExpandableExplanation from '@/components/loans/ExpandableExplanation';
import { lendersData } from '@/components/loans/lendersData';
import styles from './page.module.scss';

const INITIAL_DISPLAY_COUNT = 5;

export default function LendersPage() {
  const [filters, setFilters] = useState({
    loanType: 'all',
    monthlyRevenue: 'all',
    timeInBusiness: 'all',
    creditScore: 'all',
    loanAmount: 'all',
  });
  const [sortBy, setSortBy] = useState('totalScore');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleReset = () => {
    setFilters({
      loanType: 'all',
      monthlyRevenue: 'all',
      timeInBusiness: 'all',
      creditScore: 'all',
      loanAmount: 'all',
    });
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Filter and sort lenders
  const filteredLenders = useMemo(() => {
    let result = [...lendersData];

    // Apply filters
    if (filters.loanType !== 'all') {
      result = result.filter((l) => l.loanTypes?.includes(filters.loanType));
    }

    if (filters.creditScore !== 'all') {
      const creditOrder = ['poor', 'fair', 'good', 'excellent'];
      const filterIndex = creditOrder.indexOf(filters.creditScore);

      result = result.filter((l) => {
        const lenderIndex = creditOrder.indexOf(l.minCreditScore || '');

        return lenderIndex <= filterIndex;
      });
    }

    if (filters.monthlyRevenue !== 'all') {
      const revenueOrder = ['less_10k', '10k_20k', '20k_30k', 'more_30k'];
      const filterIndex = revenueOrder.indexOf(filters.monthlyRevenue);

      result = result.filter((l) => {
        const lenderIndex = revenueOrder.indexOf(l.minRevenue || '');

        return lenderIndex <= filterIndex;
      });
    }

    if (filters.timeInBusiness !== 'all') {
      const timeOrder = ['0_6m', '6m_1y', '1_2', '2_plus'];
      const filterIndex = timeOrder.indexOf(filters.timeInBusiness);

      result = result.filter((l) => {
        const lenderIndex = timeOrder.indexOf(l.minTimeInBusiness || '');

        return lenderIndex <= filterIndex;
      });
    }

    if (filters.loanAmount !== 'all') {
      result = result.filter(
        (l) => l.loanAmountRange === filters.loanAmount || l.loanAmountRange === '100k_plus'
      );
    }

    return result;
  }, [filters]);

  const displayedLenders = filteredLenders.slice(0, displayCount);
  const hasMore = displayCount < filteredLenders.length;

  return (
    <div className={styles.page}>
      <Hero validDate="December 21, 2025" />

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Sidebar Filters - Desktop */}
          <aside className={styles.sidebar}>
            <div className={styles.stickySidebar}>
              <FilterModule
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                resultCount={filteredLenders.length}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className={styles.mainArea}>
            {/* Sort Control */}
            <div className={styles.sortControlContainer}>
              <div className={styles.resultsText}>
                Showing <span className={styles.resultsCount}>{displayedLenders.length}</span> of{' '}
                <span className={styles.resultsCount}>{filteredLenders.length}</span> lenders
              </div>
              <SortControl sortBy={sortBy} onSortChange={setSortBy} />
            </div>

            {/* Lender Cards */}
            <div className={styles.lenderCardsContainer}>
              {displayedLenders.length > 0 ? (
                displayedLenders.map((lender, index) => (
                  <LenderCard key={lender.id} lender={lender} rank={index + 1} />
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
      <div className={styles.recommendationSection}>
        <div className={styles.recommendationContainer}>
          <RecommendationWizard lenders={lendersData} />
        </div>
      </div>

      {/* How Our Total Score Works Section */}
      <div className="mt-12 mb-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExpandableExplanation />
      </div>
    </div>
  );
}
