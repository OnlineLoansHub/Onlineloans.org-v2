// Helper function to generate placeholder brand data
import type { Brand } from '@/components/loans/lendersData';

export function generatePlaceholderLenders(count: number, productType: string): Brand[] {
  const names = [
    'PrimeLend Financial',
    'SecureFund Capital',
    'TrustRate Solutions',
    'QuickCash Express',
    'EliteFinance Group',
    'ReliableLend Partners',
    'FastTrack Funding',
    'PremiumRate Loans',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[i] || `${productType} Lender ${i + 1}`,
    logo: null, // Placeholder - will use text fallback
    ourScore: 9.5 - (i * 0.1),
    trustpilotScore: 9.0 - (i * 0.15),
    brandReputation: 9.3 - (i * 0.12),
    popularityScore: 9.2 - (i * 0.1),
    reviewCount: 5000 + i * 1000,
    highlight: `Top-rated ${productType} provider with competitive rates`,
    productTypes: [productType.toLowerCase().replace(/\s+/g, '_')],
    minCreditScore: i < 2 ? 'fair' : i < 4 ? 'good' : 'excellent',
    minRevenue: '10k_20k',
    minTimeInBusiness: '6m_1y',
    amountRange: i < 2 ? '50k_100k' : '100k_plus',
    amount: `$${5 + i * 5}K - $${50 + i * 10}K`,
    goodDetails: [
      'Fast Approval: 24-48 hours',
      'Online Application: Yes',
      'Competitive Rates: Yes',
      'Flexible Terms: Yes',
    ],
    badDetails: [
      `Minimum Credit Score: ${600 + i * 20}`,
      'APR Range: 5% - 25%',
      'Origination Fee: 1-5%',
      'Prepayment Penalty: None',
    ],
    ctaUrl: '#',
    websiteUrl: '#',
  }));
}

