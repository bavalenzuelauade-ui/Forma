'use client';

import { useLocale } from '@/i18n/context';
import styles from './AboutUs.module.css';
import ScrollReveal from './ScrollReveal';

export default function AboutUs() {
  const { dict } = useLocale();
  const { about } = dict;

  return (
    <section id="nosotros" className={styles.section}>
      <ScrollReveal className={styles.header}>
        <h2 className={styles.title}>{about.titlePre}<em>{about.titleEm}</em></h2>
        <p className={styles.desc}>{about.desc}</p>
      </ScrollReveal>

      <div className={styles.grid}>
        <ScrollReveal className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{about.mission}</h3>
          <p className={styles.cardText}>{about.missionText}</p>
        </ScrollReveal>

        <ScrollReveal className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{about.vision}</h3>
          <p className={styles.cardText}>{about.visionText}</p>
        </ScrollReveal>

        <ScrollReveal className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{about.team}</h3>
          <p className={styles.cardText}>{about.teamText}</p>
        </ScrollReveal>

        <ScrollReveal className={`${styles.card} ${styles.cardAi}`}>
          <div className={`${styles.cardIcon} ${styles.cardIconAi}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
              <path d="M8.24 9.93A4 4 0 0 1 12 2" />
              <path d="M12 22v-6" />
              <path d="M6 18h12" />
              <circle cx="12" cy="12" r="2" />
              <path d="M17 12h3M4 12h3M12 7V4" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{about.aiLabel}</h3>
          <p className={styles.cardText}>{about.aiText}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
