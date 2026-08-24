'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>Forma</div>
        <div className={styles.links}>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </div>
        <button className={styles.cta}>Hablemos</button>
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </div>
    </>
  );
}
