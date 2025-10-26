'use client';

import React from 'react';
import styles from './PrimaryButton.module.css';
import Image from 'next/image';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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

      <Image
        src="/images/icons/features/arrow-right.svg"
        alt="Arrow right"
        width={20}
        height={20}
        className={styles.arrow}
      />
    </button>
  );
};

export default PrimaryButton;
