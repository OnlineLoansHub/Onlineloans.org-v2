import { ProductTypeConfig } from '../productTypes';

export const businessLoansConfig: ProductTypeConfig = {
  id: 'business-loans',
  displayName: 'Business Loans',
  comparisonHeroHighlight: 'Business Loan',
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
        { value: 'term_loan', label: 'Term Loan' },
        { value: 'line_of_credit', label: 'Line of Credit' },
        { value: 'working_capital', label: 'Working Capital' },
        { value: 'merchant_cash_advance', label: 'Merchant Cash Advance' },
        { value: 'invoice_financing', label: 'Invoice Financing' },
        { value: 'equipment_financing', label: 'Equipment Financing' },
        { value: 'sba_loan', label: 'SBA Loan' },
        { value: 'other', label: 'Other' },
      ],
    },
    monthlyRevenue: {
      label: 'Monthly Revenue',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '30k_plus', label: '$30K+' },
        { value: '20k_plus', label: '$20K+' },
        { value: '10k_plus', label: '$10K+' },
        { value: '5k_plus', label: '$5K+' },
        { value: 'lt_5k', label: 'Less than $5K' },
      ],
    },
    timeInBusiness: {
      label: 'Time in Business',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '10y_plus', label: '10 years+' },
        { value: '5y_plus', label: '5 years+' },
        { value: '1y_plus', label: '1 year+' },
        { value: '6m_plus', label: '6 months+' },
        { value: 'lt_6m', label: 'Less than 6 months' },
      ],
    },
    creditScore: {
      label: 'Credit Score',
      options: [
        { value: 'all', label: 'Show all' },
        { value: '700_plus', label: '700+' },
        { value: '650_plus', label: '650+' },
        { value: '600_plus', label: '600+' },
        { value: '550_plus', label: '550+' },
        { value: '500_plus', label: '500+' },
        { value: 'lt_500', label: 'Less than 500' },
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
          { value: '10y_plus', label: '10 years+' },
          { value: '5y_plus', label: '5 years+' },
          { value: '1y_plus', label: '1 year+' },
          { value: '6m_plus', label: '6 months+' },
          { value: 'lt_6m', label: 'Less than 6 months' },
        ],
      },
      {
        question: 'What is your average monthly revenue?',
        key: 'monthlyRevenue',
        options: [
          { value: '30k_plus', label: '$30K+' },
          { value: '20k_plus', label: '$20K+' },
          { value: '10k_plus', label: '$10K+' },
          { value: '5k_plus', label: '$5K+' },
          { value: 'lt_5k', label: 'Less than $5K' },
        ],
      },
      {
        question: 'What is your credit score range?',
        key: 'creditScore',
        options: [
          { value: '700_plus', label: '700+' },
          { value: '650_plus', label: '650+' },
          { value: '600_plus', label: '600+' },
          { value: '550_plus', label: '550+' },
          { value: '500_plus', label: '500+' },
          { value: 'lt_500', label: 'Less than 500' },
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
  amountLabel: 'Loan Amount',
};
