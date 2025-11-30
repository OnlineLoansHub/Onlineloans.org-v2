'use client';

import { useMemo } from 'react';
import cls from './TopProgressBar.module.scss';

interface ITopProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const TopProgressBar = ({ currentStep, totalSteps }: ITopProgressBarProps) => {
  const progress = useMemo(() => {
    if (totalSteps <= 0) return 0;

    const percentage = (currentStep / totalSteps) * 100;

    return Math.min(Math.max(percentage, 0), 100); // Clamp between 0 and 100
  }, [currentStep, totalSteps]);

  return (
    <div className={cls.progressBarContainer}>
      <div className={cls.progressBarTrack}>
        <div
          className={cls.progressBarFill}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Progress: ${Math.round(progress)}%`}
        />
        <span className={cls.progressPercentage} style={{ left: `calc(${progress}% - 20px)` }}>
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};
