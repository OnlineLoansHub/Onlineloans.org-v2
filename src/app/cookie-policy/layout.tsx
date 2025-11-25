import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cookie Policy - OnlineLoans.org',
  description:
    'Learn about how OnlineLoans.org uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.',
  keywords: 'cookie policy, cookies, privacy, online loans, website cookies',
  path: '/cookie-policy',
});

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
