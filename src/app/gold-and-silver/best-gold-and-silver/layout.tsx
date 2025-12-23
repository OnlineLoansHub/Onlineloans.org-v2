import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Gold & Silver Dealers 2026 - Compare',
  description:
    'Compare the best gold and silver dealers of 2026 from top providers. Find competitive prices, secure storage options, and IRA services. Compare APMEX, JM Bullion, Goldco, Birch Gold Group, and more.',
  keywords:
    'best gold dealers, best silver dealers, gold dealers 2026, silver dealers 2026, buy gold, buy silver, precious metals IRA, gold coins, silver coins, gold bullion, silver bullion, precious metals dealers, compare gold dealers',
  path: '/gold-and-silver/best-gold-and-silver',
  image: '/og/gold-silver-hero.png',
  type: 'website',
});

export default function BestGoldAndSilverLayout({ children }: { children: React.ReactNode }) {
  return children;
}
