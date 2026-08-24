'use client';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.pill}>
        Digital brand studio — Argentina
      </div>
      <h1 className={styles.title}>
        Construimos <em>marcas</em> que<br />generan impacto
      </h1>
      <p className={styles.subtitle}>
        Estrategia, branding y tecnologia para startups que quieren destacar en LATAM.
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>Iniciar proyecto</button>
        <button className={styles.btnSecondary}>Ver trabajos</button>
      </div>
    </section>
  );
}
