'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { personalLoansConfig } from '@/config/productTypes/personalLoans';
import { personalLoansData } from '@/components/loans/personalLoansData';

const faqItems = [
  {
    question: 'What is a personal loan?',
    answer: 'A personal loan is an unsecured loan that you can use for various purposes such as debt consolidation, home improvement, major purchases, or unexpected expenses. Unlike secured loans, personal loans don\'t require collateral.',
  },
  {
    question: 'What credit score do I need for a personal loan?',
    answer: 'Most lenders require a credit score of at least 600, though some may accept scores as low as 580. Higher credit scores (720+) typically qualify for the best interest rates and terms.',
  },
  {
    question: 'How much can I borrow with a personal loan?',
    answer: 'Personal loan amounts typically range from $1,000 to $100,000, depending on your creditworthiness, income, and the lender\'s policies. Some lenders offer loans up to $200,000 for well-qualified borrowers.',
  },
  {
    question: 'How long does it take to get approved?',
    answer: 'Many online lenders can approve and fund personal loans within 24-48 hours. Traditional banks may take 1-2 weeks. The speed depends on how quickly you provide required documents and complete the application.',
  },
  {
    question: 'What is the difference between a personal loan and a credit card?',
    answer: 'Personal loans provide a lump sum with fixed monthly payments and typically lower interest rates than credit cards. Credit cards offer revolving credit with variable rates and minimum payment options. Personal loans are better for large one-time expenses.',
  },
  {
    question: 'Can I pay off a personal loan early?',
    answer: 'Most personal loans allow early repayment without prepayment penalties. However, some lenders may charge a fee, so it\'s important to check the terms before signing.',
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You\'ll typically need proof of identity (driver\'s license or passport), proof of income (pay stubs, tax returns, or bank statements), proof of address, and employment verification.',
  },
  {
    question: 'Will applying for a personal loan affect my credit score?',
    answer: 'Applying for a personal loan triggers a hard credit inquiry, which may temporarily lower your score by a few points. However, making on-time payments can help improve your credit score over time.',
  },
];

export default function BestPersonalLoansPage() {
  return (
    <ProductComparisonPage
      productConfig={personalLoansConfig}
      lendersData={personalLoansData}
      faqItems={faqItems}
    />
  );
}
