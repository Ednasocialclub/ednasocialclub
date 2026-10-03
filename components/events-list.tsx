import type { EdnaEvent } from '@/lib/events';

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

  if (event.cta.state === 'active' && event.cta.url) {
    return (
      <a
        className="event-entry__cta"
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
}: {
  events: EdnaEvent[];
  compact?: boolean;
  showDetails?: boolean;
}) {
  return (
    <div className={compact ? 'events-list events-list--compact' : 'events-list'}>
      {events.map((event) => (
        <article className="event-entry" key={event.id}>
          <time dateTime={event.date.iso}>{event.date.label}</time>
          <EventTitle event={event} />
          <p>{event.description}</p>
          {showDetails && event.detail ? (
            <p className="event-entry__detail">{event.detail}</p>
          ) : null}
          <EventAction event={event} />
        </article>
      ))}
    </div>
  );
}
