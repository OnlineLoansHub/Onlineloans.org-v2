import type { Metadata } from 'next';
import DynamicHomePage from '@/features/dynamicHomePage/dynamicHomePage';
import { LoanTypes } from '@/types';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Personal Loans - Fast Approval Online',
  description:
    'Get approved for personal loans online in minutes. Compare rates from top lenders, no hidden fees, and flexible repayment terms. Apply now for debt consolidation, home improvement, and more.',
  keywords:
    'personal loans, unsecured loans, personal financing, debt consolidation loans, fast personal loans, online personal loans, instant approval',
  path: '/personal',
});

export default function PersonalLoansPage() {
  return (
    <DynamicHomePage
      type={LoanTypes.personal}
      title={
        <>
          Simple personal loans. <br />
          Fast, easy, secure.
        </>
      }
    />
  );
}
