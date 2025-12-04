export interface Lender {
  id: string;
  name: string;
  logo?: string;
  badge?: string;
  description: string;
  loanAmountRange: string;
  minCreditScore?: string;
  timeInBusiness: string;
  monthlyRevenue: string;
  fundingSpeed: string;
  rating: number;
  pros: string[];
  ctaLink: string;
}

export const lenders: Lender[] = [
  {
    id: 'fundbox',
    name: 'Fundbox',
    badge: 'Best for Invoice Financing',
    logo: '/images/brands-logos/fund-box.svg',
    description: 'Fast invoice financing and lines of credit for small businesses and freelancers.',
    loanAmountRange: '$1,000 - $250,000',
    minCreditScore: 'Not specified',
    timeInBusiness: '3+ months',
    monthlyRevenue: '$2,500+',
    fundingSpeed: '24 hours',
    rating: 9.8,
    pros: [
      'Up to $250,000 in funding',
      'Quick approval process',
      'Invoice financing options',
      'Flexible repayment terms',
      '4.7 Trustpilot score',
    ],
    ctaLink: 'https://fundbox.com/',
  },
  {
    id: 'rok-financial',
    name: 'Rok Financial',
    badge: 'Top Lender',
    logo: '/images/brands-logos/rok-financial-logo.png',
    description:
      'Comprehensive business financing solutions with competitive rates and flexible terms.',
    loanAmountRange: '$10,000 - $5,000,000',
    minCreditScore: 'FICO not required',
    timeInBusiness: '6 Months+',
    monthlyRevenue: '$5,000+',
    fundingSpeed: '24-48 hours',
    rating: 10,
    pros: [
      'Competitive rates',
      'Fast approval process',
      'High loan amounts',
      'Flexible repayment options',
      'Strong customer service',
    ],
    ctaLink: 'https://go.mypartner.io/business-financing/?ref=001Qk00000XYAGdIAP',
  },
  {
    id: 'biz2credit',
    name: 'Biz2Credit',
    badge: 'Top Pick',
    logo: '/images/brands-logos/Biz2credit-logo.svg',
    description:
      'Biz2Credit has helped tens of thousands of small businesses get more than $8 billion in business loans and commercial financing.',
    loanAmountRange: '$25,000 - $1,000,000+',
    minCreditScore: '650+',
    timeInBusiness: '6+ months',
    monthlyRevenue: '$20,833+',
    fundingSpeed: '24 hours',
    rating: 9.6,
    pros: [
      'Over $8 billion funded since 2007',
      'Decision as fast as 24 hours',
      'Term loans $25K-$1M+',
      'Revenue-based financing available',
      '4.6/5 TrustPilot rating',
    ],
    ctaLink: 'https://www.biz2credit.com/',
  },
  {
    id: 'lendio',
    name: 'Lendio',
    badge: 'Best Marketplace',
    logo: '/images/brands-logos/lendio-logo.svg',
    description:
      "Nation's leading small business financing platform. Connect with 75+ lenders through one simple application. Over $16 billion facilitated.",
    loanAmountRange: '$1 - $1,000,000+',
    minCreditScore: 'Varies by lender',
    timeInBusiness: '6+ months',
    monthlyRevenue: '$8,000+',
    fundingSpeed: '24 hours',
    rating: 9.4,
    pros: [
      '75+ lender network',
      'Over 400,000 loans facilitated',
      'Funding in as little as 24 hours',
      'No credit impact for browsing',
      'Free marketplace platform',
    ],
    ctaLink: 'https://www.lendio.com/',
  },
  {
    id: 'fundera',
    name: 'Fundera',
    badge: 'Best for Small Business',
    logo: '/images/brands-logos/fundera-logo.svg',
    description:
      'Business loan marketplace helping small businesses find the right financing solutions. Over $5.9 billion secured through Fundera.',
    loanAmountRange: '$5,000 - $600,000',
    minCreditScore: '600+',
    timeInBusiness: '6+ months',
    monthlyRevenue: '$5,000+',
    fundingSpeed: '24-72 hours',
    rating: 9.0,
    pros: [
      'Over 85,000 businesses helped',
      'Compare 30+ lenders',
      'Free marketplace platform',
      '4.7 Trustpilot rating',
      'Personalized loan matching',
    ],
    ctaLink: 'https://www.fundera.com/',
  },
  {
    id: 'lightstream',
    name: 'LightStream',
    badge: 'Best Rates',
    logo: '/images/table/LightStream-logo.svg',
    description:
      'Low fixed rates with no fees or prepayment penalties. Fixed rate, simple interest fully amortizing installment loans for good-to-excellent credit.',
    loanAmountRange: '$5,000 - $100,000',
    minCreditScore: 'Good-Excellent',
    timeInBusiness: '2+ years',
    monthlyRevenue: 'Varies',
    fundingSpeed: 'Same day',
    rating: 9.5,
    pros: [
      'Low fixed rates',
      'No fees or prepayment penalties',
      'Funds as soon as today',
      'Simple interest loans',
      'Excellent customer service',
    ],
    ctaLink: 'https://www.lightstream.com/',
  },
];
