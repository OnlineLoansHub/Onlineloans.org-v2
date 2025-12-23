import { ProductTypeConfig } from '../productTypes';

export const studentLoansConfig: ProductTypeConfig = {
  id: 'student-loans',
  displayName: 'Student Loans',
  slug: 'student-loan/best-student-loans',
  hero: {
    title: 'Best',
    titleHighlight: 'Student Loans',
    authorName: 'Emily Chen',
    authorRole: 'Education Finance Advisor',
    authorImageUrl: '/images/authors/0_Man_Adult_1920x1080_optimize.gif',
    badgeImagePath: '/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg',
  },
  filters: {
    loanType: {
      label: 'Loan Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'federal', label: 'Federal' },
        { value: 'private', label: 'Private' },
        { value: 'refinance', label: 'Refinance' },
      ],
    },
    schoolType: {
      label: 'School Type',
      options: [
        { value: 'all', label: 'Show all' },
        { value: 'undergraduate', label: 'Undergraduate' },
        { value: 'graduate', label: 'Graduate' },
        { value: 'professional', label: 'Professional' },
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
  },
  filterOrder: ['loanType', 'schoolType', 'loanAmount', 'creditScore'],
  wizard: {
    steps: [
      {
        question: 'What type of student loan do you need?',
        key: 'loanType',
        options: [
          { value: 'federal', label: 'Federal Loan' },
          { value: 'private', label: 'Private Loan' },
          { value: 'refinance', label: 'Refinance Existing Loan' },
        ],
      },
      {
        question: 'What type of student are you?',
        key: 'schoolType',
        options: [
          { value: 'undergraduate', label: 'Undergraduate' },
          { value: 'graduate', label: 'Graduate' },
          { value: 'professional', label: 'Professional' },
        ],
      },
      {
        question: 'How much do you need to borrow?',
        key: 'loanAmount',
        options: [
          { value: 'under_10k', label: 'Under $10,000' },
          { value: '10k_50k', label: '$10,000 - $50,000' },
          { value: '50k_100k', label: '$50,000 - $100,000' },
          { value: '100k_plus', label: '$100,000+' },
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
    ],
    resultsTitle: 'Based on your answers, we recommend',
    resultsSubtitle: 'These lenders match your student loan needs',
  },
  crossPromo: {
    title: 'Looking for scholarship opportunities?',
    description: 'Find scholarships and grants to reduce your loan needs',
    icon: 'GraduationCap',
    relatedProviders: [
      {
        id: 1,
        name: 'Scholarship.com',
        score: 9.6,
        description: 'Best scholarship database',
        ctaUrl: '#',
      },
      {
        id: 2,
        name: 'Fastweb',
        score: 9.4,
        description: 'Best matching service',
        ctaUrl: '#',
      },
      {
        id: 3,
        name: 'Cappex',
        score: 9.2,
        description: 'Best for college planning',
        ctaUrl: '#',
      },
    ],
  },
  amountLabel: 'Loan Amount',
};
