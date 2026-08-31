export const locales = ['en', 'fi'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const routes = {
  home: { en: '', fi: '' },
  about: { en: 'about', fi: 'tietoa' },
  events: { en: 'events', fi: 'tapahtumat' },
  members: { en: 'members', fi: 'jasenklubi' },
  privateEvents: {
    en: 'private-events',
    fi: 'yksityis-ja-yritystapahtumat',
  },
  partnerships: { en: 'partnerships', fi: 'yhteistyot' },
  contact: { en: 'contact', fi: 'yhteystiedot' },
  privacy: { en: 'privacy', fi: 'tietosuoja' },
} as const;

export type RouteKey = keyof typeof routes;

export function localizedPath(locale: Locale, route: RouteKey) {
  const slug = routes[route][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function routeForPath(pathname: string): RouteKey {
  const slug = pathname.split('/').filter(Boolean)[1] ?? '';
  return (
    (Object.entries(routes).find(([, value]) =>
      Object.values(value).includes(slug as never),
    )?.[0] as RouteKey | undefined) ?? 'home'
  );
}

export const homeCopy = {
  en: {
    languageName: 'English',
    languageLabel: 'Language selection',
    menu: 'Menu',
    close: 'Close',
    primaryNavLabel: 'Primary navigation',
    mobileNavLabel: 'Mobile navigation',
    mobileNavDescription: 'Edna Social & Jazz Club navigation',
    nav: {
      about: 'About',
      events: 'Events',
      members: 'Members Club',
      privateEvents: 'Private Events',
      partnerships: 'Partnerships',
      contact: 'Contact',
    },
    eyebrow: 'Social & Jazz Club · Helsinki',
    title: 'Edna is a Social & Jazz Club in Helsinki.',
    intro:
      'An evening for live jazz, conversation and meeting new people — with a little old-world romance.',
    primaryCta: 'See upcoming events',
    secondaryCta: 'Explore Members Club',
    philosophy: 'The art of gathering.',
    scroll: 'Discover Edna',
    philosophySection: {
      eyebrow: 'A note on Edna',
      title: 'The art of gathering.',
      body:
        'Edna creates evenings where people can slow down, dress for the occasion and meet beyond familiar circles. Jazz gives the room its rhythm. The people give it meaning.',
      detailOne: 'Old-world romance',
      detailTwo: 'Modern social culture',
    },
    experience: {
      eyebrow: 'An evening with Edna',
      title: 'Come for the music. Stay for the conversation.',
      items: [
        {
          title: 'Live jazz',
          body: 'Present, spontaneous and shared — live music gives every Edna evening its pulse.',
        },
        {
          title: 'Real conversation',
          body: 'A setting made for being present, meeting naturally and looking beyond familiar circles.',
        },
        {
          title: 'An evening as an occasion',
          body: 'A reason to dress up, step out and let the night feel special again.',
        },
      ],
    },
    events: {
      eyebrow: 'Upcoming evenings',
      title: 'The next Edna evening is taking shape.',
      body: 'New events will appear here as soon as every detail is confirmed.',
      follow: 'Follow Edna on Instagram',
    },
    members: {
      eyebrow: 'Members Club',
      title: 'A club built around belonging.',
      body: 'Edna Members Club is for people who want to make more room for culture, conversation and new connections. Applications are open through Edna’s official membership form.',
      apply: 'Apply for membership',
      explore: 'Explore Members Club',
    },
    privateEvents: {
      eyebrow: 'Private & corporate events',
      title: 'Bring Edna to your own evening.',
      body: 'Edna creates private and corporate occasions shaped by live music, atmosphere, hospitality and a considered social experience.',
      cta: 'Private & corporate events',
    },
    partnerships: {
      eyebrow: 'Partnerships',
      title: 'Ideas are better in good company.',
      body: 'Edna collaborates with venues, hospitality partners, cultural organisations and brands to create thoughtful shared experiences.',
      cta: 'Explore partnerships',
    },
    closing: {
      line: 'Not a place, a feeling.',
      context: 'Edna Social & Jazz Club · Helsinki',
      contact: 'Write to Edna',
    },
    footer: {
      navigation: 'Explore',
      contact: 'Contact',
      social: 'Social',
      membership: 'Membership application',
      privacy: 'Privacy',
      copyright: 'Edna Social & Jazz Club',
    },
  },
  fi: {
    languageName: 'Suomi',
    languageLabel: 'Kielivalinta',
    menu: 'Valikko',
    close: 'Sulje',
    primaryNavLabel: 'Päänavigaatio',
    mobileNavLabel: 'Mobiilinavigaatio',
    mobileNavDescription: 'Edna Social & Jazz Clubin navigaatio',
    nav: {
      about: 'Ednasta',
      events: 'Tapahtumat',
      members: 'Jäsenklubi',
      privateEvents: 'Yksityistapahtumat',
      partnerships: 'Yhteistyöt',
      contact: 'Yhteystiedot',
    },
    eyebrow: 'Social & Jazz Club · Helsinki',
    title: 'Edna on helsinkiläinen Social & Jazz Club.',
    intro:
      'Iltoja elävälle jazzille, keskusteluille ja uusille kohtaamisille — ripauksella vanhan maailman romantiikkaa.',
    primaryCta: 'Tulevat tapahtumat',
    secondaryCta: 'Tutustu jäsenklubiin',
    philosophy: 'The art of gathering.',
    scroll: 'Tutustu Ednaan',
    philosophySection: {
      eyebrow: 'Ajatus Ednasta',
      title: 'The art of gathering.',
      body:
        'Edna luo iltoja, joissa pysähdytään, pukeudutaan tilaisuutta varten ja kohdataan tuttujen piirien ulkopuolella. Jazz antaa illalle rytmin. Ihmiset antavat sille merkityksen.',
      detailOne: 'Vanhan maailman romantiikkaa',
      detailTwo: 'Modernia sosiaalista kulttuuria',
    },
    experience: {
      eyebrow: 'Ilta Ednan kanssa',
      title: 'Tule musiikin vuoksi. Jää keskustelun takia.',
      items: [
        {
          title: 'Elävää jazzia',
          body: 'Läsnä oleva, spontaani ja jaettu musiikki antaa jokaiselle Edna-illalle sykkeen.',
        },
        {
          title: 'Aitoja keskusteluja',
          body: 'Ympäristö, jossa on helppo olla läsnä, kohdata luontevasti ja tutustua uusiin ihmisiin.',
        },
        {
          title: 'Ilta, joka tuntuu tilaisuudelta',
          body: 'Syy pukeutua, lähteä ulos ja antaa illan tuntua jälleen erityiseltä.',
        },
      ],
    },
    events: {
      eyebrow: 'Tulevat illat',
      title: 'Seuraava Edna-ilta on muotoutumassa.',
      body: 'Uudet tapahtumat julkaistaan täällä heti, kun kaikki yksityiskohdat on vahvistettu.',
      follow: 'Seuraa Ednaa Instagramissa',
    },
    members: {
      eyebrow: 'Jäsenklubi',
      title: 'Klubi, jonka ytimessä on kuuluminen.',
      body: 'Edna Members Club on ihmisille, jotka haluavat tehdä enemmän tilaa kulttuurille, keskusteluille ja uusille yhteyksille. Jäsenyyttä voi hakea Ednan virallisella hakulomakkeella.',
      apply: 'Hae jäsenyyttä',
      explore: 'Tutustu jäsenklubiin',
    },
    privateEvents: {
      eyebrow: 'Yksityis- ja yritystapahtumat',
      title: 'Tuo Edna omaan iltaasi.',
      body: 'Edna luo yksityis- ja yritystilaisuuksia, joita rakentavat elävä musiikki, tunnelma, vieraanvaraisuus ja harkittu sosiaalinen kokemus.',
      cta: 'Yksityis- ja yritystapahtumat',
    },
    partnerships: {
      eyebrow: 'Yhteistyöt',
      title: 'Hyvät ideat syntyvät hyvässä seurassa.',
      body: 'Edna tekee yhteistyötä tapahtumapaikkojen, ravintola- ja hotellialan toimijoiden, kulttuuriorganisaatioiden ja brändien kanssa luodakseen harkittuja yhteisiä kokemuksia.',
      cta: 'Tutustu yhteistöihin',
    },
    closing: {
      line: 'Not a place, a feeling.',
      context: 'Edna Social & Jazz Club · Helsinki',
      contact: 'Kirjoita Ednalle',
    },
    footer: {
      navigation: 'Tutustu',
      contact: 'Yhteys',
      social: 'Seuraa',
      membership: 'Jäsenyyshakemus',
      privacy: 'Tietosuoja',
      copyright: 'Edna Social & Jazz Club',
    },
  },
} as const;
