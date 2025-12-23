import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - OnlineLoans.org',
  description:
    'Discover OnlineLoans.org — a transparent financial comparison platform helping users find the best loans, insurance, and credit cards. We provide unbiased rankings and smart matching technology.',
  keywords:
    'about OnlineLoans.org, financial comparison platform, loan marketplace, compare financial products, unbiased lender reviews, lender rankings, transparent loan comparison, financial product reviews, insurance comparison, credit card comparison, smart loan matching, trusted financial services, borrower resources, online loan education, fintech comparison site',
  path: '/about-us',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
