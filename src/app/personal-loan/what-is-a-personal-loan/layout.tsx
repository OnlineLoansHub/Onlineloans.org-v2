import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'What is a Personal Loan? - Complete Guide | OnlineLoans.org',
  description:
    'Learn everything about personal loans: types, uses, how to apply, and how to choose the best lender. Get expert guidance on personal loan rates, terms, and requirements. Compare top personal loan options.',
  keywords:
    'what is a personal loan, personal loan guide, personal loan types, how to get a personal loan, personal loan application, personal loan rates, unsecured personal loans, personal loan requirements, best personal loans, personal loan comparison',
  path: '/personal-loan/what-is-a-personal-loan',
  type: 'article',
});

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
