import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Online Banking 2026 - Compare Rates',
  description:
    'Compare the best online banking accounts of 2026 from top banks. Find high-yield savings rates, no-fee checking, and modern digital features. Compare SoFi, Ally Bank, Marcus, Capital One 360, and more.',
  keywords:
    'best online banking, online banking 2026, compare online banks, high yield savings, online savings account, best savings rates, online checking account, digital banking, online bank reviews, best online banks, high interest savings account',
  path: '/online-banking/best-online-banking',
  image: '/og/online-banking-hero.png',
  type: 'website',
});

export default function BestOnlineBankingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
