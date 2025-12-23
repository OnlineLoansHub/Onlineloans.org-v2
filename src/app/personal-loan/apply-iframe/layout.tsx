import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: 'Apply for Personal Loan - Fast Application',
    description:
      'Apply for a personal loan online in minutes. Get matched with top lenders offering competitive rates. Fast approval, no impact on credit score.',
    path: '/personal-loan/apply-iframe',
  }),
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersonalLoanIframeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
