'use client';

import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { LoanComparisonCard } from '@/components/LoanComparisonCard/LoanComparisonCard';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import { LoanTypeModal } from '@/components/LoanTypeModal/LoanTypeModal';
import { lenders } from '@/data/lenders';
import cls from './page.module.scss';

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
  // Initialize state from sessionStorage if available
  const [_selectedLoanType, setSelectedLoanType] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedLoanType');
    }

    return null;
  });
  const [showResults, setShowResults] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('selectedLoanType');
    }

    return false;
  });

  const handleLoanTypeSelect = (loanType: string) => {
    setSelectedLoanType(loanType);
    setShowResults(true);
    // Optionally reload the page or filter results based on loan type
    // window.location.reload();
  };

  return (
    <>
      <LoanTypeModal onSelect={handleLoanTypeSelect} />
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

      <div className={cls.wrapper}>
        {/* Hero Section */}
        <section className={cls.hero}>
          <div className={cls.container} style={{ position: 'relative', zIndex: 1 }}>
            <h1 className={cls.heroTitle}>Best Business Loans of 2025</h1>
            <div className={cls.heroSubtitle}>
              <p className={cls.heroSubtitleText}>
                The research is based on the following criteria:
              </p>
              <ul className={cls.heroSubtitleList}>
                <li>Interest Rates %</li>
                <li>Qualifications</li>
                <li>Funding speed</li>
              </ul>
            </div>
            <div className={cls.writtenByWrapper}>
              <WrittenBy
                name="Michael Thompson"
                role="Senior Business Finance Analyst"
                imageUrl="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
                variant="dark"
              />
            </div>
            <div className={cls.heroMeta}>
              <p className={cls.lastUpdated}>Last Updated: {lastUpdated}</p>
            </div>
            <div className={cls.trustBadges}>
              <Image
                src="/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg"
                alt="BBB and Trustpilot badges"
                width={350}
                height={53}
                className={cls.trustBadgesImage}
              />
            </div>
          </div>
        </section>

        {/* Lender Comparison Section */}
        <section className={cls.lendersSection}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>Compare Top Business Lenders</h2>
            <p className={cls.sectionDescription}>
              We've evaluated dozens of business loan providers to bring you the best options for
              2025. Compare rates, terms, and funding speed to find the right fit for your business.
            </p>
            {showResults && (
              <div className={cls.lendersGrid}>
                {lenders.map((lender, index) => (
                  <LoanComparisonCard key={lender.id} lender={lender} index={index} />
                ))}
              </div>
            )}
            {!showResults && (
              <div className={cls.placeholderContent}>
                <p>Please select a loan type to see recommendations.</p>
              </div>
            )}
          </div>
        </section>

        {/* Methodology Section */}
        <section className={cls.methodologySection}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>How We Selected the Best Business Loans of 2025</h2>
            <div className={cls.methodologyContent}>
              <p>
                Our team evaluated business loan providers using three key criteria to identify the
                best options for business owners in 2025.
              </p>
              <p>
                <strong>Interest Rates:</strong> We prioritize lenders offering competitive,
                transparent interest rates that provide real value to borrowers. We compare annual
                percentage rates (APR) across lenders, including all fees and charges, to ensure
                business owners get the most cost-effective financing options. Lenders with
                excessive rates or hidden fees are excluded from our recommendations.
              </p>
              <p>
                <strong>Qualifications:</strong> We assess each lender's qualification requirements,
                including minimum credit scores, time in business, and revenue thresholds. We favor
                lenders that serve a wide range of businesses while maintaining responsible lending
                standards. This includes options for businesses with varying credit profiles, from
                excellent credit to those with lower scores, ensuring accessibility without
                compromising loan quality.
              </p>
              <p>
                <strong>Funding Speed:</strong> Speed is critical for business owners who need
                capital quickly. We prioritize lenders that can approve and fund loans within 24-72
                hours, with some offering same-day funding for qualified applicants. We evaluate the
                entire process from application submission to funds in your account, ensuring
                lenders deliver on their promised timelines.
              </p>
              <p>
                By focusing on these three essential factors, we ensure every lender on this list
                offers competitive rates, reasonable qualification requirements, and fast funding
                that meets the real-world needs of business owners.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={cls.faqSection}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>Frequently Asked Questions</h2>
            <p className={cls.sectionDescription}>
              Get answers to common questions about business loans, application processes, and
              funding options.
            </p>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      </div>
    </>
  );
}
