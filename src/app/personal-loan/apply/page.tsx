import type { Metadata } from 'next';
import { Suspense } from 'react';
import PersonalLoanForm from '@/features/personalLoanForm/personalLoanForm';
import { LoanTypes } from '@/types';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Apply for Personal Loan - Online Application',
  description:
    'Apply for a personal loan online. Quick and secure application process. Get matched with top lenders offering competitive rates and flexible terms for your personal needs.',
  keywords:
    'apply for personal loan, personal loan application, online personal loan, personal financing application, quick personal loan',
  path: '/personal-loan',
});

export default function PersonalLoanApplicationPage() {
  return (
    <Suspense fallback={<>...</>}>
      <PersonalLoanForm type={LoanTypes.personal} />
    </Suspense>
  );
}

