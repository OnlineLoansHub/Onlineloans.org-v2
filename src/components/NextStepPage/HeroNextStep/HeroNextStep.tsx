'use client';

import cls from './HeroNextStep.module.scss';

interface IHeroNextStepProps {
  firstName: string;
  loanAmount: number | string;
}

export const HeroNextStep = ({ firstName, loanAmount }: IHeroNextStepProps) => {
  const formatAmount = (amount: number | string): string => {
    if (typeof amount === 'string') {
      return amount;
    }

    return `$${amount.toLocaleString('en-US')}`;
  };

  return (
    <div className={cls.hero}>
      <h1 className={cls.title}>
        Thanks, {firstName}! We&apos;re reviewing your request for {formatAmount(loanAmount)}.
      </h1>
      <p className={cls.subtitle}>
        Your advisor is preparing your personalized loan options. Stay close to your phone.
      </p>
    </div>
  );
};

