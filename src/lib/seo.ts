import type { Metadata } from 'next';

// Base URL - can be overridden with environment variable
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.onlineloans.org';

// Site-wide constants
export const SITE_NAME = 'OnlineLoans.org';
export const SITE_DESCRIPTION =
  'Compare and apply for personal and business loans online. Get approved in minutes with competitive rates from top lenders. Fast, secure, and trusted by thousands of customers.';
export const SITE_KEYWORDS =
  'online loans, personal loans, business loans, fast approval, secure loans, instant loans, loan comparison, financial services, unsecured loans, debt consolidation, small business loans, SBA loans, loan application, best loan rates, compare loans, quick loans, emergency loans, bad credit loans, loan marketplace';

// Default Open Graph image (1200x630px for optimal social sharing)
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Contact information
export const CONTACT_EMAIL = 'business@onlineloans.org';

/**
 * Generate canonical URL for a given path
 * Always returns a FULL ABSOLUTE URL
 */
export function getCanonicalUrl(path: string): string {
  // If path is already a full URL, return it
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Always return full absolute URL
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Generate default metadata with Open Graph and Twitter Cards
 */
export function generateMetadata({
  title,
  description,
  keywords,
  path = '',
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  // Ensure canonical URL is always a full absolute URL
  const canonicalUrl = path ? getCanonicalUrl(path) : SITE_URL;

  // Ensure image URL is absolute
  const ogImage = image
    ? image.startsWith('http://') || image.startsWith('https://')
      ? image
      : getCanonicalUrl(image)
    : DEFAULT_OG_IMAGE;

  // Clean title - prevent double branding
  // Remove any existing SITE_NAME from title to avoid duplication
  const cleanTitle = title.replace(/\s*\|\s*OnlineLoans\.org/gi, '').trim();
  const fullTitle =
    cleanTitle.includes(SITE_NAME) || cleanTitle.endsWith('®')
      ? cleanTitle
      : `${cleanTitle} | ${SITE_NAME}`;

  // Clean and validate description
  const cleanDescription = description.trim();

  // Clean keywords
  const cleanKeywords = keywords?.trim() || SITE_KEYWORDS;

  // Ensure OG image URL is absolute
  const ogImageUrl =
    ogImage.startsWith('http://') || ogImage.startsWith('https://')
      ? ogImage
      : getCanonicalUrl(ogImage);

  // Build OpenGraph object
  const openGraphBase: Metadata['openGraph'] = {
    title: fullTitle,
    description: cleanDescription,
    url: canonicalUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: cleanTitle,
      },
    ],
    locale: 'en_US',
    type,
  };

  // Add article-specific fields if type is article
  const openGraph: Metadata['openGraph'] =
    type === 'article' && (publishedTime || modifiedTime || author)
      ? {
          ...openGraphBase,
          type: 'article',
          ...(publishedTime && { publishedTime }),
          ...(modifiedTime && { modifiedTime }),
          ...(author && { authors: [author] }),
        }
      : openGraphBase;

  return {
    title: fullTitle,
    description: cleanDescription,
    keywords: cleanKeywords,
    authors: author ? [{ name: author }] : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
      },
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: cleanDescription,
      images: [
        {
          url: ogImageUrl,
          alt: cleanTitle,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      other: process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? {
            'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
          }
        : undefined,
    },
  };
}

/**
 * Organization structured data
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/onlineloans-logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: CONTACT_EMAIL,
    contactType: 'customer service',
  },
  sameAs: [],
};

/**
 * Website structured data with search action
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Financial Product schema for loan products
 */
export function getFinancialProductSchema({
  name,
  description,
  interestRate,
  loanAmount,
  loanTerm,
}: {
  name: string;
  description: string;
  interestRate?: string;
  loanAmount?: string;
  loanTerm?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(interestRate && { interestRate }),
    ...(loanAmount && { loanAmount }),
    ...(loanTerm && { loanTerm }),
  };
}

/**
 * BreadcrumbList schema generator
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };
}
