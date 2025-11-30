'use client';

import {
  HeroNextStep,
  AdvisorCard,
  NextStepsTimeline,
  TrustBadges,
} from '@/components/NextStepPage';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './FinalStep.module.scss';

interface IFinalStepProps {
  firstName: string;
  loanAmount: number | string;
  advisorName: string;
  advisorName2: string;
  avatarUrl: string;
  avatarUrl2: string;
}

export const FinalStep = ({
  firstName,
  loanAmount,
  advisorName,
  advisorName2,
  avatarUrl,
  avatarUrl2,
}: IFinalStepProps) => {
  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <HeroNextStep firstName={firstName} loanAmount={loanAmount} />
        <AdvisorCard
          advisorName={advisorName}
          advisorName2={advisorName2}
          loanAmount={loanAmount}
          avatarUrl={avatarUrl}
          avatarUrl2={avatarUrl2}
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
};
