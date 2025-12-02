import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';
import { businessLoanGuides } from '@/data/businessLoanGuides';
import { GuideCard } from '@/components/businessLoan/GuideCard/GuideCard';
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
            Comprehensive guides to help you understand business financing options, learn how to apply,
            and find the best funding solutions for your business needs.
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
    </div>
  );
}

