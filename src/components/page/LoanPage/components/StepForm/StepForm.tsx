'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Select } from '@/components/ui/Select/Select';
import { classNames } from '@/shared';

import { OfferBanner, Steps } from './components';
import { FORM_CONFIG } from './config';
import { FormKeys } from './types';

import cls from './StepForm.module.scss';

const validators: Partial<Record<FormKeys, (v: unknown) => boolean>> = {
  [FormKeys.amount]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.revenue]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.zipCode]: (v) => /^\d{5}$/.test(String(v ?? '')),
  [FormKeys.email]: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '')),
  [FormKeys.phone]: (v) => String(v ?? '').replace(/[^\d]/g, '').length >= 10,
};

export const StepForm = ({
  handleFormFilled,
}: {
  handleFormFilled: () => void;
}) => {
  const [formState, setFormState] = useState({
    [FormKeys.amount]: undefined,
    [FormKeys.startMonth]: undefined,
    [FormKeys.startYear]: undefined,
    [FormKeys.revenue]: undefined,
    [FormKeys.creditScore]: undefined,
    [FormKeys.loanFor]: undefined,
    [FormKeys.zipCode]: undefined,
    [FormKeys.businessName]: undefined,
    [FormKeys.firstName]: undefined,
    [FormKeys.lastName]: undefined,
    [FormKeys.phone]: undefined,
    [FormKeys.email]: undefined,
  });
  // const [activeStep, setActiveStep] = useState<FormSteps>(FormSteps.first);
  const [index, setIndex] = useState(0);
  const [shake, setShake] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const activeConfig = FORM_CONFIG[index];
  const activeStep = activeConfig.step;
  const isLast = index === FORM_CONFIG.length - 1;

  console.log({ activeConfig, activeStep });

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
      // default rule: non-empty
      const nonEmpty = !(
        v === undefined ||
        v === null ||
        String(v).trim() === ''
      );
      const specific = validators[name]?.(v) ?? true;

      return nonEmpty && specific;
    });
  }, [formState, stepFieldNames]);

  const handleChange = (value: string | number, name: FormKeys) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => {
    if (isLast) {
      handleFormFilled();
      return;
    }

    if (!stepValid) {
      setShake(true);
      window.setTimeout(() => setShake(false), 400);
      return;
    }

    setIndex((i) => Math.min(i + 1, FORM_CONFIG.length - 1));
  };

  const goPrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <>
      <Steps activeStep={activeStep} />
      <div className={cls.formContent}>
        <form className={cls.form}>
          <div
            ref={trackRef}
            className={classNames(cls.track, { [cls.shake]: shake })}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {FORM_CONFIG.map((formItem) => {
              const dopTitle = formItem?.dopTitle;
              const title = dopTitle
                ? `${formItem.title}, ${formState[dopTitle]}!`
                : formItem.title;

              return (
                <div key={formItem.title} className={cls.formItem}>
                  <div>
                    <div>
                      <h2 className={cls.formTitle}>{title}</h2>
                      <h3 className={cls.formSubtitle}>{formItem.subtitle}</h3>
                    </div>
                    <div className={cls.formAction}>
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
                            return <p key={item.value}>{item.value}</p>;

                          default:
                            return null;
                        }
                      })}
                    </div>
                  </div>
                  <div className={cls.btnsContainer}>
                    {formItem.prev && (
                      <Button
                        variant="secondary"
                        className={cls.formButtonBack}
                        type={'button'}
                        onClick={goPrev}
                      >
                        Go Back
                      </Button>
                    )}
                    {formItem.next && (
                      <Button
                        variant="primary"
                        className={classNames(cls.formButtonSubmit, {
                          [cls.long]: isLast,
                        })}
                        type={isLast ? 'submit' : 'button'}
                        onClick={goNext}
                        disabled={!stepValid}
                      >
                        {isLast ? 'See your loan options' : 'Continue'}
                        <Image
                          src={'images/icons/features/arrow-right.svg'}
                          width={24}
                          height={24}
                          alt={'Continue arrow'}
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
      {isLast && (
        <p className={cls.note}>
          By tapping or clicking &quot;See Your Loan Options&quot; below, you
          acknowledge and agree to Fundera’s <button>Terms of Use</button> and{' '}
          <button>Privacy Policy</button>. You further acknowledge and agree
          that you are providing express written consent for Fundera to share
          the information you&apos;ve provided with its partners, and for
          Fundera and/or its partners to contact you with marketing and other
          messages via email and/or at the phone number provided via automatic
          dialing systems, recurring autodialed and prerecorded calls, or
          SMS/MMS messages (charges may apply), even if my telephone number is
          listed on a Federal, State, or other jurisdiction Do-Not-Call list.
          You further acknowledge that consent to these communications is not a
          condition to utilizing these services. You also certify that the
          number you have
        </p>
      )}
    </>
  );
};
