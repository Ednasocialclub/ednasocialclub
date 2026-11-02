import type { Locale } from '@/lib/i18n';

export type Collaboration = {
  id: string;
  src: string;
  alt: Record<Locale, string>;
  objectPosition?: string;
};

export const collaborations: Collaboration[] = [
  {
    id: 'fireplace-toast',
    src: '/collaborations/edna-fireplace-toast.jpg',
    alt: {
      en: 'Guests raising glasses around a round table in front of a dark wood fireplace',
      fi: 'Vieraat kohottamassa laseja pyöreän pöydän äärellä tumman puutakan edessä',
    },
    objectPosition: 'center 52%',
  },
  {
    id: 'tuxedo-martini-detail',
    src: '/collaborations/edna-tuxedo-martini-detail.jpg',
    alt: {
      en: 'A guest in a tuxedo holding a martini while seated in a red armchair',
      fi: 'Smokkiin pukeutunut vieras martini kädessään punaisessa nojatuolissa',
    },
    objectPosition: 'center 58%',
  },
  {
    id: 'mirror-guests',
    src: '/collaborations/edna-mirror-guests-black-white.jpg',
    alt: {
      en: 'Two elegantly dressed guests standing before an ornate mirror and chandelier',
      fi: 'Kaksi tyylikkäästi pukeutunutta vierasta koristeellisen peilin ja kattokruunun edessä',
    },
    objectPosition: 'center 46%',
  },
  {
    id: 'piano-martini-detail',
    src: '/collaborations/edna-piano-martini-detail.jpg',
    alt: {
      en: 'A guest holding a martini beside the keys of a grand piano',
      fi: 'Vieras martini kädessään flyygelin koskettimien äärellä',
    },
    objectPosition: 'center 60%',
  },
  {
    id: 'necklace-moment',
    src: '/collaborations/edna-necklace-moment.jpg',
    alt: {
      en: 'A guest adjusting the necklace of a seated woman in a red armchair',
      fi: 'Vieras asettelemassa kaulakorua punaisessa nojatuolissa istuvalle naiselle',
    },
    objectPosition: 'center 47%',
  },
  {
    id: 'dark-wood-evening-group',
    src: '/collaborations/edna-dark-wood-evening-group.jpg',
    alt: {
      en: 'Elegantly dressed guests gathered with drinks in a dark wood-panelled room',
      fi: 'Tyylikkäästi pukeutuneet vieraat juomineen tummassa puupaneloidussa huoneessa',
    },
    objectPosition: 'center center',
  },
];
