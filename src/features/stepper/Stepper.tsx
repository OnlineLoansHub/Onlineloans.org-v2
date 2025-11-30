'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Loader } from '@/components/ui/Loader/Loader';
import { Select } from '@/components/ui/Select/Select';
import { TopProgressBar } from '@/components/TopProgressBar/TopProgressBar';
import { ConfettiCelebration } from '@/components/ConfettiCelebration/ConfettiCelebration';
import { classNames } from '@/lib';
// import { Note, OfferBanner, Steps } from './components';
import { OfferBanner, Steps } from './components';
import { IStepperConfig } from './types';
import cls from './Stepper.module.scss';

interface IStepFormProps {
  handleFormFilled: () => void;
  config: IStepperConfig;
}

export const Stepper = ({ handleFormFilled, config }: IStepFormProps) => {
  const [formState, setFormState] = useState<Record<string, unknown>>(config.initialFormState);
  const [index, setIndex] = useState(0);
  const [shake, setShake] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | 'auto'>('auto');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shouldAutoAdvanceRef = useRef(false);

  // Safety check: ensure formConfig is not empty and index is valid
  const hasValidConfig = config.formConfig && config.formConfig.length > 0;
  const activeConfig = hasValidConfig ? config.formConfig[index] : undefined;
  const safeActiveConfig = activeConfig || config.formConfig[0];

  const activeStep = safeActiveConfig?.step ?? 1;
  const activeClass = safeActiveConfig?.className || '';
  const isLast = hasValidConfig ? index === config.formConfig.length - 1 : false;

  const stepFieldNames = useMemo(() => {
    if (!safeActiveConfig) return [];
    const fields = safeActiveConfig.options
      .filter((o) => o.type === 'input' || o.type === 'select' || o.type === 'buttons')
      .map((o) => o.name);

    return Array.from(new Set(fields));
  }, [safeActiveConfig]);

  const stepValid = useMemo(() => {
    return stepFieldNames.every((name) => {
      const v = formState[name];
      const nonEmpty = !(v === undefined || v === null || String(v).trim() === '');
      const specific = config.validators[name]?.(v) ?? true;

      return nonEmpty && specific;
    });
  }, [formState, stepFieldNames, config.validators]);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Trigger confetti when form is submitted on the last step
      if (isLast) {
        setShowConfetti(true);
      }

      await config.onSubmit(formState);
    } catch (e: unknown) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/[^\d]/g, '');
    if (!numericValue) return '';
    const number = parseInt(numericValue, 10);
    if (isNaN(number)) return '';

    return `$${number.toLocaleString('en-US')}`;
  };

  const checkStepValid = (state: Record<string, unknown>, fieldNames: string[]): boolean => {
    return fieldNames.every((name) => {
      const v = state[name];
      const nonEmpty = !(v === undefined || v === null || String(v).trim() === '');
      const specific = config.validators[name]?.(v) ?? true;

      return nonEmpty && specific;
    });
  };

  const handleChange = (value: string | number, name: string) => {
    // Check if this is a button click before updating state
    const currentConfig = config.formConfig[index];
    const isButtonClick = currentConfig?.options.some(
      (o) => o.type === 'buttons' && o.name === name
    );

    setFormState((prev) => {
      const newState = config.currencyFields?.includes(name)
        ? { ...prev, [name]: formatCurrency(String(value)) }
        : { ...prev, [name]: value };

      // Mark for auto-advance if it's a button click
      if (isButtonClick && !isLast && currentConfig) {
        // Get field names for current question
        const currentStepFields = currentConfig.options
          .filter((o) => o.type === 'input' || o.type === 'select' || o.type === 'buttons')
          .map((o) => o.name);
        const uniqueFields = Array.from(new Set(currentStepFields));

        // Check if question would be valid with new state
        const wouldBeValid = checkStepValid(newState, uniqueFields);
        shouldAutoAdvanceRef.current = wouldBeValid;
      } else {
        shouldAutoAdvanceRef.current = false;
      }

      return newState;
    });
  };

  const goNext = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLast) {
      await onSubmit(e);
      handleFormFilled();

      return;
    }

    if (!stepValid) {
      setShake(true);
      setTimeout(() => setShake(false), 400);

      return;
    }

    setIndex((i) => Math.min(i + 1, config.formConfig.length - 1));
  };

  const goPrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  // Reset auto-advance flag when index changes
  useEffect(() => {
    shouldAutoAdvanceRef.current = false;
  }, [index]);

  // Reset confetti after animation completes
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  // Auto-advance when button is clicked and step becomes valid
  useEffect(() => {
    if (shouldAutoAdvanceRef.current && !isLast && stepValid) {
      shouldAutoAdvanceRef.current = false;
      // Use a small delay to ensure smooth transition
      const timeoutId = setTimeout(() => {
        setIndex((i) => {
          const nextIndex = Math.min(i + 1, config.formConfig.length - 1);

          return nextIndex;
        });
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [formState, stepValid, isLast, config.formConfig.length]);

  // Update height when step changes or window resizes
  useEffect(() => {
    const updateHeight = () => {
      const isMobile = window.innerWidth <= 993;
      setIsMobile(isMobile);

      const activeStepElement = stepRefs.current[index];
      if (activeStepElement && isMobile) {
        setContainerHeight(activeStepElement.offsetHeight);
      } else {
        setContainerHeight('auto');
      }
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
  }, [index, formState]);

  // Early return after all hooks if config is invalid
  if (!hasValidConfig || !activeConfig) {
    return null;
  }

  return (
    <>
      <ConfettiCelebration isActive={showConfetti} duration={2500} />
      <Steps activeStep={activeStep} stepConfig={config.stepConfig} />
      <TopProgressBar currentStep={index + 1} totalSteps={config.formConfig.length} />
      <div className={cls.stepFormWrapper}>
        <form className={cls.form}>
          <div
            className={classNames(cls.track, { [cls.shake]: shake })}
            style={{
              transform: `translateX(-${index * 100}%)`,
              height: containerHeight === 'auto' ? 'auto' : `${containerHeight}px`,
            }}
          >
            {config.formConfig.map((formItem, formIndex) => {
              const dopTitle = formItem?.dopTitle;
              const dopValue = dopTitle ? formState[dopTitle] : undefined;
              const title =
                dopTitle && dopValue ? `${formItem.title}, ${String(dopValue)}!` : formItem.title;

              return (
                <div
                  key={formItem.title}
                  className={cls.formItem}
                  ref={(el) => {
                    stepRefs.current[formIndex] = el;
                  }}
                >
                  <div className={cls.formContent}>
                    <div>
                      <h2 className={cls.formTitle}>{title}</h2>
                      <h3 className={cls.formSubtitle}>{formItem.subtitle}</h3>
                    </div>
                    <div className={classNames(cls.formAction, {}, [activeClass])}>
                      {formItem.options.map((item) => {
                        switch (item.type) {
                          case 'input': {
                            // Fields that require numeric input
                            const numericFields = [
                              'amount',
                              'revenue',
                              'annualIncome',
                              'zipCode',
                              'phone',
                            ];
                            const isNumeric = numericFields.includes(item.name);

                            return (
                              <Input
                                key={item.placeholder}
                                name={item.name}
                                value={String(formState[item.name] ?? '')}
                                placeholder={item.placeholder}
                                className={classNames(cls.formInput)}
                                onChange={(option) => handleChange(option, item.name)}
                                inputMode={isNumeric ? 'numeric' : undefined}
                              />
                            );
                          }

                          case 'buttons':
                            return (
                              <div
                                key={`${item.name}${item.type}`}
                                className={cls.formInfoBtnContainer}
                              >
                                {item.values.map((v) => {
                                  return (
                                    <button
                                      key={v}
                                      type="button"
                                      className={classNames(cls.formInfoBtn, {
                                        [cls.small]: Boolean(item.isSmallTxt),
                                        [cls.active]: v === String(formState[item.name] ?? ''),
                                      })}
                                      onClick={() => handleChange(v, item.name)}
                                    >
                                      {v}
                                    </button>
                                  );
                                })}
                              </div>
                            );

                          case 'select':
                            return (
                              <Select
                                key={item.name}
                                name={item.name}
                                placeholder={item.placeholder}
                                options={item.values.map((v) => ({
                                  value: v,
                                  label: v,
                                }))}
                                value={formState[item.name] as string | number | undefined}
                                onChange={(value) => handleChange(value, item.name)}
                                className={cls.formSelect}
                              />
                            );

                          case 'txt':
                            return (
                              <p key={item.value} className={cls.formTxt}>
                                {item.value}
                              </p>
                            );

                          default:
                            return null;
                        }
                      })}
                    </div>
                  </div>
                  {/* {isLast && isMobile && <Note />} */}
                  <div className={cls.btnsContainer}>
                    {formItem.prev && (
                      <Button
                        variant="secondary"
                        className={cls.formBtn}
                        type={'button'}
                        onClick={goPrev}
                      >
                        Go Back
                      </Button>
                    )}
                    {formItem.next && (
                      <Button
                        variant="primary"
                        className={classNames(
                          cls.formBtn,
                          {
                            [cls.long]: isLast,
                          },
                          [cls.next]
                        )}
                        type={isLast ? 'submit' : 'button'}
                        onClick={(e) => goNext(e)}
                        disabled={!stepValid}
                      >
                        {isLast ? 'See your loan options' : 'Continue'}
                        <Image
                          src={'/images/icons/features/arrow-right.svg'}
                          width={24}
                          height={24}
                          alt={'Continue arrow'}
                          className={cls.btnImg}
                        />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </form>
        <OfferBanner />
      </div>
      {/* {isLast && !isMobile && <Note />} */}
      {isLoading && <Loader />}
    </>
  );
};
