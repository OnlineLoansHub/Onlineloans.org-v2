'use client';

import { classNames } from '@/lib';
import cls from './ErrorModal.module.scss';

interface IErrorModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const ErrorModal = ({
  isVisible,
  onClose,
  title = 'Submission Failed',
  message = 'We encountered an error while submitting your application. Please try again.',
}: IErrorModalProps) => {
  if (!isVisible) return null;

  return (
    <div
      className={classNames(cls.modalWrapper, { [cls.visible]: isVisible })}
      onClick={onClose}
    >
      <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={cls.modalTitle}>{title}</h3>
        <p className={cls.modalMessage}>{message}</p>
        <button className={cls.modalBtn} onClick={onClose}>
          Try Again
        </button>
      </div>
    </div>
  );
};

