'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { lifeInsuranceConfig } from '@/data/productTypes/lifeInsurance';
import { lifeInsuranceData } from '@/data/lifeInsuranceData';

const faqItems = [
  {
    question: 'What is life insurance?',
    answer:
      'Life insurance is a contract between you and an insurance company that pays a death benefit to your beneficiaries when you die, in exchange for premium payments.',
  },
  {
    question: 'What is the difference between term and whole life insurance?',
    answer:
      'Term life insurance provides coverage for a specific period (10, 20, or 30 years) with lower premiums. Whole life insurance provides permanent coverage with a cash value component and higher premiums.',
  },
  {
    question: 'How much life insurance do I need?',
    answer:
      "A common rule of thumb is 10-15 times your annual income, but consider your debts, mortgage, children's education costs, and final expenses. Online calculators can help determine your specific needs.",
  },
  {
    question: 'How much does life insurance cost?',
    answer:
      'Term life insurance costs vary based on age, health, coverage amount, and term length. A healthy 30-year-old might pay $20-30/month for $500,000 in 20-year term coverage. Whole life is significantly more expensive.',
  },
  {
    question: 'What factors affect life insurance premiums?',
    answer:
      'Key factors include age, gender, health status, family medical history, lifestyle (smoking, hobbies), occupation, and the amount and type of coverage you choose.',
  },
  {
    question: 'Do I need a medical exam for life insurance?',
    answer:
      "Most traditional life insurance policies require a medical exam. However, some insurers offer no-exam policies with higher premiums and lower coverage limits. Simplified issue policies ask health questions but don't require exams.",
  },
  {
    question: 'Can I change my life insurance policy?',
    answer:
      'Term policies can typically be converted to permanent policies within a certain period. You can also increase coverage (with underwriting) or decrease coverage. Some whole life policies allow you to adjust premiums.',
  },
  {
    question: 'What happens if I stop paying premiums?',
    answer:
      "If you stop paying premiums on a term policy, coverage ends. Whole life policies may have a grace period and may use cash value to pay premiums, but eventually coverage will lapse if premiums aren't paid.",
  },
];

export default function BestLifeInsurancePage() {
  return (
    <ProductComparisonPage
      productConfig={lifeInsuranceConfig}
      lendersData={lifeInsuranceData}
      faqItems={faqItems}
    />
  );
}
