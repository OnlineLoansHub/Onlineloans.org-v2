'use client';

import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

import DisclosureBar from '@/components/loans/DisclosureBar';
import Header from '@/components/loans/Header';
import Hero from '@/components/loans/Hero';
import LenderCard from '@/components/loans/LenderCard';
import FilterModule from '@/components/loans/FilterModule';
import SortControl from '@/components/loans/SortControl';
import RecommendationWizard from '@/components/loans/RecommendationWizard';
import CrossPromo from '@/components/loans/CrossPromo';
import EducationalContent from '@/components/loans/EducationalContent';
import Footer from '@/components/loans/Footer';
import { lendersData } from '@/components/loans/lendersData';

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

    // Sort
    result.sort((a, b) => {
      const aVal = (a[sortBy as keyof typeof a] as number) || 0;
      const bVal = (b[sortBy as keyof typeof b] as number) || 0;

      return bVal - aVal;
    });

    return result;
  }, [filters, sortBy]);

  const displayedLenders = filteredLenders.slice(0, displayCount);
  const hasMore = displayCount < filteredLenders.length;

  return (
    <div className="min-h-screen bg-white">
      <Hero validDate="December 21, 2025" />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <FilterModule
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                resultCount={filteredLenders.length}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Sort Control */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="text-sm text-slate-600">
                Showing{' '}
                <span className="font-semibold text-slate-900">{displayedLenders.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{filteredLenders.length}</span>{' '}
                lenders
              </div>
              <SortControl sortBy={sortBy} onSortChange={setSortBy} />
            </div>

            {/* Lender Cards */}
            <div className="space-y-6">
              {displayedLenders.length > 0 ? (
                displayedLenders.map((lender, index) => (
                  <LenderCard key={lender.id} lender={lender} rank={index + 1} />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="text-slate-400 mb-4">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No lenders found</h3>
                  <p className="text-slate-600 mb-4">
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
              <div className="mt-8 text-center">
                <Button
                  variant="secondary"
                  onClick={() => setDisplayCount((prev) => prev + 5)}
                  className="px-8 py-3 text-lg"
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
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecommendationWizard lenders={lendersData} />
        </div>
      </div>

      {/* Cross Promo */}
      <CrossPromo />

      {/* Educational Content */}
      <EducationalContent />
 
    </div>
  );
}
