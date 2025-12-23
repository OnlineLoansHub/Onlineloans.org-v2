import type { Brand } from './brands';

export const creditScoreData: Brand[] = [
  {
    id: 101,
    name: 'CreditVana',
    logo: '/images/brands-logos/CreditVana-logo.webp',
    ourScore: 8.9,
    trustpilotScore: null,
    brandReputation: 8.5,
    popularityScore: 7.8,
    reviewCount: null,
    highlight: 'Credit score tracking and monitoring tools with personalized insights',
    productTypes: ['credit-score', 'credit-monitoring'],
    amount: 'Subscription-based',
    goodDetails: [
      'Credit score monitoring and alerts',
      'Personalized credit insights',
      'Easy-to-use dashboard',
      'No impact on your credit score',
    ],
    badDetails: [
      'Not a lender',
      'Subscription required for full features',
      'Limited transparency on pricing upfront',
    ],
    ctaUrl: 'https://creditvana.com',
    websiteUrl: 'https://creditvana.com',
    minCreditScore: 'All credit profiles',
    amountRange: 'Subscription',
  },
];
