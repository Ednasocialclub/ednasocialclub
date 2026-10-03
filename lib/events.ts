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
  detail?: string;
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
        id: 'halloween-masquerade-2026',
        title: 'Halloween Masquerade',
        date: { iso: '2026-10-31', label: '31 October 2026' },
        description: 'A private Edna gathering',
        detailUrl: null,
        cta: null,
      },
      {
        id: 'edna-winter-ball-2026',
        title: 'Edna Winter Ball',
        date: { iso: '2026-12-31', label: '31 December 2026' },
        description: 'Svenska Klubben, Helsinki',
        detail: 'Dinner, live jazz and a New Year’s Eve ball.',
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
      before: 'Lisätiedot ja tapahtumapäivitykset jaetaan ',
      after: '-Instagramissa.',
    },
    events: [
      {
        id: 'halloween-masquerade-2026',
        title: 'Halloween Masquerade',
        date: { iso: '2026-10-31', label: '31.10.2026' },
        description: 'Yksityinen Edna-tapahtuma',
        detailUrl: null,
        cta: null,
      },
      {
        id: 'edna-winter-ball-2026',
        title: 'Edna Winter Ball',
        date: { iso: '2026-12-31', label: '31.12.2026' },
        description: 'Svenska Klubben, Helsinki',
        detail: 'Illallinen, livejazzia ja uudenvuodenaaton tanssiaiset.',
        detailUrl: null,
        cta: priorityListCta(
          'Liity ennakkolistalle',
          eventPriorityListUrls.winterBall,
        ),
      },
    ],
  },
};
