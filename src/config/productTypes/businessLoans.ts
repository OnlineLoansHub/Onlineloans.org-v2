import { ProductTypeConfig } from '../productTypes';
import { Building2 } from 'lucide-react';

export const businessLoansConfig: ProductTypeConfig = {
  id: 'business-loans',
  displayName: 'Business Loans',
  slug: 'business-loan/best-business-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Business Loans',
    authorName: 'Michael Thompson',
    authorRole: 'Senior Business Finance Analyst',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    loanType: {
      label: 'Loan Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'business_loan', label: 'Business Loan' },
        { value: 'line_of_credit', label: 'Line of Credit' },
        { value: 'working_capital', label: 'Working Capital' },
        { value: 'sba', label: 'SBA' },
        { value: 'other', label: 'Other' },
      ],
    },
    monthlyRevenue: {
      label: 'Monthly Revenue',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'more_30k', label: 'More than $30K' },
        { value: '20k_30k', label: '$20K–$30K' },
        { value: '10k_20k', label: '$10K–$20K' },
        { value: 'less_10k', label: 'Less than $10K' },
      ],
    },
    timeInBusiness: {
      label: 'Time in Business',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '2_plus', label: '2+ years' },
        { value: '1_2', label: '1–2 years' },
        { value: '6m_1y', label: '6 months–1 year' },
        { value: '0_6m', label: '0–6 months' },
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
        { value: 'under_10k', label: 'Under $10,000' },
        { value: '10k_50k', label: '$10,000–$50,000' },
        { value: '50k_100k', label: '$50,000–$100,000' },
        { value: '100k_plus', label: '$100,000+' },
      ],
    },
  },
  filterOrder: ['loanType', 'monthlyRevenue', 'timeInBusiness', 'creditScore', 'loanAmount'],
  wizard: {
    steps: [
      {
        question: 'What type of loan are you looking for?',
        key: 'loanType',
        options: [
          { value: 'business_loan', label: 'Business Loan' },
          { value: 'line_of_credit', label: 'Line of Credit' },
          { value: 'working_capital', label: 'Working Capital' },
          { value: 'sba', label: 'SBA Loan' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        question: 'How long have you been in business?',
        key: 'timeInBusiness',
        options: [
          { value: '2_plus', label: '2 or more years' },
          { value: '1_2', label: '1-2 years' },
          { value: '6m_1y', label: '6 months to 1 year' },
          { value: '0_6m', label: '0-6 months' },
        ],
      },
      {
        question: 'What is your average monthly revenue?',
        key: 'monthlyRevenue',
        options: [
          { value: 'more_30k', label: 'More than $30K' },
          { value: '20k_30k', label: '$20K - $30K' },
          { value: '10k_20k', label: '$10K - $20K' },
          { value: 'less_10k', label: 'Less than $10K' },
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
        question: 'How much funding do you need?',
        key: 'loanAmount',
        options: [
          { value: 'more_100k', label: 'More than $100K' },
          { value: '50k_100k', label: '$50K - $100K' },
          { value: '25k_50k', label: '$25K - $50K' },
          { value: 'less_25k', label: 'Less than $25K' },
        ],
      },
      {
        question: 'How quickly do you need the funds?',
        key: 'fundingSpeed',
        options: [
          { value: 'asap', label: 'As soon as possible (within 24-48 hours)' },
          { value: 'within_week', label: 'Within a week' },
          { value: 'within_month', label: 'Within a month' },
          { value: 'flexible', label: 'Flexible timing' },
        ],
      },
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These lenders match your business profile',
  },
  crossPromo: {
    title: 'Are you looking to open a business account?',
    description: 'Explore the best online business checking accounts',
    icon: 'Building2',
    relatedProviders: [
      {
        id: 1,
        name: 'Mercury',
        score: 9.6,
        description: 'Best for startups and tech companies',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Bluevine',
        score: 9.4,
        description: 'Best for small business checking',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Relay',
        score: 9.2,
        description: 'Best for expense management',
        ctaUrl: '#',
      },
    ],
  },
};

