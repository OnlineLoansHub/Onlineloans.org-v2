'use client';

import ProductComparisonPage from '@/components/loans/ProductComparisonPage';
import { petInsuranceConfig } from '@/data/productTypes/petInsurance';
import { petInsuranceData } from '@/data/petInsuranceData';

const faqItems = [
  {
    question: 'What is pet insurance?',
    answer:
      "Pet insurance helps cover veterinary costs for your pet's accidents, illnesses, and sometimes routine care. It works similarly to human health insurance, with premiums, deductibles, and coverage limits.",
  },
  {
    question: 'What does pet insurance cover?',
    answer:
      'Coverage varies by plan but typically includes accidents, illnesses, surgeries, medications, and sometimes routine care like vaccinations and checkups. Pre-existing conditions are usually excluded.',
  },
  {
    question: 'How much does pet insurance cost?',
    answer:
      "Pet insurance premiums typically range from $20-$60 per month for dogs and $15-$40 per month for cats, depending on the pet's age, breed, location, and coverage level.",
  },
  {
    question: 'When should I get pet insurance?',
    answer:
      "The best time to get pet insurance is when your pet is young and healthy, as pre-existing conditions aren't covered. However, you can enroll pets of any age, though older pets may have higher premiums.",
  },
  {
    question: 'What is a deductible in pet insurance?',
    answer:
      'A deductible is the amount you pay out-of-pocket before insurance coverage begins. Deductibles can be annual (per year) or per-incident (per condition). Lower deductibles typically mean higher premiums.',
  },
  {
    question: 'What is reimbursement percentage?',
    answer:
      'Reimbursement percentage is the portion of covered costs the insurance company pays after you meet your deductible. Common percentages are 70%, 80%, or 90%. Higher percentages mean higher premiums.',
  },
  {
    question: 'Are pre-existing conditions covered?',
    answer:
      'No, pre-existing conditions are typically excluded from coverage. A pre-existing condition is any illness or injury that occurred before coverage started or during the waiting period.',
  },
  {
    question: 'Can I use any veterinarian?',
    answer:
      'Most pet insurance plans allow you to use any licensed veterinarian in the U.S. You pay the vet directly, then submit a claim for reimbursement. Some plans have preferred provider networks.',
  },
];

export default function BestPetInsurancePage() {
  return (
    <ProductComparisonPage
      productConfig={petInsuranceConfig}
      lendersData={petInsuranceData}
      faqItems={faqItems}
    />
  );
}
