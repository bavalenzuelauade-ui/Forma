import styles from './AutomationVisual.module.css';

export default function AutomationVisual() {
  return (
    <>
      <div className={styles.glow} style={{ background: '#2563eb', top: '20%', left: '30%' }} />
      <div className={styles.glow} style={{ background: '#60a5fa', bottom: '20%', right: '30%', animationDelay: '2s' }} />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.node}>WhatsApp</div>
          <div className={styles.connector}><div className={styles.dot} /></div>
          <div className={`${styles.node} ${styles.nodePrimary}`}>Bot IA</div>
          <div className={styles.connector}><div className={styles.dot} style={{ animationDelay: '0.6s' }} /></div>
          <div className={styles.node}>CRM</div>
        </div>
        <div className={styles.vline}><div className={styles.vlineDot} /></div>
        <div className={styles.row}>
          <div className={styles.node}>Email</div>
          <div className={styles.connector}><div className={styles.dot} style={{ animationDelay: '0.3s' }} /></div>
          <div className={`${styles.node} ${styles.nodePrimary}`}>Workflow</div>
          <div className={styles.connector}><div className={styles.dot} style={{ animationDelay: '0.9s' }} /></div>
          <div className={styles.node}>Notify</div>
        </div>
      </div>
    </>
  );
}
