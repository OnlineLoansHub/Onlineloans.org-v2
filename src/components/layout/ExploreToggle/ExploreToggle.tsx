'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { classNames } from '@/lib';
import { LenderTable } from '@/components/LenderTable/LenderTable';
import { useExploreToggle } from '@/contexts/ExploreToggleContext';
import cls from './ExploreToggle.module.scss';

export const ExploreToggle = () => {
  const { isOpen, isMobile, setIsOpen } = useExploreToggle();
  const exploreToggleRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isShowTable = useMemo(() => isOpen || isMobile, [isMobile, isOpen]);

  // Determine loan type based on current route
  const loanType = useMemo(() => {
    if (pathname?.includes('/personal-loan')) {
      return 'personal' as const;
    }

    if (pathname?.includes('/business-loan')) {
      return 'business' as const;
    }

    return undefined;
  }, [pathname]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll to explore toggle when opened on desktop
  useEffect(() => {
    if (isOpen && !isMobile && exploreToggleRef.current) {
      // Small delay to ensure the content is rendered
      setTimeout(() => {
        exploreToggleRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [isOpen, isMobile]);

  return (
    <div
      ref={exploreToggleRef}
      className={classNames(cls.exploreToggle, { [cls.open]: isShowTable })}
    >
      <div className={cls.container}>
        {!isMobile && (
          <button onClick={handleClick} className={classNames(cls.btn, { [cls.open]: isOpen })}>
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
              That's okay — you can skip the form for now and browse all available loan plans.
              Compare interest rates, terms, and lenders side by side.
            </p>
            <LenderTable loanType={loanType} />
          </>
        )}
      </div>
    </div>
  );
};
