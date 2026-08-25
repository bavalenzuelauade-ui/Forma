'use client';

import { useLocale } from '@/i18n/context';
import styles from './Hero.module.css';

export default function Hero() {
  const { dict } = useLocale();

  return (
    <section className={styles.hero}>
      <div className={styles.pill}>
        {dict.hero.pill}
      </div>
      <h1 className={styles.title}>
        {dict.hero.titlePre}<em>{dict.hero.titleEm}</em>{dict.hero.titleEnd}
      </h1>
      <p className={styles.subtitle}>
        {dict.hero.subtitle}
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>{dict.hero.btnPrimary}</button>
        <button className={styles.btnSecondary}>{dict.hero.btnSecondary}</button>
      </div>
    </section>
  );
}
