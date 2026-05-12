import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About OnlineLoans.org – Financial Comparison Platform',
  description:
    'OnlineLoans.org is a transparent financial comparison platform. Find the best loans, insurance, and credit cards with unbiased rankings and smart matching.',
  keywords:
    'about OnlineLoans.org, financial comparison platform, loan marketplace, compare financial products, unbiased lender reviews, lender rankings, transparent loan comparison, financial product reviews, insurance comparison, credit card comparison, smart loan matching, trusted financial services, borrower resources, online loan education, fintech comparison site',
  path: '/about-us',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
