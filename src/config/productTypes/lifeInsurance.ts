import { ProductTypeConfig } from '../productTypes';

export const lifeInsuranceConfig: ProductTypeConfig = {
  id: 'life-insurance',
  displayName: 'Life Insurance',
  slug: 'life-insurance/best-life-insurance',
  hero: {
    title: 'Best',
    titleHighlight: 'Life Insurance',
    authorName: 'Robert Taylor',
    authorRole: 'Life Insurance Advisor',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    policyType: {
      label: 'Policy Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'term', label: 'Term Life' },
        { value: 'whole', label: 'Whole Life' },
        { value: 'universal', label: 'Universal Life' },
      ],
    },
    coverageAmount: {
      label: 'Coverage Amount',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'under_100k', label: 'Under $100K' },
        { value: '100k_500k', label: '$100K–$500K' },
        { value: '500k_1m', label: '$500K–$1M' },
        { value: '1m_plus', label: '$1M+' },
      ],
    },
    age: {
      label: 'Age Range',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '18_30', label: '18–30' },
        { value: '30_40', label: '30–40' },
        { value: '40_50', label: '40–50' },
        { value: '50_plus', label: '50+' },
      ],
    },
    health: {
      label: 'Health Status',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'excellent', label: 'Excellent' },
        { value: 'good', label: 'Good' },
        { value: 'fair', label: 'Fair' },
      ],
    },
  },
  filterOrder: ['policyType', 'coverageAmount', 'age', 'health'],
  wizard: {
    steps: [
      {
        question: 'What type of life insurance do you need?',
        key: 'policyType',
        options: [
          { value: 'term', label: 'Term Life Insurance' },
          { value: 'whole', label: 'Whole Life Insurance' },
          { value: 'universal', label: 'Universal Life Insurance' },
        ],
      },
      {
        question: 'How much coverage do you need?',
        key: 'coverageAmount',
        options: [
          { value: 'under_100k', label: 'Under $100K' },
          { value: '100k_500k', label: '$100K - $500K' },
          { value: '500k_1m', label: '$500K - $1M' },
          { value: '1m_plus', label: '$1M+' },
        ],
      },
      {
        question: 'What is your age range?',
        key: 'age',
        options: [
          { value: '18_30', label: '18-30' },
          { value: '30_40', label: '30-40' },
          { value: '40_50', label: '40-50' },
          { value: '50_plus', label: '50+' },
        ],
      },
      {
        question: 'How would you describe your health?',
        key: 'health',
        options: [
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'fair', label: 'Fair' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These providers match your life insurance needs',
  },
  crossPromo: {
    title: 'Need disability insurance?',
    description: 'Protect your income with disability insurance',
    icon: 'Shield',
    relatedProviders: [
      {
        id: 1,
        name: 'Guardian',
        score: 9.6,
        description: 'Best for professionals',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'MassMutual',
        score: 9.4,
        description: 'Best coverage options',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Northwestern Mutual',
        score: 9.2,
        description: 'Best customer service',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Coverage Amount',
};

