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
import { lendersData } from '@/components/loans/lendersData';
import { businessLoansConfig } from '@/config/productTypes/businessLoans';
import styles from './page.module.scss';

const INITIAL_DISPLAY_COUNT = 5;

// FAQ items matching the reference page
const faqItems = [
  {
    question: 'What types of business loans are available?',
    answer:
      'Business owners can access several loan types depending on their needs. Term loans provide a lump sum with fixed monthly payments, ideal for large purchases or expansion. Lines of credit offer flexible access to funds as needed, perfect for managing cash flow. Invoice financing allows you to borrow against outstanding invoices, while equipment financing is specifically designed for purchasing business equipment. Revenue-based financing ties repayments to your monthly revenue, making it suitable for businesses with fluctuating income.',
  },
  {
    question: 'What do lenders look for when approving a business loan?',
    answer:
      'Lenders evaluate multiple factors to assess your loan application. Your personal credit score typically needs to be 600 or higher, though some lenders accept scores as low as 500. They review your business revenue history, usually requiring at least $5,000-$10,000 in monthly revenue and 6+ months in business. Lenders also examine your debt-to-income ratio, existing business debt, and your ability to make regular payments. Strong bank statements showing consistent cash flow and a solid business plan significantly improve your approval chances.',
  },
  {
    question: 'Which loans are easiest to qualify for?',
    answer:
      'Merchant cash advances and invoice factoring typically have the most lenient qualification requirements, often accepting credit scores as low as 500 and focusing primarily on your business revenue. Online lenders generally have more flexible criteria than traditional banks, with some requiring just 3-6 months in business and $5,000+ in monthly revenue. Short-term loans and revenue-based financing are also more accessible since they use your future revenue as collateral rather than requiring extensive credit history or assets.',
  },
  {
    question: 'How long does it take to get funding?',
    answer:
      'Funding timelines vary significantly by lender type. Online lenders and marketplaces can approve and fund loans within 24-72 hours, with some offering same-day funding for qualified applicants. Merchant cash advances often provide funding within 24 hours. Traditional banks typically take 1-4 weeks due to more extensive underwriting processes. The speed depends on how quickly you provide required documents, complete the application, and respond to any lender requests for additional information.',
  },
  {
    question: 'Will applying for a business loan affect my credit score?',
    answer:
      "Most business loan applications trigger a hard credit inquiry, which may temporarily lower your score by a few points. However, many marketplace platforms allow you to view potential offers using a soft credit check that doesn't impact your score. Multiple applications within a 14-45 day window are typically counted as a single inquiry by credit bureaus, minimizing the impact. To protect your credit, only apply with lenders you're seriously considering and avoid submitting numerous applications simultaneously.",
  },
  {
    question: 'How do loan marketplaces work?',
    answer:
      'Business loan marketplaces streamline the application process by connecting you with multiple lenders through a single application. You complete one form detailing your business needs, financial situation, and loan requirements. The marketplace then matches your profile with lenders likely to approve your application and presents you with multiple offers to compare. This saves significant time compared to applying individually with each lender. Marketplaces earn a commission from lenders when you accept a loan, so their service is typically free for borrowers.',
  },
  {
    question: 'What should I check before accepting a loan offer?',
    answer:
      "Carefully review the annual percentage rate (APR), which includes both interest and fees, to understand the true cost of borrowing. Examine all fees, including origination fees, prepayment penalties, and late payment charges. Verify the repayment terms, including the loan duration and whether payments are fixed or variable. Check if the lender requires personal guarantees or collateral, which could put your personal assets at risk. Compare multiple offers to ensure you're getting competitive terms that fit your business's cash flow and financial goals.",
  },
  {
    question: 'What documents are usually required?',
    answer:
      "Most lenders require business tax returns from the past 2-3 years and personal tax returns to verify income. You'll need 3-6 months of business bank statements to demonstrate cash flow and revenue consistency. Additional documents often include profit and loss statements, balance sheets, your business license, articles of incorporation, and a voided business check. Some lenders may request accounts receivable aging reports, business plans, or financial projections. Having these documents ready before applying can significantly speed up the approval process.",
  },
  {
    question: 'Can new or low-revenue businesses get approved?',
    answer:
      'Yes, though options are more limited. New businesses with less than 6 months of operation may qualify for merchant cash advances, invoice factoring, or revenue-based financing that focus on future revenue potential rather than historical performance. Businesses with lower revenue can access smaller loan amounts, typically starting around $5,000-$10,000. Some lenders specialize in serving newer businesses and may accept lower credit scores if you can demonstrate strong revenue growth or have valuable collateral. Building a relationship with a lender through smaller initial loans can help you qualify for larger amounts as your business grows.',
  },
  {
    question: 'How much can I realistically borrow?',
    answer:
      "Loan amounts depend on several factors including your business revenue, credit score, time in business, and the lender's policies. Most online lenders offer loans ranging from $5,000 to $500,000, with some extending up to $5 million for well-qualified businesses. Lenders typically cap loans at 10-30% of your annual revenue, so a business generating $500,000 annually might qualify for $50,000-$150,000. Established businesses with strong credit and consistent revenue can access larger amounts, while newer or smaller businesses usually start with lower limits. Your specific borrowing capacity becomes clear after lenders review your financial documents and business profile.",
  },
];

// Structured data schemas
const faqSchema = {
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

const financialProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Business Loans',
  description:
    'Compare the best business loans of 2025 from top lenders. Find fast funding options with competitive rates and flexible terms for your business needs.',
  provider: {
    '@type': 'Organization',
    name: 'OnlineLoans.org',
    url: 'https://www.onlineloans.org',
  },
  category: 'Business Loan',
  feesAndCommissionsSpecification: {
    '@type': 'UnitPriceSpecification',
    priceCurrency: 'USD',
    description: 'OnlineLoans.org may earn a commission from partner offers.',
  },
};

const breadcrumbSchema = {
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
      name: 'Business Loans',
      item: 'https://www.onlineloans.org/business-loan',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Business Loans of 2025',
      item: 'https://www.onlineloans.org/business-loan/best-business-loans',
    },
  ],
};

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

const lastUpdated = getLastUpdated();

export default function BestBusinessLoansPage() {
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
        <Hero heroConfig={businessLoansConfig.hero} validDate={lastUpdated} />

        {/* Main Content */}
        <section className={styles.mainContent}>
          {/* Mobile Filter and Sort Row */}
          <div className={styles.mobileControlsRow}>
            <SortControl sortBy={sortBy} onSortChange={setSortBy} />
            <FilterModule
              filters={filters}
              filterConfig={businessLoansConfig.filters}
              filterOrder={businessLoansConfig.filterOrder}
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
                  filterConfig={businessLoansConfig.filters}
                  filterOrder={businessLoansConfig.filterOrder}
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
            <RecommendationWizard lenders={lendersData} wizardConfig={businessLoansConfig.wizard} />
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
        <CrossPromo crossPromoConfig={businessLoansConfig.crossPromo} />

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
