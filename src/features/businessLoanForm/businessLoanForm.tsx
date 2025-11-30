'use client';

import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stepper, IFinalStepData } from '@/features/stepper/Stepper';
import { FinalStep } from '@/features/stepper/components';
import { getBusinessLoanConfig } from './businessLoanConfig';
import { LoanTypes } from '@/types';
import cls from './businessLoanForm.module.scss';

interface IHomePageProps {
  type: LoanTypes;
}

export default function BusinessLoanForm({ type: _type }: IHomePageProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [formData, setFormData] = useState<IFinalStepData | null>(null);
  const config = useMemo(() => getBusinessLoanConfig(amount), [amount]);
  const handleFormFilled = useCallback((data: IFinalStepData) => {
    setFormData(data);
  }, []);

  return (
    <div className={cls.page}>
      <div className={`${cls.container} ${formData ? cls.containerFinalStep : ''}`}>
        {!formData ? (
          <Stepper handleFormFilled={handleFormFilled} config={config} />
        ) : (
          <FinalStep
            firstName={formData.firstName}
            loanAmount={formData.loanAmount}
            advisorName={formData.advisorName}
            advisorName2={formData.advisorName2}
            avatarUrl={formData.avatarUrl}
            avatarUrl2={formData.avatarUrl2}
          />
        )}
      </div>
    </div>
  );
}
