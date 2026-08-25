import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Forma Studio — Digital Brand Studio',
    description: 'Strategy, branding, and technology for startups looking to stand out in LATAM.',
  },
  nav: {
    services: 'Services',
    about: 'About',
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
  about: {
    titlePre: 'Who we ',
    titleEm: 'are',
    desc: 'A young team with a clear mission: making quality branding and technology accessible to everyone.',
    mission: 'Mission',
    missionText: 'To create high-quality digital solutions that drive our clients\' growth. Every project is a chance to make a real impact, no matter the size of the business.',
    vision: 'Vision',
    visionText: 'To become the go-to digital studio in LATAM for startups and SMBs looking to compete with their own identity, solid technology, and clear strategy.',
    team: 'The team',
    teamText: 'We are a group of business administration and cybersecurity students who decided to build something of our own. We are driven by quality, long-term relationships, and mutual growth with every client.',
    aiLabel: 'Powered by AI',
    aiText: 'We integrate artificial intelligence at every stage of the process — from design and strategy to automation and development. It doesn\'t replace human judgment, it amplifies it.',
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
        details: [
          { title: 'Product branding', desc: 'Complete visual identity: logo, color palette, typography, brand guidelines, and every asset you need to communicate consistently across all channels.' },
          { title: 'App design', desc: 'Interface design for mobile and web applications. Wireframes, interactive prototypes, and pixel-perfect final designs ready for development.' },
          { title: 'Landing pages', desc: 'Conversion-optimized landing pages. Perfect for launches, ad campaigns, or quickly validating a business idea.' },
          { title: 'Brand from scratch', desc: 'For projects starting from zero. We define naming, identity, communication strategy, and all digital assets to go to market.' },
        ],
      },
      {
        num: '02',
        title: 'Automation',
        desc: 'We connect your tools so processes run on their own. Smart chatbots, workflows, and flows that eliminate repetitive work.',
        tags: ['Chatbots + WhatsApp', 'Workflows'],
        details: [
          { title: 'Chatbots + WhatsApp', desc: 'Smart bots that answer queries, schedule appointments, process orders, and serve customers 24/7 from WhatsApp, Instagram, or your website.' },
          { title: 'Automated workflows', desc: 'We connect your tools (CRM, email, calendar, spreadsheets) so information flows on its own. Less manual work, fewer errors, more time for what matters.' },
        ],
      },
      {
        num: '03',
        title: 'Cybersecurity',
        desc: 'We protect what you built. Audits, pentesting, and infrastructure hardening to keep your business secure.',
        tags: ['Audits + pentesting', 'Secure infrastructure'],
        details: [
          { title: 'Audits + pentesting', desc: 'We analyze your system looking for vulnerabilities before someone else finds them. Penetration tests, code review, and actionable reports with clear priorities.' },
          { title: 'Secure infrastructure', desc: 'Secure configuration of servers, databases, and cloud services. Hardening, access monitoring, automated backups, and incident response.' },
        ],
      },
      {
        num: '04',
        title: 'Digital product',
        desc: 'Dashboards, CRMs, and custom SaaS platforms. Digital products that scale with your business and users.',
        tags: ['CRM + dashboard', 'SaaS platform'],
        details: [
          { title: 'CRM + dashboard', desc: 'Custom management panels to visualize data, control operations, and make informed decisions. Every metric that matters, in one place.' },
          { title: 'SaaS platform', desc: 'Full development of web platforms with users, roles, payments, and all business logic. From MVP to the version that scales with thousands of users.' },
        ],
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
