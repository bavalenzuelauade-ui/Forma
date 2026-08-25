'use client';

import { useLocale } from '@/i18n/context';
import styles from './Footer.module.css';

export default function Footer() {
  const { dict } = useLocale();

  return (
    <footer className={styles.footer}>
      <span>{dict.footer.name}</span>
      <span>{dict.footer.location}</span>
    </footer>
  );
}
