export interface Lender {
  id: string;
  name: string;
  logo?: string;
  badge?: string;
  description: string;
  loanAmountRange: string;
  minCreditScore: string;
  timeInBusiness: string;
  monthlyRevenue: string;
  fundingSpeed: string;
  pros: string[];
  ctaLink: string;
}

export const lenders: Lender[] = [
  {
    id: 'rok-financial',
    name: 'Rok Financial',
    badge: 'Top Lender',
    logo: '/images/brands-logos/rok-financial-logo.png',
    description:
      'Comprehensive business financing solutions with competitive rates and flexible terms.',
    loanAmountRange: '$10,000 - $5,000,000',
    minCreditScore: '600+',
    timeInBusiness: '1+ year',
    monthlyRevenue: '$10,000+',
    fundingSpeed: '24-72 hours',
    pros: [
      'Competitive rates',
      'Fast approval process',
      'High loan amounts',
      'Flexible repayment options',
      'Strong customer service',
    ],
    ctaLink: '/business-loan/apply',
  },
  {
    id: 'biz2credit',
    name: 'Biz2Credit',
    badge: 'Top Pick',
    logo: '/images/table/LightStream-logo.svg',
    description:
      'Comprehensive business financing platform offering multiple loan types with fast approval.',
    loanAmountRange: '$25,000 - $6,000,000',
    minCreditScore: '575+',
    timeInBusiness: '6+ months',
    monthlyRevenue: '$10,000+',
    fundingSpeed: '24-72 hours',
    pros: [
      'Wide range of loan products',
      'Fast approval process',
      'High loan amounts available',
      'Flexible repayment terms',
      'Strong customer support',
    ],
    ctaLink: '/business-loan/apply',
  },
  {
    id: 'lendio',
    name: 'Lendio',
    badge: 'Best Marketplace',
    logo: '/images/table/LightStream-logo.svg',
    description:
      'Business loan marketplace connecting you with multiple lenders in one application.',
    loanAmountRange: '$500 - $5,000,000',
    minCreditScore: '550+',
    timeInBusiness: '6+ months',
    monthlyRevenue: '$8,000+',
    fundingSpeed: '24-48 hours',
    pros: [
      'Compare multiple offers',
      'Single application process',
      'No credit impact for browsing',
      'Wide variety of loan types',
      'Free to use marketplace',
    ],
    ctaLink: '/business-loan/apply',
  },
  {
    id: 'ondeck',
    name: 'OnDeck',
    badge: 'Fastest Funding',
    logo: '/images/table/LightStream-logo.svg',
    description:
      'Specialized in fast business loans and lines of credit for established businesses.',
    loanAmountRange: '$5,000 - $250,000',
    minCreditScore: '600+',
    timeInBusiness: '1+ year',
    monthlyRevenue: '$10,000+',
    fundingSpeed: 'Same day',
    pros: [
      'Same-day funding available',
      'Simple online application',
      'Flexible credit requirements',
      'No collateral required',
      'Established lender reputation',
    ],
    ctaLink: '/business-loan/apply',
  },
];
