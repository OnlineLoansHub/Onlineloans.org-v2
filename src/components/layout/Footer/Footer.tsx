'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { LenderTable } from './components/LenderTable';
import cls from './Footer.module.scss';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const isShowTable = useMemo(() => isOpen || isMobile, [isMobile, isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // Smooth scroll to footer when opened on desktop
  useEffect(() => {
    if (isOpen && !isMobile && footerRef.current) {
      // Small delay to ensure the footer content is rendered
      setTimeout(() => {
        footerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [isOpen, isMobile]);

  // Track window width to determine if we're on mobile viewport (<= 993px).
  // Updates isMobile state on mount, window resize, and after a short delay
  // to ensure DOM is fully rendered.
  useEffect(() => {
    const updateHeight = () => {
      const isMobile = window.innerWidth <= 993;
      setIsMobile(isMobile);
    };

    // Initial height update
    updateHeight();

    // Add resize listener
    window.addEventListener('resize', updateHeight);

    // Slight delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateHeight, 50);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={footerRef} className={classNames(cls.footer, { [cls.open]: isShowTable })}>
      <div className={cls.container}>
        {!isMobile && (
          <button
            onClick={handleClick}
            className={classNames(cls.btn, { [cls.open]: isOpen })}
          >
            {isOpen ? (
              <>
                Hide
                <Image
                  src={'/images/table/arrow.svg'}
                  alt={'arrow'}
                  width={10}
                  height={20}
                  className={cls.btnImg}
                />
              </>
            ) : (
              <div className={cls.footerWrapper}>
                <span className={cls.btnText}>Want to explore before deciding?</span>
                <Image
                  src={'/images/icons/features/form-footer-arrowDown.svg'}
                  alt={'arrow'}
                  width={16}
                  height={32}
                  className={cls.btnImgFooterArrow}
                />
              </div>
            )}
          </button>
        )}
        {isShowTable && (
          <>
            <p className={cls.footerTitle}>Want to explore before deciding?</p>
            <p className={cls.footerSubtitle}>
              That's okay — you can skip the form for now and browse all
              available loan plans. Compare interest rates, terms, and lenders
              side by side.
            </p>
            <LenderTable />
          </>
        )}
      </div>
    </div>
  );
};

