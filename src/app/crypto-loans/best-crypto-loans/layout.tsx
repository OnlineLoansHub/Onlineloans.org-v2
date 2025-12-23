import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Crypto Loans 2026 - Borrow Against Your Crypto',
  description:
    'Compare the best crypto loan platforms of 2026. Borrow against your Bitcoin, Ethereum, and other cryptocurrencies. Low rates from 2.9% APR, no credit check required. Compare Nexo, BlockFi, Celsius, and more.',
  keywords:
    'crypto loans, cryptocurrency loans, bitcoin loans, ethereum loans, crypto credit line, crypto-backed loans, borrow against crypto, crypto lending, best crypto loans, crypto loan rates, no credit check crypto loans',
  path: '/crypto-loans/best-crypto-loans',
  image: '/og/crypto-loans-hero.png',
  type: 'website',
});

export default function BestCryptoLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}
