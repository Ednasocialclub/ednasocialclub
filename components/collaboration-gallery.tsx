'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { collaborations } from '@/lib/collaborations';
import type { Locale } from '@/lib/i18n';

type CollaborationGalleryProps = {
  label: string;
  locale: Locale;
  showLabel?: boolean;
  variant?: 'compact' | 'expanded';
};

export function CollaborationGallery({
  label,
  locale,
  showLabel = true,
  variant = 'compact',
}: CollaborationGalleryProps) {
  const previousLabel =
    locale === 'fi'
      ? 'Edellinen yhteistyökuva'
      : 'Previous collaboration image';
  const nextLabel =
    locale === 'fi' ? 'Seuraava yhteistyökuva' : 'Next collaboration image';
  const imageSizes =
    variant === 'expanded'
      ? '(max-width: 767px) 285px, 352px'
      : '(max-width: 767px) 285px, 300px';

  return (
    <Carousel
      className={`collaboration-gallery collaboration-gallery--${variant}`}
      opts={{
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 3,
      }}
      aria-label={label}
    >
      <div
        className={`collaboration-gallery__header${showLabel ? '' : ' collaboration-gallery__header--controls-only'}`}
      >
        {showLabel ? <p>{label}</p> : null}
        <div className="collaboration-gallery__controls">
          <CarouselPrevious
            className="collaboration-gallery__control"
            type="button"
            aria-label={previousLabel}
          />
          <CarouselNext
            className="collaboration-gallery__control"
            type="button"
            aria-label={nextLabel}
          />
        </div>
      </div>

      <CarouselContent className="collaboration-gallery__track">
        {collaborations.map((collaboration, index) => (
          <CarouselItem
            className="collaboration-gallery__item"
            key={collaboration.id}
            aria-label={`${index + 1} / ${collaborations.length}`}
          >
            <div className="collaboration-gallery__image">
              <Image
                src={collaboration.src}
                alt={collaboration.alt[locale]}
                fill
                sizes={imageSizes}
                style={{ objectPosition: collaboration.objectPosition }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
