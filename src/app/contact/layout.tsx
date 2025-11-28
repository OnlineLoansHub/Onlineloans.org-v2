import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - OnlineLoans.org',
  description:
    'Contact OnlineLoans.org for questions, support, or inquiries about personal and business loans. Our team is here to help you find the best loan options and answer any questions.',
  keywords:
    'contact OnlineLoans.org, customer support, loan help, loan questions, customer service, financial advice contact, loan inquiry',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

