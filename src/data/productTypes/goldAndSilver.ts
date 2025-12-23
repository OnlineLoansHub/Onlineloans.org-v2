import { ProductTypeConfig } from '../productTypes';

export const goldAndSilverConfig: ProductTypeConfig = {
  id: 'gold-and-silver',
  displayName: 'Gold and Silver',
  slug: 'gold-and-silver/best-gold-and-silver',
  hero: {
    title: 'Best',
    titleHighlight: 'Gold and Silver',
    authorName: 'Michael Chen',
    authorRole: 'Precious Metals Expert',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    metalType: {
      label: 'Metal Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'gold', label: 'Gold' },
        { value: 'silver', label: 'Silver' },
        { value: 'platinum', label: 'Platinum' },
        { value: 'palladium', label: 'Palladium' },
      ],
    },
    productType: {
      label: 'Product Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'coins', label: 'Coins' },
        { value: 'bars', label: 'Bars' },
        { value: 'jewelry', label: 'Jewelry' },
        { value: 'ira', label: 'IRA Eligible' },
      ],
    },
    priceRange: {
      label: 'Price Range',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'under_1k', label: 'Under $1,000' },
        { value: '1k_5k', label: '$1,000–$5,000' },
        { value: '5k_25k', label: '$5,000–$25,000' },
        { value: '25k_plus', label: '$25,000+' },
      ],
    },
    storage: {
      label: 'Storage',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'home', label: 'Home Storage' },
        { value: 'vault', label: 'Vault Storage' },
        { value: 'ira', label: 'IRA Storage' },
      ],
    },
  },
  filterOrder: ['metalType', 'productType', 'priceRange', 'storage'],
  wizard: {
    steps: [
      {
        question: 'What type of precious metal are you interested in?',
        key: 'metalType',
        options: [
          { value: 'gold', label: 'Gold' },
          { value: 'silver', label: 'Silver' },
          { value: 'platinum', label: 'Platinum' },
          { value: 'palladium', label: 'Palladium' },
        ],
      },
      {
        question: 'What type of product are you looking for?',
        key: 'productType',
        options: [
          { value: 'coins', label: 'Coins' },
          { value: 'bars', label: 'Bars' },
          { value: 'jewelry', label: 'Jewelry' },
          { value: 'ira', label: 'IRA Eligible Products' },
        ],
      },
      {
        question: 'What is your budget range?',
        key: 'priceRange',
        options: [
          { value: 'under_1k', label: 'Under $1,000' },
          { value: '1k_5k', label: '$1,000 - $5,000' },
          { value: '5k_25k', label: '$5,000 - $25,000' },
          { value: '25k_plus', label: '$25,000+' },
        ],
      },
      {
        question: 'How do you want to store your metals?',
        key: 'storage',
        options: [
          { value: 'home', label: 'Home Storage' },
          { value: 'vault', label: 'Vault Storage' },
          { value: 'ira', label: 'IRA Storage' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These dealers match your precious metals needs',
  },
  crossPromo: {
    title: 'Interested in cryptocurrency?',
    description: 'Compare the best cryptocurrency exchanges and wallets',
    icon: 'Coins',
    relatedProviders: [
      {
        id: 1,
        name: 'Coinbase',
        score: 9.6,
        description: 'Best for beginners',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Kraken',
        score: 9.4,
        description: 'Best for advanced traders',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Gemini',
        score: 9.2,
        description: 'Best security features',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Price Range',
};
