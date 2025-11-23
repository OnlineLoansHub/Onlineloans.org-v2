'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Loader } from '@/components/ui/Loader/Loader';
import { Select } from '@/components/ui/Select/Select';
import { classNames } from '@/lib';
import { Note, OfferBanner, Steps } from './components';
import { FORM_CONFIG } from './config';
import { FormKeys } from './types';
import cls from './StepForm.module.scss';

interface IStepFormProps {
  handleFormFilled: () => void;
  amount: string;
}

const validators: Partial<Record<FormKeys, (v: unknown) => boolean>> = {
  [FormKeys.amount]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.revenue]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.zipCode]: (v) => /^\d{5}$/.test(String(v ?? '')),
  [FormKeys.email]: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '')),
  [FormKeys.phone]: (v) => String(v ?? '').replace(/[^\d]/g, '').length >= 10,
};

const GOOGLE_URL = `https://script.google.com/macros/s/AKfycbyDWmr_uDQNNHEwUw-ZGMdRQWuS6EiV22Rt2jvhNQLEJUI-_5AtQ7obGkSyg2II6sJPSQ/exec`;

export const StepForm = ({ handleFormFilled, amount }: IStepFormProps) => {
  const [formState, setFormState] = useState({
    [FormKeys.amount]: amount,
    [FormKeys.startMonth]: undefined,
    [FormKeys.startYear]: undefined,
    [FormKeys.revenue]: '',
    [FormKeys.creditScore]: undefined,
    [FormKeys.loanFor]: undefined,
    [FormKeys.zipCode]: undefined,
    [FormKeys.businessName]: undefined,
    [FormKeys.firstName]: undefined,
    [FormKeys.lastName]: undefined,
    [FormKeys.phone]: undefined,
    [FormKeys.email]: undefined,
  });
  const [index, setIndex] = useState(0);
  const [shake, setShake] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | 'auto'>(
    'auto'
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeConfig = FORM_CONFIG[index];
  const activeStep = activeConfig.step;
  const activeClass = activeConfig.className || '';
  const isLast = index === FORM_CONFIG.length - 1;

  const stepFieldNames = useMemo(() => {
    const fields = activeConfig.options
      .filter(
        (o) => o.type === 'input' || o.type === 'select' || o.type === 'buttons'
      )
      .map((o) => o.name);

    return Array.from(new Set(fields)) as FormKeys[];
  }, [activeConfig]);

  const stepValid = useMemo(() => {
    return stepFieldNames.every((name) => {
      const v = formState[name];
      const nonEmpty = !(
        v === undefined ||
        v === null ||
        String(v).trim() === ''
      );
      const specific = validators[name]?.(v) ?? true;

      return nonEmpty && specific;
    });
  }, [formState, stepFieldNames]);

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await fetch(GOOGLE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: new URLSearchParams({
          [FormKeys.amount]: formState.amount,
          [FormKeys.startMonth]: formState.startMonth ?? '',
          [FormKeys.startYear]: formState.startYear ?? '',
          [FormKeys.revenue]: String(formState.revenue ?? '').replace(/[^\d]/g, ''),
          [FormKeys.creditScore]: formState.creditScore ?? '',
          [FormKeys.loanFor]: formState.loanFor ?? '',
          [FormKeys.zipCode]: formState.zipCode ?? '',
          [FormKeys.businessName]: formState.businessName ?? '',
          [FormKeys.firstName]: formState.firstName ?? '',
          [FormKeys.lastName]: formState.lastName ?? '',
          [FormKeys.phone]: formState.phone ?? '',
          [FormKeys.email]: formState.email ?? '',
        }).toString(),
      });
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

  const handleChange = (value: string | number, name: FormKeys) => {
    if (name === FormKeys.revenue) {
      const formattedValue = formatCurrency(String(value));
      setFormState((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
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

    setIndex((i) => Math.min(i + 1, FORM_CONFIG.length - 1));
  };

  const goPrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

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

  return (
    <>
      <Steps activeStep={activeStep} />
      <div className={cls.stepFormWrapper}>
        <form className={cls.form}>
          <div
            className={classNames(cls.track, { [cls.shake]: shake })}
            style={{
              transform: `translateX(-${index * 100}%)`,
              height:
                containerHeight === 'auto' ? 'auto' : `${containerHeight}px`,
            }}
          >
            {FORM_CONFIG.map((formItem, formIndex) => {
              const dopTitle = formItem?.dopTitle;
              const title =
                dopTitle && formState[dopTitle]
                  ? `${formItem.title}, ${formState[dopTitle]}!`
                  : formItem.title;

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
                    <div
                      className={classNames(cls.formAction, {}, [activeClass])}
                    >
                      {formItem.options.map((item) => {
                        switch (item.type) {
                          case 'input':
                            return (
                              <Input
                                key={item.placeholder}
                                name={item.name}
                                value={formState[item.name] ?? ''}
                                placeholder={item.placeholder}
                                className={classNames(cls.formInput)}
                                onChange={(option) =>
                                  handleChange(option, item.name)
                                }
                              />
                            );

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
                                        [cls.active]:
                                          v === formState[item.name],
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
                                value={formState[item.name]}
                                onChange={(option) =>
                                  handleChange(option, item.name)
                                }
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
                  {isLast && isMobile && <Note />}
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
                          src={'images/icons/features/arrow-right.svg'}
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
      {isLast && !isMobile && <Note />}
      {isLoading && <Loader />}
    </>
  );
};
