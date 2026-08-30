'use client';

import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { useLocale } from '@/i18n/context';
import styles from './Diagnostic.module.css';
import ScrollReveal from './ScrollReveal';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/bavalenzuelauade@gmail.com';
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SPOTS_TOTAL = 15;

export default function Diagnostic() {
  const { dict, locale } = useLocale();
  const { diagnostic: d } = dict;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) { setFileName(''); return; }
    if (file.size > MAX_FILE_SIZE) {
      setError('Archivo demasiado grande (max 5 MB)');
      e.target.value = '';
      setFileName('');
      return;
    }
    setError('');
    setFileName(file.name);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    if (formData.get('_gotcha')) return;

    formData.append('_subject', 'Diagnostico gratuito — Forma Studio');
    formData.append('_template', 'table');

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Error al enviar. Intenta de nuevo.');
      }
    } catch {
      setError('Error al enviar. Intenta de nuevo.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="diagnostico" className={styles.section}>
      <ScrollReveal className={styles.inner}>
        <div className={styles.textSide}>
          <div className={styles.label}>{d.label}</div>
          <h2 className={styles.title}>{d.titlePre}<em>{d.titleEm}</em></h2>
          <p className={styles.desc}>{d.desc}</p>
          <div className={styles.spotsBadge}>
            <span className={styles.spotsDot} />
            <span>{d.spotsLeft} <strong>{SPOTS_TOTAL}</strong> {d.spotsMonth}</span>
          </div>
        </div>

        <div className={styles.formSide}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className={styles.successTitle}>{d.formSuccess}</h3>
              <p className={styles.successDesc}>{d.formSuccessDesc}</p>
              <div className={styles.successSteps}>
                <div className={styles.successStepsLabel}>{d.successNext}</div>
                <ol className={styles.stepsList}>
                  {d.successSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
              <p className={styles.successFollow}>{d.successFollow}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <p className={styles.errorMsg}>{error}</p>}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input
                type="text"
                name="name"
                placeholder={d.formName}
                required
                maxLength={100}
                className={styles.input}
                autoComplete="name"
              />
              <input
                type="email"
                name="email"
                placeholder={d.formEmail}
                required
                maxLength={254}
                className={styles.input}
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder={d.formBusiness}
                required
                maxLength={2000}
                rows={3}
                className={styles.textarea}
              />
              <div
                className={styles.uploadZone}
                onClick={() => fileRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileRef.current?.click(); }}
              >
                <input
                  ref={fileRef}
                  type="file"
                  name="attachment"
                  accept=".png,.jpg,.jpeg,.pdf,.svg,.webp"
                  onChange={handleFile}
                  className={styles.fileInput}
                />
                <div className={styles.uploadIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                {fileName ? (
                  <span className={styles.uploadName}>{fileName}</span>
                ) : (
                  <>
                    <span className={styles.uploadLabel}>{d.formFile}</span>
                    <span className={styles.uploadHint}>{d.formFileHint}</span>
                  </>
                )}
              </div>
              <label className={styles.consent}>
                <input type="checkbox" required />
                <span>
                  {dict.legal.consent}{' '}
                  <a href={`/${locale}/privacidad`} target="_blank" rel="noopener noreferrer">
                    {dict.legal.privacyLink}
                  </a>
                </span>
              </label>
              <button type="submit" className={styles.btn} disabled={sending}>
                {sending ? '...' : d.formSend}
              </button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
