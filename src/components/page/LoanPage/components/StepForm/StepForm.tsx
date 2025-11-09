'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Select } from '@/components/ui/Select/Select';
import { classNames } from '@/shared';

import { OfferBanner, Steps } from './components';
import { FORM_CONFIG } from './config';
import { FormKeys, FormSteps } from './types';

import cls from './StepForm.module.scss';

export const StepForm = () => {
  const [formState, setFormState] = useState({
    [FormKeys.amount]: undefined,
    [FormKeys.startMonth]: undefined,
    [FormKeys.startYear]: undefined,
    [FormKeys.revenue]: 10000,
    [FormKeys.creditScore]: undefined,
    [FormKeys.loanFor]: '',
    [FormKeys.zipCode]: undefined,
    [FormKeys.businessName]: '',
    [FormKeys.firstName]: '',
    [FormKeys.lastName]: '',
    [FormKeys.phone]: '',
    [FormKeys.email]: '',
  });
  const [activeStep, setActiveStep] = useState<FormSteps>(FormSteps.first);

  const handleChange = (value: string | number, name: FormKeys) => {
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className={classNames(cls.stepForm)}>
      <Steps activeStep={activeStep} />
      <div className={cls.formContent}>
        <form className={cls.form}>
          {FORM_CONFIG.map((formItem, index) => {
            const isLast = index === FORM_CONFIG.length - 1;

            return (
              <div key={formItem.title} className={cls.formItem}>
                <div>
                  <div>
                    <h2 className={cls.formTitle}>{formItem.title}</h2>
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
                              value={formState[item.name]}
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
                                    })}
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
                            />
                          );

                        case 'txt':
                          return <p key={item.value}>{item.value}</p>;

                        default:
                          return '';
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
                      onClick={() => console.log('back')}
                    >
                      Go Back
                    </Button>
                  )}
                  {formItem.next && (
                    <Button
                      variant="primary"
                      className={cls.formButtonSubmit}
                      type={isLast ? 'submit' : 'button'}
                      onClick={() => console.log('back')}
                    >
                      Continue
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
        </form>
        <OfferBanner />
      </div>
    </div>
  );
};
