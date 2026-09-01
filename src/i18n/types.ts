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
    adaptMsg: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      tags: string[];
      details: { title: string; desc: string }[];
    }[];
  };
  cart: {
    selected: string;
    sendSelection: string;
    clearAll: string;
    orTalk: string;
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
    spotsLeft: string;
    spotsMonth: string;
    formSuccess: string;
    formSuccessDesc: string;
    successNext: string;
    successSteps: string[];
    successFollow: string;
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
  showcase: {
    titlePre: string;
    titleEm: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  faq: {
    titlePre: string;
    titleEm: string;
    desc: string;
    items: { q: string; a: string }[];
  };
  footer: {
    name: string;
    location: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  legal: {
    consent: string;
    privacyLink: string;
  };
  privacy: {
    title: string;
    intro: string;
    sections: { heading: string; text: string }[];
  };
  terms: {
    title: string;
    intro: string;
    sections: { heading: string; text: string }[];
  };
}

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};
