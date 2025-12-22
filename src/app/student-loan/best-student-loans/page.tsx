'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { studentLoansConfig } from '@/config/productTypes/studentLoans';
import { studentLoansData } from '@/components/loans/studentLoansData';

const faqItems = [
  {
    question: 'What is the difference between federal and private student loans?',
    answer: 'Federal student loans are offered by the government with fixed interest rates, income-driven repayment options, and forgiveness programs. Private student loans are from banks or lenders with variable or fixed rates and fewer borrower protections.',
  },
  {
    question: 'How much can I borrow in student loans?',
    answer: 'Federal loan limits depend on your year in school and dependency status, ranging from $5,500 to $12,500 annually for undergraduates. Private loans can cover up to the full cost of attendance minus other financial aid.',
  },
  {
    question: 'When do I need to start repaying student loans?',
    answer: 'Federal loans typically have a 6-month grace period after graduation. Private loans may require immediate repayment or offer a grace period. Check your loan terms for specific details.',
  },
  {
    question: 'Can I refinance my student loans?',
    answer: 'Yes, you can refinance both federal and private student loans through private lenders. However, refinancing federal loans means losing access to income-driven repayment and forgiveness programs.',
  },
  {
    question: 'What is student loan forgiveness?',
    answer: 'Student loan forgiveness programs cancel remaining loan debt after meeting specific requirements, such as working in public service for 10 years (PSLF) or making payments for 20-25 years on income-driven plans.',
  },
  {
    question: 'What credit score do I need for a private student loan?',
    answer: 'Most private lenders require a credit score of at least 650, though some may accept lower scores with a cosigner. Higher scores qualify for better interest rates.',
  },
  {
    question: 'Can I get a student loan without a cosigner?',
    answer: 'Federal loans don\'t require a cosigner. Private loans may require a cosigner if you have limited credit history or income. Some lenders offer loans without cosigners for graduate students or borrowers with strong credit.',
  },
  {
    question: 'What happens if I can\'t make my student loan payments?',
    answer: 'Federal loans offer deferment, forbearance, and income-driven repayment options. Private loans may offer temporary payment relief, but options vary by lender. Contact your loan servicer immediately if you\'re struggling.',
  },
];

export default function BestStudentLoansPage() {
  return (
    <ProductComparisonPage
      productConfig={studentLoansConfig}
      lendersData={studentLoansData}
      faqItems={faqItems}
    />
  );
}

