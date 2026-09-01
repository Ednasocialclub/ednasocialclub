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
    mobileNavDescription: 'Edna Social Club navigation',
    nav: {
      about: 'About',
      events: 'Events',
      members: 'Members Club',
      privateEvents: 'Private & Corporate',
      partnerships: 'Partnerships',
      contact: 'Contact',
      apply: 'Apply for membership',
    },
    hero: {
      title: 'Edna Social Club',
      eyebrow: 'Social & Jazz Club · Helsinki',
      logoAlt: 'Edna Social Club, established 2025',
    },
    about: {
      eyebrow: 'About Edna',
      title: 'What is Edna?',
      body: 'Edna is a Social & Jazz Club in Helsinki built around live music, beautiful settings, conversation, community and meeting new people.',
      secondary:
        'We create evenings where people can slow down, dress for the occasion and connect naturally.',
      cta: 'About Edna',
    },
    brand: {
      gathering: 'The art of gathering.',
      feeling: 'Not a place, a feeling.',
    },
    members: {
      eyebrow: 'Members Club',
      title: 'Edna Members Club',
      body: 'A growing community for people who value culture, conversation and meeting beyond familiar circles. Membership applications are open through our official form.',
      apply: 'Apply for membership',
      explore: 'Members Club',
    },
    commercial: {
      eyebrow: 'For companies and partners',
      title: 'Create something with Edna',
    },
    privateEvents: {
      title: 'Private & Corporate Events',
      body: 'Edna creates private dinners, corporate events, client evenings, celebrations, launches, networking events and tailored social experiences.',
      detail:
        'We bring together creative direction, live music, atmosphere and hospitality.',
      cta: 'Private & Corporate Events',
    },
    partnerships: {
      title: 'Partnerships',
      body: 'Edna collaborates with brands, hotels, restaurants, venues and partners across food and beverage, fashion, beauty, wellness, travel, design and culture.',
      detail:
        'Collaborations can include events, hospitality, venues, content and thoughtfully integrated brand moments.',
      cta: 'Partnerships',
    },
    philosophy: {
      eyebrow: 'Our philosophy',
      title: 'Why Edna exists',
      jazzTitle: 'Why jazz',
      jazzBody:
        'Jazz brings presence and spontaneity to the room. Conversation and community turn an evening into something shared.',
      gatheringTitle: 'Why gathering',
      gatheringBody:
        'Edna was created to give people beautiful reasons to leave the house, dress for the occasion and meet naturally.',
    },
    events: {
      eyebrow: 'Current events',
      title: 'Upcoming Edna evenings are announced on Instagram.',
      follow: 'Visit @ednasocialclub',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact Edna',
      body: 'For general enquiries, private and corporate events, and partnerships.',
      cta: 'contact@ednasocialclub.com',
    },
    footer: {
      navigation: 'Explore',
      contact: 'Contact',
      social: 'Social',
      membership: 'Membership application',
      privacy: 'Privacy',
      copyright: 'Edna Social Club',
      location: 'Helsinki, Finland',
    },
  },
  fi: {
    languageName: 'Suomi',
    languageLabel: 'Kielivalinta',
    menu: 'Valikko',
    close: 'Sulje',
    primaryNavLabel: 'Päänavigaatio',
    mobileNavLabel: 'Mobiilinavigaatio',
    mobileNavDescription: 'Edna Social Clubin navigaatio',
    nav: {
      about: 'Ednasta',
      events: 'Tapahtumat',
      members: 'Jäsenklubi',
      privateEvents: 'Yritys & yksityinen',
      partnerships: 'Yhteistyöt',
      contact: 'Yhteystiedot',
      apply: 'Hae jäsenyyttä',
    },
    hero: {
      title: 'Edna Social Club',
      eyebrow: 'Social & Jazz Club · Helsinki',
      logoAlt: 'Edna Social Club, perustettu 2025',
    },
    about: {
      eyebrow: 'Ednasta',
      title: 'Mikä Edna on?',
      body: 'Edna on helsinkiläinen Social & Jazz Club, jonka ytimessä ovat elävä musiikki, kauniit ympäristöt, keskustelut, yhteisö ja uusiin ihmisiin tutustuminen.',
      secondary:
        'Luomme iltoja, joissa voi pysähtyä, pukeutua tilaisuutta varten ja kohdata uusia ihmisiä luontevasti.',
      cta: 'Tutustu Ednaan',
    },
    brand: {
      gathering: 'The art of gathering.',
      feeling: 'Not a place, a feeling.',
    },
    members: {
      eyebrow: 'Jäsenklubi',
      title: 'Edna Members Club',
      body: 'Kasvava yhteisö ihmisille, jotka arvostavat kulttuuria, keskusteluja ja kohtaamisia tuttujen piirien ulkopuolella. Jäsenyyttä voi hakea virallisella hakulomakkeellamme.',
      apply: 'Hae jäsenyyttä',
      explore: 'Tutustu jäsenklubiin',
    },
    commercial: {
      eyebrow: 'Yrityksille ja kumppaneille',
      title: 'Luo jotain yhdessä Ednan kanssa',
    },
    privateEvents: {
      title: 'Yksityiset ja yritystapahtumat',
      body: 'Edna luo yksityisiä illallisia, yritystapahtumia, asiakasiltoja, juhlia, lanseerauksia, verkostoitumistilaisuuksia ja räätälöityjä sosiaalisia kokemuksia.',
      detail:
        'Yhdistämme luovan suunnittelun, elävän musiikin, tunnelman ja vieraanvaraisuuden.',
      cta: 'Yksityiset ja yritystapahtumat',
    },
    partnerships: {
      title: 'Yhteistyöt',
      body: 'Edna tekee yhteistyötä brändien, hotellien, ravintoloiden, tapahtumapaikkojen sekä ruoan, juoman, muodin, kauneuden, hyvinvoinnin, matkailun, muotoilun ja kulttuurin toimijoiden kanssa.',
      detail:
        'Yhteistyö voi sisältää tapahtumia, vieraanvaraisuutta, tiloja, sisältöä ja harkittuja brändikohtaamisia.',
      cta: 'Tutustu yhteistyömahdollisuuksiin',
    },
    philosophy: {
      eyebrow: 'Filosofiamme',
      title: 'Miksi Edna on olemassa',
      jazzTitle: 'Miksi jazz',
      jazzBody:
        'Jazz tuo tilaan läsnäoloa ja spontaaniutta. Keskustelut ja yhteisö tekevät illasta yhteisen.',
      gatheringTitle: 'Miksi kokoonnumme',
      gatheringBody:
        'Edna syntyi antamaan ihmisille kauniita syitä lähteä ulos, pukeutua tilaisuutta varten ja kohdata luontevasti.',
    },
    events: {
      eyebrow: 'Ajankohtaiset tapahtumat',
      title: 'Ednan tulevista illoista ilmoitetaan Instagramissa.',
      follow: 'Siirry Ednan Instagramiin',
    },
    contact: {
      eyebrow: 'Yhteys',
      title: 'Ota yhteyttä Ednaan',
      body: 'Yleiset tiedustelut, yksityiset ja yritystapahtumat sekä yhteistyöt.',
      cta: 'contact@ednasocialclub.com',
    },
    footer: {
      navigation: 'Tutustu',
      contact: 'Yhteys',
      social: 'Seuraa',
      membership: 'Jäsenyyshakemus',
      privacy: 'Tietosuoja',
      copyright: 'Edna Social Club',
      location: 'Helsinki, Suomi',
    },
  },
} as const;
