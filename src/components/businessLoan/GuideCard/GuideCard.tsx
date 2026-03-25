import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { BusinessLoanGuide } from '@/data/businessLoanGuides';
import { PersonalLoanGuide } from '@/data/personalLoanGuides';
import cls from './GuideCard.module.scss';

interface GuideCardProps {
  guide: BusinessLoanGuide | PersonalLoanGuide;
}

export const GuideCard = ({ guide }: GuideCardProps) => {
  const coverText = guide.coverLabel ?? guide.title;
  const hasCoverImage = Boolean(guide.coverImage);

  return (
    <AppLink href={guide.href} className={cls.card}>
      <div className={cls.cover} aria-hidden="true">
        <div className={cls.coverStripes} />
        {hasCoverImage ? (
          <div className={cls.coverImageWrap}>
            <Image
              src={guide.coverImage as string}
              alt=""
              width={240}
              height={96}
              className={cls.coverImage}
            />
          </div>
        ) : (
          <p className={cls.coverText}>{coverText}</p>
        )}
      </div>
      <div className={cls.content}>
        {guide.category && <span className={cls.category}>{guide.category}</span>}
        <h3 className={cls.title}>{guide.title}</h3>
        <p className={cls.description}>{guide.description}</p>
        <span className={cls.readMore}>Read Guide →</span>
      </div>
    </AppLink>
  );
};
