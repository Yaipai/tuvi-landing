import type { Locale } from './locales';

export type UIStringKey =
  | 'nav.greeting'
  | 'hero.headline'
  | 'hero.subhead'
  | 'hero.bullet2'
  | 'hero.bullet3'
  | 'cta.app_store_alt'
  | 'cta.play_store_alt'
  | 'footer.terms'
  | 'footer.privacy'
  | 'footer.copyright'
  | 'meta.title'
  | 'meta.description'
  | 'r.opening'
  | 'm.opening'
  | 'm.fallback_question'
  | 's.opening'
  | 's.fallback_question';

export const UI_STRINGS: Record<UIStringKey, Record<Locale, string>> = {
  'nav.greeting': {
    es: '¡Hola!',
    en: 'Hi!',
    ca: 'Hola!',
    gl: 'Ola!',
    eu: 'Kaixo!',
    fr: 'Bonjour !',
    de: 'Hallo!',
    pt: 'Olá!',
    zh: '你好！',
    hi: 'नमस्ते!',
    ja: 'こんにちは！',
    it: 'Ciao!',
  },
  'hero.headline': {
    es: 'Prepara tus clases en minutos, no en horas.',
    en: 'Plan your classes in minutes, not hours.',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'hero.subhead': {
    es: 'La app para profesores que se adapta a tu currículo y a tu manera.',
    en: 'The teacher app that adapts to your curriculum and your style.',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'hero.bullet2': {
    es: 'PDFs listos para imprimir',
    en: 'PDFs ready to print',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'hero.bullet3': {
    es: 'En español (y 11 idiomas más)',
    en: 'In English (plus 11 more languages)',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'cta.app_store_alt': {
    es: 'Descargar en App Store',
    en: 'Download on the App Store',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'cta.play_store_alt': {
    es: 'Disponible en Google Play',
    en: 'Get it on Google Play',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'footer.terms': {
    es: 'Términos',
    en: 'Terms',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'footer.privacy': {
    es: 'Privacidad',
    en: 'Privacy',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'footer.copyright': {
    es: '© 2026 Tuvi · Team Banzai S.L.U.',
    en: '© 2026 Tuvi · Team Banzai S.L.U.',
    ca: '© 2026 Tuvi · Team Banzai S.L.U.',
    gl: '© 2026 Tuvi · Team Banzai S.L.U.',
    eu: '© 2026 Tuvi · Team Banzai S.L.U.',
    fr: '© 2026 Tuvi · Team Banzai S.L.U.',
    de: '© 2026 Tuvi · Team Banzai S.L.U.',
    pt: '© 2026 Tuvi · Team Banzai S.L.U.',
    zh: '© 2026 Tuvi · Team Banzai S.L.U.',
    hi: '© 2026 Tuvi · Team Banzai S.L.U.',
    ja: '© 2026 Tuvi · Team Banzai S.L.U.',
    it: '© 2026 Tuvi · Team Banzai S.L.U.',
  },
  'meta.title': {
    es: 'Tuvi — la app para profesores',
    en: 'Tuvi — the app for teachers',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'meta.description': {
    es: 'Tuvi es la app móvil que ayuda a profesores a preparar clases con IA: materiales, PDFs y planificación en minutos.',
    en: 'Tuvi is the mobile app that helps teachers plan classes with AI: materials, PDFs and planning in minutes.',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'r.opening': {
    es: 'Abriendo Tuvi…',
    en: 'Opening Tuvi…',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'm.opening': {
    es: 'Abriendo material en la app…',
    en: 'Opening material in the app…',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  'm.fallback_question': {
    es: '¿No tienes Tuvi instalada? Descárgala:',
    en: "Don't have Tuvi installed? Get it:",
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  's.opening': {
    es: 'Abriendo sesión en la app…',
    en: 'Opening session in the app…',
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
  's.fallback_question': {
    es: '¿No tienes Tuvi instalada? Descárgala:',
    en: "Don't have Tuvi installed? Get it:",
    ca: '', gl: '', eu: '', fr: '', de: '', pt: '', zh: '', hi: '', ja: '', it: '',
  },
};

export function t(key: UIStringKey, locale: Locale): string {
  const value = UI_STRINGS[key]?.[locale];
  if (value) return value;
  return UI_STRINGS[key]?.en ?? '';
}
