'use client';

import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import { LoanComparisonCard } from '@/components/LoanComparisonCard/LoanComparisonCard';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import { LoanTypeModal } from '@/components/LoanTypeModal/LoanTypeModal';
import { lenders } from '@/data/lenders';
import cls from './page.module.scss';

const faqItems = [
  {
    question: 'What is the easiest business loan to get?',
    answer:
      'The easiest business loans to get approved for are typically merchant cash advances (MCAs) and invoice factoring, as they have lower credit score requirements (often 500+) and focus more on your business revenue than personal credit. Online lenders like Fundbox and OnDeck also offer faster approval processes compared to traditional banks.',
  },
  {
    question: 'What documents do I need to apply?',
    answer:
      'Most business loan applications require: business tax returns (2-3 years), bank statements (3-6 months), profit and loss statements, balance sheets, business license, articles of incorporation, and personal tax returns. Some lenders may also request accounts receivable aging reports or business plans.',
  },
  {
    question: 'How fast can I get funded?',
    answer:
      'Funding speed varies by lender type. Online lenders like OnDeck and BlueVine can fund within 24-48 hours. Marketplace lenders like Lendio typically take 24-72 hours. Traditional banks may take 1-4 weeks. Merchant cash advances often provide same-day or next-day funding.',
  },
  {
    question: 'Will applying affect my credit score?',
    answer:
      "Most business loan applications will result in a hard credit inquiry, which can temporarily lower your credit score by a few points. However, many marketplace lenders like Lendio allow you to browse offers with only a soft credit check, which doesn't affect your score. Multiple applications within a short period (14-45 days) are typically counted as a single inquiry.",
  },
  {
    question: 'How do business loan marketplaces work?',
    answer:
      'Business loan marketplaces like Lendio and Biz2Credit allow you to fill out one application and receive multiple loan offers from different lenders. They match your business profile with lenders who are likely to approve your application, saving you time from applying to multiple lenders individually. The marketplace earns a commission from the lender if you accept a loan.',
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
                The research was based on the following criteria:
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
                Our team of financial experts evaluated business loan providers based on multiple
                criteria to ensure we recommend only the most reliable and beneficial options for
                business owners.
              </p>
              <p>
                <strong>Loan Terms & Transparency:</strong> We prioritize lenders that offer clear,
                competitive interest rates, flexible repayment terms, and transparent fee
                structures. Hidden fees and unclear terms are red flags that eliminate lenders from
                our recommendations.
              </p>
              <p>
                <strong>Customer Reviews & Reputation:</strong> We analyze thousands of customer
                reviews, Better Business Bureau ratings, and industry reports to assess each
                lender's reputation. Lenders with consistently poor customer service or numerous
                complaints are excluded.
              </p>
              <p>
                <strong>Funding Speed:</strong> In today's business environment, speed matters. We
                favor lenders that can approve and fund loans quickly, typically within 24-72 hours,
                while still maintaining responsible lending practices.
              </p>
              <p>
                <strong>Requirements & Accessibility:</strong> We consider lenders that serve a wide
                range of businesses, including those with lower credit scores or shorter time in
                business. However, we balance accessibility with responsible lending practices.
              </p>
              <p>
                <strong>Ease of Application:</strong> A streamlined, user-friendly application
                process is essential. We prefer lenders with online applications, clear
                documentation requirements, and helpful customer support throughout the process.
              </p>
              <p>
                Our methodology ensures that every lender on this list has been thoroughly vetted
                and meets our high standards for reliability, transparency, and value. We regularly
                update our recommendations as new lenders enter the market and existing ones improve
                their offerings.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={cls.faqSection}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>Frequently Asked Questions</h2>
            <p className={cls.sectionDescription}>
              Get answers to common questions about business loans, application processes, and
              funding options.
            </p>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className={cls.footerCtaSection}>
          <div className={cls.container}>
            <h2 className={cls.footerCtaTitle}>Ready to Get Funding?</h2>
            <p className={cls.footerCtaDescription}>
              Compare offers from multiple lenders and find the best business loan for your needs.
            </p>
            <AppLink href="/business-loan/apply" className={cls.ctaLink}>
              <Button variant="primary" className={cls.ctaButton}>
                Apply Now — Up to $10 Million in Funding
              </Button>
            </AppLink>
          </div>
        </section>
      </div>
    </>
  );
}
