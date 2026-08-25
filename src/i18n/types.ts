export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    process: string;
    contact: string;
    cta: string;
    menu: string;
  };
  hero: {
    pill: string;
    titlePre: string;
    titleEm: string;
    titleEnd: string;
    subtitle: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  specializations: {
    titlePre: string;
    titleEm: string;
    desc: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  process: {
    label: string;
    steps: string[];
  };
  cta: {
    titlePre: string;
    titleEm: string;
    titleEnd: string;
    desc: string;
    btn: string;
  };
  footer: {
    name: string;
    location: string;
  };
}

export const locales = ['es', 'en', 'it'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  it: 'IT',
};
