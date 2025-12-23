import { ProductTypeConfig } from '../productTypes';

export const cryptoLoansConfig: ProductTypeConfig = {
  id: 'crypto-loans',
  displayName: 'Crypto Loans',
  slug: 'crypto-loans/best-crypto-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Crypto Loans',
    authorName: 'David Chen',
    authorRole: 'Cryptocurrency Finance Expert',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    loanType: {
      label: 'Loan Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'credit-line', label: 'Credit Line' },
        { value: 'term-loan', label: 'Term Loan' },
        { value: 'instant-loan', label: 'Instant Loan' },
      ],
    },
    collateralType: {
      label: 'Collateral Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'bitcoin', label: 'Bitcoin (BTC)' },
        { value: 'ethereum', label: 'Ethereum (ETH)' },
        { value: 'stablecoin', label: 'Stablecoins' },
        { value: 'multi-asset', label: 'Multiple Assets' },
      ],
    },
    interestRate: {
      label: 'Interest Rate',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'under_5', label: 'Under 5% APR' },
        { value: '5_10', label: '5% - 10% APR' },
        { value: '10_plus', label: '10%+ APR' },
      ],
    },
    loanToValue: {
      label: 'Loan-to-Value (LTV)',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'high_ltv', label: 'High LTV (50%+)' },
        { value: 'medium_ltv', label: 'Medium LTV (30-50%)' },
        { value: 'low_ltv', label: 'Low LTV (Under 30%)' },
      ],
    },
  },
  filterOrder: ['loanType', 'collateralType', 'interestRate', 'loanToValue'],
  wizard: {
    steps: [
      {
        question: 'What type of crypto loan do you need?',
        key: 'loanType',
        options: [
          { value: 'credit-line', label: 'Credit Line (Flexible)' },
          { value: 'term-loan', label: 'Fixed Term Loan' },
          { value: 'instant-loan', label: 'Instant Loan' },
        ],
      },
      {
        question: 'What cryptocurrency will you use as collateral?',
        key: 'collateralType',
        options: [
          { value: 'bitcoin', label: 'Bitcoin (BTC)' },
          { value: 'ethereum', label: 'Ethereum (ETH)' },
          { value: 'stablecoin', label: 'Stablecoins (USDC, USDT)' },
          { value: 'multi-asset', label: 'Multiple Assets' },
        ],
      },
      {
        question: 'What interest rate range are you looking for?',
        key: 'interestRate',
        options: [
          { value: 'under_5', label: 'Under 5% APR' },
          { value: '5_10', label: '5% - 10% APR' },
          { value: '10_plus', label: '10%+ APR (acceptable)' },
        ],
      },
      {
        question: 'What loan-to-value ratio do you prefer?',
        key: 'loanToValue',
        options: [
          { value: 'high_ltv', label: 'High LTV (50%+) - More borrowing power' },
          { value: 'medium_ltv', label: 'Medium LTV (30-50%) - Balanced' },
          { value: 'low_ltv', label: 'Low LTV (Under 30%) - More security' },
        ],
      },
    ],
    resultsTitle: 'Based on your preferences, we recommend',
    resultsSubtitle: 'These crypto loan providers match your needs',
  },
  crossPromo: {
    title: 'Want to earn interest on your crypto?',
    description: 'Explore platforms that let you earn passive income on your digital assets',
    icon: 'TrendingUp',
    relatedProviders: [
      {
        id: 1,
        name: 'Nexo',
        score: 9.5,
        description: 'Best for crypto-backed credit lines',
        ctaUrl: 'https://nexo.sjv.io/LKJLxY',
      },
      {
        id: 2,
        name: 'BlockFi',
        score: 8.8,
        description: 'Best for crypto interest accounts',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Celsius',
        score: 8.5,
        description: 'Best for flexible crypto lending',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Loan Amount',
};
