import type { Metadata } from 'next';
import { Suspense } from 'react';
import BusinessLoanForm from '@/features/businessLoanForm/businessLoanForm';
import { LoanTypes } from '@/types';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Apply for Business Loan - Fast Application',
  description:
    'Apply for a business loan online in minutes. Get matched with top lenders offering competitive rates up to $1M. SBA loans, working capital, and flexible funding solutions.',
  keywords:
    'apply for business loan, business loan application, online business loan, business financing, SBA loans, small business loans, working capital loans, business loan rates, quick business loan approval, startup business loans',
  path: '/business-loan/apply',
});

export default function BusinessLoanApplicationPage() {
  return (
    <Suspense fallback={<>...</>}>
      <BusinessLoanForm type={LoanTypes.business} />
    </Suspense>
  );
}
