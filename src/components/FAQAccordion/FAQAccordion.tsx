'use client';

import { useState, type FC } from 'react';
import cls from './FAQAccordion.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cls.faqContainer}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`${cls.faqItem} ${isOpen ? cls.faqItemActive : ''}`}>
            <button
              className={cls.faqQuestion}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={cls.faqQuestionText}>{item.question}</span>
              <span className={cls.faqIcon}>{isOpen ? '−' : '+'}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`${cls.faqAnswer} ${isOpen ? cls.faqAnswerOpen : ''}`}
              aria-hidden={!isOpen}
            >
              <div className={cls.faqAnswerContent}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

