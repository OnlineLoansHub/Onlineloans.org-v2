'use client';

import { useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stepper } from '@/features/stepper/Stepper';
import { LoanTypes } from '@/types';
import { FinalStep } from './components';
import cls from './businessLoanForm.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function BusinessLoanForm({ type: _type }: IHomePageProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [isFormFilled, setFormFilled] = useState(false);

  const handleFormFilled = useCallback(() => {
    setFormFilled(true);
  }, []);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
          {!isFormFilled ? (
            <Stepper handleFormFilled={handleFormFilled} amount={amount} />
          ) : (
            <FinalStep />
          )}
      </div>
    </div>
  );
}
