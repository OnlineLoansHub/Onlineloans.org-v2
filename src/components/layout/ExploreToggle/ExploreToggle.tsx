'use client';

import { useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { classNames } from '@/lib';
import { useExploreToggle } from '@/contexts/ExploreToggleContext';
import { businessLoanGuides } from '@/data/businessLoanGuides';
import { personalLoanGuides } from '@/data/personalLoanGuides';
import { GuideCard } from '@/components/businessLoan/GuideCard/GuideCard';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './ExploreToggle.module.scss';

export const ExploreToggle = () => {
  const { isOpen, isMobile, setIsOpen } = useExploreToggle();
  const exploreToggleRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isShowTable = useMemo(() => isOpen || isMobile, [isMobile, isOpen]);

  // Check if we're on the home page
  const isHomePage = useMemo(() => {
    return pathname === '/';
  }, [pathname]);

  // Check if we should hide the explore toggle (on main business-loan or personal-loan pages)
  const shouldHide = useMemo(() => {
    return pathname === '/business-loan' || pathname === '/personal-loan';
  }, [pathname]);

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

  // Get guides based on loan type, or show both on home page
  const guides = useMemo(() => {
    if (isHomePage) {
      return [...businessLoanGuides, ...personalLoanGuides];
    }

    return loanType === 'personal' ? personalLoanGuides : businessLoanGuides;
  }, [loanType, isHomePage]);

  // States available for restaurant and construction funding
  const states = [
    { name: 'Florida', code: 'florida' },
    { name: 'Texas', code: 'texas' },
    { name: 'New York', code: 'new-york' },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Removed scrollIntoView to prevent main content from disappearing
  // Smooth scroll to explore toggle when opened on desktop
  // useEffect(() => {
  //   if (isOpen && !isMobile && exploreToggleRef.current) {
  //     // Small delay to ensure the content is rendered
  //     setTimeout(() => {
  //       exploreToggleRef.current?.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'end',
  //       });
  //     }, 100);
  //   }
  // }, [isOpen, isMobile]);

  // Don't render on main business-loan or personal-loan pages
  if (shouldHide) {
    return null;
  }

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
                <span className={cls.btnText}>Want to read more?</span>
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
            <p className={cls.footerTitle}>Want to read more?</p>
            <p className={cls.footerSubtitle}>
              That's okay — explore our guides and state-specific resources to learn more about your
              financing options.
            </p>

            {/* Available Guides Section */}
            {(isHomePage || loanType === 'business' || loanType === 'personal') && (
              <div className={cls.exploreSection}>
                <h3 className={cls.sectionTitle}>Available Guides</h3>
                <div className={cls.guidesGrid}>
                  {guides.map((guide) => (
                    <GuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
              </div>
            )}

            {/* Restaurant Funding by State - Show on home page or business loan pages */}
            {(isHomePage || loanType === 'business') && (
              <div className={cls.exploreSection}>
                <h3 className={cls.sectionTitle}>Restaurant Funding by State</h3>
                <div className={cls.statesGrid}>
                  {states.map((state) => (
                    <AppLink
                      key={state.code}
                      href={`/business-loan/restaurant-funding/${state.code}/index.html`}
                      className={cls.stateLink}
                    >
                      Restaurant Funding in {state.name}
                    </AppLink>
                  ))}
                </div>
              </div>
            )}

            {/* Construction Business Loans by State - Show on home page or business loan pages */}
            {(isHomePage || loanType === 'business') && (
              <div className={cls.exploreSection}>
                <h3 className={cls.sectionTitle}>Construction Business Loans by State</h3>
                <div className={cls.statesGrid}>
                  {states.map((state) => (
                    <AppLink
                      key={state.code}
                      href={`/business-loan/construction-funding/${state.code}/index.html`}
                      className={cls.stateLink}
                    >
                      Construction Loans in {state.name}
                    </AppLink>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
