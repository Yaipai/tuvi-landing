export const SUPPORTED_LOCALES = ['es','en','ca','gl','eu','fr','de','pt','zh','hi','ja','it'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isSupported(tag: string): tag is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(tag);
}
