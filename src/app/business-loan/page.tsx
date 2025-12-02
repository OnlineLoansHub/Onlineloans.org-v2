import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';
import { businessLoanGuides } from '@/data/businessLoanGuides';
import { GuideCard } from '@/components/businessLoan/GuideCard/GuideCard';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import cls from './page.module.scss';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Business Loan Guides - Complete Funding Resources | OnlineLoans.org',
  description:
    'Explore comprehensive guides on business loans, restaurant funding, and other financing options. Learn how to apply, compare lenders, and get the funding your business needs.',
  keywords:
    'business loan guides, restaurant funding guide, business financing resources, how to get business loans, business loan application guide',
  path: '/business-loan',
  type: 'website',
});

export default function BusinessLoanPage() {
  return (
    <div className={cls.wrapper}>
      <section className={cls.hero}>
        <div className={cls.container}>
          <h1 className={cls.heroTitle}>Business Loan Guides</h1>
          <p className={cls.heroDescription}>
            Comprehensive guides to help you understand business financing options, learn how to
            apply, and find the best funding solutions for your business needs.
          </p>
        </div>
      </section>

      <section className={cls.guidesSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>Available Guides</h2>
          {businessLoanGuides.length > 0 ? (
            <div className={cls.guidesGrid}>
              {businessLoanGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <p className={cls.emptyState}>No guides available yet. Check back soon!</p>
          )}
        </div>
      </section>

      <section className={cls.landingPagesSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>Restaurant Funding by State</h2>
          <p className={cls.landingPagesDescription}>
            Get fast restaurant funding tailored to your state. Compare offers and apply for working
            capital, equipment financing, and business expansion loans.
          </p>
          <div className={cls.landingPagesGrid}>
            <AppLink
              href="/business-loan/restaurant-funding/florida/index.html"
              className={cls.landingPageCard}
            >
              <h3 className={cls.landingPageTitle}>Florida Restaurant Funding</h3>
              <p className={cls.landingPageDescription}>
                Fast working capital and equipment financing for Florida restaurants. Get approved
                in 24-48 hours.
              </p>
              <span className={cls.landingPageLink}>Apply Now →</span>
            </AppLink>
            <AppLink
              href="/business-loan/restaurant-funding/new-york/index.html"
              className={cls.landingPageCard}
            >
              <h3 className={cls.landingPageTitle}>New York Restaurant Funding</h3>
              <p className={cls.landingPageDescription}>
                High-demand funding options for NYC and statewide restaurants. Flexible terms and
                fast approval.
              </p>
              <span className={cls.landingPageLink}>Apply Now →</span>
            </AppLink>
            <AppLink
              href="/business-loan/restaurant-funding/texas/index.html"
              className={cls.landingPageCard}
            >
              <h3 className={cls.landingPageTitle}>Texas Restaurant Funding</h3>
              <p className={cls.landingPageDescription}>
                Flexible funding solutions for Texas restaurants and food businesses. Competitive
                rates and quick funding.
              </p>
              <span className={cls.landingPageLink}>Apply Now →</span>
            </AppLink>
          </div>
          <div className={cls.ctaSection}>
            <AppLink href="/business-loan/apply" className={cls.ctaButtonLink}>
              <Button variant="primary" className={cls.ctaButton}>
                Apply for Business Loans in All Other States
              </Button>
            </AppLink>
          </div>
        </div>
      </section>
    </div>
  );
}
