import type { MetadataRoute } from 'next';
import {
  localizedPath,
  locales,
  type RouteKey,
} from '@/lib/i18n';
import { siteUrl } from '@/lib/site';

const indexedRoutes = [
  'home',
  'about',
  'members',
  'privateEvents',
  'partnerships',
  'contact',
] satisfies RouteKey[];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    indexedRoutes.map((route) => ({
      url: `${siteUrl}${localizedPath(locale, route)}`,
    })),
  );
}
