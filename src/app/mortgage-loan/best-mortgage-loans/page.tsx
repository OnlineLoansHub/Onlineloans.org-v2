'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { mortgageLoansConfig } from '@/config/productTypes/mortgageLoans';
import { mortgageLoansData } from '@/components/loans/mortgageLoansData';

const faqItems = [
  {
    question: 'What is a mortgage loan?',
    answer: 'A mortgage loan is a secured loan used to purchase real estate. The property serves as collateral, and if you fail to make payments, the lender can foreclose on the property.',
  },
  {
    question: 'What is the difference between fixed and adjustable rate mortgages?',
    answer: 'A fixed-rate mortgage has a constant interest rate for the entire loan term, providing predictable monthly payments. An adjustable-rate mortgage (ARM) has a rate that can change periodically, typically starting lower but potentially increasing over time.',
  },
  {
    question: 'How much down payment do I need?',
    answer: 'Conventional loans typically require 20% down, but FHA loans allow as little as 3.5% down, VA loans require 0% down for eligible veterans, and USDA loans offer 0% down for rural properties.',
  },
  {
    question: 'What credit score do I need for a mortgage?',
    answer: 'Most conventional loans require a credit score of at least 620, while FHA loans may accept scores as low as 500 with a larger down payment. Higher scores (740+) qualify for the best rates.',
  },
  {
    question: 'How long does the mortgage process take?',
    answer: 'The mortgage process typically takes 30-45 days from application to closing. This includes underwriting, appraisal, and final approval. Some lenders offer faster processing.',
  },
  {
    question: 'What is PMI and when do I need it?',
    answer: 'Private Mortgage Insurance (PMI) is required when your down payment is less than 20% on conventional loans. PMI protects the lender and typically costs 0.5-1% of the loan amount annually.',
  },
  {
    question: 'Can I refinance my mortgage?',
    answer: 'Yes, you can refinance your mortgage to get a lower interest rate, change your loan term, or switch from an ARM to a fixed-rate loan. Refinancing typically requires good credit and equity in your home.',
  },
  {
    question: 'What closing costs should I expect?',
    answer: 'Closing costs typically range from 2-5% of the loan amount and include origination fees, appraisal fees, title insurance, and prepaid items like property taxes and homeowners insurance.',
  },
];

export default function BestMortgageLoansPage() {
  return (
    <ProductComparisonPage
      productConfig={mortgageLoansConfig}
      lendersData={mortgageLoansData}
      faqItems={faqItems}
    />
  );
}

