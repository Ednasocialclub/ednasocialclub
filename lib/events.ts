import type { Locale } from '@/lib/i18n';

export type EventCtaType = 'priority-list' | 'tickets';
export type EventCtaState = 'awaiting-url' | 'active';

export type EdnaEvent = {
  id: string;
  title: string;
  date: {
    iso: string;
    label: string;
  };
  description: string;
  summary: string;
  detail?: string;
  dressCode?: {
    label: string;
    title: string;
    description: string;
  };
  memberBenefit?: {
    label: string;
    description: string;
  };
  status?: string;
  detailUrl: string | null;
  cta: {
    label: string;
    url: string | null;
    type: EventCtaType;
    state: EventCtaState;
  } | null;
};

type EventKey = 'winterBall';

// Event CTA destinations live here so ticket links stay consistent across the site.
export const eventTicketUrls: Record<EventKey, string | null> = {
  winterBall: 'https://buy.stripe.com/bJe4gzels62G99faBZ0Ba08',
};

function ticketCta(label: string, url: string | null): EdnaEvent['cta'] {
  return {
    label,
    url,
    type: 'tickets',
    state: url ? 'active' : 'awaiting-url',
  };
}

export const eventsPageContent: Record<
  Locale,
  {
    title: string;
    exploreLabel: string;
    detailsLabel: string;
    instagramNote: { before: string; after: string };
    events: EdnaEvent[];
  }
> = {
  en: {
    title: 'Upcoming Events',
    exploreLabel: 'Explore upcoming events',
    detailsLabel: 'View full event details',
    instagramNote: {
      before: 'Further event details and updates will be shared via ',
      after: '.',
    },
    events: [
      {
        id: 'edna-winter-ball-2026',
        title: 'Edna Winter Ball',
        date: { iso: '2026-12-31', label: '31 December 2026' },
        description: 'Svenska Klubben, Helsinki',
        summary: 'Dinner, live music and dancing to welcome the New Year.',
        detail:
          'The evening begins with welcome drinks, followed by a three-course dinner served at long tables with live music. After dinner, live music accompanies the dancing into midnight, followed by the New Year countdown and celebrations until 02:00.',
        dressCode: {
          label: 'Dress Code',
          title: 'Black Tie',
          description:
            'Tuxedo for men and floor-length evening gown for women.',
        },
        memberBenefit: {
          label: 'For Edna Members',
          description:
            'Early access and a private Members’ Room with refreshments throughout the evening.',
        },
        detailUrl: null,
        cta: ticketCta('Buy Tickets', eventTicketUrls.winterBall),
      },
    ],
  },
  fi: {
    title: 'Tulevat tapahtumat',
    exploreLabel: 'Tutustu tapahtumiin',
    detailsLabel: 'Katso tapahtuman tiedot',
    instagramNote: {
      before: 'Lisätiedot ja tapahtumapäivitykset jaetaan Instagramissa ',
      after: '.',
    },
    events: [
      {
        id: 'edna-winter-ball-2026',
        title: 'Edna Winter Ball',
        date: { iso: '2026-12-31', label: '31.12.2026' },
        description: 'Svenska Klubben, Helsinki',
        summary:
          'Kolmen ruokalajin illallinen, livemusiikkia ja uudenvuodenaaton tanssiaiset.',
        detail:
          'Ilta alkaa tervetuliaisjuomilla, jonka jälkeen nautitaan kolmen ruokalajin illallinen pitkissä pöydissä livemusiikin säestyksellä. Illallisen jälkeen tanssiaiset jatkuvat livemusiikin säestyksellä kohti keskiyötä. Uusi vuosi otetaan vastaan yhteisellä lähtölaskennalla, ja juhlat jatkuvat klo 02.00 saakka.',
        dressCode: {
          label: 'Pukukoodi',
          title: 'Black Tie',
          description: 'Miehille smokki ja naisille täyspitkä iltapuku.',
        },
        memberBenefit: {
          label: 'Edna Members Clubin jäsenille',
          description:
            'Aikaisempi sisäänpääsy sekä yksityinen Members’ Room virvokkeineen illan ajan.',
        },
        detailUrl: null,
        cta: ticketCta('Osta liput', eventTicketUrls.winterBall),
      },
    ],
  },
};
