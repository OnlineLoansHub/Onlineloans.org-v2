import type { Metadata } from 'next';
import Script from 'next/script';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'How to Get a Personal Loan with a 600 Credit Score (2026)',
  description:
    'Have a 600 credit score? Compare top lenders for fair credit, see current APR ranges, and follow our step-by-step guide to get approved in 2026.',
  keywords:
    '600 credit score personal loan, fair credit personal loan, personal loan 600 credit score, 600 credit score loan approval, best lenders for 600 credit score, personal loan fair credit, unsecured loan 600 credit score',
  path: '/personal-loan/600-credit-score-guide',
  type: 'article',
  author: 'OnlineLoans.org',
  publishedTime: '2026-05-12T00:00:00.000Z',
  modifiedTime: '2026-05-12T00:00:00.000Z',
  image: '/personal-loan/600-credit-score-guide/image-2.webp',
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Personal Loan with a 600 Credit Score in 2026',
  description:
    'Have a 600 credit score? Compare top lenders for fair credit, see current APR ranges, and follow our step-by-step guide to get approved in 2026.',
  image: [
    'https://www.onlineloans.org/personal-loan/600-credit-score-guide/image-1.webp',
    'https://www.onlineloans.org/personal-loan/600-credit-score-guide/image-2.webp',
  ],
  author: {
    '@type': 'Organization',
    name: 'OnlineLoans.org',
    url: 'https://www.onlineloans.org',
  },
  publisher: {
    '@type': 'Organization',
    name: 'OnlineLoans.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.onlineloans.org/images/logo/onlineloans-logo.png',
    },
  },
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.onlineloans.org/personal-loan/600-credit-score-guide',
  },
  keywords:
    '600 credit score personal loan, fair credit personal loan, personal loan 600 credit score, 600 credit score loan approval, best lenders for 600 credit score',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will applying for a personal loan hurt my credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-qualifying uses a soft credit pull and does not affect your score. Once you formally apply and accept a loan offer, the lender performs a hard inquiry, which may temporarily lower your score by 2–5 points. This effect typically fades within 3–6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a personal loan with no credit check?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but no-credit-check loans are almost always payday loans or title loans. These products carry APRs that frequently exceed 300% and repayment terms as short as two weeks. The Consumer Financial Protection Bureau (CFPB) strongly advises against these products for borrowers who have any other option. Lenders that accept fair credit scores are a far safer alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I improve my chances of approval with a 600 credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective strategies are: (1) pay down revolving debt to reduce your credit utilization below 30%, (2) ensure your income is stable and verifiable, (3) apply with a co-signer who has good credit, and (4) choose lenders that explicitly accept fair-credit borrowers rather than applying to banks with higher minimum score requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What credit score do I need for a personal loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most online lenders accept credit scores of 560–600 or higher. Traditional banks typically require 660–700. Credit unions may approve scores as low as 580 if you have an existing membership and stable income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I borrow with a 600 credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a 600 credit score, most lenders will approve loan amounts between $1,000 and $35,000, depending on your income, DTI ratio, and the lender\'s policies. Borrowers with higher income and lower existing debt tend to qualify for larger amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a debt consolidation loan with a 600 credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many lenders approve debt consolidation loans for borrowers with a 600 credit score, provided they have enough income to cover the new loan payment. Consolidating high-interest credit card debt into a single, lower-interest personal loan is one of the most common uses for fair-credit loans.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get funded with a 600 credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you apply with an online lender, you can often receive funds within 1 to 3 business days. Some lenders, like Avant and Upstart, even offer next-day or same-day funding if you are approved and sign your loan documents before their daily cutoff time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to improve a 600 credit score to 700?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moving from a 600 to a 700 credit score typically takes 6 to 12 months of consistent, positive financial behavior. You must pay all bills on time, keep credit card balances low (under 30% utilization), and avoid applying for multiple new credit accounts at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my personal loan application is denied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If denied, you should first read the adverse action letter the lender sends, which explains exactly why you were rejected. Common next steps include applying with a co-signer, requesting a smaller loan amount, paying down existing debt to lower your DTI, or exploring secured loans and credit union options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there specific credit cards I can get with a 600 credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a 600 credit score is considered Fair, which qualifies you for several unsecured credit cards designed for credit building, as well as secured credit cards. These cards often have higher APRs and lower credit limits initially, but responsible use can help you build your score to qualify for better products later.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.onlineloans.org/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Personal Loans',
      item: 'https://www.onlineloans.org/personal-loan',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '600 Credit Score Loan Guide',
      item: 'https://www.onlineloans.org/personal-loan/600-credit-score-guide',
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
