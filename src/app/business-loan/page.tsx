import type { Metadata } from 'next';
import DynamicHomePage from '@/features/dynamicHomePage/dynamicHomePage';
import { LoanTypes } from '@/types';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Business Loans Online – Fast Approval & Flexible Funding',
  description:
    'Compare top business loan options online and get fast approval. Access SBA loans, working capital, lines of credit, equipment financing, and flexible funding solutions for small businesses. Apply in minutes with no impact on your credit score.',
  keywords:
    'business loans, small business loans, online business loans, fast business loans, unsecured business loans, secured business loans, working capital loans, SBA loans, SBA 7(a) loans, SBA 504 loans, microloans, startup business loans, business line of credit, equipment financing, equipment leasing, inventory financing, purchase order financing, invoice factoring, invoice financing, merchant cash advance, revenue based financing, term loans, commercial loans, commercial mortgage, business real estate loans, construction loans, bridge loans, franchise financing, seasonal business loans, bad credit business loans, same day business loans, best business loans 2025, compare business lenders, trucking business loans, ecommerce business loans, medical practice loans, restaurant business loans, retail business loans',
  path: '/business',
});

export default function BusinessLoansPage() {
  return (
    <DynamicHomePage
      type={LoanTypes.business}
      title={
        <>
          Compare and choose <br />
          top financial products
        </>
      }
    />
  );
}
