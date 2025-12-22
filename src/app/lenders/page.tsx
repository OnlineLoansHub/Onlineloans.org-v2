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
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
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
  const [sortBy, setSortBy] = useState('ourScore');
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

    // Apply sorting
    if (sortBy === 'ourScore') {
      // Priority lenders (id: 1 and 2) stay at top when sorting by Our Score
      const priorityLenders = result.filter((l) => l.id === 1 || l.id === 2);
      const otherLenders = result.filter((l) => l.id !== 1 && l.id !== 2);

      // Sort others by ourScore descending
      otherLenders.sort((a, b) => b.ourScore - a.ourScore);

      // Ensure priority order (id 1, then id 2)
      const sortedPriority = priorityLenders.sort((a, b) => a.id - b.id);

      return [...sortedPriority, ...otherLenders];
    } else {
      // Sort all lenders by selected field descending
      result.sort((a, b) => {
        const aValue = a[sortBy as keyof typeof a] as number | null;
        const bValue = b[sortBy as keyof typeof b] as number | null;

        // Handle null values - put them at the end
        if (aValue === null && bValue === null) return 0;
        if (aValue === null) return 1;
        if (bValue === null) return -1;

        // Sort in descending order (highest first)
        return bValue - aValue;
      });

      return result;
    }
  }, [filters, sortBy]);

  const displayedLenders = filteredLenders.slice(0, displayCount);
  const hasMore = displayCount < filteredLenders.length;

  return (
    <div className={styles.page}>
      <Hero validDate="December 21, 2025" />

      {/* Main Content */}
      <section className={styles.mainContent}>
        {/* Mobile Filter and Sort Row */}
        <div className={styles.mobileControlsRow}>
          <SortControl sortBy={sortBy} onSortChange={setSortBy} />
          <FilterModule
            filters={filters}
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
      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>Find Your Perfect Business Loan Match</h2>
          <RecommendationWizard lenders={lendersData} />
        </div>
      </section>

      {/* How Our Total Score Works Section */}
      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>How Our Total Score Works</h2>
          <ExpandableExplanation />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.unifiedSection}>
        <div className={styles.unifiedContainer}>
          <h2 className={styles.unifiedTitle}>Frequently Asked Questions</h2>
          <FAQAccordion
            items={[
              {
                question: 'What is a business loan?',
                answer:
                  'A business loan is a type of financing that provides capital to businesses for various purposes such as expansion, equipment purchase, working capital, or debt consolidation. Business loans typically have fixed or variable interest rates and require repayment over a specified term.',
              },
              {
                question: 'How do I qualify for a business loan?',
                answer:
                  'Qualification requirements vary by lender, but common factors include your credit score, time in business, monthly revenue, and business financials. Most lenders require at least 6-12 months in business, a minimum monthly revenue (often $10,000-$25,000), and a credit score of 550 or higher. Some lenders may also require collateral or a personal guarantee.',
              },
              {
                question: 'How long does it take to get approved for a business loan?',
                answer:
                  'Approval times vary significantly by lender type. Online lenders can approve and fund loans within 24-72 hours, while traditional banks may take several weeks. The speed depends on the loan type, amount, and completeness of your application. Having all required documents ready can significantly speed up the process.',
              },
              {
                question: 'What can I use a business loan for?',
                answer:
                  "Business loans can be used for a variety of purposes including working capital, equipment purchases, inventory, expansion, marketing, debt consolidation, and emergency expenses. However, some lenders may have restrictions on how funds can be used, so it's important to check with your lender before applying.",
              },
              {
                question: 'What is the difference between secured and unsecured business loans?',
                answer:
                  "Secured business loans require collateral (such as equipment, real estate, or inventory) that the lender can claim if you default. These typically offer lower interest rates and higher loan amounts. Unsecured loans don't require collateral but usually have higher interest rates, lower amounts, and stricter qualification requirements.",
              },
              {
                question: 'How much can I borrow with a business loan?',
                answer:
                  "Loan amounts vary widely by lender and your business qualifications. Small business loans typically range from $5,000 to $5,000,000, with most businesses qualifying for $10,000 to $500,000. The amount you can borrow depends on factors like your revenue, credit score, time in business, and the type of loan you're seeking.",
              },
              {
                question: 'What are the typical interest rates for business loans?',
                answer:
                  'Interest rates for business loans vary based on the loan type, lender, your creditworthiness, and market conditions. Rates typically range from 3% to 30% APR. Term loans from banks may offer rates as low as 3-7%, while alternative lenders may charge 7-30%. Short-term loans and merchant cash advances typically have higher rates.',
              },
              {
                question: 'Do I need a business plan to get a loan?',
                answer:
                  "Requirements vary by lender and loan type. Traditional banks often require a detailed business plan, especially for larger loans or newer businesses. Online lenders and alternative financing options typically don't require a formal business plan but may ask for basic business information, financial statements, and revenue documentation.",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
