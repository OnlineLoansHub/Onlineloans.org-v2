import type { Brand } from './brands';

export const cryptoLoansData: Brand[] = [
  {
    id: 201,
    name: 'Nexo',
    logo: '/images/brands-logos/NexoNexoLogoFull-logo.webp',
    ourScore: 9.5,
    trustpilotScore: null,
    brandReputation: 9.4,
    popularityScore: 9.2,
    reviewCount: null,
    highlight:
      'Crypto-backed credit lines and wealth platform for digital assets with flexible borrowing options',
    productTypes: ['crypto-loan', 'crypto-credit-line'],
    amount: 'From 2.9% APR',
    goodDetails: [
      'Credit Line from 2.9% APR',
      'Borrow against 100+ digital assets',
      'No credit check required',
      'Instant access to funds',
      'Flexible repayment terms',
      'Operating since 2018',
      '$11+ billion assets under management',
    ],
    badDetails: [
      'Requires crypto collateral',
      'Loan-to-value ratios vary by asset',
      'Interest rates depend on loyalty tier',
      'Not available in all jurisdictions',
    ],
    ctaUrl: 'https://nexo.sjv.io/LKJLxY',
    websiteUrl: 'https://nexo.io',
    minCreditScore: 'Not required',
    amountRange: 'Variable',
  },
];
