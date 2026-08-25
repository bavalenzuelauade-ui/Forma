'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/i18n/context';
import { locales, localeNames, type Locale } from '@/i18n/types';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { locale, dict } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label={dict.nav.menu}>
        <a href={`/${locale}`} className={styles.logo} aria-label="Forma Studio">Forma</a>
        <div className={styles.links}>
          <a href="#servicios">{dict.nav.services}</a>
          <a href="#proceso">{dict.nav.process}</a>
          <a href="#contacto">{dict.nav.contact}</a>
        </div>
        <div className={styles.right}>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            {locales.map((loc) => (
              <a
                key={loc}
                href={`/${loc}`}
                className={`${styles.langBtn} ${loc === locale ? styles.langActive : ''}`}
                aria-current={loc === locale ? 'page' : undefined}
              >
                {localeNames[loc as Locale]}
              </a>
            ))}
          </div>
          <a href="#contacto" className={styles.cta}>{dict.nav.cta}</a>
        </div>
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={dict.nav.menu}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} role="dialog" aria-modal="true">
        <a href="#servicios" onClick={() => setMenuOpen(false)}>{dict.nav.services}</a>
        <a href="#proceso" onClick={() => setMenuOpen(false)}>{dict.nav.process}</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>{dict.nav.contact}</a>
        <div className={styles.mobileLang}>
          {locales.map((loc) => (
            <a
              key={loc}
              href={`/${loc}`}
              className={`${styles.langBtn} ${loc === locale ? styles.langActive : ''}`}
            >
              {localeNames[loc as Locale]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
