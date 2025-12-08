import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/business-loan`,
      lastModified: new Date('2025-12-04'),
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
      url: `${baseUrl}/business-loan/best-business-loans`,
      lastModified: new Date('2025-12-07'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business-loan/construction-funding`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-loan`,
      lastModified: new Date('2025-12-08'),
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
      url: `${baseUrl}/personal-loan/best-personal-loans`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal-loan/lendingtree-review`,
      lastModified: new Date('2025-12-04'),
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
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-12-04'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
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
