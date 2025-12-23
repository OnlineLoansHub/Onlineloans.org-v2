import { ProductTypeConfig } from '../productTypes';

export const onlineBankingConfig: ProductTypeConfig = {
  id: 'online-banking',
  displayName: 'Online Banking',
  slug: 'online-banking/best-online-banking',
  hero: {
    title: 'Best',
    titleHighlight: 'Online Banking',
    authorName: 'Jennifer Lee',
    authorRole: 'Banking Expert',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    accountType: {
      label: 'Account Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'checking', label: 'Checking' },
        { value: 'savings', label: 'Savings' },
        { value: 'high_yield', label: 'High Yield Savings' },
        { value: 'money_market', label: 'Money Market' },
      ],
    },
    minimumBalance: {
      label: 'Minimum Balance',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '0', label: '$0' },
        { value: 'under_100', label: 'Under $100' },
        { value: '100_1000', label: '$100–$1,000' },
        { value: '1000_plus', label: '$1,000+' },
      ],
    },
    apy: {
      label: 'APY',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '4_plus', label: '4%+' },
        { value: '3_4', label: '3–4%' },
        { value: '2_3', label: '2–3%' },
        { value: 'under_2', label: 'Under 2%' },
      ],
    },
    features: {
      label: 'Features',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'no_fees', label: 'No Monthly Fees' },
        { value: 'atm_access', label: 'ATM Access' },
        { value: 'mobile_app', label: 'Mobile App' },
        { value: 'fdic', label: 'FDIC Insured' },
      ],
    },
  },
  filterOrder: ['accountType', 'minimumBalance', 'apy', 'features'],
  wizard: {
    steps: [
      {
        question: 'What type of account are you looking for?',
        key: 'accountType',
        options: [
          { value: 'checking', label: 'Checking Account' },
          { value: 'savings', label: 'Savings Account' },
          { value: 'high_yield', label: 'High Yield Savings' },
          { value: 'money_market', label: 'Money Market Account' },
        ],
      },
      {
        question: 'What minimum balance can you maintain?',
        key: 'minimumBalance',
        options: [
          { value: '0', label: '$0' },
          { value: 'under_100', label: 'Under $100' },
          { value: '100_1000', label: '$100 - $1,000' },
          { value: '1000_plus', label: '$1,000+' },
        ],
      },
      {
        question: 'What APY are you looking for?',
        key: 'apy',
        options: [
          { value: '4_plus', label: '4%+' },
          { value: '3_4', label: '3-4%' },
          { value: '2_3', label: '2-3%' },
          { value: 'under_2', label: 'Under 2%' },
        ],
      },
      {
        question: 'What features are important to you?',
        key: 'features',
        options: [
          { value: 'no_fees', label: 'No Monthly Fees' },
          { value: 'atm_access', label: 'ATM Access' },
          { value: 'mobile_app', label: 'Mobile App' },
          { value: 'fdic', label: 'FDIC Insured' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These banks match your online banking needs',
  },
  crossPromo: {
    title: 'Looking for investment options?',
    description: 'Compare the best investment platforms and robo-advisors',
    icon: 'TrendingUp',
    relatedProviders: [
      {
        id: 1,
        name: 'Fidelity',
        score: 9.6,
        description: 'Best for investing',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Charles Schwab',
        score: 9.4,
        description: 'Best for trading',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Vanguard',
        score: 9.2,
        description: 'Best for low fees',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'APY',
};
