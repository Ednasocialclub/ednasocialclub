const supportedLocales = ['en', 'fi'] as const;

function preferredLocale(request: Request) {
  const cookie = request.headers
    .get('cookie')
    ?.split(';')
    .map((value) => value.trim())
    .find((value) => value.startsWith('edna-locale='))
    ?.split('=')[1];

  if (cookie && supportedLocales.includes(cookie as (typeof supportedLocales)[number])) {
    return cookie;
  }

  const languages = request.headers.get('accept-language')?.toLowerCase() ?? '';
  return languages.includes('fi') ? 'fi' : 'en';
}

export function GET(request: Request) {
  return Response.redirect(new URL(`/${preferredLocale(request)}`, request.url), 307);
}
