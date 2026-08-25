'use client';

import { useLocale } from '@/i18n/context';
import styles from './Process.module.css';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  const { dict } = useLocale();

  return (
    <ScrollReveal as="section" className={styles.section}>
      <div className={styles.label} id="proceso">{dict.process.label}</div>
      <ul className={styles.list}>
        {dict.process.steps.map((step, i) => (
          <li key={i}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
