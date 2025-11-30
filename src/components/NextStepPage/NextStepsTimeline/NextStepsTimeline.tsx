'use client';

import cls from './NextStepsTimeline.module.scss';

const steps = [
  {
    number: 1,
    title: 'We review your information',
    description: 'Our team carefully reviews your application to understand your needs.',
  },
  {
    number: 2,
    title: 'Expect a call or email shortly',
    description: 'Your advisor will reach out within the next few hours to discuss your options.',
  },
  {
    number: 3,
    title: 'Get personalized loan options you can choose from',
    description: 'Receive tailored loan offers that match your specific requirements.',
  },
];

export const NextStepsTimeline = () => {
  return (
    <div className={cls.timeline}>
      <h2 className={cls.title}>What Happens Next</h2>
      <div className={cls.stepsContainer}>
        {steps.map((step, index) => (
          <div key={step.number} className={cls.step}>
            <div className={cls.stepNumber}>{step.number}</div>
            <div className={cls.stepContent}>
              <h3 className={cls.stepTitle}>{step.title}</h3>
              <p className={cls.stepDescription}>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className={cls.connector} />}
          </div>
        ))}
      </div>
    </div>
  );
};

