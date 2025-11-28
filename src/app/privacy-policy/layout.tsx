import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy - OnlineLoans.org',
  description:
    'Read the Privacy Policy for OnlineLoans.org. Learn how we collect, use, and protect your personal information. We are committed to protecting your privacy and data security.',
  keywords:
    'privacy policy, data protection, personal information, online loans privacy, data security, GDPR compliance, privacy rights',
  path: '/privacy-policy',
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

