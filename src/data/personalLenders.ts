export interface PersonalLender {
  id: string;
  name: string;
  logo?: string;
  badge?: string;
  description: string;
  loanAmountRange: string;
  minCreditScore: string;
  aprRange: string;
  fundingSpeed: string;
  pros: string[];
  ctaLink: string;
  isFeatured?: boolean;
}

export const personalLenders: PersonalLender[] = [
  {
    id: 'discover',
    name: 'NerdWallet',
    badge: 'Best for Debt Consolidation',
    logo: '/images/brands-logos/nerd-wallet-logo.svg',
    description: 'Reliable personal loans with fixed rates and no origination fees for debt consolidation.',
    loanAmountRange: '$2,500 - $40,000',
    minCreditScore: '660+',
    aprRange: '7.99% - 24.99%',
    fundingSpeed: '1-2 days',
    pros: [
      'No origination fees',
      'Fixed interest rates',
      'Fast funding',
      'Direct payment to creditors',
      '24/7 customer service',
    ],
    ctaLink: '/personal-loan/apply',
  },
  {
    id: 'credit-ninja',
    name: 'Credit Ninja',
    badge: 'Best for Fair Credit',
    logo: '/images/brands-logos/credit-ninja.svg',
    description: 'AI-powered lending platform that considers education and work history, not just credit scores.',
    loanAmountRange: '$1,000 - $50,000',
    minCreditScore: '600+',
    aprRange: '6.40% - 35.99%',
    fundingSpeed: '1-3 days',
    pros: [
      'Fair credit considered',
      'Fast application process',
      'Quick funding',
      'Transparent rates',
      'No prepayment penalties',
    ],
    ctaLink: '/personal-loan/apply',
    isFeatured: true,
  },
  {
    id: 'sofi',
    name: 'SoFi',
    badge: 'Best Overall',
    logo: '/images/table/Sofi-logo.svg',
    description: 'Comprehensive personal loan platform with competitive rates and member benefits.',
    loanAmountRange: '$5,000 - $100,000',
    minCreditScore: '680+',
    aprRange: '8.99% - 25.81%',
    fundingSpeed: '1-3 days',
    pros: [
      'Competitive interest rates',
      'No fees',
      'Unemployment protection',
      'Member benefits program',
      'Fast approval process',
    ],
    ctaLink: '/personal-loan/apply',
  },
  {
    id: 'lendingclub',
    name: 'LendingClub',
    badge: 'Best Marketplace',
    logo: '/images/brands-logos/lending-cluc-logo.svg',
    description: 'Peer-to-peer lending marketplace connecting borrowers with investors for competitive rates.',
    loanAmountRange: '$1,000 - $40,000',
    minCreditScore: '600+',
    aprRange: '8.05% - 36.00%',
    fundingSpeed: '3-7 days',
    pros: [
      'Competitive marketplace rates',
      'Flexible loan amounts',
      'Fixed monthly payments',
      'No prepayment penalties',
      'Established platform',
    ],
    ctaLink: '/personal-loan/apply',
  },
  {
    id: 'best-egg',
    name: 'Best Egg',
    badge: 'Fast Funding',
    logo: '/images/brands-logos/fundera-logo.svg',
    description: 'Fast personal loans with competitive rates and quick approval for qualified borrowers.',
    loanAmountRange: '$2,000 - $50,000',
    minCreditScore: '600+',
    aprRange: '8.99% - 35.99%',
    fundingSpeed: '1-3 days',
    pros: [
      'Fast approval process',
      'Quick funding',
      'Competitive rates',
      'No prepayment penalties',
      'Easy online application',
    ],
    ctaLink: '/personal-loan/apply',
  },
  {
    id: 'marcus',
    name: 'Marcus by Goldman Sachs',
    badge: 'Best for Large Loans',
    logo: '/images/brands-logos/lendio-logo.svg',
    description: 'No-fee personal loans with flexible terms and competitive rates from a trusted bank.',
    loanAmountRange: '$3,500 - $40,000',
    minCreditScore: '660+',
    aprRange: '6.99% - 24.99%',
    fundingSpeed: '1-4 days',
    pros: [
      'No fees whatsoever',
      'Flexible repayment terms',
      'On-time payment rewards',
      'No prepayment penalties',
      'Backed by Goldman Sachs',
    ],
    ctaLink: '/personal-loan/apply',
  },
];

