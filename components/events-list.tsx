import type { EdnaEvent } from '@/lib/events';
import type { Locale } from '@/lib/i18n';
import { BookingInformationModal } from '@/components/booking-information-modal';

function EventTitle({ event }: { event: EdnaEvent }) {
  if (!event.detailUrl) return <h2>{event.title}</h2>;

  return (
    <h2>
      <a href={event.detailUrl}>{event.title}</a>
    </h2>
  );
}

function EventAction({ event }: { event: EdnaEvent }) {
  if (!event.cta) return null;

  const className =
    event.cta.type === 'tickets'
      ? 'button button--ivory event-entry__ticket-button'
      : 'event-entry__cta';

  if (event.cta.state === 'active' && event.cta.url) {
    return (
      <a
        className={className}
        href={event.cta.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-type={event.cta.type}
      >
        {event.cta.label}
        <span className="event-entry__arrow" aria-hidden="true">
          →
        </span>
      </a>
    );
  }

  return (
    <span
      className="event-entry__cta event-entry__cta--disabled"
      aria-disabled="true"
      data-cta-type={event.cta.type}
    >
      {event.cta.label}
      <span className="event-entry__arrow" aria-hidden="true">
        →
      </span>
    </span>
  );
}

export function EventsList({
  events,
  compact = false,
  showDetails = false,
  bookingInformationLocale,
  secondaryAction,
}: {
  events: EdnaEvent[];
  compact?: boolean;
  showDetails?: boolean;
  bookingInformationLocale?: Locale;
  secondaryAction?: { label: string; href: string };
}) {
  return (
    <div
      className={compact ? 'events-list events-list--compact' : 'events-list'}
    >
      {events.map((event) => (
        <article className="event-entry" key={event.id}>
          {showDetails ? (
            <>
              <EventTitle event={event} />
              <time dateTime={event.date.iso}>{event.date.label}</time>
            </>
          ) : (
            <>
              <time dateTime={event.date.iso}>{event.date.label}</time>
              <EventTitle event={event} />
            </>
          )}
          <p>{event.description}</p>
          {!showDetails ? (
            <p className="event-entry__summary">{event.summary}</p>
          ) : null}
          {showDetails && event.detail ? (
            <p className="event-entry__detail">{event.detail}</p>
          ) : null}
          {showDetails && event.dressCode ? (
            <div className="event-entry__dress-code">
              <h3>{event.dressCode.label}</h3>
              <p className="event-entry__dress-code-title">
                {event.dressCode.title}
              </p>
              <p>{event.dressCode.description}</p>
            </div>
          ) : null}
          {showDetails && event.memberBenefit ? (
            <div className="event-entry__member-benefit">
              <h3>{event.memberBenefit.label}</h3>
              <p>{event.memberBenefit.description}</p>
            </div>
          ) : null}
          {showDetails && event.status ? (
            <p className="event-entry__status">{event.status}</p>
          ) : null}
          <EventAction event={event} />
          {!showDetails && secondaryAction ? (
            <a
              className="text-link text-link--light event-entry__details-link"
              href={secondaryAction.href}
            >
              {secondaryAction.label}
              <span
                className="link-arrow link-arrow--right"
                aria-hidden="true"
              />
            </a>
          ) : null}
          {showDetails && bookingInformationLocale ? (
            <BookingInformationModal locale={bookingInformationLocale} />
          ) : null}
        </article>
      ))}
    </div>
  );
}
