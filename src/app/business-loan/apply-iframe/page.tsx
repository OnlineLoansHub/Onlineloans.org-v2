'use client';

import Image from 'next/image';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import { IframeEmbed } from '@/components/iframes';
import cls from './page.module.scss';

export default function BusinessLoanLoanIframeLandingPage() {
  return (
    <div className={cls.page}>
      {/* Hero Section */}
      <section className={cls.hero}>
        <div className={cls.container} style={{ position: 'relative', zIndex: 1 }}>
          <h1 className={cls.heroTitle}>Borrow up to $90,000 with good & bad credit</h1>
          <div className={cls.heroSubtitle}>
            <p className={cls.heroSubtitleText}>Apply for a personal loan:</p>
            <ul className={cls.heroSubtitleList}>
              <li>Fixed rates as low as 6.5% - 35.99% APR</li>
              <li>Check your rate in 5 minutes</li>
              <li>Funds sent in as fast as 24 hours</li>
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
            <p className={cls.lastUpdated}>Last Updated: December 14, 2025</p>
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

      {/* Iframe Section - Primary Focus */}
      <section id="application-form-section" className={cls.iframeSection}>
        <div id="application-form-wrapper">
          <IframeEmbed iframeId="PL-LeadStackStyle3" />
        </div>
      </section>

      {/* Micro Reassurance */}
      <section className={cls.reassuranceSection}>
        <div className={cls.container}>
          <p className={cls.reassuranceText}>
            Takes only a few minutes • Your information is secure • No obligation to accept an offer
          </p>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className={cls.trustSection}>
        <div className={cls.container}>
          <h2 className={cls.trustTitle}>Your Security & Privacy Are Protected</h2>
          <div className={cls.trustContent}>
            <div className={cls.trustItem}>
              <svg
                className={cls.trustIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={cls.trustItemContent}>
                <h3 className={cls.trustItemTitle}>Fully Licensed & Compliant</h3>
                <p className={cls.trustItemDescription}>
                  We operate in full compliance with all state and federal lending laws. Our
                  platform is licensed and regulated, ensuring your rights are protected throughout
                  the process.
                </p>
              </div>
            </div>
            <div className={cls.trustItem}>
              <svg
                className={cls.trustIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <div className={cls.trustItemContent}>
                <h3 className={cls.trustItemTitle}>Bank-Level Encryption</h3>
                <p className={cls.trustItemDescription}>
                  Your personal and financial information is protected with industry-standard SSL
                  encryption. We use the same security measures as major banks to keep your data
                  safe.
                </p>
              </div>
            </div>
            <div className={cls.trustItem}>
              <svg
                className={cls.trustIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={cls.trustItemContent}>
                <h3 className={cls.trustItemTitle}>We Can't Access Your Funds</h3>
                <p className={cls.trustItemDescription}>
                  We're a matching service, not a lender. We connect you with lenders but never
                  handle your money or have access to your bank account. Funds go directly from
                  lenders to you.
                </p>
              </div>
            </div>
            <div className={cls.trustItem}>
              <svg
                className={cls.trustIcon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11L12 14L22 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className={cls.trustItemContent}>
                <h3 className={cls.trustItemTitle}>No Hidden Fees or Surprises</h3>
                <p className={cls.trustItemDescription}>
                  All fees, rates, and terms are clearly disclosed upfront. You'll see exactly what
                  you're agreeing to before accepting any loan offer. No surprises, no hidden
                  charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={cls.howItWorksSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>How It Works</h2>
          <div className={cls.steps}>
            <div className={cls.step}>
              <div className={cls.stepNumber}>1</div>
              <div className={cls.stepContent}>
                <h3 className={cls.stepTitle}>Fill Out the Form</h3>
                <p className={cls.stepDescription}>
                  Complete our simple online application with basic information about yourself and
                  your loan needs. It takes just a few minutes.
                </p>
              </div>
            </div>
            <div className={cls.step}>
              <div className={cls.stepNumber}>2</div>
              <div className={cls.stepContent}>
                <h3 className={cls.stepTitle}>Get Matched with Lenders</h3>
                <p className={cls.stepDescription}>
                  We'll match you with top lenders based on your profile. Compare multiple offers in
                  one place.
                </p>
              </div>
            </div>
            <div className={cls.step}>
              <div className={cls.stepNumber}>3</div>
              <div className={cls.stepContent}>
                <h3 className={cls.stepTitle}>Review and Choose</h3>
                <p className={cls.stepDescription}>
                  Review your loan offers, compare rates and terms, and choose the option that works
                  best for you.
                </p>
              </div>
            </div>
            <div className={cls.step}>
              <div className={cls.stepNumber}>4</div>
              <div className={cls.stepContent}>
                <h3 className={cls.stepTitle}>Receive Your Funds</h3>
                <p className={cls.stepDescription}>
                  Once approved, funds can be deposited into your account as soon as the next
                  business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={cls.faqSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>Frequently Asked Questions</h2>
          <p className={cls.faqDescription}>
            Get answers to common questions about personal loans and the application process.
          </p>
          <FAQAccordion items={faqItems} variant="dark" />
        </div>
      </section>

      {/* About the Author Section */}
      <section className={cls.authorSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>About the Author</h2>
          <div className={cls.authorCard}>
            <div className={cls.authorImageWrapper}>
              <Image
                src="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
                alt="Michael Thompson"
                width={200}
                height={200}
                className={cls.authorImageLarge}
              />
            </div>
            <div className={cls.authorDetails}>
              <h3 className={cls.authorNameLarge}>Michael Thompson</h3>
              <p className={cls.authorRoleLarge}>Senior Personal Finance Analyst</p>
              <div className={cls.authorBio}>
                <p>
                  Michael Thompson is a Senior Personal Finance Analyst with over 10 years of
                  experience helping consumers navigate the complex world of personal loans and
                  financial products. He has reviewed hundreds of lenders, analyzed thousands of
                  loan products, and helped countless individuals find the right financing solutions
                  for their needs.
                </p>
                <p>
                  Michael specializes in personal loan products, credit analysis, and consumer
                  financial education. His expertise includes understanding loan terms, interest
                  rates, fees, and helping borrowers make informed decisions. He is committed to
                  transparency and ensuring consumers have access to accurate, unbiased information
                  about their loan options.
                </p>
                <p>
                  Through his work, Michael has developed a deep understanding of the personal loan
                  market, lender practices, and what makes a loan application process both fast and
                  secure. He believes in empowering consumers with knowledge so they can confidently
                  choose the best loan products for their financial situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqItems = [
  {
    question: 'How long does it take to get approved?',
    answer:
      'Most applications receive a decision within minutes. Once approved, funds can be deposited into your account as soon as the next business day, depending on your lender and bank processing times.',
  },
  {
    question: 'Will applying affect my credit score?',
    answer:
      "Our form uses a soft credit check that won't impact your credit score. You'll only see a hard inquiry on your credit report if you choose to proceed with a specific lender offer.",
  },
  {
    question: 'What information do I need to apply?',
    answer:
      "You'll need basic information including your name, address, employment details, income, and Social Security number. The application is straightforward and takes just a few minutes to complete.",
  },
  {
    question: 'What loan amounts are available?',
    answer:
      "Loan amounts typically range from $1,000 to $50,000, depending on your credit profile, income, and the lender's policies. The exact amount you qualify for will be shown in your loan offers.",
  },
  {
    question: 'What are the interest rates?',
    answer:
      "Interest rates vary based on your credit score, income, loan amount, and the lender you choose. Rates typically range from 6.5% to 36% APR. You'll see the exact rates in your personalized loan offers.",
  },
  {
    question: 'Is there a fee to use this service?',
    answer:
      'No, our service is completely free. We connect you with lenders at no cost. Lenders may charge origination fees or other fees, which will be clearly disclosed in your loan offers.',
  },
  {
    question: 'Can I apply with bad credit?',
    answer:
      'Yes, you can apply with any credit score. While better credit scores typically qualify for lower rates, we work with lenders who serve borrowers across the credit spectrum.',
  },
  {
    question: "How do I know if I'm approved?",
    answer:
      "After submitting your application, you'll receive loan offers from multiple lenders. Each offer will show whether you're pre-approved or approved, along with the loan terms and rates.",
  },
];
