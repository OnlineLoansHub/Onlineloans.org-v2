import type { Metadata } from 'next';

// Base URL - can be overridden with environment variable
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://onlineloans.org';

// Site-wide constants
export const SITE_NAME = 'OnlineLoans.org';
export const SITE_DESCRIPTION =
  'Get approved for personal and business loans online in minutes. Fast, secure, and trusted by thousands of customers. Compare rates and apply now.';
export const SITE_KEYWORDS =
  'online loans, personal loans, business loans, fast approval, secure loans, instant loans, loan comparison, financial services';

// Default Open Graph image
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo/onlineloans-logo.png`;

// Contact information
export const CONTACT_EMAIL = 'contact@onlineloans.org';

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

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
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = path ? getCanonicalUrl(path) : SITE_URL;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || SITE_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
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
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

