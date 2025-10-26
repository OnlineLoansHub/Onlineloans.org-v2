'use client';

import React from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  href?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href,
}) => {
  const baseClasses = [
    styles.button,
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

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

export default PrimaryButton;
