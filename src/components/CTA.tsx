'use client';

import { useState, type FormEvent } from 'react';
import { useLocale } from '@/i18n/context';
import styles from './CTA.module.css';
import ScrollReveal from './ScrollReveal';

const WA_NUMBER = '5492944713929';
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/bavalenzuelauade@gmail.com';

export default function CTA() {
  const { dict, locale } = useLocale();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict.cta.whatsapp)}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('_gotcha')) return;

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: 'Nuevo mensaje desde Forma Studio',
          _template: 'table',
        }),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <ScrollReveal as="section" className={styles.section}>
      <div id="contacto" className={styles.inner}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>
            {dict.cta.titlePre}<em>{dict.cta.titleEm}</em>{dict.cta.titleEnd}
          </h2>
          <p className={styles.desc}>
            {dict.cta.desc}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {dict.cta.whatsappLabel}
          </a>
        </div>

        <div className={styles.formSide}>
          <div className={styles.formDivider}>
            <span>{dict.cta.formOr}</span>
          </div>
          {sent ? (
            <div className={styles.success}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p>{dict.cta.formSuccess}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              {error && <p className={styles.errorMsg}>Error al enviar. Intentalo de nuevo.</p>}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input
                type="text"
                name="name"
                placeholder={dict.cta.formName}
                required
                maxLength={100}
                className={styles.input}
                autoComplete="name"
              />
              <input
                type="email"
                name="email"
                placeholder={dict.cta.formEmail}
                required
                maxLength={254}
                className={styles.input}
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder={dict.cta.formMessage}
                required
                maxLength={2000}
                rows={4}
                className={styles.textarea}
              />
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
                {sending ? '...' : dict.cta.formSend}
              </button>
            </form>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
