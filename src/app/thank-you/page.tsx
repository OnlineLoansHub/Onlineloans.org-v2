'use client';

import { useSearchParams } from 'next/navigation';
import {
  HeroNextStep,
  AdvisorCard,
  NextStepsTimeline,
  TrustBadges,
} from '@/components/NextStepPage';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './page.module.scss';

// Module-level advisor data and random selection (runs once when module loads)
const ADVISOR_DATA = [
  { image: '/thank-you/female-1.webp', name: 'Sarah K.' },
  { image: '/thank-you/female-2.webp', name: 'Emily T.' },
  { image: '/thank-you/female-3.webp', name: 'Jessica M.' },
  { image: '/thank-you/male-1.webp', name: 'Michael R.' },
  { image: '/thank-you/male-2.webp', name: 'David L.' },
  { image: '/thank-you/male-3.webp', name: 'Jordan M.' },
];

// Pre-select random advisors at module level (runs once)
const shuffled = [...ADVISOR_DATA].sort(() => Math.random() - 0.5);
const DEFAULT_RANDOM_ADVISORS = {
  advisor1: shuffled[0],
  advisor2: shuffled[1],
};

export default function ThankYouPage() {
  const searchParams = useSearchParams();

  // Get search params
  const firstName = searchParams.get('firstName') || 'John';
  const loanAmountParam = searchParams.get('loanAmount');
  const loanAmount = loanAmountParam ? parseFloat(loanAmountParam) : 50000;

  // Use provided advisor data or use pre-selected random advisors
  const advisorName = searchParams.get('advisorName');
  const advisorName2 = searchParams.get('advisorName2');
  const avatarUrl = searchParams.get('avatarUrl');
  const avatarUrl2 = searchParams.get('avatarUrl2');

  // Determine final advisor values
  const finalAdvisor1 = advisorName || DEFAULT_RANDOM_ADVISORS.advisor1.name;
  const finalAdvisor2 = advisorName2 || DEFAULT_RANDOM_ADVISORS.advisor2.name;
  const finalAvatar1 = avatarUrl || DEFAULT_RANDOM_ADVISORS.advisor1.image;
  const finalAvatar2 = avatarUrl2 || DEFAULT_RANDOM_ADVISORS.advisor2.image;

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <HeroNextStep firstName={firstName} loanAmount={loanAmount} />
        <AdvisorCard
          advisorName={finalAdvisor1}
          advisorName2={finalAdvisor2}
          loanAmount={loanAmount}
          avatarUrl={finalAvatar1}
          avatarUrl2={finalAvatar2}
        />
        <NextStepsTimeline />
        <TrustBadges />
        <div className={cls.ctaSection}>
          <p className={cls.ctaMessage}>
            Keep your phone close — your advisor will reach out shortly.
          </p>
          <AppLink href="/contact" className={cls.updateLink}>
            Update your application details
          </AppLink>
        </div>
      </div>
    </div>
  );
}

// Example usage:
// Visit: /thank-you?firstName=John&loanAmount=50000&advisorName=Jordan%20M.
