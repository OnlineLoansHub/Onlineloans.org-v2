import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { classNames } from '@/lib';
import cls from './WrittenBy.module.scss';

interface WrittenByProps {
  name: string;
  role: string;
  imageUrl?: string;
  link?: string;
  variant?: 'default' | 'dark';
}

export const WrittenBy = ({ name, role, imageUrl, link, variant = 'default' }: WrittenByProps) => {
  const defaultImageUrl = '/images/article/article_author.png';

  const authorContent = (
    <>
      <div className={cls.imageWrapper}>
        <Image
          src={imageUrl || defaultImageUrl}
          alt={name}
          width={80}
          height={80}
          className={cls.authorImage}
          priority={false}
          loading="lazy"
        />
      </div>
      <div className={cls.textContent}>
        <div className={cls.nameLine}>
          <span className={cls.writtenByText}>Written by</span>
          {link ? (
            <AppLink href={link} className={cls.authorNameLink}>
              {name}
            </AppLink>
          ) : (
            <span className={cls.authorName}>{name}</span>
          )}
        </div>
        <div className={cls.roleLine}>
          <span className={cls.authorRole}>{role}</span>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={classNames(cls.writtenBy, {
        [cls.dark]: variant === 'dark',
      })}
    >
      {authorContent}
    </div>
  );
};
