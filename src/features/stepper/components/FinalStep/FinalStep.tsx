'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import {
  HeroNextStep,
  AdvisorCard,
  NextStepsTimeline,
  TrustBadges,
} from '@/components/NextStepPage';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './FinalStep.module.scss';

interface IFinalStepProps {
  firstName: string;
  loanAmount: number | string;
  advisorName: string;
  advisorName2: string;
  avatarUrl: string;
  avatarUrl2: string;
}

export const FinalStep = ({
  firstName,
  loanAmount,
  advisorName,
  advisorName2,
  avatarUrl,
  avatarUrl2,
}: IFinalStepProps) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Trigger confetti animation when FinalStep mounts
  useEffect(() => {
    // Confetti will run for 2.5 seconds, then hide
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Update window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cls.page}>
      {true && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={2000}
          gravity={0.3}
          initialVelocityY={20}
        />
      )}
      <div className={cls.container}>
        <HeroNextStep firstName={firstName} loanAmount={loanAmount} />
        <AdvisorCard
          advisorName={advisorName}
          advisorName2={advisorName2}
          loanAmount={loanAmount}
          avatarUrl={avatarUrl}
          avatarUrl2={avatarUrl2}
        />
        <NextStepsTimeline />
        <TrustBadges />
        <div className={cls.ctaSection}>
          <p className={cls.ctaMessage}>
            Keep your phone close — your advisor will reach out shortly.
          </p>
          <AppLink href="/contact" className={cls.updateLink}>
            Update your application details
          </AppLink>
        </div>
      </div>
    </div>
  );
};
