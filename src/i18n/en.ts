import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Forma Studio — Digital Brand Studio',
    description: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
  },
  nav: {
    services: 'Services',
    process: 'Process',
    contact: 'Contact',
    cta: "Let's talk",
    menu: 'Menu',
  },
  hero: {
    pill: 'Digital brand studio — Argentina',
    titlePre: 'We build ',
    titleEm: 'brands',
    titleEnd: ' that make an impact',
    subtitle: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
    btnPrimary: 'Start a project',
    btnSecondary: 'See our work',
  },
  specializations: {
    titlePre: 'What we ',
    titleEm: 'do',
    desc: 'Four specialties that turn ideas into real products.',
    steps: [
      {
        num: '01',
        title: 'Branding + Web + App',
        desc: 'From visual identity to the complete digital experience. We create brands people remember and platforms where they engage.',
        tags: ['Product branding', 'App design', 'Landing pages', 'Brand from scratch'],
      },
      {
        num: '02',
        title: 'Automation',
        desc: 'We connect your tools so processes run on their own. Smart chatbots, workflows, and flows that eliminate repetitive work.',
        tags: ['Chatbots + WhatsApp', 'Workflows'],
      },
      {
        num: '03',
        title: 'Cybersecurity',
        desc: 'We protect what you built. Audits, pentesting, and infrastructure hardening to keep your business secure.',
        tags: ['Audits + pentesting', 'Secure infrastructure'],
      },
      {
        num: '04',
        title: 'Digital product',
        desc: 'Dashboards, CRMs, and custom SaaS platforms. Digital products that scale with your business and users.',
        tags: ['CRM + dashboard', 'SaaS platform'],
      },
    ],
  },
  process: {
    label: 'How we work',
    steps: [
      'We understand your business and goals',
      'Strategy and creative proposal',
      'Iterative design with constant feedback',
      'Rigorous development and testing',
      'Launch and ongoing support',
      'Metrics and post-launch optimization',
    ],
  },
  cta: {
    titlePre: 'Your next ',
    titleEm: 'brand',
    titleEnd: ' starts here',
    desc: 'We turn ideas into digital products people remember.',
    btn: 'Send message',
    whatsapp: 'Hi! I\'m interested in working with Forma Studio.',
    whatsappLabel: 'Message us on WhatsApp',
    formName: 'Your name',
    formEmail: 'Your email',
    formMessage: 'Tell us about your project...',
    formSend: 'Send message',
    formSuccess: 'Message sent. We\'ll get back to you soon!',
    formOr: 'or',
  },
  footer: {
    name: 'Forma Studio',
    location: 'Argentina',
  },
};

export default en;
