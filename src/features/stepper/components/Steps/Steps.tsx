import Image from 'next/image';
import { classNames } from '@/lib';
import { FormSteps, IStepConfig } from '../../types';
import cls from './Steps.module.scss';

interface IStepsProps {
  activeStep: FormSteps;
  stepConfig: IStepConfig[];
}

export const Steps = ({ activeStep, stepConfig }: IStepsProps) => {
  return (
    <ul className={cls.list}>
      {stepConfig.map((data) => {
        const isActiveItem = data.step <= activeStep;
        const isSuccess = data.step < activeStep;

        return (
          <li
            key={data.title}
            className={classNames(cls.listItem, {
              [cls.active]: isActiveItem,
              [cls.success]: isSuccess,
            })}
          >
            <p className={classNames(cls.step)}>
              {isSuccess ? (
                <Image
                  src={'/images/icons/features/onlineloans-check.svg'}
                  width={16}
                  height={12}
                  alt={'Check mark'}
                />
              ) : (
                data.step
              )}
            </p>
            <p className={cls.title}>{data.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
