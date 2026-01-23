'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import StarRating from './StarRating';
import type { Brand } from '@/data/brands';

import type { WizardConfig, WizardStep } from '@/data/productTypes';

interface RecommendationWizardProps {
  lenders: Brand[];
  wizardConfig: WizardConfig;
}

// Default steps (will be overridden by wizardConfig)
const defaultSteps: WizardStep[] = [
  {
    question: 'What type of loan are you looking for?',
    key: 'loanType',
    options: [
      { value: 'business_loan', label: 'Business Loan' },
      { value: 'line_of_credit', label: 'Line of Credit' },
      { value: 'working_capital', label: 'Working Capital' },
      { value: 'sba', label: 'SBA Loan' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    question: 'How long have you been in business?',
    key: 'timeInBusiness',
    options: [
      { value: '2_plus', label: '2 or more years' },
      { value: '1_2', label: '1-2 years' },
      { value: '6m_1y', label: '6 months to 1 year' },
      { value: '0_6m', label: '0-6 months' },
    ],
  },
  {
    question: 'What is your average monthly revenue?',
    key: 'monthlyRevenue',
    options: [
      { value: 'more_30k', label: 'More than $30K' },
      { value: '20k_30k', label: '$20K - $30K' },
      { value: '10k_20k', label: '$10K - $20K' },
      { value: 'less_10k', label: 'Less than $10K' },
    ],
  },
  {
    question: 'What is your credit score range?',
    key: 'creditScore',
    options: [
      { value: 'excellent', label: 'Excellent (720-850)' },
      { value: 'good', label: 'Good (690-719)' },
      { value: 'fair', label: 'Fair (630-689)' },
      { value: 'poor', label: 'Poor (350-629)' },
    ],
  },
  {
    question: 'How much funding do you need?',
    key: 'loanAmount',
    options: [
      { value: 'more_100k', label: 'More than $100K' },
      { value: '50k_100k', label: '$50K - $100K' },
      { value: '25k_50k', label: '$25K - $50K' },
      { value: 'less_25k', label: 'Less than $25K' },
    ],
  },
  {
    question: 'How quickly do you need the funds?',
    key: 'fundingSpeed',
    options: [
      { value: 'asap', label: 'As soon as possible (within 24-48 hours)' },
      { value: 'within_week', label: 'Within a week' },
      { value: 'within_month', label: 'Within a month' },
      { value: 'flexible', label: 'Flexible timing' },
    ],
  },
];

export default function RecommendationWizard({ lenders, wizardConfig }: RecommendationWizardProps) {
  const steps = wizardConfig.steps || defaultSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  // Simple recommendation logic - in real app, this would be more sophisticated
  const getRecommendedLenders = () => {
    return lenders.slice(0, 1);
  };

  const recommendedLenders = getRecommendedLenders();
  const recommendedLender = recommendedLenders[0];

  return (
    <>
      {/* Mobile Version */}
      <section className="lg:hidden pb-8">
        <div className="w-full">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded border-x-0 border-t border-b border-slate-200 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white p-6 py-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <h2 className="text-[1.5rem] font-bold" style={{ fontFamily: 'Arial' }}>
                  Need help finding the right lender for you?
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {!showResults ? (
                <div>
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">
                        Step {currentStep + 1} / {steps.length}
                      </span>
                      <span className="text-sm text-black">
                        {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {steps[currentStep].question}
                  </h3>

                  {/* Options */}
                  <div className="grid gap-2">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(steps[currentStep].key, option.value)}
                        className={`w-full p-3 text-left rounded transition-all ${
                          answers[steps[currentStep].key] === option.value
                            ? 'bg-[var(--color-primary)]/5'
                            : 'hover:bg-slate-50'
                        }`}
                        style={{
                          border: `2px solid ${
                            answers[steps[currentStep].key] === option.value
                              ? 'var(--color-primary)'
                              : '#cbd5e1'
                          }`,
                        }}
                      >
                        <span className="font-medium text-slate-700 text-base">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  {currentStep > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <Button
                        variant="secondary"
                        onClick={handleBack}
                        className="text-slate-600 w-full"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-3">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {wizardConfig.resultsTitle || 'Based on your answers, we recommend'}
                    </h3>
                    <p className="text-base text-slate-600">
                      {wizardConfig.resultsSubtitle || 'These lenders match your profile'}
                    </p>
                  </div>

                  {/* Recommended Lender */}
                  {recommendedLender && (
                    <div className="flex flex-col gap-4 p-4 bg-white rounded border border-slate-200">
                      {/* Logo */}
                      {recommendedLender.logo && (
                        <div className="flex justify-center mb-2">
                          <div className="relative w-full max-w-[200px] h-16">
                            <Image
                              src={recommendedLender.logo}
                              alt={recommendedLender.name}
                              fill
                              className="object-contain"
                              sizes="200px"
                            />
                          </div>
                        </div>
                      )}
                      
                      {/* Lender Info */}
                      <div className="text-center">
                        <h4 className="font-semibold text-lg text-slate-900 mb-2">
                          {recommendedLender.name}
                        </h4>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <StarRating score={recommendedLender.ourScore} />
                          <span className="text-base text-black">{recommendedLender.ourScore}/10</span>
                        </div>
                      </div>
                      
                        <Button
                          variant="primary"
                          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] w-full"
                        onClick={() => window.open(recommendedLender.ctaUrl || '#', '_blank')}
                        >
                          See Plans
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                  )}

                  {/* Disclaimer */}
                  <p className="mt-4 text-sm text-black text-center italic px-2">
                    *This recommendation is based on our assessment; users are urged to consider
                    individual factors before choosing a vendor.
                  </p>

                  {/* Actions */}
                  <div className="mt-6 flex flex-col gap-3">
                    <Button variant="secondary" onClick={handleReset} className="w-full">
                      Start Over
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleBack}
                      className="text-slate-600 w-full"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Version */}
      <section className="hidden lg:block pb-12 lg:pb-16">
        <div className="w-full">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded border-x-0 border-t border-b border-slate-200 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#235675] text-white p-6 lg:p-8 py-10 lg:py-12">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5" />
                <h2
                  className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-bold"
                  style={{ fontFamily: 'Arial' }}
                >
                  Need help finding the right lender for you?
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {!showResults ? (
                <div>
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium text-slate-600">
                        Step {currentStep + 1} / {steps.length}
                      </span>
                      <span className="text-lg text-black">
                        {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
                    {steps[currentStep].question}
                  </h3>

                  {/* Options */}
                  <div className="grid gap-3">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(steps[currentStep].key, option.value)}
                        className={`w-full p-4 text-left rounded transition-all ${
                          answers[steps[currentStep].key] === option.value
                            ? 'bg-[var(--color-primary)]/5'
                            : 'hover:bg-slate-50'
                        }`}
                        style={{
                          border: `2px solid ${
                            answers[steps[currentStep].key] === option.value
                              ? 'var(--color-primary)'
                              : '#cbd5e1'
                          }`,
                        }}
                      >
                        <span className="font-medium text-slate-700 text-lg">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  {currentStep > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <Button variant="secondary" onClick={handleBack} className="text-slate-600">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-2">
                      Based on your answers, we recommend
                    </h3>
                    <p className="text-xl text-slate-600">
                      These lenders match your business profile
                    </p>
                  </div>

                  {/* Recommended Lender */}
                  {recommendedLender && (
                    <div className="flex flex-col items-center gap-6 p-6 bg-white rounded border border-slate-200 hover:shadow-md transition-shadow">
                      {/* Logo */}
                      {recommendedLender.logo && (
                        <div className="relative w-full max-w-[300px] h-24">
                          <Image
                            src={recommendedLender.logo}
                            alt={recommendedLender.name}
                            fill
                            className="object-contain"
                            sizes="300px"
                          />
                        </div>
                      )}
                      
                      {/* Lender Info */}
                      <div className="text-center">
                        <h4 className="font-semibold text-2xl text-slate-900 mb-3">
                          {recommendedLender.name}
                        </h4>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <StarRating score={recommendedLender.ourScore} />
                          <span className="text-xl text-black">{recommendedLender.ourScore}/10</span>
                        </div>
                      </div>
                      
                        <Button
                          variant="primary"
                          className="bg-[#235675] hover:bg-[#1a4259]"
                        onClick={() => window.open(recommendedLender.ctaUrl || '#', '_blank')}
                        >
                          See Plans
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                  )}

                  {/* Disclaimer */}
                  <p className="mt-6 text-base text-black text-center italic">
                    *This recommendation is based on our assessment; users are urged to consider
                    individual factors before choosing a vendor.
                  </p>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button variant="secondary" onClick={handleReset}>
                      Start Over
                    </Button>
                    <Button variant="secondary" onClick={handleBack} className="text-slate-600">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
