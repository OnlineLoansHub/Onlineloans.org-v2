'use client';

import { FinalStep } from '@/features/stepper/components/FinalStep/FinalStep';

export default function TestFinalStepPage() {
  // Sample data for testing
  const sampleData = {
    firstName: 'John',
    loanAmount: '50000',
    advisorName: 'Sarah K.',
    advisorName2: 'Michael R.',
    avatarUrl: '/thank-you/female-1.webp',
    avatarUrl2: '/thank-you/male-1.webp',
  };

  return (
    <FinalStep
      firstName={sampleData.firstName}
      loanAmount={sampleData.loanAmount}
      advisorName={sampleData.advisorName}
      advisorName2={sampleData.advisorName2}
      avatarUrl={sampleData.avatarUrl}
      avatarUrl2={sampleData.avatarUrl2}
    />
  );
}

