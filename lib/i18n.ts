export const locales = ['en', 'fi'] as const;
export type Locale = (typeof locales)[number];

export const routes = {
  home: { en: '', fi: '' },
  about: { en: 'about', fi: 'tietoa' },
  members: { en: 'members', fi: 'jasenklubi' },
  privateEvents: {
    en: 'private-corporate',
    fi: 'yksityiset-ja-yritystapahtumat',
  },
  partnerships: { en: 'partnerships', fi: 'yhteistyot' },
  contact: { en: 'contact', fi: 'yhteystiedot' },
} as const;

export type RouteKey = keyof typeof routes;
export type ContentRoute = Exclude<RouteKey, 'home'>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

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

export function contentRouteForSlug(
  locale: Locale,
  slug: string,
): ContentRoute | null {
  const match = (
    Object.entries(routes) as [RouteKey, Record<Locale, string>][]
  ).find(([route, value]) => route !== 'home' && value[locale] === slug)?.[0];

  return match && match !== 'home' ? match : null;
}

const shared = {
  en: {
    languageLabel: 'Language selection',
    menu: 'Menu',
    close: 'Close',
    primaryNavLabel: 'Primary navigation',
    mobileNavLabel: 'Mobile navigation',
    mobileNavDescription: 'Edna Social Club navigation',
    brandAlt: 'Edna Social Club',
    emblemAlt: 'Edna Social Club, established 2025',
    nav: {
      about: 'About',
      members: 'Members Club',
      privateEvents: 'Private & Corporate',
      partnerships: 'Partnerships',
      contact: 'Contact',
      apply: 'Apply for membership',
    },
    footer: {
      location: 'Helsinki, Finland',
      navigation: 'Explore',
      contact: 'Contact',
      social: 'Social',
      membership: 'Apply for membership',
      copyright: 'Edna Social Club',
      backToTop: 'Back to top',
    },
  },
  fi: {
    languageLabel: 'Kielivalinta',
    menu: 'Valikko',
    close: 'Sulje',
    primaryNavLabel: 'Päänavigaatio',
    mobileNavLabel: 'Mobiilinavigaatio',
    mobileNavDescription: 'Edna Social Clubin navigaatio',
    brandAlt: 'Edna Social Club',
    emblemAlt: 'Edna Social Club, perustettu 2025',
    nav: {
      about: 'Ednasta',
      members: 'Jäsenklubi',
      privateEvents: 'Yksityiset & yritykset',
      partnerships: 'Yhteistyöt',
      contact: 'Yhteystiedot',
      apply: 'Hae jäsenyyttä',
    },
    footer: {
      location: 'Helsinki, Suomi',
      navigation: 'Tutustu',
      contact: 'Yhteys',
      social: 'Seuraa',
      membership: 'Hae jäsenyyttä',
      copyright: 'Edna Social Club',
      backToTop: 'Sivun alkuun',
    },
  },
} as const;

const pages = {
  en: {
    home: {
      title: 'Edna Social Club',
      eyebrow: 'Social & Jazz Club in Helsinki',
      aboutTitle: 'About Edna',
      aboutLead:
        'Edna is a Social & Jazz Club in Helsinki built around jazz evenings, dinners, cocktail events and seasonal balls.',
      aboutBody: '',
      aboutEventsNote: 'Future events are announced on Instagram',
      aboutCta: 'Learn more about Edna',
      aboutPillars: {
        liveMusic: {
          title: 'Live music',
          body: 'Jazz gives every evening its rhythm, from dinner and conversation to late night dancing.',
        },
        atmosphere: {
          title: 'Atmosphere',
          body: 'Every detail is considered, from the setting and table to the music, service and mood.',
        },
        community: {
          title: 'Community',
          body: 'Edna is where new friendships, collaborations, clients and opportunities begin naturally, and where you become part of a wider social circle.',
        },
      },
      privateTitle: 'Private & Corporate',
      partnershipsTitle: 'Partnerships',
      partnershipsBody:
        'Edna works with selected brands, venues and hospitality partners whose world naturally complements our events and community.',
      contactTitle: 'Contact',
      contactLead: 'For partnerships, private events and general enquiries.',
      explore: 'Learn more',
      membersCta: 'Explore Members Club',
      membersLead:
        'Your way into meaningful connections and evenings you will remember.',
      membersBody:
        'Meet beyond your usual circles and become part of a social world where friendships, introductions and new possibilities can begin naturally.',
      privateCta: 'Learn more about Private & Corporate',
      partnershipsCta: 'Explore partnerships',
    },
    about: {
      eyebrow: 'About',
      title: 'Edna brings people together.',
      lead: 'Edna is a Social & Jazz Club in Helsinki for people who still want a reason to dress up, stay a little longer, meet someone new and feel part of something.',
      ideaTitle: 'The idea',
      ideaBody: [
        'Edna creates thoughtful occasions for people to leave the everyday behind, dress for the evening and meet one another naturally.',
        'The atmosphere draws from old world social culture while the community belongs firmly to the present. Edna is warm, open and culturally curious, with conversation at the centre of every gathering.',
      ],
      pillars: [
        {
          title: 'Community',
          body: 'The purpose of Edna is to make real connection feel natural. Guests arrive for the evening and become part of a wider social circle.',
        },
        {
          title: 'Live music',
          body: 'Jazz gives each room warmth, spontaneity and a shared rhythm. It supports the evening without turning it into a conventional concert.',
        },
        {
          title: 'Atmosphere',
          body: 'Beautiful settings, considered hospitality and dressing for the occasion help people slow down and be fully present.',
        },
      ],
      eventsTitle: 'What Edna creates',
      eventsBody:
        'Edna creates jazz evenings, dinners, cocktail events and social gatherings. Each format is designed around the people in the room and the feeling of the occasion.',
      instagramNote:
        'Future events are announced on Instagram at @ednasocialclub.',
      instagramCta: 'Visit Instagram',
      phrase: 'The art of gathering.',
      editorialSections: [
        {
          title: 'What happens at Edna?',
          body: 'From candlelit jazz dinners and cocktail evenings to garden parties, yacht cruises and private gatherings, no two Edna evenings are meant to feel exactly the same.',
        },
        {
          title: 'Why jazz?',
          body: 'Long before Edna existed, jazz was already part of the world that inspired it. It carries the soul of another era, when evenings moved a little slower, romance mattered and music set the mood.',
        },
        {
          title: 'Where do we meet?',
          body: 'Edna has no single address. We move through some of Helsinki’s most beautiful restaurants, private spaces and unexpected venues, giving each evening a world of its own.',
        },
        {
          title: 'Who is Edna for?',
          body: 'For curious, social people who appreciate music, beauty and good conversation, and like the idea of leaving with a new connection.',
        },
        {
          title: 'Can I come alone?',
          body: 'Absolutely. Edna is made for meeting people you did not arrive with, so coming alone is often where the best conversations begin.',
        },
        {
          title: 'What do we believe in?',
          body: 'We believe people still want to dress up, stay a little longer, meet someone new and feel part of something bigger than just another night out.',
        },
      ],
    },
    members: {
      eyebrow: 'Members Club',
      title: 'Edna Members Club',
      lead: 'Edna Members Club is for people who want to meet beyond their usual circles and be part of a social world shaped by culture, conversation and shared experiences.',
      introSecondary:
        'Membership brings you closer to a community where new friendships, introductions, collaborations and opportunities can develop naturally over time.',
      questions: [
        {
          title: 'What does membership open up?',
          body: 'Priority access to selected Edna events, members-only gatherings and carefully chosen benefits.',
        },
        {
          title: 'Can I attend without being a member?',
          body: 'Some Edna events are open to non-members, while membership gives you access to more of the community and members-only experiences.',
        },
        {
          title: 'Who is membership for?',
          body: 'For people who enjoy good conversation and want to meet beyond the social and professional circles they already know.',
        },
      ],
      applicationTitle: 'Become part of Edna',
      applicationTagline: 'More access. More connection.',
      apply: 'Apply for membership',
    },
    privateEvents: {
      eyebrow: 'Private & Corporate',
      title: 'Private & Corporate',
      lead: 'Edna creates tailored private and corporate events, bringing together atmosphere, live music, entertainment and hospitality.',
      intro:
        'Each event is tailored around the client’s wishes, occasion and setting, with Edna shaping the concept and coordinating the details into one seamless experience.',
      typesTitle: 'Occasions',
      types: [
        'Private events',
        'Corporate events',
        'Client evenings',
        'Celebrations',
        'Launches',
        'Dinners',
        'Tailored social and cultural gatherings',
      ],
      approachTitle: 'What Edna brings',
      approachBody:
        'Edna can bring together creative direction, event concept, live music, atmosphere, hospitality and the social flow of the evening. The result is tailored to the host, the guests and the setting.',
      contactTitle: 'Plan an occasion with Edna',
      contactBody:
        'Tell us what you are planning and what you want the evening to achieve.',
      contactCta: 'Send an enquiry',
    },
    partnerships: {
      eyebrow: 'Partnerships',
      collaborationsLabel: 'Selected collaborations',
      title: 'Partnerships',
      lead: 'Edna collaborates with partners who value culture, hospitality, community and memorable real world experiences.',
      intro:
        'Partnerships are shaped around a shared idea and a genuine role within the experience. Edna offers a considered setting for brands to meet people through culture and hospitality.',
      audienceTitle: 'The Edna audience',
      audience:
        'Edna’s audience appreciates beautiful dressing, aesthetics, old world atmosphere, music, art, architecture, gastronomy and life’s little luxuries. They value quality, thoughtful details and beautifully considered experiences.',
      partnersTitle: 'Who we work with',
      partnersBody:
        'Edna works with selected brands, venues and hospitality partners whose world naturally complements our events and community, from food and drink to fashion, wellness, travel and design.',
      opportunitiesTitle: 'Ways to collaborate',
      opportunities: [
        'Event partnerships',
        'Branded experiences',
        'Venue collaborations',
        'Hospitality partnerships',
        'Thoughtfully integrated brand moments',
      ],
      contactTitle: 'Start a conversation',
      contactBody:
        'Share your brand, idea or venue with us and we will explore whether there is a natural fit.',
      contactCta: 'Contact Edna',
    },
    contact: {
      eyebrow: 'Contact Us',
      title: 'Contact Edna',
      lead: 'For private events, partnerships and general enquiries.',
      form: {
        name: 'Name',
        email: 'Email',
        enquiryType: 'What is your enquiry about?',
        enquiryPlaceholder: 'Select an option',
        enquiryOptions: [
          'Private & Corporate',
          'Partnerships',
          'Membership',
          'General enquiry',
        ],
        message: 'Message',
        submit: 'Send enquiry',
      },
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      tiktokLabel: 'TikTok',
    },
  },
  fi: {
    home: {
      title: 'Edna Social Club',
      eyebrow: 'Social & Jazz Club in Helsinki',
      aboutTitle: 'Ednasta',
      aboutLead: 'Edna on helsinkiläinen Social & Jazz Club.',
      aboutBody:
        'Luomme jazziltoja, illallisia, cocktailtilaisuuksia ja sosiaalisia kokoontumisia tarkoin valituissa tiloissa ympäri Helsinkiä.',
      aboutEventsNote: 'Tulevista tapahtumista ilmoitetaan Instagramissamme',
      aboutCta: 'Lue lisää Ednasta',
      aboutPillars: {
        liveMusic: {
          title: 'Elävä musiikki',
          body: 'Jazz antaa jokaiselle illalle rytmin illallisesta ja keskusteluista myöhäisillan tanssiin.',
        },
        atmosphere: {
          title: 'Tunnelma',
          body: 'Jokainen yksityiskohta on harkittu ympäristöstä ja kattauksesta musiikkiin, palveluun ja tunnelmaan.',
        },
        community: {
          title: 'Yhteisö',
          body: 'Edna on paikka, jossa uudet ystävyydet, yhteistyöt, asiakkuudet ja mahdollisuudet alkavat luontevasti ja jossa sinusta tulee osa laajempaa sosiaalista piiriä.',
        },
      },
      privateTitle: 'Yksityiset & yritykset',
      partnershipsTitle: 'Yhteistyöt',
      partnershipsBody:
        'Edna tekee yhteistyötä valittujen brändien, tapahtumapaikkojen ja vieraanvaraisuuden kumppaneiden kanssa, joiden maailma täydentää luontevasti tapahtumiamme ja yhteisöämme.',
      contactTitle: 'Yhteystiedot',
      contactLead: null,
      explore: 'Lue lisää',
      membersCta: 'Tutustu jäsenklubiin',
      membersLead:
        'Kasvava yhteisö ihmisille, jotka arvostavat kulttuuria, keskusteluja ja kohtaamisia tuttujen piirien ulkopuolella.',
      membersBody:
        'Edna Members Club tekee merkityksellisistä kohtaamisista helpompia. Se kokoaa yhteen uteliaita ja avoimia ihmisiä, jotka haluavat jakaa hyviä iltoja muiden kanssa.',
      privateCta: 'Lue lisää yksityisistä ja yritystapahtumista',
      partnershipsCta: 'Tutustu yhteistyöhön',
    },
    about: {
      eyebrow: 'Ednasta',
      title: 'Edna tuo ihmiset yhteen.',
      lead: 'Edna on helsinkiläinen Social & Jazz Club ihmisille, jotka haluavat yhä syyn pukeutua, viipyä hieman pidempään, tavata jonkun uuden ja tuntea olevansa osa jotakin.',
      ideaTitle: 'Ajatus',
      ideaBody: [
        'Edna luo harkittuja tilaisuuksia, joissa ihmiset voivat jättää arjen hetkeksi taakseen, pukeutua iltaa varten ja tutustua toisiinsa luontevasti.',
        'Tunnelma ammentaa vanhan maailman seurakulttuurista, mutta yhteisö elää vahvasti tässä ajassa. Edna on lämmin, avoin ja kulttuurisesti utelias. Keskustelu on jokaisen kokoontumisen ytimessä.',
      ],
      pillars: [
        {
          title: 'Yhteisö',
          body: 'Ednan tarkoitus on tehdä aidoista kohtaamisista luontevia. Vieraat saapuvat viettämään iltaa ja löytävät paikkansa laajemmasta yhteisöstä.',
        },
        {
          title: 'Elävä musiikki',
          body: 'Jazz tuo tilaan lämpöä, spontaaniutta ja yhteisen rytmin. Musiikki tukee iltaa ilman että siitä tulee perinteinen konsertti.',
        },
        {
          title: 'Tunnelma',
          body: 'Kauniit ympäristöt, harkittu vieraanvaraisuus ja tilaisuuteen pukeutuminen auttavat ihmisiä hidastamaan ja olemaan läsnä.',
        },
      ],
      eventsTitle: 'Mitä Edna luo',
      eventsBody:
        'Edna luo jazziltoja, illallisia, cocktailtilaisuuksia ja sosiaalisia kokoontumisia. Jokainen kokonaisuus suunnitellaan huoneessa olevien ihmisten ja tilaisuuden tunnelman ympärille.',
      instagramNote:
        'Tulevista tapahtumista ilmoitetaan Instagramissa tilillä @ednasocialclub.',
      instagramCta: 'Siirry Instagramiin',
      phrase: 'The art of gathering.',
      editorialSections: [
        {
          title: 'Mitä Ednassa tapahtuu?',
          body: 'Kynttilänvalossa järjestettävistä jazzillallisista ja cocktaililloista puutarhajuhliin, risteilyihin ja yksityistilaisuuksiin, kahta Edna-iltaa ei ole tarkoitettu tuntumaan täysin samalta.',
        },
        {
          title: 'Miksi jazz?',
          body: 'Jo kauan ennen Ednan syntyä jazz oli osa sitä maailmaa, josta se sai inspiraationsa. Jazz kantaa toisen aikakauden sielua, jolloin illat etenivät hieman hitaammin, romantiikalla oli merkitystä ja musiikki loi tunnelman.',
        },
        {
          title: 'Missä tapaamme?',
          body: 'Ednalla ei ole yhtä osoitetta. Liikumme Helsingin kauneimmissa ravintoloissa, yksityisissä tiloissa ja odottamattomissa tapahtumapaikoissa, mikä antaa jokaiselle illalle oman maailmansa.',
        },
        {
          title: 'Kenelle Edna on?',
          body: 'Uteliaille ja sosiaalisille ihmisille, jotka arvostavat musiikkia, kauneutta ja hyvää keskustelua ja pitävät ajatuksesta, että illasta voi lähteä uuden tuttavuuden kanssa.',
        },
        {
          title: 'Voinko tulla yksin?',
          body: 'Ehdottomasti. Edna on luotu sitä varten, että tapaat ihmisiä, joiden kanssa et saapunut, joten yksin tuleminen johtaa usein parhaisiin keskusteluihin.',
        },
        {
          title: 'Mihin uskomme?',
          body: 'Uskomme, että ihmiset haluavat yhä pukeutua, viipyä hieman pidempään, tavata jonkun uuden ja tuntea olevansa osa jotakin suurempaa kuin vain yhtä illanviettoa.',
        },
      ],
    },
    members: {
      eyebrow: 'Jäsenklubi',
      title: 'Edna Members Club',
      lead: 'Kasvava yhteisö ihmisille, jotka arvostavat kulttuuria, keskusteluja ja kohtaamisia tuttujen piirien ulkopuolella.',
      bodyTitle: 'Sosiaalinen klubi oikeaa elämää varten',
      body: [
        'Edna Members Club tekee merkityksellisistä kohtaamisista helpompia. Se kokoaa yhteen uteliaita ja avoimia ihmisiä, jotka haluavat jakaa hyviä iltoja muiden kanssa.',
        'Jäsenyys on tarkoitettu niille, jotka haluavat osallistua Ednan yhteisöön ja palata sen pariin. Tunnelma on harkittu ja vastaanottava. Tarkoitus ei ole sulkea ihmisiä ulkopuolelle.',
      ],
      applicationTitle: 'Jäsenyyshakemus',
      applicationBody:
        'Jäsenyyttä haetaan Ednan virallisella lomakkeella. Lomake avautuu uuteen ikkunaan.',
      apply: 'Hae jäsenyyttä',
    },
    privateEvents: {
      eyebrow: 'Yksityiset & yritykset',
      title: 'Tarkoituksella luotuja tilaisuuksia.',
      lead: 'Edna luo yksityisiä ja yritysten tilaisuuksia, joissa yhdistyvät tunnelma, elävä musiikki, vieraanvaraisuus ja aidot kohtaamiset.',
      intro:
        'Jokainen tilaisuus alkaa huoneessa olevista ihmisistä ja illan tarkoituksesta. Edna rakentaa niiden ympärille selkeän konseptin, joka tuntuu henkilökohtaiselta, viimeistellyltä ja vaivattomalta.',
      typesTitle: 'Tilaisuudet',
      types: [
        'Yksityistilaisuudet',
        'Yritystapahtumat',
        'Asiakasillat',
        'Juhlat',
        'Lanseeraukset',
        'Illalliset',
        'Räätälöidyt sosiaaliset ja kulttuuriset kokoontumiset',
      ],
      approachTitle: 'Mitä Edna tuo tilaisuuteen',
      approachBody:
        'Edna voi yhdistää luovan suunnittelun, tapahtumakonseptin, elävän musiikin, tunnelman, vieraanvaraisuuden ja illan sosiaalisen kulun. Kokonaisuus räätälöidään isännän, vieraiden ja ympäristön mukaan.',
      contactTitle: 'Suunnittele tilaisuus Ednan kanssa',
      contactBody:
        'Kerro meille, mitä suunnittelet ja mitä haluat illan saavuttavan.',
      contactCta: 'Lähetä tiedustelu',
    },
    partnerships: {
      eyebrow: 'Yhteistyöt',
      collaborationsLabel: 'Valitut yhteistyöt',
      title: 'Yhteistyöt',
      lead: 'Edna tekee yhteistyötä kumppaneiden kanssa, jotka arvostavat kulttuuria, vieraanvaraisuutta, yhteisöä ja mieleen jääviä kohtaamisia.',
      intro:
        'Yhteistyö rakentuu yhteisen ajatuksen ja kokemukseen aidosti sopivan roolin ympärille. Edna tarjoaa harkitun ympäristön, jossa brändit voivat kohdata ihmisiä kulttuurin ja vieraanvaraisuuden kautta.',
      audienceTitle: 'Ednan yleisö',
      audience:
        'Ednan yleisö arvostaa kaunista pukeutumista, estetiikkaa, vanhan maailman tunnelmaa, musiikkia, taidetta, arkkitehtuuria, gastronomiaa ja elämän pieniä ylellisyyksiä. Heille laatu, harkitut yksityiskohdat ja kauniisti suunnitellut kokemukset ovat tärkeitä.',
      partnersTitle: 'Kenen kanssa teemme yhteistyötä',
      partnersBody:
        'Edna tekee yhteistyötä valittujen brändien, tapahtumapaikkojen ja vieraanvaraisuuden kumppaneiden kanssa, joiden maailma täydentää luontevasti tapahtumiamme ja yhteisöämme. Kumppanuudet voivat liittyä esimerkiksi ruokaan, juomaan, muotiin, hyvinvointiin, matkailuun tai muotoiluun.',
      opportunitiesTitle: 'Yhteistyön muodot',
      opportunities: [
        'Tapahtumayhteistyöt',
        'Brändikokemukset',
        'Tilayhteistyöt',
        'Vieraanvaraisuuskumppanuudet',
        'Harkitusti integroidut brändihetket',
      ],
      contactTitle: 'Aloitetaan keskustelu',
      contactBody:
        'Kerro meille brändistäsi, ideastasi tai tilastasi, niin voimme tutkia luontevaa yhteistyötä.',
      contactCta: 'Ota yhteyttä Ednaan',
    },
    contact: {
      eyebrow: 'Yhteystiedot',
      title: 'Ota yhteyttä Ednaan',
      lead: 'Ota yhteyttä yleisissä asioissa, yksityisistä ja yritystapahtumista, yhteistyöstä tai jäsenyydestä.',
      emailLabel: 'Sähköposti',
      instagramLabel: 'Instagram',
      tiktokLabel: 'TikTok',
    },
  },
} as const;

export const siteCopy = {
  en: { ...shared.en, pages: pages.en },
  fi: { ...shared.fi, pages: pages.fi },
} as const;

export const metadataCopy = {
  en: {
    home: {
      title: 'Edna Social & Jazz Club | Helsinki',
      description:
        'Edna is a Social & Jazz Club in Helsinki built around community, live music and genuine social connection.',
    },
    about: {
      title: 'About Edna Social Club | Social & Jazz Club Helsinki',
      description:
        'Learn about Edna Social Club, a Social & Jazz Club in Helsinki creating jazz evenings, dinners, cocktail events and social gatherings.',
    },
    members: {
      title: 'Members Club | Edna Social Club',
      description:
        'Learn about Edna Members Club and apply to join the growing Helsinki community.',
    },
    privateEvents: {
      title: 'Private & Corporate | Edna Social Club',
      description:
        'Explore private events, corporate gatherings, client evenings, launches and dinners created by Edna.',
    },
    partnerships: {
      title: 'Partnerships | Edna Social Club',
      description:
        'Explore thoughtful partnership opportunities with Edna Social Club in Helsinki.',
    },
    contact: {
      title: 'Contact | Edna Social Club',
      description:
        'Contact Edna Social Club for general enquiries, events, partnerships and membership.',
    },
  },
  fi: {
    home: {
      title: 'Edna Social & Jazz Club | Helsinki',
      description:
        'Edna on helsinkiläinen Social & Jazz Club, jonka ytimessä ovat yhteisö, elävä musiikki ja aidot kohtaamiset.',
    },
    about: {
      title: 'Ednasta | Social & Jazz Club Helsinki',
      description:
        'Tutustu Edna Social Clubiin, helsinkiläiseen Social & Jazz Clubiin, joka luo jazziltoja, illallisia, cocktailtilaisuuksia ja sosiaalisia kokoontumisia.',
    },
    members: {
      title: 'Jäsenklubi | Edna Social Club',
      description:
        'Tutustu Edna Members Clubiin ja hae mukaan kasvavaan helsinkiläiseen yhteisöön.',
    },
    privateEvents: {
      title: 'Yksityiset ja yritykset | Edna Social Club',
      description:
        'Tutustu Ednan luomiin yksityistilaisuuksiin, yritystapahtumiin, asiakasiltoihin, lanseerauksiin ja illallisiin.',
    },
    partnerships: {
      title: 'Yhteistyöt | Edna Social Club',
      description:
        'Tutustu harkittuihin yhteistyömahdollisuuksiin Edna Social Clubin kanssa Helsingissä.',
    },
    contact: {
      title: 'Yhteystiedot | Edna Social Club',
      description:
        'Ota yhteyttä Edna Social Clubiin yleisissä asioissa, tapahtumissa, yhteistöissä ja jäsenyydessä.',
    },
  },
} as const;
