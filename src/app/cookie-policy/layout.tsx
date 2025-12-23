import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cookie Policy - OnlineLoans.org',
  description:
    'Learn about how OnlineLoans.org uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. Understand your cookie preferences and how to manage them.',
  keywords:
    'cookie policy, cookies, privacy, online loans, website cookies, cookie preferences, tracking cookies, analytics cookies',
  path: '/cookie-policy',
});

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
