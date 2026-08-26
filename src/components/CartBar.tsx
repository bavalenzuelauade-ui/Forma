'use client';

import { useLocale } from '@/i18n/context';
import { useCart } from './CartContext';
import styles from './CartBar.module.css';

export default function CartBar() {
  const { dict } = useLocale();
  const cart = useCart();

  if (cart.items.length === 0) return null;

  function handleSend() {
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const textarea = contactSection.querySelector('textarea');
        if (textarea) {
          const prefix = 'Servicios seleccionados:\n';
          const list = cart.items.map(item => `  - ${item}`).join('\n');
          textarea.value = `${prefix}${list}\n\n`;
          textarea.focus();
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 600);
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <div className={styles.count}>
            <span className={styles.countNum}>{cart.items.length}</span>
            {dict.cart.selected}
          </div>
          <div className={styles.items}>
            {cart.items.map(item => (
              <button
                key={item}
                className={styles.chip}
                onClick={() => cart.remove(item)}
                type="button"
              >
                {item}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.clearBtn} onClick={cart.clear} type="button">
            {dict.cart.clearAll}
          </button>
          <button className={styles.sendBtn} onClick={handleSend} type="button">
            {dict.cart.sendSelection}
          </button>
        </div>
      </div>
    </div>
  );
}
