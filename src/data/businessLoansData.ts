import type { Brand } from './brands';

type SmallCardInfo = Pick<
  Brand,
  | 'id'
  | 'name'
  | 'logo'
  | 'ourScore'
  | 'trustpilotScore'
  | 'brandReputation'
  | 'popularityScore'
  | 'reviewCount'
  | 'highlight'
  | 'productTypes'
  | 'amount'
  | 'ctaUrl'
  | 'websiteUrl'
  | 'minCreditScore'
  | 'minRevenue'
  | 'minTimeInBusiness'
  | 'amountRange'
>;

type SmallCardOverrides = {
  /**
   * Card-only checkmarks (exactly what appears as the 4 bullet/check lines on the lender card).
   * This is independent from readMore.goodDetails (used in the deep-dive tables).
   */
  cardCheckmarks: string[];
};

type ReadMoreInfo = {
  companyOverview: string;
  goodDetails: string[];
  badDetails: string[];
  images?: Array<{
    src: string;
    alt: string;
  }>;
  loanTable?: Array<{
    loanType: string;
    details: string;
  }>;
  foundedYear?: number;
  headquarters?: string;
  phoneNumber?: string;
};

export type BusinessLoanBrandEntry = {
  smallCard: SmallCardInfo & SmallCardOverrides;
  readMore: ReadMoreInfo;
};

// Authoring format: each brand has small-card fields first, then deep read-more content.
export const businessLoansEntries: BusinessLoanBrandEntry[] = [
  {
    smallCard: {
      id: 1,
      name: 'Lendzi',
      logo: '/images/brands-logos/Lendzi-logo.svg',
      ourScore: 10.0,
      trustpilotScore: 9.9,
      brandReputation: 10,
      popularityScore: 10,
      reviewCount: 1389,
      highlight: 'Fast and flexible business funding solutions with competitive rates',
      productTypes: [
        'term_loan',
        'line_of_credit',
        'working_capital',
        'merchant_cash_advance',
        'equipment_financing',
        'sba_loan',
      ],
      minCreditScore: '550',
      minRevenue: '10k',
      minTimeInBusiness: '1y',
      amountRange: '50k_100k',
      amount: '$5K - $1M+',
      ctaUrl: 'https://app.lendzi.com/web/v2?lead_source=onlineloans.org&click_id=',
      websiteUrl: 'https://app.lendzi.com/web/v2?lead_source=onlineloans.org&click_id=',
      cardCheckmarks: [
        'Broad product coverage',
        'Compare offers in one flow',
        'Fast-funding options available',
        'Online application',
      ],
    },
    readMore: {
      foundedYear: 2020,
      headquarters: 'Los Angeles, California',
      phoneNumber: '(888) 555-2020',
      images: [
        {
          src: '/images/readMore/lendzi.com-homepage-screenshot.png',
          alt: 'Lendzi homepage screenshot',
        },
      ],
      loanTable: [
        {
          loanType: 'Term loans',
          details:
            'Fixed payment schedule over a set term. Typically best for larger one-time purchases, expansions, or refinancing higher-cost debt.',
        },
        {
          loanType: 'Lines of credit',
          details:
            'Reusable credit line you draw from as needed. Often used for working capital, seasonal expenses, and smoothing cash flow.',
        },
        {
          loanType: 'SBA-backed loans',
          details:
            'Issued by partner lenders with SBA guarantee framework (not directly by the SBA). Can offer favorable terms, but usually involves heavier documentation and longer timelines.',
        },
        {
          loanType: 'Equipment financing',
          details:
            'Designed for purchasing equipment; the equipment may serve as collateral. Useful when you want the asset cost spread over time.',
        },
        {
          loanType: 'Merchant cash advance (MCA)',
          details:
            'Advance repaid from future sales (often daily/weekly). Can fund quickly, but effective cost can be higher than term financing.',
        },
        {
          loanType: 'Invoice factoring',
          details:
            'Access cash by selling unpaid invoices. Helpful for B2B businesses with long payment cycles; cost depends on invoice terms and customer quality.',
        },
      ],
      companyOverview:
        'Lendzi is an online small-business financing marketplace that helps borrowers compare multiple offers through one digital application flow. Its small-business guide highlights core products such as term loans, SBA-backed loans, business lines of credit, equipment financing, merchant cash advances, invoice factoring, and related specialty funding programs. The platform also emphasizes that SBA financing is typically issued by partner lenders while the SBA provides a guarantee framework, and that timelines can vary widely by product type. Faster products (like merchant cash advances or factoring) can fund quickly in some cases, while SBA and traditional term products often require more documentation and longer underwriting. Overall, Lendzi positions itself as a matching and education-first experience for owners who want to evaluate options by funding amount, business profile, and repayment fit.',
      goodDetails: [
        'Broad product coverage: term loans, SBA options, lines of credit, equipment financing, MCA, and factoring',
        'Marketplace model helps compare multiple lender offers in one flow',
        'Guidance around key qualification factors such as credit, revenue, and time in business',
        'Supports startup and established-business funding scenarios',
        'Highlights fast-funding alternatives for urgent cash-flow needs',
        'Online application and lender-matching experience',
      ],
      badDetails: [
        'SBA and traditional products can require heavier documentation and longer timelines',
        'Rates, fees, and repayment structures vary materially by lender',
        'Higher-cost products (for example some MCA structures) may be expensive versus term loans',
        'Approval still depends on lender-specific underwriting and business fundamentals',
      ],
    },
  },
  {
    smallCard: {
      id: 2,
      name: 'Cardiff',
      logo: '/images/brands-logos/Cardiff2-logo.webp',
      ourScore: 9.9,
      trustpilotScore: 9.4,
      brandReputation: 9.6,
      popularityScore: 9.5,
      reviewCount: 850,
      highlight: 'Same day approval and funding - $12+ billion funded to small businesses',
      productTypes: [
        'term_loan',
        'line_of_credit',
        'working_capital',
        'merchant_cash_advance',
        'equipment_financing',
        'sba_loan',
        'invoice_financing',
      ],
      minCreditScore: '600',
      minRevenue: '25k',
      minTimeInBusiness: '1y',
      amountRange: '50k_100k',
      amount: '$10K - $1M',
      ctaUrl: 'https://cardiffinc.sjv.io/4G30Go',
      websiteUrl: 'https://cardiff.co/affiliate/small-business-loans/',
      cardCheckmarks: [
        '$12+ billion funded',
        'Same-day decisions (cutoff applies)',
        'Rates from 5.99%',
        '5-minute application',
      ],
    },
    readMore: {
      foundedYear: 2004,
      headquarters: 'San Diego, California',
      phoneNumber: '(888) 234-0166',
      companyOverview:
        'Cardiff provides small business financing products across multiple use cases, including working capital and term-style funding. The brand highlights speed, transparent terms, and an online-first application experience designed for established operators who need quick access to growth capital.',
      goodDetails: [
        '$12+ billion funded to small businesses',
        'Same day approval and funding* (by 5:00 p.m. ET)',
        'Rates starting at 5.99%',
        'Nearly 20 years of experience',
        'BBB Accredited Business',
        'Application process only takes 5 minutes',
        'No hard credit pulls (soft credit check)',
        'Transparent rates and terms',
        'Both secured and unsecured loan options',
        'Online Application: Yes',
      ],
      badDetails: [
        'Time in Business: 12+ months',
        'Monthly Revenue: At least $20,000',
        'Minimum Credit Score: 600',
        'Must be incorporated as Corporation or LLC in United States',
        'Active bank connection (Plaid) or statements from last 3 months required',
      ],
    },
  },
  {
    smallCard: {
      id: 3,
      name: 'Advance Funds Network',
      logo: '/images/brands-logos/Afn-logo.webp',
      ourScore: 9.9,
      trustpilotScore: 10,
      brandReputation: 9.1,
      popularityScore: 9.1,
      reviewCount: 1595,
      highlight: 'A range of funding options for your business - funding in just 4 hours with no hidden fees',
      productTypes: [
        'term_loan',
        'working_capital',
        'line_of_credit',
        'equipment_financing',
        'merchant_cash_advance',
      ],
      minCreditScore: '600',
      minRevenue: '25k',
      minTimeInBusiness: '1y',
      amountRange: '50k_100k',
      amount: '$10K - $5M',
      ctaUrl:
        'https://app.advancefundsnetwork.com/affiliate-landing/9JMkP2lQY2bbyrL8waoq0T9pk2g2?sub_id_1=&sub_id_2=',
      websiteUrl:
        'https://app.advancefundsnetwork.com/affiliate-landing/9JMkP2lQY2bbyrL8waoq0T9pk2g2?sub_id_1=&sub_id_2=',
      cardCheckmarks: ['Funding in ~4 hours', 'No hidden fees', 'Flexible options', 'No collateral required'],
    },
    readMore: {
      foundedYear: 2007,
      headquarters: 'Brooklyn, New York',
      phoneNumber: '(888) 555-2000',
      companyOverview:
        'Advance Funds Network offers multiple small-business funding routes with a strong speed narrative, including working capital, term-style products, lines of credit, equipment financing, and merchant cash advances. It is often positioned for businesses prioritizing fast turnarounds and straightforward processing.',
      goodDetails: [
        'Funding Speed: 4 hours',
        'No Hidden Fees',
        'Not Dependent on Credit History',
        'Fee-Free Options Available',
        'Collateral Required: No',
        'Prepayment Penalty: None',
        'Flexible Funding Solutions',
      ],
      badDetails: [
        'Time in Business: 12+ months',
        'Monthly Revenue: At least $15,000 (for Working Capital Loans)',
      ],
    },
  },
  {
    smallCard: {
      id: 4,
      name: 'ROK Financial',
      logo: '/images/brands-logos/Rokfinancial.webp',
      ourScore: 9.8,
      trustpilotScore: 9.9,
      brandReputation: 9.2,
      popularityScore: 9.2,
      reviewCount: 1085,
      highlight: "You don't need perfect credit to get an offer - instant pre-approval available",
      productTypes: [
        'term_loan',
        'line_of_credit',
        'working_capital',
        'merchant_cash_advance',
        'equipment_financing',
        'sba_loan',
        'invoice_financing',
      ],
      minCreditScore: '500',
      minRevenue: '7k',
      minTimeInBusiness: '6m_1y',
      amountRange: '50k_100k',
      amount: '$5K - $10M',
      ctaUrl: 'https://go.mypartner.io/business-financing/?ref=001Qk00000XYAGdIAP&sub_id_1=',
      websiteUrl: 'https://www.rok.biz/business-loans/',
      cardCheckmarks: [
        'Instant pre-approval',
        'No perfect credit required',
        'Same-day funding',
        'Multiple options',
      ],
    },
    readMore: {
      foundedYear: 2020,
      headquarters: 'Great River, New York',
      phoneNumber: '(833) 376-5249',
      images: [
        {
          src: '/images/readMore/Rok.biz-homepage-screenshot.png',
          alt: 'ROK Financial homepage screenshot',
        },
      ],
      companyOverview:
        'ROK Financial is a financing brokerage model that connects small businesses to a wide lender network. Its positioning focuses on pre-approval speed and flexibility for borrowers who may not fit traditional bank boxes but still want to compare several offers before selecting terms.',
      goodDetails: [
        'Instant Pre-Approval Available',
        'No Perfect Credit Required',
        'Funding Speed: Same day',
        'Collateral Required: No',
        'Prepayment Penalty: None',
        'Online Application: Yes',
        'Multiple Financing Options Available',
      ],
      badDetails: [
        'Time in Business: 6+ months',
        'Monthly Revenue: At least $10,000',
        'Minimum Credit Score: 500',
      ],
    },
  },
  {
    smallCard: {
      id: 5,
      name: 'Fora Financial',
      logo: '/images/brands-logos/Fora-logo.webp',
      ourScore: 9.7,
      trustpilotScore: 9.5,
      brandReputation: 9.5,
      popularityScore: 9.4,
      reviewCount: 969,
      highlight: 'More than 55,000 companies funded - Growth potential more important than credit score',
      productTypes: ['term_loan', 'line_of_credit', 'merchant_cash_advance', 'sba_loan', 'equipment_financing'],
      minCreditScore: 'poor',
      minRevenue: '10k_20k',
      minTimeInBusiness: '6m_1y',
      amountRange: '50k_100k',
      amount: 'Up to $1.5M',
      ctaUrl: 'https://forafinancial.pxf.io/c/6429639/2015280/24953',
      websiteUrl: 'https://www.forafinancial.com/',
      cardCheckmarks: [
        '$4B+ funded',
        '55,000+ companies',
        'Decisions in ~4 hours',
        'Funding in ~24 hours',
      ],
    },
    readMore: {
      foundedYear: 2008,
      headquarters: 'New York, New York',
      phoneNumber: '(877) 419-3568',
      companyOverview:
        'Fora Financial is a long-running alternative business finance provider known for funding volume and speed-oriented workflows. It is often presented as a fit for operators with solid revenue traction who want a direct-funder style experience and dedicated support through underwriting and repayment planning.',
      goodDetails: [
        '$4 billion distributed',
        '55,000+ companies funded',
        'A+ BBB rating',
        'Approval decision in as little as 4 hours',
        'Funding in 24 hours of offer acceptance',
        'Growth potential more important than credit score',
        'One-on-one Capital Specialist support',
        'No hard credit pulls',
        'No prepayment penalties',
        'No application fees',
        '17 years of experience (since 2008)',
      ],
      badDetails: [
        'Time in Business: 6+ months',
        'Must have business checking account',
        'Terms vary based on business performance',
      ],
    },
  },
  {
    smallCard: {
      id: 6,
      name: 'BriteCap',
      logo: '/images/brands-logos/BriteCap-logo.webp',
      ourScore: 9.9,
      trustpilotScore: 9.1,
      brandReputation: 8.9,
      popularityScore: 8.9,
      reviewCount: 720,
      highlight: 'Fast and flexible business funding solutions',
      productTypes: ['term_loan', 'line_of_credit', 'working_capital'],
      minCreditScore: '500',
      minRevenue: '7k',
      minTimeInBusiness: '6m_1y',
      amountRange: '25k_50k',
      amount: '$5K - $10M',
      ctaUrl: 'https://britecapfinancial.sjv.io/QjBVkx',
      websiteUrl: 'https://britecapfinancial.sjv.io/QjBVkx',
      cardCheckmarks: [
        'Fast funding available',
        'Flexible repayment terms',
        'Online application',
        'Multiple options',
      ],
    },
    readMore: {
      foundedYear: 2003,
      headquarters: 'Las Vegas, Nevada',
      phoneNumber: '(888) 555-2019',
      images: [
        {
          src: '/images/readMore/Britecap.com-homepage-screenshot.png',
          alt: 'BriteCap homepage screenshot',
        },
      ],
      companyOverview:
        'BriteCap Financial is a technology-enabled funding provider focused on speed and flexibility for established small businesses. The company typically emphasizes quick application flow, business-friendly repayment design, and practical capital options for growth and operating needs.',
      goodDetails: [
        'Fast funding available',
        'Flexible repayment terms',
        'Online Application: Yes',
        'Multiple financing options',
      ],
      badDetails: [
        'Time in Business: 6+ months',
        'Monthly Revenue: At least $10,000',
        'Minimum Credit Score: 600',
      ],
    },
  },
  {
    smallCard: {
      id: 7,
      name: 'Uplyft',
      logo: '/images/brands-logos/Uplyftcapital-logo.webp',
      ourScore: 9.5,
      trustpilotScore: 9.8,
      brandReputation: 9.3,
      popularityScore: 9.3,
      reviewCount: 605,
      highlight: '87% approval rate - No hard credit check required, funding in as little as same day',
      productTypes: ['merchant_cash_advance', 'line_of_credit', 'term_loan', 'sba_loan', 'equipment_financing'],
      minCreditScore: 'poor',
      minRevenue: '10k_20k',
      minTimeInBusiness: '6m_1y',
      amountRange: '50k_100k',
      amount: '$5K - $2M',
      ctaUrl: 'https://uplyftcapital.sjv.io/JK1NMr',
      websiteUrl: 'https://www.uplyftcapital.com/marketplace',
      cardCheckmarks: [
        '87% approval rate',
        'No hard credit check',
        'Same-day funding',
        'No collateral required',
      ],
    },
    readMore: {
      foundedYear: 2012,
      headquarters: 'South Florida (Dania Beach area)',
      phoneNumber: '(800) 515-7531',
      companyOverview:
        'Uplyft Capital offers funding paths like merchant cash advances, lines of credit, and term-oriented products with an underwriting profile that aims to be more flexible than many traditional lenders. The brand message centers on approval odds, speed, and minimal friction.',
      goodDetails: [
        '87% Approval Rate',
        'No Hard Credit Check Required',
        'Funding Speed: Same day (can take 24-48 hours after approval)',
        'Simple Application Process',
        'Flexible Repayment Options',
        'No Collateral Required',
        'High Approval Rates',
        'Fast Renewals Available',
        'Collateral Required: No',
        'Prepayment Penalty: None',
        'Online Application: Yes',
      ],
      badDetails: [
        'Time in Business: 6+ months',
        'Monthly Revenue: At least $8,000',
        'Minimum Credit Score: 475',
      ],
    },
  },
  {
    smallCard: {
      id: 8,
      name: 'NerdWallet',
      logo: '/images/brands-logos/NerdWallet-logo.webp',
      ourScore: 9.4,
      trustpilotScore: 8.9,
      brandReputation: 9.2,
      popularityScore: 8.9,
      reviewCount: 15678,
      highlight: 'Comprehensive comparison platform with expert financial advice',
      productTypes: ['term_loan', 'sba_loan', 'line_of_credit'],
      minCreditScore: 'fair',
      minRevenue: '10k_20k',
      minTimeInBusiness: '6m_1y',
      amountRange: '50k_100k',
      amount: '$5K - $500K',
      ctaUrl: 'https://www.swagtrk.com/DC5H4JF/77N8QCQM/?source_id=YourPUBID&sub3=YourCLICKID',
      websiteUrl: 'https://www.swagtrk.com/DC5H4JF/77N8QCQM/?source_id=YourPUBID&sub3=YourCLICKID',
      cardCheckmarks: [
        'Compare lenders & products',
        'Editorial guidance',
        'Fast application flow',
        'Broad lender network',
      ],
    },
    readMore: {
      foundedYear: 2009,
      headquarters: 'San Francisco, California',
      phoneNumber: '(888) 555-2014',
      companyOverview:
        'NerdWallet is a personal finance publisher and comparison platform that expanded small-business lending marketplace capabilities through Fundera. In this context, it is primarily a research and comparison destination rather than a direct lender.',
      goodDetails: [
        'Funding Speed: 2-4 business days',
        'Collateral Required: No',
        'Prepayment Penalty: None',
        'Online Application: Yes',
      ],
      badDetails: [
        'Time in Business: 6+ months',
        'Monthly Revenue: At least $10,000',
        'Minimum Credit Score: 600',
        'APR Range: 8% - 30%',
      ],
    },
  },
  {
    smallCard: {
      id: 9,
      name: 'CreditNinja',
      logo: '/images/brands-logos/CreditNinja.webp',
      ourScore: 9.3,
      trustpilotScore: 8.9,
      brandReputation: 8.9,
      popularityScore: 8.9,
      reviewCount: 2345,
      highlight: 'Specialized loans for startups and new businesses',
      productTypes: ['term_loan', 'other'],
      minCreditScore: 'poor',
      minRevenue: 'less_10k',
      minTimeInBusiness: '0_6m',
      amountRange: 'under_10k',
      amount: '$2K - $8K',
      ctaUrl: 'https://www.swagtrk.com/DC5H4JF/7CQKNN64/?source_id=YourPUBID&sub3=YourCLICKID',
      websiteUrl: 'https://www.swagtrk.com/DC5H4JF/7CQKNN64/?source_id=YourPUBID&sub3=YourCLICKID',
      cardCheckmarks: [
        'Funding in 24–48 hours',
        'No collateral required',
        'Easy qualification',
        'Online application',
      ],
    },
    readMore: {
      foundedYear: 2018,
      headquarters: 'Chicago, Illinois',
      phoneNumber: '(888) 555-2016',
      companyOverview:
        'CreditNinja is known for online installment-style lending experiences and fast digital application flow. On this page it is positioned as a smaller-dollar alternative for users who may not fit stricter traditional lending channels.',
      goodDetails: [
        'Funding Speed: 24-48 hours',
        'Collateral Required: No',
        'Prepayment Penalty: None',
        'Easy Qualification: Yes',
      ],
      badDetails: [
        'Time in Business: 0+ months',
        'Monthly Revenue: At least $3,000',
        'Minimum Credit Score: 550',
        'APR Range: 12% - 35%',
      ],
    },
  },
];

export const businessLoansData: Brand[] = businessLoansEntries.map(({ smallCard, readMore }) => ({
  ...smallCard,
  companyOverview: readMore.companyOverview,
  goodDetails: readMore.goodDetails,
  badDetails: readMore.badDetails,
  readMoreImages: readMore.images,
  readMoreLoanTable: readMore.loanTable,
  foundedYear: readMore.foundedYear,
  headquarters: readMore.headquarters,
  phoneNumber: readMore.phoneNumber,
  cardCheckmarks: smallCard.cardCheckmarks,
}));
