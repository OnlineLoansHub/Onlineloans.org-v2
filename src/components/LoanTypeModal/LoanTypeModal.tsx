'use client';

import { useEffect, useState } from 'react';
import cls from './LoanTypeModal.module.scss';

interface LoanTypeModalProps {
  onSelect: (loanType: string) => void;
}

export const LoanTypeModal = ({ onSelect }: LoanTypeModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already selected a loan type in this session
    const hasSelected = sessionStorage.getItem('loanTypeSelected');
    if (!hasSelected) {
      setIsVisible(true);
    }
  }, []);

  const handleSelect = (loanType: string) => {
    setIsLoading(true);
    sessionStorage.setItem('loanTypeSelected', 'true');
    sessionStorage.setItem('selectedLoanType', loanType);

    // Show loader for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsVisible(false);
      onSelect(loanType);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className={cls.overlay}>
      <div className={cls.modal}>
        {isLoading ? (
          <div className={cls.loaderContainer}>
            <div className={cls.loader}></div>
            <p className={cls.loaderText}>Finding the best loans for you...</p>
          </div>
        ) : (
          <>
            <h2 className={cls.title}>What type of loan are you looking for?</h2>
            <p className={cls.subtitle}>Select an option to see personalized recommendations</p>
            <div className={cls.options}>
              <button
                className={cls.option}
                onClick={() => handleSelect('mca')}
              >
                <span className={cls.optionTitle}>MCA Loans</span>
                <span className={cls.optionDescription}>
                  Merchant Cash Advances for quick access to working capital
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('small-business')}
              >
                <span className={cls.optionTitle}>Small Business Loans</span>
                <span className={cls.optionDescription}>
                  Traditional term loans for established businesses
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('not-sure')}
              >
                <span className={cls.optionTitle}>I'm Not Sure</span>
                <span className={cls.optionDescription}>
                  Show me all available options to compare
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

