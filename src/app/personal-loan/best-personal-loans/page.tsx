'use client';

import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import { PersonalLoanComparisonCard } from '@/components/PersonalLoanComparisonCard/PersonalLoanComparisonCard';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import { PersonalLoanTypeModal } from '@/components/PersonalLoanTypeModal/PersonalLoanTypeModal';
import { personalLenders } from '@/data/personalLenders';
import cls from './page.module.scss';

const faqItems = [
  {
    question: 'What is the easiest personal loan to get?',
    answer:
      'The easiest personal loans to get approved for are typically from online lenders like Upstart and Avant, which consider factors beyond just credit scores. These lenders often accept credit scores as low as 600 and may consider your education, work history, and income potential. However, easier approval often comes with higher interest rates.',
  },
  {
    question: 'What documents do I need to apply?',
    answer:
      "Most personal loan applications require: proof of identity (driver's license or passport), proof of income (pay stubs, tax returns, or bank statements), proof of address (utility bill or lease), employment verification, and sometimes bank account information. Some lenders may also request additional documentation based on your specific situation.",
  },
  {
    question: 'How fast can I get funded?',
    answer:
      'Funding speed varies by lender. Online lenders like LightStream and SoFi can fund loans within 1-3 business days, with some offering same-day funding. Traditional banks may take 5-7 business days. The fastest funding typically comes from online lenders with automated approval processes.',
  },
  {
    question: 'Will applying affect my credit score?',
    answer:
      "Yes, most personal loan applications result in a hard credit inquiry, which can temporarily lower your credit score by a few points. However, many lenders allow you to check your rate with a soft credit pull first, which doesn't affect your score. Multiple applications within a 14-45 day window are typically counted as a single inquiry for credit scoring purposes.",
  },
  {
    question: 'What is a good APR for a personal loan?',
    answer:
      'A good APR for a personal loan depends on your credit score. For excellent credit (720+), rates below 10% are considered good. For good credit (680-719), rates between 10-15% are reasonable. For fair credit (620-679), rates between 15-25% are typical. Rates above 25% are generally considered high but may be necessary for borrowers with poor credit.',
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
  name: 'Personal Loans',
  description:
    'Compare the best personal loans of 2025 from top lenders. Find fast funding options with competitive rates and flexible terms for your personal financial needs.',
  provider: {
    '@type': 'Organization',
    name: 'OnlineLoans.org',
    url: 'https://www.onlineloans.org',
  },
  category: 'Personal Loan',
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
      name: 'Personal Loans',
      item: 'https://www.onlineloans.org/personal-loan',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Personal Loans of 2025',
      item: 'https://www.onlineloans.org/personal-loan/best-personal-loans',
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

export default function BestPersonalLoansPage() {
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
  };

  return (
    <>
      <PersonalLoanTypeModal onSelect={handleLoanTypeSelect} />
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
            <h1 className={cls.heroTitle}>Best Personal Loans of 2025</h1>
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
                role="Senior Personal Finance Analyst"
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
            <h2 className={cls.sectionTitle}>Compare Top Personal Lenders</h2>
            <p className={cls.sectionDescription}>
              We've evaluated dozens of personal loan providers to bring you the best options for
              2025. Compare rates, terms, and funding speed to find the right fit for your needs.
            </p>
            {showResults && (
              <div className={cls.lendersGrid}>
                {personalLenders.map((lender, index) => (
                  <PersonalLoanComparisonCard key={lender.id} lender={lender} index={index} />
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
            <h2 className={cls.sectionTitle}>How We Selected the Best Personal Loans of 2025</h2>
            <div className={cls.methodologyContent}>
              <p>
                Our team evaluated personal loan providers using three key criteria to identify the
                best options for borrowers in 2025.
              </p>
              <p>
                <strong>Interest Rates:</strong> We prioritize lenders offering competitive,
                transparent interest rates that provide real value to borrowers. We compare annual
                percentage rates (APR) across lenders, including all fees and charges, to ensure
                borrowers get the most cost-effective financing options. Lenders with excessive rates
                or hidden fees are excluded from our recommendations.
              </p>
              <p>
                <strong>Qualifications:</strong> We assess each lender's qualification requirements,
                including minimum credit scores, income thresholds, and employment history. We favor
                lenders that serve a wide range of borrowers while maintaining responsible lending
                standards. This includes options for borrowers with varying credit profiles, from
                excellent credit to those with lower scores, ensuring accessibility without
                compromising loan quality.
              </p>
              <p>
                <strong>Funding Speed:</strong> Speed is critical for borrowers who need capital
                quickly. We prioritize lenders that can approve and fund loans within 24-72 hours,
                with some offering same-day funding for qualified applicants. We evaluate the entire
                process from application submission to funds in your account, ensuring lenders
                deliver on their promised timelines.
              </p>
              <p>
                By focusing on these three essential factors, we ensure every lender on this list
                offers competitive rates, reasonable qualification requirements, and fast funding
                that meets the real-world needs of borrowers.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={cls.faqSection}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>Frequently Asked Questions</h2>
            <p className={cls.sectionDescription}>
              Get answers to common questions about personal loans, application processes, and
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
              Compare offers from multiple lenders and find the best personal loan for your needs.
            </p>
            <AppLink href="/personal-loan/apply" className={cls.ctaLink}>
              <Button variant="primary" className={cls.ctaButton}>
                Apply Now — Get Up to $100,000
              </Button>
            </AppLink>
          </div>
        </section>
      </div>
    </>
  );
}
