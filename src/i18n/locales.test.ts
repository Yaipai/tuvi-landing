import { describe, it, expect } from 'vitest';
import { SUPPORTED_LOCALES, isSupported } from './locales';

describe('locales', () => {
  it('exports 12 supported locales in canonical order', () => {
    expect(SUPPORTED_LOCALES).toEqual(['es','en','ca','gl','eu','fr','de','pt','zh','hi','ja','it']);
    expect(SUPPORTED_LOCALES).toHaveLength(12);
  });

  it('isSupported returns true for known locales', () => {
    expect(isSupported('es')).toBe(true);
    expect(isSupported('it')).toBe(true);
  });

  it('isSupported returns false for unknown locales', () => {
    expect(isSupported('pl')).toBe(false);
    expect(isSupported('ar')).toBe(false);
    expect(isSupported('')).toBe(false);
  });
});
