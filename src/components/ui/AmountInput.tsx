'use client';

import React from 'react';
import styles from './AmountInput.module.css';


interface AmountInput {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const AmountInput: React.FC<AmountInput> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses = [
    styles.button,
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AmountInput;
