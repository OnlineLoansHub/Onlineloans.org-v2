import type { Metadata } from 'next';
import { Suspense } from 'react';
import PersonalLoanForm from '@/features/personalLoanForm/personalLoanForm';
import { LoanTypes } from '@/lib/loanTypes';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Apply for Personal Loan - Fast Application',
  description:
    'Apply for a personal loan online in minutes. Get matched with top lenders offering competitive rates up to $50k. No impact on credit score. Fast approval.',
  keywords:
    'apply for personal loan, personal loan application, online personal loan, personal financing, quick personal loan, unsecured personal loan, debt consolidation loan, personal loan rates, instant personal loan approval',
  path: '/personal-loan/apply',
});

export default function PersonalLoanApplicationPage() {
  return (
    <Suspense fallback={<>...</>}>
      <PersonalLoanForm type={LoanTypes.personal} />
    </Suspense>
  );
}
