export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    about: string;
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
  about: {
    titlePre: string;
    titleEm: string;
    desc: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    team: string;
    teamText: string;
    aiLabel: string;
    aiText: string;
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
      details: { title: string; desc: string }[];
    }[];
  };
  diagnostic: {
    label: string;
    titlePre: string;
    titleEm: string;
    desc: string;
    formName: string;
    formEmail: string;
    formBusiness: string;
    formFile: string;
    formFileHint: string;
    formSend: string;
    formSuccess: string;
    formSuccessDesc: string;
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
    whatsapp: string;
    whatsappLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSuccess: string;
    formOr: string;
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
