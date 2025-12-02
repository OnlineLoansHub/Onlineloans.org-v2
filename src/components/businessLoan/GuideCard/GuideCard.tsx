import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { BusinessLoanGuide } from '@/data/businessLoanGuides';
import { PersonalLoanGuide } from '@/data/personalLoanGuides';
import cls from './GuideCard.module.scss';

interface GuideCardProps {
  guide: BusinessLoanGuide | PersonalLoanGuide;
}

export const GuideCard = ({ guide }: GuideCardProps) => {
  return (
    <AppLink href={guide.href} className={cls.card}>
      {guide.image && (
        <div className={cls.imageWrapper}>
          <Image
            src={guide.image}
            alt={guide.title}
            width={400}
            height={250}
            className={cls.image}
          />
        </div>
      )}
      <div className={cls.content}>
        {guide.category && <span className={cls.category}>{guide.category}</span>}
        <h3 className={cls.title}>{guide.title}</h3>
        <p className={cls.description}>{guide.description}</p>
        <span className={cls.readMore}>Read Guide →</span>
      </div>
    </AppLink>
  );
};

