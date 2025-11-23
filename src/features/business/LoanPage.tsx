'use client';

import { useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { StepForm } from '@/features/forms/StepForm/StepForm';
import { LoanTypes } from '@/types';

import { FinalStep, Footer } from './components';

import cls from './LoanPage.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function LoanPage({ type }: IHomePageProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [isFormFilled, setFormFilled] = useState(false);

  const handleFormFilled = useCallback(() => {
    setFormFilled(true);
  }, []);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <main className={cls.main}>
          {!isFormFilled ? (
            <StepForm handleFormFilled={handleFormFilled} amount={amount} />
          ) : (
            <FinalStep />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
