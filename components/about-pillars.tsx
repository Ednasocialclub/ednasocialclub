import Image from 'next/image';

export type AboutPillar = {
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

export function AboutPillars({
  pillars,
  headingLevel = 'h2',
  compact = false,
}: {
  pillars: readonly AboutPillar[];
  headingLevel?: 'h2' | 'h3';
  compact?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <div
      className={
        compact ? 'about-pillars about-pillars--compact' : 'about-pillars'
      }
    >
      {pillars.map((pillar) => (
        <article className="about-pillar" key={pillar.title}>
          <div className="about-pillar__media">
            <Image
              src={pillar.image.src}
              alt={pillar.image.alt}
              fill
              loading="lazy"
              sizes={
                compact
                  ? '(max-width: 1024px) min(calc(100vw - 48px), 306px), 306px'
                  : '(max-width: 1024px) min(calc(100vw - 48px), 360px), 360px'
              }
              style={{ objectPosition: pillar.image.position }}
            />
          </div>
          <Heading className="about-pillar__heading">{pillar.title}</Heading>
          <p>{pillar.body}</p>
        </article>
      ))}
    </div>
  );
}
