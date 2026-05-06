import { isSupported, type Locale } from './locales';

const LATAM_OR_ES = new Set([
  'ES','MX','AR','CO','CL','PE','UY','EC','VE','BO','GT','HN','SV','NI','CR','DO','PA','PY',
]);

interface ParsedTag { tag: string; q: number; }

function parseAcceptLanguage(header: string): ParsedTag[] {
  return header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';').map((s) => s.trim());
      const qParam = params.find((p) => p.startsWith('q='));
      const q = qParam ? parseFloat(qParam.slice(2)) : 1.0;
      return { tag: tag.toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter((t) => t.tag.length > 0)
    .sort((a, b) => b.q - a.q);
}

export function pickLocale(acceptLanguage: string | null, country: string | undefined): Locale {
  if (!acceptLanguage) {
    if (country && LATAM_OR_ES.has(country.toUpperCase())) return 'es';
    return 'en';
  }
  const tags = parseAcceptLanguage(acceptLanguage);
  for (const { tag } of tags) {
    if (isSupported(tag)) return tag;
    const primary = tag.split('-')[0];
    if (isSupported(primary)) return primary;
  }
  return 'en';
}
