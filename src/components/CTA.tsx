'use client';

import { useLocale } from '@/i18n/context';
import styles from './CTA.module.css';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  const { dict } = useLocale();

  return (
    <ScrollReveal as="section" className={styles.section}>
      <div id="contacto">
        <h2 className={styles.title}>
          {dict.cta.titlePre}<em>{dict.cta.titleEm}</em>{dict.cta.titleEnd}
        </h2>
        <p className={styles.desc}>
          {dict.cta.desc}
        </p>
        <button className={styles.btn}>{dict.cta.btn}</button>
      </div>
    </ScrollReveal>
  );
}
