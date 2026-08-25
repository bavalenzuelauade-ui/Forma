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
        details: [
          { title: 'Product branding', desc: "Identita visiva completa: logo, palette colori, tipografia, linee guida del brand e tutti gli asset necessari per comunicare in modo coerente su ogni canale." },
          { title: 'App design', desc: 'Design di interfacce per applicazioni mobile e web. Wireframe, prototipi interattivi e design finale pixel-perfect pronto per lo sviluppo.' },
          { title: 'Landing page', desc: 'Pagine di atterraggio ottimizzate per la conversione. Ideali per lanci, campagne pubblicitarie o per validare rapidamente un\'idea di business.' },
          { title: 'Brand da zero', desc: 'Per progetti che partono da zero. Definiamo naming, identita, strategia di comunicazione e tutti i materiali digitali per andare sul mercato.' },
        ],
      },
      {
        num: '02',
        title: 'Automazione',
        desc: 'Colleghiamo i tuoi strumenti perche i processi funzionino da soli. Chatbot intelligenti, workflow e flussi che eliminano il lavoro ripetitivo.',
        tags: ['Chatbot + WhatsApp', 'Workflow'],
        details: [
          { title: 'Chatbot + WhatsApp', desc: 'Bot intelligenti che rispondono alle domande, prenotano appuntamenti, elaborano ordini e assistono i clienti 24/7 da WhatsApp, Instagram o il tuo sito web.' },
          { title: 'Workflow automatizzati', desc: 'Colleghiamo i tuoi strumenti (CRM, email, calendario, fogli di calcolo) per far fluire le informazioni automaticamente. Meno lavoro manuale, meno errori, piu tempo per cio che conta.' },
        ],
      },
      {
        num: '03',
        title: 'Cybersicurezza',
        desc: 'Proteggiamo cio che hai costruito. Audit, pentesting e hardening infrastrutturale per blindare il tuo business.',
        tags: ['Audit + pentesting', 'Infrastruttura sicura'],
        details: [
          { title: 'Audit + pentesting', desc: 'Analizziamo il tuo sistema cercando vulnerabilita prima che qualcun altro le trovi. Test di penetrazione, revisione del codice e report azionabili con priorita chiare.' },
          { title: 'Infrastruttura sicura', desc: 'Configurazione sicura di server, database e servizi cloud. Hardening, monitoraggio degli accessi, backup automatizzati e risposta agli incidenti.' },
        ],
      },
      {
        num: '04',
        title: 'Prodotto digitale',
        desc: 'Dashboard, CRM e piattaforme SaaS su misura. Prodotti digitali che scalano con il tuo business e i tuoi utenti.',
        tags: ['CRM + dashboard', 'Piattaforma SaaS'],
        details: [
          { title: 'CRM + dashboard', desc: 'Pannelli di gestione su misura per visualizzare dati, controllare operazioni e prendere decisioni informate. Ogni metrica che conta, in un unico posto.' },
          { title: 'Piattaforma SaaS', desc: 'Sviluppo completo di piattaforme web con utenti, ruoli, pagamenti e tutta la logica di business. Dal MVP alla versione che scala con migliaia di utenti.' },
        ],
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
