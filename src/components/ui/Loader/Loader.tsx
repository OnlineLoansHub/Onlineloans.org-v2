import cls from './Loader.module.scss';

type Props = {
  label?: string;
};

export function Loader({ label = 'Loading...' }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cls.fsOverlay}
    >
      <div className={cls.fsSpinner} />
      <span className="sr-only">{label}</span>
    </div>
  );
}
