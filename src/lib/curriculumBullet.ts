import type { Locale } from '../i18n/locales';

const BULLETS = {
  spain: {
    es: '17 comunidades autónomas',
    ca: '17 comunitats autònomes',
    gl: '17 comunidades autónomas',
    eu: '17 erkidego autonomo',
  } as Record<string, string>,
  italy: 'Indicazioni nazionali 2025',
  uk: 'UK National Curriculum',
  au: 'Australian Curriculum (ACARA)',
  intlEn: 'International + UK curriculum',
  intl: {
    fr: 'Curriculum international + britannique',
    de: 'Internationaler + britischer Lehrplan',
    pt: 'Currículo internacional + britânico',
    zh: '国际课程 + 英国',
    hi: 'अंतरराष्ट्रीय + ब्रिटिश पाठ्यक्रम',
    ja: '国際カリキュラム + 英国',
  } as Record<string, string>,
};

export function curriculumBullet(locale: Locale, country: string | undefined): string {
  if (locale === 'es' || locale === 'ca' || locale === 'gl' || locale === 'eu') {
    return BULLETS.spain[locale];
  }
  if (locale === 'it') return BULLETS.italy;
  if (locale === 'en') {
    if (country === 'GB') return BULLETS.uk;
    if (country === 'AU') return BULLETS.au;
    return BULLETS.intlEn;
  }
  return BULLETS.intl[locale] ?? BULLETS.intlEn;
}
