import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { personalLoanGuides } from '@/data/personalLoanGuides';
import { GuideCard } from '@/components/businessLoan/GuideCard/GuideCard';
import cls from './page.module.scss';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Personal Loan Guides - Lending Resources',
  description:
    'Explore comprehensive guides on personal loans, how to apply, compare lenders, and get the funding you need for your personal financial goals.',
  keywords:
    'personal loan guides, how to get personal loans, personal loan application guide, personal financing resources',
  path: '/personal-loan',
  type: 'website',
});

export default function PersonalLoanPage() {
  return (
    <div className={cls.wrapper}>
      <section className={cls.hero}>
        <div className={cls.container}>
          <h1 className={cls.heroTitle}>Personal Loan Guides</h1>
          <p className={cls.heroDescription}>
            Comprehensive guides to help you understand personal loan options, learn how to apply,
            and find the best lending solutions for your personal financial needs.
          </p>
        </div>
      </section>

      <section className={cls.guidesSection}>
        <div className={cls.container}>
          <h2 className={cls.sectionTitle}>Available Guides</h2>
          {personalLoanGuides.length > 0 ? (
            <div className={cls.guidesGrid}>
              {personalLoanGuides.map((guide) => (
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
