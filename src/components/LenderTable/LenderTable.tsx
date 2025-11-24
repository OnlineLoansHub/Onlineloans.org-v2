import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { classNames } from '@/lib';
import { LENDER_TABLE_CONFIG } from './config';
import cls from './LenderTable.module.scss';

export const LenderTable = () => {
  return (
    <div className={classNames(cls.wrapper)}>
      <ul className={classNames(cls.list)}>
        {LENDER_TABLE_CONFIG.map((item) => {
          return (
            <li key={item.title} className={cls.listItem}>
              <p className={cls.listItemNumber}>{item.id}</p>
              <div className={cls.listItemImgWrapper}>
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  fill
                  className={cls.listItemImg}
                />
                {item.imgTitleElem}
              </div>
              <div className={cls.listItemContent}>
                <div className={cls.listItemContentTop}>
                  <div>
                    <p className={cls.listItemTitle}>{item.title}</p>
                    <p className={cls.listItemSubtitle}>{item.subtitle}</p>
                    <p className={cls.listItemReview}>
                      <span className={cls.listItemReviewNumber}>
                        {item.reviewsNumber} reviews
                      </span>{' '}
                      on{' '}
                      <Image
                        src={
                          '/images/icons/features/onlineloans-decorative-shape.svg'
                        }
                        alt={'onlineloans-decorative-shape'}
                        width={26}
                        height={24}
                        className={cls.listItemReviewStar}
                      />{' '}
                      <span className={cls.listItemReviewBold}>Trustpilot</span>
                    </p>
                  </div>
                  <p className={cls.listItemRating}>
                    {item.rating}
                    <Image
                      src={'/images/table/rating-star.svg'}
                      alt={'onlineloans rating-star'}
                      width={26}
                      height={24}
                      className={cls.listItemRatingStar}
                    />
                  </p>
                </div>
                <div className={cls.listItemContentBottom}>
                  <ul className={cls.listItemTable}>
                    {item.table.map((tableItem) => {
                      return (
                        <li
                          key={tableItem.id}
                          className={cls.listItemTableItem}
                        >
                          <p className={cls.listItemTableItemValue}>
                            {tableItem.value}
                          </p>
                          <p className={cls.listItemTableItemTitle}>
                            {tableItem.title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    variant="primary"
                    onClick={() => {}}
                    className={cls.listItemBtn}
                  >
                    Get My Rate
                    <Image
                      src={'/images/icons/features/arrow-right.svg'}
                      width={24}
                      height={24}
                      alt={'Continue arrow'}
                      className={cls.btnImg}
                    />
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <div className={cls.infoBlock}>
          <div>
            <p className={cls.infoBlockTitle}>300+ visitors</p>
            <p className={cls.infoBlockSubtitle}>
              connected with a lender in the past week
            </p>
          </div>
          <div className={cls.infoBlockImgWrapper}>
            <Image
              src={'/images/table/cash.png'}
              alt={'image casg'}
              width={130}
              height={120}
              className={cls.infoBlockImg}
            />
          </div>
        </div>
        <div className={cls.advantagesBlock}>
          <p className={cls.advantagesTitle}>OnlineLoans Total Score</p>
          <p className={cls.advantagesSubtitle}>
            Our product scores consist of a combination of the following 3
            components:
          </p>
          <ul className={cls.advantagesList}>
            <li className={cls.advantagesListItem}>
              <p className={cls.advantagesListItemTxt}>
                <Image
                  src={'/images/table/material-symbols_star-outline.svg'}
                  alt={'image casg'}
                  width={32}
                  height={32}
                  className={cls.advantagesImg}
                />
                Popularity
              </p>
              <Image
                src={'/images/table/arrow.svg'}
                alt={'image casg'}
                width={12}
                height={24}
                className={cls.advantagesImgArrow}
              />
            </li>
            <li className={cls.advantagesListItem}>
              <p className={cls.advantagesListItemTxt}>
                <Image
                  src={'/images/table/mdi_like-outline.svg'}
                  alt={'image casg'}
                  width={32}
                  height={32}
                  className={cls.advantagesImg}
                />
                Brand Reputation
              </p>
              <Image
                src={'/images/table/arrow.svg'}
                alt={'image casg'}
                width={12}
                height={24}
                className={cls.advantagesImgArrow}
              />
            </li>
            <li className={cls.advantagesListItem}>
              <p className={cls.advantagesListItemTxt}>
                <Image
                  src={'/images/table/mdi_tick-circle-outline.svg'}
                  alt={'image casg'}
                  width={32}
                  height={32}
                  className={cls.advantagesImg}
                />
                Features & Benefits
              </p>
              <Image
                src={'/images/table/arrow.svg'}
                alt={'image casg'}
                width={12}
                height={24}
                className={cls.advantagesImgArrow}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

