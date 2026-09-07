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
  privacy: { en: 'privacy', fi: 'tietosuoja' },
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
    brandAlt: 'Edna Social Club',
    emblemAlt: 'Edna Social Club, established 2025',
    pressLabel: 'Press',
    newsletterLabel: 'Newsletter',
    newsletterCta: 'Join the Edna newsletter',
    contactDetailsLabel: 'Contact details',
    privacyLink: 'Privacy Policy',
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
      links: {
        about: 'About',
        members: 'Members Club',
        privateEvents: 'Private & Corporate',
        partnerships: 'Partnerships',
        contact: 'Contact',
      },
      contact: 'Contact',
      social: 'Social',
      membership: 'Apply for membership',
      trademark: 'EDNA SOCIAL CLUB® is a registered trademark in Finland.',
      copyright: 'Edna Social Club',
      backToTop: 'Back to top',
      privacy: 'Privacy',
    },
  },
  fi: {
    languageLabel: 'Kielivalinta',
    menu: 'Valikko',
    close: 'Sulje',
    primaryNavLabel: 'Päänavigaatio',
    mobileNavLabel: 'Mobiilinavigaatio',
    brandAlt: 'Edna Social Club',
    emblemAlt: 'Edna Social Club, perustettu 2025',
    pressLabel: 'Media',
    newsletterLabel: 'Uutiskirje',
    newsletterCta: 'Tilaa Ednan uutiskirje',
    contactDetailsLabel: 'Yhteystiedot',
    privacyLink: 'Tietosuojaseloste',
    nav: {
      about: 'ABOUT EDNA',
      members: 'EDNA MEMBERS CLUB',
      privateEvents: 'YKSITYIS- & YRITYSTILAISUUDET',
      partnerships: 'Yhteistyöt',
      contact: 'Yhteystiedot',
      apply: 'HAE JÄSENEKSI',
    },
    footer: {
      location: 'Helsinki, Suomi',
      navigation: 'Tutustu',
      links: {
        about: 'About Edna',
        members: 'Edna Members Club',
        privateEvents: 'Yksityis- & yritystilaisuudet',
        partnerships: 'Yhteistyöt',
        contact: 'Yhteystiedot',
      },
      contact: 'Yhteys',
      social: 'Seuraa',
      membership: 'HAE JÄSENEKSI',
      trademark: 'EDNA SOCIAL CLUB® on Suomessa rekisteröity tavaramerkki.',
      copyright: 'Edna Social Club',
      backToTop: 'Sivun alkuun',
      privacy: 'Tietosuoja',
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
        'Edna is a Social & Jazz Club in Helsinki built around jazz evenings, dinners, cocktail events and seasonal balls',
      aboutBody: '',
      aboutEventsNote: 'Future events are announced on Instagram',
      aboutCta: 'Learn more about Edna',
      aboutPillars: {
        liveMusic: {
          title: 'Live music',
          body: 'Jazz carries the soul of another era, when romance mattered and music set the mood without taking over.',
        },
        atmosphere: {
          title: 'Atmosphere',
          body: 'Every detail is considered, from the setting and table to the music, service and mood.',
        },
        community: {
          title: 'Community',
          body: 'Edna is where new friendships, collaborations and opportunities begin naturally, and where you become part of a wider social circle.',
        },
      },
      privateTitle: 'Private & Corporate',
      partnershipsTitle: 'Partnerships',
      partnershipsBody:
        'Edna works with selected brands, venues and hospitality partners whose world naturally complements our events and community',
      contactTitle: 'Contact',
      contactLead: 'For partnerships, private events and general enquiries',
      contactCta: 'Contact Edna',
      explore: 'Learn more',
      membersCta: 'Explore Members Club',
      membersLead:
        'Your way into meaningful connections and evenings you will remember',
      membersBody:
        'Meet beyond your usual circles and become part of a social world where friendships, introductions and new possibilities can begin naturally.',
      privateCta: 'Learn more about Private & Corporate',
      partnershipsCta: 'Explore partnerships',
    },
    about: {
      eyebrow: 'About',
      title: 'Edna brings people together.',
      lead: 'Inspired by the jazz clubs of the 1920s, Edna Social Club is for those who want a reason to dress up, stay a little longer, meet new people and feel part of something.',
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
          body: 'Jazz carries the soul of another era, when romance mattered and music set the mood without taking over.',
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
      phrase: 'The art of gathering',
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
      lead: 'Edna Members Club is for people who want to meet beyond their usual circles and be part of a social world shaped by culture, conversation and shared experiences',
      introSecondary:
        'Membership brings you closer to a community where new friendships, introductions, collaborations and opportunities can develop naturally over time',
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
      lead: 'Edna creates tailored private and corporate events, bringing together atmosphere, live music, entertainment and hospitality',
      intro:
        'From the first idea to the final detail, each event is shaped around the client’s wishes and the occasion.',
      typesTitle: 'Occasions',
      types: [
        'Private events',
        'Corporate events',
        'Christmas parties',
        'Client evenings',
        'Celebrations',
        'Launches',
        'Dinners',
        'Tailored social and cultural gatherings',
      ],
      approachTitle: 'What Edna brings',
      approachBody:
        'Edna can bring together creative direction, event concept, live music, entertainment, hospitality and coordination to create a seamless experience for the host and their guests.',
      contactTitle: 'Plan an occasion with Edna',
      contactBody:
        'Tell us what you are planning and what you want the evening to achieve',
      contactCta: 'Send an enquiry',
    },
    partnerships: {
      eyebrow: 'Partnerships',
      collaborationsLabel: 'Selected collaborations',
      title: 'Partnerships',
      lead: 'Edna collaborates with partners who value culture, hospitality, community and memorable real world experiences',
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
      lead: 'For private events, partnerships and general enquiries',
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
    privacy: {
      title: 'Privacy Policy',
      lead:
        'How Edna Social Club handles personal data when you contact us, apply for membership or join the newsletter.',
      updated: 'Last updated 5 September 2026',
      handlingTitle: 'How we use personal data',
      dataItems: [
        'Membership applications: name, age, email address, phone number and the other answers you submit through Typeform.',
        'Contact enquiries: name, email address, enquiry type and message. The website form opens your email application and is not stored by the website itself.',
        'Newsletter: email address and any other information you choose to provide through the Flodesk subscription form.',
      ],
      automated:
        'We do not use automated decision-making or profiling.',
      whyTitle: 'Why we use it',
      whyItems: [
        'We use enquiry details to respond and provide or prepare the service you request. This is based on steps taken at your request before a contract, a contract where applicable, and our legitimate interest in handling enquiries and services.',
        'We use membership application details to assess and manage applications and the Edna community. This is based on steps taken at your request before membership and our legitimate interest in managing applications and the community.',
        'We send the newsletter with your consent. You can unsubscribe or withdraw consent at any time. We may also process information where the law requires it or where needed for legal claims.',
      ],
      providersTitle: 'Service providers',
      providersBody:
        'Typeform processes membership applications and Flodesk processes newsletter subscriptions and delivery for us. Email and website hosting providers may process information needed to deliver and secure their services. We do not sell personal data.',
      transfersBody:
        'These providers may process data outside the EU or EEA. When they do, the transfer must use a lawful mechanism and appropriate safeguards. Typeform and Flodesk describe their international processing and safeguards in their privacy information.',
      retentionTitle: 'How long we keep data',
      retentionBody:
        'We keep data only while it is needed for its purpose. Membership application data is kept while the application and necessary follow-up are handled. Enquiry data is kept while the enquiry and any related service or claim are handled. Newsletter data is kept until you unsubscribe or withdraw consent. We keep data longer only when the law requires it.',
      rightsTitle: 'Your rights',
      rightsBody:
        'Depending on the situation, you may ask to access, correct, erase or restrict the use of your data, object to its use, or receive it in a portable format. You may withdraw consent at any time without affecting earlier processing. Contact contact@ednasocialclub.com to exercise your rights.',
      complaint:
        'You may also lodge a complaint with the Finnish Data Protection Ombudsman.',
      complaintLink: 'Finnish Data Protection Ombudsman',
      cookiesTitle: 'Cookies and tracking',
      cookiesBody:
        'The website currently uses only a necessary language-preference cookie. It does not use analytics or marketing tracking, so no cookie banner is shown. Third-party websites opened through external links use their own privacy and cookie practices.',
      legalTitle: 'Legal information',
      legalOperator: 'Edna Social Club is operated by Kerttu Laitinen',
      businessId: 'Business ID',
      vatId: 'VAT ID',
    },
  },
  fi: {
    home: {
      title: 'Edna Social Club',
      eyebrow: 'Social & Jazz Club in Helsinki',
      aboutTitle: 'About Edna',
      aboutLead:
        'Edna on Social & Jazz Club, joka järjestää Helsingissä jazziltoja, illallisia ja kausittaisia juhlia',
      aboutBody: '',
      aboutEventsNote: 'Tulevista tapahtumista ilmoitetaan Instagramissa',
      aboutCta: 'Tutustu Ednaan',
      aboutPillars: {
        liveMusic: {
          title: 'Live-musiikki',
          body: 'Jazz antaa jokaiselle illalle oman rytminsä: illallisesta ja keskusteluista aina myöhäisillan tansseihin',
        },
        atmosphere: {
          title: 'Tunnelma',
          body: 'Jokainen yksityiskohta on harkittu tilasta ja kattauksesta musiikkiin, palveluun ja illan tunnelmaan',
        },
        community: {
          title: 'Yhteisö',
          body: 'Ednassa uudet ystävyydet, keskustelut ja yhteistyöt syntyvät luontevasti, ja uusien ihmisten kohtaaminen on tehty helpoksi',
        },
      },
      privateTitle: 'Yksityis- & yritystilaisuudet',
      partnershipsTitle: 'Yhteistyöt',
      partnershipsBody:
        'Edna tekee yhteistyötä valittujen brändien, tapahtumapaikkojen ja hospitality-alan toimijoiden kanssa, joiden maailma täydentää luontevasti tapahtumiamme ja yhteisöämme',
      contactTitle: 'Yhteystiedot',
      contactLead: 'Yhteistyöt, yksityistilaisuudet ja muut tiedustelut',
      contactCta: 'Ota yhteyttä Ednaan',
      explore: 'Lue lisää',
      membersCta: 'Tutustu Edna Members Clubiin',
      membersLead:
        'Tie merkityksellisiin kohtaamisiin ja iltoihin, jotka jäävät mieleen',
      membersBody:
        'Tapaa ihmisiä oman tuttavapiirisi ulkopuolelta ja tule osaksi Ednan maailmaa, jossa uudet ystävyydet, kohtaamiset ja mahdollisuudet syntyvät luontevasti.',
      privateCta: 'Lue lisää yksityisistä ja yritystapahtumista',
      partnershipsCta: 'Tutustu yhteistyömahdollisuuksiin',
    },
    about: {
      eyebrow: 'About Edna',
      title: 'Edna tuo ihmiset yhteen.',
      lead: '1920-luvun jazzklubeista inspiroitunut Edna Social Club on niille, jotka kaipaavat syytä pukeutua, viipyä hieman pidempään, tavata uusia ihmisiä ja tuntea kuuluvansa johonkin',
      ideaTitle: 'Ajatus',
      ideaBody: [
        'Edna luo harkittuja tilaisuuksia, joissa ihmiset voivat jättää arjen hetkeksi taakseen, pukeutua iltaa varten ja tutustua toisiinsa luontevasti.',
        'Tunnelma ammentaa vanhan maailman seurakulttuurista, mutta yhteisö elää vahvasti tässä ajassa. Edna on lämmin, avoin ja kulttuurisesti utelias. Keskustelu on jokaisen kokoontumisen ytimessä.',
      ],
      pillars: [
        {
          title: 'Yhteisö',
          body: 'Ednassa uudet ystävyydet, keskustelut ja yhteistyöt syntyvät luontevasti, ja uusien ihmisten kohtaaminen on tehty helpoksi',
        },
        {
          title: 'Live-musiikki',
          body: 'Jazz tuo tapahtumiin ajatonta tunnelmaa ja elävöittää tapahtumia, antaen tilan seurustelulle ja kohtaamisille',
        },
        {
          title: 'Tunnelma',
          body: 'Jokainen yksityiskohta on harkittu tilasta ja kattauksesta musiikkiin, palveluun ja illan tunnelmaan',
        },
      ],
      eventsTitle: 'Mitä Edna luo',
      eventsBody:
        'Edna luo jazziltoja, illallisia, cocktailtilaisuuksia ja sosiaalisia kokoontumisia. Jokainen kokonaisuus suunnitellaan huoneessa olevien ihmisten ja tilaisuuden tunnelman ympärille.',
      instagramNote:
        'Tulevista tapahtumista ilmoitetaan Instagramissa tilillä @ednasocialclub.',
      instagramCta: 'Siirry Instagramiin',
      phrase: 'The art of gathering',
      editorialSections: [
        {
          title: 'Mitä Ednassa tapahtuu?',
          body: 'Kynttilänvalossa järjestettävistä jazzillallisista ja cocktaililloista puutarhajuhliin, risteilyihin ja yksityistilaisuuksiin, kahta Edna-iltaa ei ole tarkoitettu tuntumaan täysin samalta.',
        },
        {
          title: 'Miksi jazz?',
          body: 'Jo kauan ennen Ednan syntyä jazz oli osa sitä maailmaa, josta se sai inspiraationsa. Jazz kantaa mukanaan menneiden iltojen tunnelmaa, jolloin aikaa oli enemmän, romantiikalle jäi tilaa ja musiikki loi illalle oman rytminsä.',
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
      eyebrow: 'Edna Members Club',
      title: 'Edna Members Club',
      lead: 'Edna Members Club on ihmisille, jotka haluavat kohdata toisia tuttujen piiriensä ulkopuolella ja olla osa kulttuurin, keskustelun ja yhteisten kokemusten muovaamaa sosiaalista maailmaa',
      introSecondary:
        'Jäsenyys tuo sinut lähemmäksi yhteisöä, jossa uudet ystävyydet, tuttavuudet, yhteistyöt ja mahdollisuudet voivat kehittyä luontevasti ajan myötä',
      questions: [
        {
          title: 'Mitä jäsenyys tarjoaa?',
          body: 'Jäsenyys tuo etusijan valittuihin Ednan tapahtumiin sekä pääsyn vain jäsenille tarkoitettuihin tilaisuuksiin ja huolella valittuihin etuihin.',
        },
        {
          title: 'Voinko osallistua ilman jäsenyyttä?',
          body: 'Osa Ednan tapahtumista on avoinna myös muille kuin jäsenille, mutta jäsenyys tarjoaa enemmän mahdollisuuksia osallistua yhteisöön ja jäsenille tarkoitettuihin kokemuksiin.',
        },
        {
          title: 'Kenelle jäsenyys on tarkoitettu?',
          body: 'Ihmisille, jotka nauttivat hyvistä keskusteluista ja haluavat kohdata toisia nykyisten sosiaalisten ja ammatillisten piiriensä ulkopuolella.',
        },
      ],
      applicationTitle: 'Tule osaksi Ednaa',
      applicationTagline: 'Enemmän mahdollisuuksia. Enemmän yhteyttä.',
      apply: 'HAE JÄSENEKSI',
    },
    privateEvents: {
      eyebrow: 'Yksityis- & yritystilaisuudet',
      title: 'Yksityis- & yritystilaisuudet',
      lead: 'Edna toteuttaa räätälöityjä yksityis- ja yritystilaisuuksia, joissa yhdistyvät tunnelma, live-musiikki, ohjelma ja huolella suunniteltu kokonaisuus',
      intro:
        'Ensimmäisestä ideasta viimeiseen yksityiskohtaan jokainen tapahtuma muotoutuu asiakkaan toiveiden ja tilaisuuden mukaan.',
      typesTitle: 'Tilaisuudet',
      types: [
        'Yksityistilaisuudet',
        'Yritystapahtumat',
        'Pikkujoulut',
        'Asiakasillat',
        'Juhlat',
        'Lanseeraukset',
        'Illalliset',
        'Räätälöidyt tapahtumakokonaisuudet',
      ],
      approachTitle: 'Mitä Edna tuo tilaisuuteen',
      approachBody:
        'Edna voi yhdistää luovan suunnittelun, tapahtumakonseptin, live-musiikin, viihteen, vieraanvaraisuuden ja koordinoinnin saumattomaksi kokemukseksi tilaisuuden järjestäjälle ja vieraille.',
      contactTitle: 'Suunnittele tilaisuus Ednan kanssa',
      contactBody:
        'Kerro meille, mitä suunnittelet ja mitä haluat illan saavuttavan',
      contactCta: 'Lähetä tiedustelu',
    },
    partnerships: {
      eyebrow: 'Yhteistyöt',
      collaborationsLabel: 'Valitut yhteistyöt',
      title: 'Yhteistyöt',
      lead: 'Edna tekee yhteistyötä kumppaneiden kanssa, jotka arvostavat kulttuuria, vieraanvaraisuutta, yhteisöä ja mieleenpainuvia elämyksiä',
      intro:
        'Yhteistyö rakentuu yhteisen ajatuksen ja kokemukseen aidosti sopivan roolin ympärille. Edna tarjoaa harkitun ympäristön, jossa brändit voivat kohdata ihmisiä kulttuurin ja vieraanvaraisuuden kautta.',
      audienceTitle: 'Ednan yleisö',
      audience:
        'Ednan yleisö arvostaa kaunista pukeutumista, estetiikkaa, vanhan maailman tunnelmaa, musiikkia, taidetta, arkkitehtuuria, gastronomiaa ja elämän pieniä ylellisyyksiä. Heille laatu, harkitut yksityiskohdat ja kauniisti suunnitellut kokemukset ovat tärkeitä.',
      partnersTitle: 'Kenen kanssa teemme yhteistyötä',
      partnersBody:
        'Edna tekee yhteistyötä valittujen brändien, tapahtumapaikkojen ja hospitality-alan toimijoiden kanssa, joiden maailma täydentää luontevasti tapahtumiamme ja yhteisöämme.',
      opportunitiesTitle: 'Yhteistyön muodot',
      opportunities: [
        'Tapahtumayhteistyöt',
        'Brändikokemukset',
        'Tilayhteistyöt',
        'Hospitality-yhteistyöt',
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
      lead: 'Yhteistyöt, yksityistilaisuudet ja muut tiedustelut',
      form: {
        name: 'Nimi',
        email: 'Sähköposti',
        enquiryType: 'Mitä asiasi koskee?',
        enquiryPlaceholder: 'Valitse vaihtoehto',
        enquiryOptions: [
          'Yksityis- & yritystilaisuudet',
          'Yhteistyöt',
          'Jäsenyys',
          'Yleinen tiedustelu',
        ],
        message: 'Viesti',
        submit: 'Lähetä tiedustelu',
      },
      emailLabel: 'Sähköposti',
      instagramLabel: 'Instagram',
      tiktokLabel: 'TikTok',
    },
    privacy: {
      title: 'Tietosuojaseloste',
      lead:
        'Näin Edna Social Club käsittelee henkilötietoja, kun otat meihin yhteyttä, haet jäsenyyttä tai tilaat uutiskirjeen.',
      updated: 'Päivitetty 5. syyskuuta 2026',
      handlingTitle: 'Miten käytämme henkilötietoja',
      dataItems: [
        'Jäsenhakemukset: nimi, ikä, sähköpostiosoite, puhelinnumero sekä muut Typeformin kautta antamasi vastaukset.',
        'Yhteydenotot: nimi, sähköpostiosoite, tiedustelun aihe ja viesti. Verkkosivun lomake avaa sähköpostisovelluksesi, eikä verkkosivusto itse tallenna tietoja.',
        'Uutiskirje: sähköpostiosoite sekä muut tiedot, jotka päätät antaa Flodeskin tilauslomakkeella.',
      ],
      automated:
        'Emme käytä automatisoitua päätöksentekoa tai profilointia.',
      whyTitle: 'Miksi käytämme tietoja',
      whyItems: [
        'Käytämme yhteydenottotietoja vastataksemme ja valmistellaksemme tai tarjotaksemme pyytämäsi palvelun. Perusteena ovat pyynnöstäsi tehtävät sopimusta edeltävät toimet, tarvittaessa sopimus sekä oikeutettu etumme tiedustelujen ja palveluiden hoitamiseen.',
        'Käytämme jäsenhakemuksen tietoja hakemusten ja Ednan yhteisön hallinnointiin. Perusteena ovat pyynnöstäsi tehtävät jäsenyyttä edeltävät toimet sekä oikeutettu etumme hakemusten ja yhteisön hallinnointiin.',
        'Lähetämme uutiskirjeen suostumuksellasi. Voit peruuttaa tilauksen tai suostumuksesi milloin tahansa. Voimme käsitellä tietoja myös silloin, kun laki tai oikeusvaateen käsittely sitä edellyttää.',
      ],
      providersTitle: 'Palveluntarjoajat',
      providersBody:
        'Typeform käsittelee jäsenhakemuksia ja Flodesk uutiskirjeiden tilauksia ja lähettämistä puolestamme. Sähköposti- ja verkkopalveluntarjoajat voivat käsitellä palveluidensa toimittamiseen ja suojaamiseen tarvittavia tietoja. Emme myy henkilötietoja.',
      transfersBody:
        'Palveluntarjoajat voivat käsitellä tietoja EU:n tai ETA:n ulkopuolella. Tällöin siirron on perustuttava lainmukaiseen siirtoperusteeseen ja asianmukaisiin suojatoimiin. Typeform ja Flodesk kertovat kansainvälisestä käsittelystään ja suojatoimistaan omissa tietosuojatiedoissaan.',
      retentionTitle: 'Kuinka kauan säilytämme tietoja',
      retentionBody:
        'Säilytämme tietoja vain niin kauan kuin niitä tarvitaan. Jäsenhakemustietoja säilytetään hakemuksen ja tarvittavan yhteydenpidon ajan. Yhteydenottotietoja säilytetään asian ja siihen liittyvän palvelun tai vaateen käsittelyn ajan. Uutiskirjetietoja säilytetään siihen asti, kunnes peruutat tilauksen tai suostumuksesi. Säilytämme tietoja pidempään vain, jos laki sitä edellyttää.',
      rightsTitle: 'Oikeutesi',
      rightsBody:
        'Tilanteesta riippuen voit pyytää pääsyä tietoihisi, niiden oikaisua tai poistamista, käsittelyn rajoittamista tai vastustaa käsittelyä. Sinulla voi myös olla oikeus saada tietosi siirrettävässä muodossa. Voit peruuttaa suostumuksesi milloin tahansa ilman, että se vaikuttaa aiempaan käsittelyyn. Voit käyttää oikeuksiasi osoitteessa contact@ednasocialclub.com.',
      complaint:
        'Voit myös tehdä valituksen Suomen tietosuojavaltuutetun toimistolle.',
      complaintLink: 'Tietosuojavaltuutetun toimisto',
      cookiesTitle: 'Evästeet ja seuranta',
      cookiesBody:
        'Verkkosivusto käyttää tällä hetkellä vain välttämätöntä kielivalinnan muistavaa evästettä. Sivustolla ei käytetä analytiikkaa tai markkinointiseurantaa, joten evästebanneria ei näytetä. Ulkoisten linkkien kautta avautuvat sivustot noudattavat omia tietosuoja- ja evästekäytäntöjään.',
      legalTitle: 'Lakisääteiset tiedot',
      legalOperator: 'Edna Social Clubin toiminnasta vastaa Kerttu Laitinen',
      businessId: 'Y-tunnus',
      vatId: 'ALV-tunniste',
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
      title: 'Private & Corporate Events Helsinki | Edna Social Club',
      description:
        'Tailored private events, corporate events and Christmas parties in Helsinki, with live music, entertainment, hospitality and event coordination.',
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
    privacy: {
      title: 'Privacy Policy | Edna Social Club',
      description:
        'Read how Edna Social Club processes personal data for enquiries, membership applications and newsletter subscriptions.',
    },
  },
  fi: {
    home: {
      title: 'Edna Social & Jazz Club | Helsinki',
      description:
        'Edna on helsinkiläinen Social & Jazz Club, jonka ytimessä ovat yhteisö, live-musiikki ja aidot kohtaamiset.',
    },
    about: {
      title: 'About Edna | Social & Jazz Club Helsinki',
      description:
        'Tutustu Edna Social Clubiin, helsinkiläiseen Social & Jazz Clubiin, joka luo jazziltoja, illallisia, cocktailtilaisuuksia ja sosiaalisia kokoontumisia.',
    },
    members: {
      title: 'Edna Members Club | Edna Social Club',
      description:
        'Tutustu Edna Members Clubiin ja hae mukaan kasvavaan helsinkiläiseen yhteisöön.',
    },
    privateEvents: {
      title: 'Yksityis- ja yritystapahtumat Helsinki | Edna Social Club',
      description:
        'Räätälöidyt yksityis- ja yritystapahtumat sekä pikkujoulut Helsingissä – live-musiikki, viihde, vieraanvaraisuus ja tapahtumien koordinointi.',
    },
    partnerships: {
      title: 'Yhteistyöt | Edna Social Club',
      description:
        'Tutustu harkittuihin yhteistyömahdollisuuksiin Edna Social Clubin kanssa Helsingissä.',
    },
    contact: {
      title: 'Yhteystiedot | Edna Social Club',
      description:
        'Ota yhteyttä Edna Social Clubiin yleisissä tiedusteluissa sekä tapahtumiin, yhteistyöhön ja jäsenyyteen liittyvissä asioissa.',
    },
    privacy: {
      title: 'Tietosuojaseloste | Edna Social Club',
      description:
        'Lue, miten Edna Social Club käsittelee henkilötietoja yhteydenottojen, jäsenhakemusten ja uutiskirjetilausten yhteydessä.',
    },
  },
} as const;
