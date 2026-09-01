'use client';

import { useLocale } from '@/i18n/context';
import styles from './Footer.module.css';

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/forma.studio.arg',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bautista-valenzuela-343791349/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { dict, locale } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span>{dict.footer.name} — {dict.footer.location}</span>
        <div className={styles.right}>
          <div className={styles.socialLinks}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialLink}>
                {s.icon}
              </a>
            ))}
          </div>
          <nav className={styles.legalLinks}>
            <a href={`/${locale}/privacidad`}>{dict.footer.privacy}</a>
            <a href={`/${locale}/terminos`}>{dict.footer.terms}</a>
          </nav>
        </div>
      </div>
      <span className={styles.copy}>&copy; {new Date().getFullYear()} {dict.footer.name}. {dict.footer.rights}</span>
    </footer>
  );
}
