'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { autoLoansConfig } from '@/data/productTypes/autoLoans';
import { autoLoansData } from '@/data/autoLoansData';

const faqItems = [
  {
    question: 'What is an auto loan?',
    answer:
      'An auto loan is a secured loan used to purchase a vehicle. The vehicle serves as collateral, and if you default, the lender can repossess the vehicle.',
  },
  {
    question: 'What credit score do I need for an auto loan?',
    answer:
      'Most lenders require a credit score of at least 600, though some may accept scores as low as 500. Scores of 720+ qualify for the best interest rates.',
  },
  {
    question: 'How much can I borrow for an auto loan?',
    answer:
      "Auto loan amounts typically range from $5,000 to $100,000+, depending on the vehicle value, your creditworthiness, and the lender's policies. Most lenders finance up to 100-120% of the vehicle's value.",
  },
  {
    question: 'What is a good interest rate for an auto loan?',
    answer:
      'Interest rates vary based on credit score, loan term, and vehicle type. Excellent credit (720+) may qualify for rates as low as 2-4%, while fair credit (630-689) may see rates of 8-12%.',
  },
  {
    question: 'How long are auto loan terms?',
    answer:
      'Auto loan terms typically range from 24 to 84 months. Shorter terms (24-48 months) have higher monthly payments but lower total interest. Longer terms (60-84 months) have lower payments but higher total cost.',
  },
  {
    question: 'Can I refinance my auto loan?',
    answer:
      'Yes, you can refinance your auto loan to get a lower interest rate or change your loan term. Refinancing is most beneficial if your credit has improved or interest rates have dropped.',
  },
  {
    question: 'Should I get pre-approved for an auto loan?',
    answer:
      'Yes, getting pre-approved helps you know your budget, negotiate better with dealers, and compare rates from multiple lenders. Pre-approval typically lasts 30-60 days.',
  },
  {
    question: 'What is GAP insurance?',
    answer:
      "GAP (Guaranteed Asset Protection) insurance covers the difference between what you owe on your loan and the vehicle's actual cash value if it's totaled or stolen. It's especially valuable for new vehicles that depreciate quickly.",
  },
];

export default function BestAutoLoansPage() {
  return (
    <ProductComparisonPage
      productConfig={autoLoansConfig}
      lendersData={autoLoansData}
      faqItems={faqItems}
    />
  );
}
