'use client';

import { useLocale } from '@/i18n/context';
import styles from './Footer.module.css';

export default function Footer() {
  const { dict, locale } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span>{dict.footer.name} — {dict.footer.location}</span>
        <nav className={styles.legalLinks}>
          <a href={`/${locale}/privacidad`}>{dict.footer.privacy}</a>
          <a href={`/${locale}/terminos`}>{dict.footer.terms}</a>
        </nav>
      </div>
      <span className={styles.copy}>&copy; {new Date().getFullYear()} {dict.footer.name}. {dict.footer.rights}</span>
    </footer>
  );
}
