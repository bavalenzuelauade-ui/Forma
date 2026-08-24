'use client';

import styles from './CTA.module.css';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <ScrollReveal as="section" className={styles.section}>
      <div id="contacto">
        <h2 className={styles.title}>
          Tu proxima <em>marca</em><br />empieza aca
        </h2>
        <p className={styles.desc}>
          Convertimos ideas en productos digitales que la gente recuerda.
        </p>
        <button className={styles.btn}>Agendar llamada</button>
      </div>
    </ScrollReveal>
  );
}
