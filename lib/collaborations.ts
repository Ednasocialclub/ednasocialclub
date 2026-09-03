import type { Locale } from '@/lib/i18n';

export type Collaboration = {
  id: string;
  src: string;
  alt: Record<Locale, string>;
  objectPosition?: string;
};

export const collaborations: Collaboration[] = [
  {
    id: 'champagne-hospitality',
    src: '/collaborations/edna-champagne-glasses-collaboration.jpg',
    alt: {
      en: 'Guests sharing champagne at an Edna collaboration event in Helsinki',
      fi: 'Vieraat nauttimassa samppanjaa Ednan yhteistyötapahtumassa Helsingissä',
    },
    objectPosition: 'center 52%',
  },
  {
    id: 'dressed-guests',
    src: '/collaborations/edna-dressed-guests-by-window.jpg',
    alt: {
      en: 'Elegantly dressed guests at an Edna event by the waterfront in Helsinki',
      fi: 'Tyylikkäästi pukeutuneet vieraat Ednan tapahtumassa meren äärellä Helsingissä',
    },
    objectPosition: 'center 40%',
  },
  {
    id: 'brunch-guests',
    src: '/collaborations/edna-brunch-guests-collaboration.jpg',
    alt: {
      en: 'Guests raising champagne glasses beside a beautifully prepared brunch table',
      fi: 'Vieraat kohottamassa samppanjalaseja kauniisti katetun brunssipöydän äärellä',
    },
    objectPosition: 'center 36%',
  },
  {
    id: 'retro-phone-moment',
    src: '/collaborations/edna-retro-phone-social-moment.jpg',
    alt: {
      en: 'Two guests sharing a playful retro telephone moment at an Edna event',
      fi: 'Kaksi vierasta retrohenkisessä puhelinhetkessä Ednan tapahtumassa',
    },
    objectPosition: 'center 47%',
  },
  {
    id: 'champagne-tower',
    src: '/collaborations/edna-champagne-tower-collaboration.jpg',
    alt: {
      en: 'A champagne tower surrounded by guests at an Edna collaboration evening',
      fi: 'Samppanjatorni vieraiden ympäröimänä Ednan yhteistyöillassa',
    },
    objectPosition: 'center 45%',
  },
  {
    id: 'guest-welcome',
    src: '/collaborations/edna-partner-welcome-moment.jpg',
    alt: {
      en: 'Two guests greeting each other warmly at an Edna partner event',
      fi: 'Kaksi vierasta tervehtimässä lämpimästi Ednan kumppanitapahtumassa',
    },
    objectPosition: 'center 12%',
  },
  {
    id: 'brunch-table',
    src: '/collaborations/edna-brunch-table-collaboration.jpg',
    alt: {
      en: 'A carefully styled brunch table prepared for an Edna collaboration',
      fi: 'Huolellisesti katettu brunssipöytä Ednan yhteistyötä varten',
    },
    objectPosition: 'center 62%',
  },
  {
    id: 'piano-reflection',
    src: '/collaborations/edna-guests-reflected-at-piano.jpg',
    alt: {
      en: 'Two smiling guests reflected in a grand piano at an Edna social event',
      fi: 'Kaksi hymyilevää vierasta flyygelin heijastuksessa Ednan tapahtumassa',
    },
    objectPosition: 'center 56%',
  },
  {
    id: 'pilates-community-session',
    src: '/collaborations/edna-pilates-community-session.jpg',
    alt: {
      en: 'Guests taking part in a Pilates gathering in a warmly lit Helsinki studio',
      fi: 'Vieraat osallistumassa pilatestapahtumaan lämpimästi valaistussa studiossa Helsingissä',
    },
    objectPosition: 'center 54%',
  },
];
