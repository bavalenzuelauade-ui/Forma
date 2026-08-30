'use client';

import { useState, useRef, useCallback } from 'react';
import { useLocale } from '@/i18n/context';
import styles from './FAQ.module.css';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const { dict } = useLocale();
  const { faq } = dict;
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((i: number) => {
    setOpen(prev => (prev === i ? null : i));
  }, []);

  return (
    <section className={styles.section}>
      <ScrollReveal className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {faq.titlePre}<em>{faq.titleEm}</em>
          </h2>
          <p className={styles.desc}>{faq.desc}</p>
        </div>
        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <svg
                  className={styles.chevron}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={styles.answer}
                style={{
                  maxHeight: open === i ? `${refs.current[i]?.scrollHeight ?? 0}px` : '0px',
                }}
              >
                <div ref={(el) => { refs.current[i] = el; }} className={styles.answerInner}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
