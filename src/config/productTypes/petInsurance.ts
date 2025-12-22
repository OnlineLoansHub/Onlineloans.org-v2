import { ProductTypeConfig } from '../productTypes';

export const petInsuranceConfig: ProductTypeConfig = {
  id: 'pet-insurance',
  displayName: 'Pet Insurance',
  slug: 'pet-insurance/best-pet-insurance',
  hero: {
    title: 'Best',
    titleHighlight: 'Pet Insurance',
    authorName: 'Lisa Anderson',
    authorRole: 'Pet Care Specialist',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    petType: {
      label: 'Pet Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'other', label: 'Other' },
      ],
    },
    coverageType: {
      label: 'Coverage Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'accident_only', label: 'Accident Only' },
        { value: 'accident_illness', label: 'Accident & Illness' },
        { value: 'comprehensive', label: 'Comprehensive' },
      ],
    },
    deductible: {
      label: 'Deductible',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '0_100', label: '$0–$100' },
        { value: '100_250', label: '$100–$250' },
        { value: '250_500', label: '$250–$500' },
        { value: '500_plus', label: '$500+' },
      ],
    },
    reimbursement: {
      label: 'Reimbursement',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '70', label: '70%' },
        { value: '80', label: '80%' },
        { value: '90', label: '90%' },
        { value: '100', label: '100%' },
      ],
    },
  },
  filterOrder: ['petType', 'coverageType', 'deductible', 'reimbursement'],
  wizard: {
    steps: [
      {
        question: 'What type of pet do you have?',
        key: 'petType',
        options: [
          { value: 'dog', label: 'Dog' },
          { value: 'cat', label: 'Cat' },
          { value: 'other', label: 'Other Pet' },
        ],
      },
      {
        question: 'What type of coverage do you need?',
        key: 'coverageType',
        options: [
          { value: 'accident_only', label: 'Accident Only' },
          { value: 'accident_illness', label: 'Accident & Illness' },
          { value: 'comprehensive', label: 'Comprehensive Coverage' },
        ],
      },
      {
        question: 'What deductible amount works for you?',
        key: 'deductible',
        options: [
          { value: '0_100', label: '$0 - $100' },
          { value: '100_250', label: '$100 - $250' },
          { value: '250_500', label: '$250 - $500' },
          { value: '500_plus', label: '$500+' },
        ],
      },
      {
        question: 'What reimbursement percentage do you prefer?',
        key: 'reimbursement',
        options: [
          { value: '70', label: '70%' },
          { value: '80', label: '80%' },
          { value: '90', label: '90%' },
          { value: '100', label: '100%' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These providers match your pet insurance needs',
  },
  crossPromo: {
    title: 'Looking for pet care services?',
    description: 'Find trusted veterinarians and pet care providers',
    icon: 'Heart',
    relatedProviders: [
      {
        id: 1,
        name: 'Banfield',
        score: 9.6,
        description: 'Best preventive care',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'VCA',
        score: 9.4,
        description: 'Best emergency care',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'BluePearl',
        score: 9.2,
        description: 'Best specialty care',
        ctaUrl: '#',
      },
    ],
  },
};

