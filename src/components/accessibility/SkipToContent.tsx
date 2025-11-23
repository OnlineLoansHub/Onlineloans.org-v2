import Link from 'next/link';
import cls from './SkipToContent.module.scss';

export const SkipToContent = () => {
  return (
    <Link href="#main-content" className={cls.skipLink}>
      Skip to main content
    </Link>
  );
};

