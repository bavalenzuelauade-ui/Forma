'use client';

import { useLocale } from '@/i18n/context';
import styles from './Hero.module.css';

export default function Hero() {
  const { dict } = useLocale();

  return (
    <section className={styles.hero}>
      <div className={styles.bgElements} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={styles.gridOverlay} />
        <div className={`${styles.floatingShape} ${styles.shape1}`} />
        <div className={`${styles.floatingShape} ${styles.shape2}`} />
        <div className={`${styles.floatingShape} ${styles.shape3}`} />
        <div className={`${styles.floatingShape} ${styles.shape4}`} />
      </div>
      <div className={styles.content}>
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
      </div>
    </section>
  );
}
