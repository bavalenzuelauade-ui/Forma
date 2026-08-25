import type { Dictionary } from './types';

const it: Dictionary = {
  meta: {
    title: 'Forma Studio — Digital Brand Studio',
    description: 'Strategia, branding e tecnologia per startup che vogliono distinguersi in LATAM.',
  },
  nav: {
    services: 'Servizi',
    process: 'Processo',
    contact: 'Contatto',
    cta: 'Parliamo',
    menu: 'Menu',
  },
  hero: {
    pill: 'Digital brand studio — Argentina',
    titlePre: 'Costruiamo ',
    titleEm: 'brand',
    titleEnd: ' che generano impatto',
    subtitle: 'Strategia, branding e tecnologia per startup che vogliono distinguersi in LATAM.',
    btnPrimary: 'Inizia un progetto',
    btnSecondary: 'Vedi i lavori',
  },
  specializations: {
    titlePre: 'Cosa ',
    titleEm: 'facciamo',
    desc: 'Quattro specializzazioni con cui trasformiamo idee in prodotti reali.',
    steps: [
      {
        num: '01',
        title: 'Branding + Web + App',
        desc: "Dall'identita visiva all'esperienza digitale completa. Creiamo brand che la gente ricorda e piattaforme dove interagiscono.",
        tags: ['Product branding', 'App design', 'Landing page', 'Brand da zero'],
      },
      {
        num: '02',
        title: 'Automazione',
        desc: 'Colleghiamo i tuoi strumenti perche i processi funzionino da soli. Chatbot intelligenti, workflow e flussi che eliminano il lavoro ripetitivo.',
        tags: ['Chatbot + WhatsApp', 'Workflow'],
      },
      {
        num: '03',
        title: 'Cybersicurezza',
        desc: 'Proteggiamo cio che hai costruito. Audit, pentesting e hardening infrastrutturale per blindare il tuo business.',
        tags: ['Audit + pentesting', 'Infrastruttura sicura'],
      },
      {
        num: '04',
        title: 'Prodotto digitale',
        desc: 'Dashboard, CRM e piattaforme SaaS su misura. Prodotti digitali che scalano con il tuo business e i tuoi utenti.',
        tags: ['CRM + dashboard', 'Piattaforma SaaS'],
      },
    ],
  },
  process: {
    label: 'Come lavoriamo',
    steps: [
      'Comprendiamo il tuo business e i tuoi obiettivi',
      'Strategia e proposta creativa',
      'Design iterativo con feedback costante',
      'Sviluppo e testing rigoroso',
      'Lancio e supporto continuo',
      'Metriche e ottimizzazione post-lancio',
    ],
  },
  cta: {
    titlePre: 'Il tuo prossimo ',
    titleEm: 'brand',
    titleEnd: ' inizia qui',
    desc: 'Trasformiamo idee in prodotti digitali che la gente ricorda.',
    btn: 'Invia messaggio',
    whatsapp: 'Ciao! Sono interessato a lavorare con Forma Studio.',
    whatsappLabel: 'Scrivici su WhatsApp',
    formName: 'Il tuo nome',
    formEmail: 'La tua email',
    formMessage: 'Raccontaci del tuo progetto...',
    formSend: 'Invia messaggio',
    formSuccess: 'Messaggio inviato. Ti rispondiamo presto!',
    formOr: 'o',
  },
  footer: {
    name: 'Forma Studio',
    location: 'Argentina',
  },
};

export default it;
