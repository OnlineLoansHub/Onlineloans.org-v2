import { ProductTypeConfig } from '../productTypes';

export const creditScoreConfig: ProductTypeConfig = {
  id: 'credit-score',
  displayName: 'Credit Score',
  slug: 'credit-score/credit-score-monitoring',
  hero: {
    title: 'Best',
    titleHighlight: 'Credit Score Tracking',
    authorName: 'Sarah Mitchell',
    authorRole: 'Credit Education Specialist',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    bureauCoverage: {
      label: 'Credit Bureau Coverage',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'single', label: '1 Bureau' },
        { value: 'two', label: '2 Bureaus' },
        { value: 'three', label: '3 Bureaus' },
      ],
    },
    updateFrequency: {
      label: 'Score Update Frequency',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'daily', label: 'Daily Updates' },
        { value: 'weekly', label: 'Weekly Updates' },
        { value: 'monthly', label: 'Monthly Updates' },
      ],
    },
    pricingModel: {
      label: 'Pricing Model',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'subscription', label: 'Subscription' },
        { value: 'freemium', label: 'Free Trial / Freemium' },
      ],
    },
    features: {
      label: 'Included Features',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'alerts', label: 'Credit Alerts' },
        { value: 'reports', label: 'Credit Reports' },
        { value: 'identity', label: 'Identity Monitoring' },
      ],
    },
  },
  filterOrder: ['bureauCoverage', 'updateFrequency', 'pricingModel', 'features'],
  wizard: {
    steps: [
      {
        question: 'What do you want to monitor?',
        key: 'features',
        options: [
          { value: 'alerts', label: 'Credit Score Changes & Alerts' },
          { value: 'reports', label: 'Detailed Credit Reports' },
          { value: 'identity', label: 'Identity & Fraud Monitoring' },
        ],
      },
      {
        question: 'How often do you want score updates?',
        key: 'updateFrequency',
        options: [
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
        ],
      },
      {
        question: 'How many credit bureaus should be covered?',
        key: 'bureauCoverage',
        options: [
          { value: 'single', label: '1 Credit Bureau' },
          { value: 'two', label: '2 Credit Bureaus' },
          { value: 'three', label: 'All 3 Credit Bureaus' },
        ],
      },
      {
        question: 'What pricing model do you prefer?',
        key: 'pricingModel',
        options: [
          { value: 'subscription', label: 'Paid Subscription' },
          { value: 'freemium', label: 'Free Trial / Optional Upgrade' },
        ],
      },
    ],
    resultsTitle: 'Based on your preferences, we recommend',
    resultsSubtitle: 'These credit score monitoring services match your needs',
  },
  crossPromo: {
    title: 'Want to improve your credit profile?',
    description: 'Explore tools and offers designed to help you build credit',
    icon: 'TrendingUp',
    relatedProviders: [
      {
        id: 1,
        name: 'CreditVana',
        score: 9.3,
        description: 'Best for guided credit monitoring',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Experian',
        score: 9.4,
        description: 'Best for in-depth credit data',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'IdentityForce',
        score: 9.1,
        description: 'Best for identity protection',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Credit Score Range',
};
