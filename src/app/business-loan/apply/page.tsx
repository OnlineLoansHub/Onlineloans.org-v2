import type { Metadata } from 'next';
import { Suspense } from 'react';
import BusinessLoanForm from '@/features/businessLoanForm/businessLoanForm';
import { LoanTypes } from '@/types';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Apply for Business Loan - Online Application',
  description:
    'Apply for a business loan online. Quick and secure application process. Get matched with top lenders offering competitive rates and flexible terms for your business needs.',
  keywords:
    'apply for business loan, business loan application, online business loan, business financing application, quick business loan',
  path: '/business-loan',
});

export default function BusinessLoanApplicationPage() {
  return (
    <Suspense fallback={<>...</>}>
      <BusinessLoanForm type={LoanTypes.business} />
    </Suspense>
  );
}
