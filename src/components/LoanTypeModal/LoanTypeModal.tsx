'use client';

import { useEffect, useState } from 'react';
import Logo from '@/components/ui/Logo/Logo';
import cls from './LoanTypeModal.module.scss';

interface LoanTypeModalProps {
  onSelect: (loanType: string) => void;
}

export const LoanTypeModal = ({ onSelect }: LoanTypeModalProps) => {
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

  return (
    <div className={cls.overlay}>
      <div className={cls.modal}>
        {isLoading ? (
          <div className={cls.loaderContainer}>
            <div className={cls.logoWrapper}>
              <Logo text="OnlineLoans.org" textColor="var(--color-white)" className={cls.logoLoader} />
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
              <button
                className={cls.option}
                onClick={() => handleSelect('not-sure')}
              >
                <span className={cls.optionTitle}>I'm Not Sure</span>
                <span className={cls.optionDescription}>
                  Show me all available options to compare
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('term-loans')}
              >
                <span className={cls.optionTitle}>Term Loans</span>
                <span className={cls.optionDescription}>
                  Use case: General purpose funding for working capital, expansion, hiring, marketing, equipment, or any long-term business need.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('line-of-credit')}
              >
                <span className={cls.optionTitle}>Business Line of Credit</span>
                <span className={cls.optionDescription}>
                  Use case: Flexible revolving funding for cash-flow management, emergencies, inventory, and ongoing operational expenses.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('sba-loans')}
              >
                <span className={cls.optionTitle}>SBA Loans (7a, 504, Microloans)</span>
                <span className={cls.optionDescription}>
                  Use case: Low-rate, long-term financing for established businesses needing large amounts for expansion, real estate, or equipment.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('equipment-financing')}
              >
                <span className={cls.optionTitle}>Equipment Financing</span>
                <span className={cls.optionDescription}>
                  Use case: Purchase machinery, vehicles, kitchen equipment, medical devices, or any physical asset — equipment acts as collateral.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('invoice-financing')}
              >
                <span className={cls.optionTitle}>Invoice Financing / Factoring</span>
                <span className={cls.optionDescription}>
                  Use case: Get immediate cash by selling or borrowing against unpaid B2B invoices to improve cash flow.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('mca')}
              >
                <span className={cls.optionTitle}>Merchant Cash Advance (MCA)</span>
                <span className={cls.optionDescription}>
                  Use case: Fast funding for businesses with daily credit-card sales (restaurants, retail), repaid as a % of daily receipts.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('working-capital')}
              >
                <span className={cls.optionTitle}>Working Capital Loans</span>
                <span className={cls.optionDescription}>
                  Use case: Cover day-to-day operations like payroll, bills, utilities, supplies, and operating shortfalls.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('commercial-real-estate')}
              >
                <span className={cls.optionTitle}>Commercial Real Estate Loans</span>
                <span className={cls.optionDescription}>
                  Use case: Buy, build, or renovate commercial property such as offices, warehouses, restaurants, or retail spaces.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('franchise-loans')}
              >
                <span className={cls.optionTitle}>Franchise Loans</span>
                <span className={cls.optionDescription}>
                  Use case: Finance franchise fees, build-out, equipment, and startup costs for new franchise locations.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('startup-loans')}
              >
                <span className={cls.optionTitle}>Startup Loans</span>
                <span className={cls.optionDescription}>
                  Use case: Help new businesses launch when they have little or no operating history; often used for equipment, marketing, or initial inventory.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('microloans')}
              >
                <span className={cls.optionTitle}>Microloans</span>
                <span className={cls.optionDescription}>
                  Use case: Smaller loans (typically under $50k) for very small businesses, home-based businesses, or entrepreneurs just getting started.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('business-credit-cards')}
              >
                <span className={cls.optionTitle}>Business Credit Cards</span>
                <span className={cls.optionDescription}>
                  Use case: Short-term financing for everyday purchases, expenses, and earning rewards; sometimes used for 0% intro APR periods.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('inventory-financing')}
              >
                <span className={cls.optionTitle}>Inventory Financing</span>
                <span className={cls.optionDescription}>
                  Use case: Buy inventory or stock without paying upfront; inventory acts as collateral (common for retail and e-commerce).
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('purchase-order-financing')}
              >
                <span className={cls.optionTitle}>Purchase Order Financing</span>
                <span className={cls.optionDescription}>
                  Use case: Fund large supplier orders when a business has a confirmed purchase order but not enough cash to fulfill it.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('accounts-receivable-financing')}
              >
                <span className={cls.optionTitle}>Accounts Receivable Financing</span>
                <span className={cls.optionDescription}>
                  Use case: Borrow against outstanding receivables to stabilize cash flow and speed up collections cycles.
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('bridge-loans')}
              >
                <span className={cls.optionTitle}>Bridge Loans</span>
                <span className={cls.optionDescription}>
                  Use case: Temporary funding to "bridge" gaps until long-term financing is secured (common in real estate and seasonal cash flow needs).
                </span>
              </button>
              <button
                className={cls.option}
                onClick={() => handleSelect('revenue-based-financing')}
              >
                <span className={cls.optionTitle}>Revenue-Based Financing</span>
                <span className={cls.optionDescription}>
                  Use case: Repay based on a percentage of monthly revenue — ideal for SaaS, e-commerce, and subscription businesses.
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

