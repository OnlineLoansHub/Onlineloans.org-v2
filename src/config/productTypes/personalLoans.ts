import { ProductTypeConfig } from '../productTypes';

export const personalLoansConfig: ProductTypeConfig = {
  id: 'personal-loans',
  displayName: 'Personal Loans',
  slug: 'personal-loan/best-personal-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Personal Loans',
    authorName: 'Sarah Johnson',
    authorRole: 'Personal Finance Expert',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    loanPurpose: {
      label: 'Loan Purpose',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'debt_consolidation', label: 'Debt Consolidation' },
        { value: 'home_improvement', label: 'Home Improvement' },
        { value: 'major_purchase', label: 'Major Purchase' },
        { value: 'medical_expenses', label: 'Medical Expenses' },
        { value: 'other', label: 'Other' },
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
        { value: 'under_5k', label: 'Under $5,000' },
        { value: '5k_25k', label: '$5,000–$25,000' },
        { value: '25k_50k', label: '$25,000–$50,000' },
        { value: '50k_plus', label: '$50,000+' },
      ],
    },
    loanTerm: {
      label: 'Loan Term',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '12_24', label: '12–24 months' },
        { value: '24_36', label: '24–36 months' },
        { value: '36_60', label: '36–60 months' },
        { value: '60_plus', label: '60+ months' },
      ],
    },
  },
  filterOrder: ['loanPurpose', 'creditScore', 'loanAmount', 'loanTerm'],
  wizard: {
    steps: [
      {
        question: 'What is the purpose of your loan?',
        key: 'loanPurpose',
        options: [
          { value: 'debt_consolidation', label: 'Debt Consolidation' },
          { value: 'home_improvement', label: 'Home Improvement' },
          { value: 'major_purchase', label: 'Major Purchase' },
          { value: 'medical_expenses', label: 'Medical Expenses' },
          { value: 'other', label: 'Other' },
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
        question: 'How much do you need to borrow?',
        key: 'loanAmount',
        options: [
          { value: 'under_5k', label: 'Under $5,000' },
          { value: '5k_25k', label: '$5,000 - $25,000' },
          { value: '25k_50k', label: '$25,000 - $50,000' },
          { value: '50k_plus', label: '$50,000+' },
        ],
      },
      {
        question: 'What loan term are you looking for?',
        key: 'loanTerm',
        options: [
          { value: '12_24', label: '12-24 months' },
          { value: '24_36', label: '24-36 months' },
          { value: '36_60', label: '36-60 months' },
          { value: '60_plus', label: '60+ months' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These lenders match your personal loan needs',
  },
  crossPromo: {
    title: 'Looking for credit card options?',
    description: 'Compare the best credit cards with rewards and low APRs',
    icon: 'CreditCard',
    relatedProviders: [
      {
        id: 1,
        name: 'Chase Sapphire',
        score: 9.6,
        description: 'Best for travel rewards',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'American Express',
        score: 9.4,
        description: 'Best for cash back',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Capital One',
        score: 9.2,
        description: 'Best for building credit',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Loan Amount',
};

