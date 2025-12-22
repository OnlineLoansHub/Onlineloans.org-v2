import { ProductTypeConfig } from '../productTypes';

export const mortgageLoansConfig: ProductTypeConfig = {
  id: 'mortgage-loans',
  displayName: 'Mortgage Loans',
  slug: 'mortgage-loan/best-mortgage-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Mortgage Loans',
    authorName: 'David Martinez',
    authorRole: 'Mortgage Specialist',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    loanType: {
      label: 'Loan Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'conventional', label: 'Conventional' },
        { value: 'fha', label: 'FHA' },
        { value: 'va', label: 'VA' },
        { value: 'usda', label: 'USDA' },
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
    downPayment: {
      label: 'Down Payment',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '0_3', label: '0-3%' },
        { value: '3_10', label: '3-10%' },
        { value: '10_20', label: '10-20%' },
        { value: '20_plus', label: '20%+' },
      ],
    },
    loanAmount: {
      label: 'Loan Amount',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'under_200k', label: 'Under $200K' },
        { value: '200k_400k', label: '$200K–$400K' },
        { value: '400k_750k', label: '$400K–$750K' },
        { value: '750k_plus', label: '$750K+' },
      ],
    },
  },
  filterOrder: ['loanType', 'creditScore', 'downPayment', 'loanAmount'],
  wizard: {
    steps: [
      {
        question: 'What type of mortgage are you looking for?',
        key: 'loanType',
        options: [
          { value: 'conventional', label: 'Conventional' },
          { value: 'fha', label: 'FHA' },
          { value: 'va', label: 'VA' },
          { value: 'usda', label: 'USDA' },
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
        question: 'How much down payment can you make?',
        key: 'downPayment',
        options: [
          { value: '0_3', label: '0-3%' },
          { value: '3_10', label: '3-10%' },
          { value: '10_20', label: '10-20%' },
          { value: '20_plus', label: '20%+' },
        ],
      },
      {
        question: 'What is your target loan amount?',
        key: 'loanAmount',
        options: [
          { value: 'under_200k', label: 'Under $200K' },
          { value: '200k_400k', label: '$200K - $400K' },
          { value: '400k_750k', label: '$400K - $750K' },
          { value: '750k_plus', label: '$750K+' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These lenders match your mortgage needs',
  },
  crossPromo: {
    title: 'Need help with home insurance?',
    description: 'Compare the best home insurance providers',
    icon: 'Home',
    relatedProviders: [
      {
        id: 1,
        name: 'State Farm',
        score: 9.6,
        description: 'Best overall coverage',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Allstate',
        score: 9.4,
        description: 'Best for discounts',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Progressive',
        score: 9.2,
        description: 'Best online experience',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Loan Amount',
};

