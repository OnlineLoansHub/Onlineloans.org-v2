import { FormKeys, FormSteps, IFormConfig, IStepperConfig, IStepConfig } from '../stepper/types';
import cls from '../stepper/Stepper.module.scss';
import { validateUSPhone } from '@/lib/validateUSPhone';

const currentYear = new Date().getFullYear();
const years: number[] = [];
for (let year = currentYear; year >= 1950; year--) {
  years.push(year);
}

const GOOGLE_URL = `https://script.google.com/macros/s/AKfycbyDWmr_uDQNNHEwUw-ZGMdRQWuS6EiV22Rt2jvhNQLEJUI-_5AtQ7obGkSyg2II6sJPSQ/exec`;

const STEP_CONFIG: IStepConfig[] = [
  {
    step: FormSteps.first,
    title: 'Basic Info',
  },
  {
    step: FormSteps.second,
    title: 'Your Business',
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
        name: FormKeys.amount,
      },
      {
        type: 'buttons',
        name: FormKeys.amount,
        values: ['$10,000', '$25,000', '$50,000', '$100,000', '$200,000', '$300,000'],
      },
    ],
    next: true,
    prev: false,
  },
  {
    title: 'When did you start your business?',
    subtitle: "If you don't remember the month, take your best guess.",
    step: FormSteps.first,
    substep: 2,
    options: [
      {
        type: 'select',
        values: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        name: FormKeys.startMonth,
        placeholder: 'Month',
      },
      {
        type: 'select',
        name: FormKeys.startYear,
        placeholder: 'Year',
        values: years,
      },
    ],
    next: true,
    prev: true,
    className: cls.step2,
  },
  {
    title: 'My monthly revenue is',
    subtitle: 'Take an average of your last few months.',
    step: FormSteps.first,
    substep: 3,
    options: [{ type: 'input', placeholder: 'Monthly revenue', name: FormKeys.revenue }],
    next: true,
    prev: true,
  },
  {
    title: 'What is your credit score?',
    subtitle: "Rest assured, checking rates won't impact your credit score.",
    step: FormSteps.first,
    substep: 4,
    options: [
      {
        type: 'buttons',
        name: FormKeys.creditScore,
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
    subtitle: 'This helps us match you to the right funding options for your business.',
    step: FormSteps.first,
    substep: 5,
    options: [
      {
        type: 'buttons',
        name: FormKeys.loanFor,
        values: [
          'Working capital',
          'Equipment purchase',
          'Inventory',
          'Marketing or advertising',
          'Business expansion',
          'Debt refinancing',
          'Real estate',
          'Other',
        ],
        isSmallTxt: true,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My business zip code is',
    subtitle: 'Please enter your 5-Digit zip code',
    step: FormSteps.second,
    substep: 1,
    options: [
      {
        type: 'input',
        placeholder: 'Enter your business zip code',
        name: FormKeys.zipCode,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My business name is',
    subtitle: "Please enter your business's full name",
    step: FormSteps.second,
    substep: 2,
    options: [
      {
        type: 'input',
        placeholder: 'Business name',
        name: FormKeys.businessName,
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
      { type: 'input', placeholder: 'First name', name: FormKeys.firstName },
      { type: 'input', placeholder: 'Last name', name: FormKeys.lastName },
    ],

    next: true,
    prev: true,
    className: cls.step2,
  },
  {
    title: 'Found your match',
    dopTitle: FormKeys.firstName,
    subtitle: "Almost done! Please provide final details and that's it!",
    step: FormSteps.third,
    substep: 2,
    options: [
      { type: 'input', placeholder: 'Phone number', name: FormKeys.phone },
      {
        type: 'txt',
        value:
          'We or our lending partners may call you at this number to discuss your personalized loan options',
      },
      { type: 'input', placeholder: 'Email', name: FormKeys.email },
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
  [FormKeys.amount]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.revenue]: (v) => Number(String(v).replace(/[^\d.]/g, '')) > 0,
  [FormKeys.zipCode]: (v) => /^(\d{5}|\d{9}|\d{5}-\d{4})$/.test(String(v ?? '')),
  [FormKeys.email]: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '')),
  [FormKeys.phone]: (v) => validateUSPhone(String(v ?? '')).valid,
};

export const getBusinessLoanConfig = (amount: string = ''): IStepperConfig => {
  const initialFormState: Record<string, unknown> = {
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
  };

  const onSubmit = async (formData: Record<string, unknown>) => {
    await fetch(GOOGLE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({
        [FormKeys.amount]: String(formData[FormKeys.amount] ?? ''),
        [FormKeys.startMonth]: String(formData[FormKeys.startMonth] ?? ''),
        [FormKeys.startYear]: String(formData[FormKeys.startYear] ?? ''),
        [FormKeys.revenue]: String(formData[FormKeys.revenue] ?? '').replace(/[^\d]/g, ''),
        [FormKeys.creditScore]: String(formData[FormKeys.creditScore] ?? ''),
        [FormKeys.loanFor]: String(formData[FormKeys.loanFor] ?? ''),
        [FormKeys.zipCode]: String(formData[FormKeys.zipCode] ?? ''),
        [FormKeys.businessName]: String(formData[FormKeys.businessName] ?? ''),
        [FormKeys.firstName]: String(formData[FormKeys.firstName] ?? ''),
        [FormKeys.lastName]: String(formData[FormKeys.lastName] ?? ''),
        [FormKeys.phone]: String(formData[FormKeys.phone] ?? ''),
        [FormKeys.email]: String(formData[FormKeys.email] ?? ''),
      }).toString(),
    });
  };

  return {
    formConfig: FORM_CONFIG,
    stepConfig: STEP_CONFIG,
    initialFormState,
    validators,
    onSubmit,
    currencyFields: [FormKeys.amount, FormKeys.revenue],
  };
};
