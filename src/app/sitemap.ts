import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    // Homepage — trailing slash matches server redirect and canonical tag
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Business Loans
    {
      url: `${baseUrl}/business-loan`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-loan/best-business-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-loan/apply`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-loan/restaurant-funding`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business-loan/construction-funding`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business-loan/fixed-vs-variable`,
      lastModified: new Date('2025-12-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Personal Loans
    {
      url: `${baseUrl}/personal-loan`,
      lastModified: new Date('2025-12-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-loan/best-personal-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-loan/apply`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-loan/what-is-a-personal-loan`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-loan/lendingtree-review`,
      lastModified: new Date('2025-12-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-loan/payday-loans/california`,
      lastModified: new Date('2025-12-08'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-loan/600-credit-score-guide`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Auto Loans
    {
      url: `${baseUrl}/auto-loan/best-auto-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Student Loans
    {
      url: `${baseUrl}/student-loan/best-student-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Mortgage Loans
    {
      url: `${baseUrl}/mortgage-loan/best-mortgage-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Crypto Loans
    {
      url: `${baseUrl}/crypto-loans/best-crypto-loans`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Credit Score
    {
      url: `${baseUrl}/credit-score/credit-score-monitoring`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Pet Insurance
    {
      url: `${baseUrl}/pet-insurance/best-pet-insurance`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Gold and Silver
    {
      url: `${baseUrl}/gold-and-silver/best-gold-and-silver`,
      lastModified: new Date('2025-12-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Company pages
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/partner-with-us`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/affiliates`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
