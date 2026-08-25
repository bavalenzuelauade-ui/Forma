import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Esta pagina no existe.</p>
      <a href="/es" className={styles.link}>Volver al inicio</a>
    </div>
  );
}
