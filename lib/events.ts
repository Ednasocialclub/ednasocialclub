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
  detailSummary?: string;
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

// Event CTA destinations live here so a priority-list link can later become a ticket link.
export const eventPriorityListUrls: Record<EventKey, string | null> = {
  winterBall: 'https://ednasocialclub.myflodesk.com/privateclub',
};

function priorityListCta(label: string, url: string | null): EdnaEvent['cta'] {
  return {
    label,
    url,
    type: 'priority-list',
    state: url ? 'active' : 'awaiting-url',
  };
}

export const eventsPageContent: Record<
  Locale,
  {
    title: string;
    exploreLabel: string;
    instagramNote: { before: string; after: string };
    events: EdnaEvent[];
  }
> = {
  en: {
    title: 'Upcoming Events',
    exploreLabel: 'Explore upcoming events',
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
          'The evening begins with welcome drinks, followed by a three-course dinner served at long tables with live music. After dinner, a live orchestra leads the dancing into midnight, followed by the New Year countdown and celebrations until 02:00.',
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
        status: 'Tickets coming soon',
        detailUrl: null,
        cta: priorityListCta(
          'Join the priority list',
          eventPriorityListUrls.winterBall,
        ),
      },
    ],
  },
  fi: {
    title: 'Tulevat tapahtumat',
    exploreLabel: 'Tutustu tapahtumiin',
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
        detailSummary:
          'Kolmen ruokalajin illallinen, livemusiikkia ja uudenvuodenaaton tanssiaiset.',
        detail:
          'Ilta alkaa tervetuliaisjuomilla, jonka jälkeen nautitaan kolmen ruokalajin illallinen pitkissä pöydissä livemusiikin säestyksellä. Illallisen jälkeen tanssiaiset alkavat orkesterin johdolla ja jatkuvat kohti keskiyötä. Uusi vuosi otetaan vastaan yhteisellä lähtölaskennalla, ja juhlat jatkuvat klo 02.00 saakka.',
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
        status: 'Liput tulevat myyntiin pian',
        detailUrl: null,
        cta: priorityListCta(
          'Liity ennakkolistalle',
          eventPriorityListUrls.winterBall,
        ),
      },
    ],
  },
};
