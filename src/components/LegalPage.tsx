import type { Locale } from '@/i18n';
import styles from './LegalPage.module.css';

interface LegalPageProps {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
  locale: Locale;
}

export default function LegalPage({ title, intro, sections, locale }: LegalPageProps) {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href={`/${locale}`} className={styles.back}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Forma Studio
        </a>
      </nav>
      <main className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        {sections.map((s) => (
          <section key={s.heading} className={styles.section}>
            <h2 className={styles.heading}>{s.heading}</h2>
            <p className={styles.text}>{s.text}</p>
          </section>
        ))}
        <p className={styles.updated}>Forma Studio — Bariloche, Argentina</p>
      </main>
    </div>
  );
}
