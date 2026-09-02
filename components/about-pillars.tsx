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

export function AboutPillars({ pillars }: { pillars: readonly AboutPillar[] }) {
  return (
    <div className="about-pillars">
      {pillars.map((pillar) => (
        <article className="about-pillar" key={pillar.title}>
          <div className="about-pillar__media">
            <Image
              src={pillar.image.src}
              alt={pillar.image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) calc(100vw - 48px), 360px"
              style={{ objectPosition: pillar.image.position }}
            />
          </div>
          <h2>{pillar.title}</h2>
          <p>{pillar.body}</p>
        </article>
      ))}
    </div>
  );
}
