'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/ui/Logo/Logo';
import cls from './PersonalLoanTypeModal.module.scss';

interface PersonalLoanTypeModalProps {
  onSelect: (loanType: string) => void;
}

export const PersonalLoanTypeModal = ({ onSelect }: PersonalLoanTypeModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show modal every time the page loads
    setIsVisible(true);
  }, []);

  const handleSelect = (loanType: string) => {
    setIsLoading(true);
    sessionStorage.setItem('selectedLoanType', loanType);

    // Show loader for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(false);
      onSelect(loanType);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Show all results if user closes without selecting
    onSelect('all');
  };

  if (!isVisible) return null;

  const loanOptions = [
    {
      id: 'not-sure',
      title: "I'm Not Sure",
      description: 'Show me all available options to compare',
    },
    {
      id: 'debt-consolidation',
      title: 'Debt Consolidation',
      description: 'Combine multiple debts into one loan with a lower interest rate and single monthly payment.',
    },
    {
      id: 'home-improvement',
      title: 'Home Improvement',
      description: 'Finance renovations, repairs, or upgrades to your home with flexible repayment terms.',
    },
    {
      id: 'medical-expenses',
      title: 'Medical Expenses',
      description: 'Cover unexpected medical bills, surgeries, or healthcare costs not covered by insurance.',
    },
    {
      id: 'wedding',
      title: 'Wedding',
      description: 'Finance your dream wedding, including venue, catering, photography, and other expenses.',
    },
    {
      id: 'vacation',
      title: 'Vacation',
      description: 'Fund your travel plans, whether it\'s a family vacation, honeymoon, or dream trip.',
    },
    {
      id: 'moving-relocation',
      title: 'Moving & Relocation',
      description: 'Cover moving costs, security deposits, and expenses associated with relocating.',
    },
    {
      id: 'major-purchase',
      title: 'Major Purchase',
      description: 'Finance large purchases like appliances, electronics, furniture, or vehicles.',
    },
    {
      id: 'emergency-expenses',
      title: 'Emergency Expenses',
      description: 'Handle unexpected financial emergencies with fast funding and flexible terms.',
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Cover tuition, books, supplies, or other education-related expenses.',
    },
    {
      id: 'auto-loan-alternative',
      title: 'Auto Loan Alternative',
      description: 'Finance a vehicle purchase with potentially better rates than dealer financing.',
    },
    {
      id: 'credit-card-payoff',
      title: 'Credit Card Payoff',
      description: 'Pay off high-interest credit card debt with a lower-rate personal loan.',
    },
    {
      id: 'business-startup',
      title: 'Business Startup',
      description: 'Fund initial startup costs for a new business venture or side hustle.',
    },
    {
      id: 'tax-debt',
      title: 'Tax Debt',
      description: 'Consolidate or pay off tax debt with a personal loan instead of payment plans.',
    },
    {
      id: 'funeral-expenses',
      title: 'Funeral Expenses',
      description: 'Cover funeral and burial costs during difficult times.',
    },
    {
      id: 'adoption',
      title: 'Adoption',
      description: 'Finance adoption fees, legal costs, and related expenses for growing your family.',
    },
    {
      id: 'other',
      title: 'Other',
      description: 'Use for any other personal financial need not listed above.',
    },
  ];

  return (
    <div className={cls.overlay}>
      <div className={cls.modal}>
        {isLoading ? (
          <div className={cls.loaderContainer}>
            <div className={cls.logoWrapper}>
              <Logo textColor="var(--color-white)" fontSize={48} className={cls.loaderLogo} />
            </div>
            <p className={cls.loaderText}>Finding the best loans for you...</p>
          </div>
        ) : (
          <>
            <div className={cls.titleRow}>
              <h2 className={cls.title}>What type of loan are you looking for?</h2>
              <button className={cls.closeButton} onClick={handleClose} aria-label="Close">
                ×
              </button>
            </div>
            <p className={cls.subtitle}>Select an option to see personalized recommendations</p>
            <div className={cls.options}>
              {loanOptions.map((option, index) => (
                <button
                  key={option.id}
                  className={`${cls.option} ${index === 0 ? cls.firstOption : ''}`}
                  onClick={() => handleSelect(option.id)}
                >
                  <span className={cls.optionTitle}>{option.title}</span>
                  <span className={cls.optionDescription}>{option.description}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

