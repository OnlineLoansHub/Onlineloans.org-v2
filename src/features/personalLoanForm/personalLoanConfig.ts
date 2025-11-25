import { FormSteps, IFormConfig, IStepperConfig, IStepConfig } from '../stepper/types';
import cls from '../stepper/Stepper.module.scss';
import { validateUSPhone } from '@/lib/validateUSPhone';

const GOOGLE_URL = `https://script.google.com/macros/s/AKfycbyDWmr_uDQNNHEwUw-ZGMdRQWuS6EiV22Rt2jvhNQLEJUI-_5AtQ7obGkSyg2II6sJPSQ/exec`;

// Personal loan form keys
const PersonalFormKeys = {
  amount: 'amount',
  creditScore: 'creditScore',
  loanFor: 'loanFor',
  employmentStatus: 'employmentStatus',
  annualIncome: 'annualIncome',
  zipCode: 'zipCode',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  email: 'email',
} as const;

const STEP_CONFIG: IStepConfig[] = [
  {
    step: FormSteps.first,
    title: 'Basic Info',
  },
  {
    step: FormSteps.second,
    title: 'Your Details',
  },
  {
    step: FormSteps.third,
    title: 'Your Info',
  },
];

const FORM_CONFIG: IFormConfig[] = [
  {
    title: 'How much money do you need?',
    subtitle: 'Enter your requested loan or pick a common amount below:',
    step: FormSteps.first,
    substep: 1,
    options: [
      {
        type: 'input',
        placeholder: 'Enter your requested loan',
        name: PersonalFormKeys.amount,
      },
      {
        type: 'buttons',
        name: PersonalFormKeys.amount,
        values: [
          '$5,000',
          '$10,000',
          '$15,000',
          '$25,000',
          '$35,000',
          '$50,000',
        ],
      },
    ],
    next: true,
    prev: false,
  },
  {
    title: 'What is your credit score?',
    subtitle: "Rest assured, checking rates won't impact your credit score.",
    step: FormSteps.first,
    substep: 2,
    options: [
      {
        type: 'buttons',
        name: PersonalFormKeys.creditScore,
        values: [
          'Below 550',
          '550-579',
          '580-619',
          '620-639',
          '640-659',
          '660-699',
          '700-719',
          '720+',
        ],
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'What will you use this loan for?',
    subtitle:
      'This helps us match you to the right funding options for your needs.',
    step: FormSteps.first,
    substep: 3,
    options: [
      {
        type: 'buttons',
        name: PersonalFormKeys.loanFor,
        values: [
          'Debt consolidation',
          'Home improvement',
          'Major purchase',
          'Medical expenses',
          'Vacation',
          'Wedding',
          'Moving expenses',
          'Other',
        ],
        isSmallTxt: true,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'What is your employment status?',
    subtitle: 'Select your current employment status',
    step: FormSteps.second,
    substep: 1,
    options: [
      {
        type: 'buttons',
        name: PersonalFormKeys.employmentStatus,
        values: [
          'Employed full-time',
          'Employed part-time',
          'Self-employed',
          'Retired',
          'Unemployed',
          'Student',
        ],
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My annual income is',
    subtitle: 'Enter your annual income before taxes.',
    step: FormSteps.second,
    substep: 2,
    options: [
      {
        type: 'input',
        placeholder: 'Annual income',
        name: PersonalFormKeys.annualIncome,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My zip code is',
    subtitle: 'Please enter your 5-Digit zip code',
    step: FormSteps.second,
    substep: 3,
    options: [
      {
        type: 'input',
        placeholder: 'Enter your zip code',
        name: PersonalFormKeys.zipCode,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My name is',
    subtitle: 'Please enter your full first and last name',
    step: FormSteps.third,
    substep: 1,
    options: [
      {
        type: 'input',
        placeholder: 'First name',
        name: PersonalFormKeys.firstName,
      },
      {
        type: 'input',
        placeholder: 'Last name',
        name: PersonalFormKeys.lastName,
      },
    ],
    next: true,
    prev: true,
    className: cls.step2,
  },
  {
    title: 'Found your match',
    dopTitle: PersonalFormKeys.firstName,
    subtitle: "Almost done! Please provide final details and that's it!",
    step: FormSteps.third,
    substep: 2,
    options: [
      {
        type: 'input',
        placeholder: 'Phone number',
        name: PersonalFormKeys.phone,
      },
      {
        type: 'txt',
        value:
          'We or our lending partners may call you at this number to discuss your personalized loan options',
      },
      {
        type: 'input',
        placeholder: 'Email',
        name: PersonalFormKeys.email,
      },
      {
        type: 'txt',
        value:
          'We or our lending partners may email you at this address with next steps on your loan options',
      },
    ],
    next: true,
    prev: true,
    className: cls.formActionLast,
  },
];

const validators: Partial<Record<string, (v: unknown) => boolean>> = {
  [PersonalFormKeys.amount]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [PersonalFormKeys.annualIncome]: (v) =>
    Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [PersonalFormKeys.zipCode]: (v) => /^(\d{5}|\d{9}|\d{5}-\d{4})$/.test(String(v ?? '')),
  [PersonalFormKeys.email]: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '')),
  [PersonalFormKeys.phone]: (v) => validateUSPhone(String(v ?? '')).valid,
};

export const getPersonalLoanConfig = (amount: string = ''): IStepperConfig => {
  const initialFormState: Record<string, unknown> = {
    [PersonalFormKeys.amount]: amount,
    [PersonalFormKeys.creditScore]: undefined,
    [PersonalFormKeys.loanFor]: undefined,
    [PersonalFormKeys.employmentStatus]: undefined,
    [PersonalFormKeys.annualIncome]: '',
    [PersonalFormKeys.zipCode]: undefined,
    [PersonalFormKeys.firstName]: undefined,
    [PersonalFormKeys.lastName]: undefined,
    [PersonalFormKeys.phone]: undefined,
    [PersonalFormKeys.email]: undefined,
  };

  const onSubmit = async (formData: Record<string, unknown>) => {
    await fetch(GOOGLE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({
        [PersonalFormKeys.amount]: String(formData[PersonalFormKeys.amount] ?? ''),
        [PersonalFormKeys.creditScore]: String(formData[PersonalFormKeys.creditScore] ?? ''),
        [PersonalFormKeys.loanFor]: String(formData[PersonalFormKeys.loanFor] ?? ''),
        [PersonalFormKeys.employmentStatus]: String(formData[PersonalFormKeys.employmentStatus] ?? ''),
        [PersonalFormKeys.annualIncome]: String(formData[PersonalFormKeys.annualIncome] ?? '').replace(/[^\d]/g, ''),
        [PersonalFormKeys.zipCode]: String(formData[PersonalFormKeys.zipCode] ?? ''),
        [PersonalFormKeys.firstName]: String(formData[PersonalFormKeys.firstName] ?? ''),
        [PersonalFormKeys.lastName]: String(formData[PersonalFormKeys.lastName] ?? ''),
        [PersonalFormKeys.phone]: String(formData[PersonalFormKeys.phone] ?? ''),
        [PersonalFormKeys.email]: String(formData[PersonalFormKeys.email] ?? ''),
      }).toString(),
    });
  };

  return {
    formConfig: FORM_CONFIG,
    stepConfig: STEP_CONFIG,
    initialFormState,
    validators,
    onSubmit,
    currencyFields: [PersonalFormKeys.amount, PersonalFormKeys.annualIncome],
  };
};

