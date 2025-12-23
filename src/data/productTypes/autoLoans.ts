import { ProductTypeConfig } from '../productTypes';

export const autoLoansConfig: ProductTypeConfig = {
  id: 'auto-loans',
  displayName: 'Auto Loans',
  slug: 'auto-loan/best-auto-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Auto Loans',
    authorName: 'James Wilson',
    authorRole: 'Auto Finance Expert',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    vehicleType: {
      label: 'Vehicle Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'new', label: 'New Vehicle' },
        { value: 'used', label: 'Used Vehicle' },
        { value: 'refinance', label: 'Refinance' },
      ],
    },
    creditScore: {
      label: 'Credit Score',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'excellent', label: 'Excellent (720–850)' },
        { value: 'good', label: 'Good (690–719)' },
        { value: 'fair', label: 'Fair (630–689)' },
        { value: 'poor', label: 'Poor (350–629)' },
      ],
    },
    loanAmount: {
      label: 'Loan Amount',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'under_15k', label: 'Under $15,000' },
        { value: '15k_30k', label: '$15,000–$30,000' },
        { value: '30k_50k', label: '$30,000–$50,000' },
        { value: '50k_plus', label: '$50,000+' },
      ],
    },
    loanTerm: {
      label: 'Loan Term',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '24_36', label: '24–36 months' },
        { value: '36_48', label: '36–48 months' },
        { value: '48_60', label: '48–60 months' },
        { value: '60_72', label: '60–72 months' },
      ],
    },
  },
  filterOrder: ['vehicleType', 'creditScore', 'loanAmount', 'loanTerm'],
  wizard: {
    steps: [
      {
        question: 'What type of vehicle loan do you need?',
        key: 'vehicleType',
        options: [
          { value: 'new', label: 'New Vehicle' },
          { value: 'used', label: 'Used Vehicle' },
          { value: 'refinance', label: 'Refinance Existing Loan' },
        ],
      },
      {
        question: 'What is your credit score range?',
        key: 'creditScore',
        options: [
          { value: 'excellent', label: 'Excellent (720-850)' },
          { value: 'good', label: 'Good (690-719)' },
          { value: 'fair', label: 'Fair (630-689)' },
          { value: 'poor', label: 'Poor (350-629)' },
        ],
      },
      {
        question: 'How much do you need to finance?',
        key: 'loanAmount',
        options: [
          { value: 'under_15k', label: 'Under $15,000' },
          { value: '15k_30k', label: '$15,000 - $30,000' },
          { value: '30k_50k', label: '$30,000 - $50,000' },
          { value: '50k_plus', label: '$50,000+' },
        ],
      },
      {
        question: 'What loan term are you looking for?',
        key: 'loanTerm',
        options: [
          { value: '24_36', label: '24-36 months' },
          { value: '36_48', label: '36-48 months' },
          { value: '48_60', label: '48-60 months' },
          { value: '60_72', label: '60-72 months' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These lenders match your auto loan needs',
  },
  crossPromo: {
    title: 'Need auto insurance?',
    description: 'Compare the best auto insurance rates',
    icon: 'Car',
    relatedProviders: [
      {
        id: 1,
        name: 'Geico',
        score: 9.6,
        description: 'Best for low rates',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Progressive',
        score: 9.4,
        description: 'Best for customization',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'State Farm',
        score: 9.2,
        description: 'Best customer service',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Loan Amount',
};
