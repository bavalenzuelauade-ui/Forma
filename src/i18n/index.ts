import type { Dictionary, Locale } from './types';
import es from './es';
import en from './en';

export type { Dictionary, Locale };
export { locales, localeNames } from './types';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}

export function isValidLocale(value: string): value is Locale {
  return ['es', 'en'].includes(value);
}
