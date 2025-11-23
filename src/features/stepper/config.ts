import { LoanTypes } from '@/types';
import { IStepperConfig } from './types';
import { getBusinessLoanConfig } from '../businessLoanForm/businessLoanConfig';
import { getPersonalLoanConfig } from '../personalLoanForm/personalLoanConfig';

/**
 * Get stepper configuration based on loan type
 * @param loanType - The type of loan (business or personal)
 * @param amount - Optional initial amount value from URL params
 * @returns Stepper configuration for the specified loan type
 */
export const getStepperConfig = (
  loanType: LoanTypes,
  amount: string = ''
): IStepperConfig => {
  switch (loanType) {
    case LoanTypes.business:
      return getBusinessLoanConfig(amount);
    case LoanTypes.personal:
      return getPersonalLoanConfig(amount);
    default:
      return getBusinessLoanConfig(amount);
  }
};

// Re-export configs for direct access if needed
export { getBusinessLoanConfig } from '../businessLoanForm/businessLoanConfig';
export { getPersonalLoanConfig } from '../personalLoanForm/personalLoanConfig';
