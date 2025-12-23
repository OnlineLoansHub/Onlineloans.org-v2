import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Credit Score Tracking 2026 - Monitor Your Credit',
  description:
    'Compare the best credit score tracking services of 2026. Monitor your credit score, get alerts, and protect your identity. Compare CreditVana, Experian, IdentityForce, and more.',
  keywords:
    'credit score tracking, best credit score tracking, credit monitoring services, track credit score, credit score alerts, credit report monitoring, identity theft protection, free credit monitoring, credit score tracking services, credit tracking reviews',
  path: '/credit-score/credit-score-monitoring',
  image: '/og/credit-score-hero.png',
  type: 'website',
});

export default function CreditScoreMonitoringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
