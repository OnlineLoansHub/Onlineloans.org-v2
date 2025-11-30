'use client';

import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Stepper, IFinalStepData } from '@/features/stepper/Stepper';
import { FinalStep } from '@/features/stepper/components';
import { getPersonalLoanConfig } from './personalLoanConfig';
import { LoanTypes } from '@/types';
import cls from './personalLoanForm.module.scss';

interface IPersonalLoanFormProps {
  type: LoanTypes;
}

export default function PersonalLoanForm({ type: _type }: IPersonalLoanFormProps) {
  const sp = useSearchParams();
  const amount = sp.get('amount') ?? '';
  const [formData, setFormData] = useState<IFinalStepData | null>(null);

  const config = useMemo(() => getPersonalLoanConfig(amount), [amount]);

  const handleFormFilled = useCallback((data: IFinalStepData) => {
    setFormData(data);
  }, []);

  return (
    <div className={cls.page}>
      <div className={cls.container}>
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

