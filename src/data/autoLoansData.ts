import type { Brand } from './brands';

export const autoLoansData: Brand[] = [
  {
    id: 1,
    name: 'RockSolid Funding',
    logo: '/images/brands-logos/RockSolidFunding-logo.webp',
    ourScore: 10.0,
    trustpilotScore: 9.5,
    brandReputation: 9.8,
    popularityScore: 9.7,
    reviewCount: 1650,
    highlight: 'Fast funding solutions for auto loans and vehicle financing',
    productTypes: ['auto_loan', 'business_loan'],
    minCreditScore: 'fair',
    amount: '$10K - $5M',
    amountRange: '50k_100k',
    goodDetails: [
      'Funding Speed: Same day',
      'Collateral Required: No',
      'Prepayment Penalty: None',
      'Online Application: Yes',
      'Flexible terms for auto financing',
      'Quick approval process',
    ],
    badDetails: [
      'Time in Business: 6+ months',
      'Monthly Revenue: At least $10,000',
      'Minimum Credit Score: 600',
      'APR Range: 7% - 28%',
    ],
    ctaUrl: 'https://rocksolidfunding.sjv.io/9LN6M3',
    websiteUrl: 'https://rocksolidfunding.sjv.io/9LN6M3',
    phoneNumber: '(888) 555-3000',
  },
];
