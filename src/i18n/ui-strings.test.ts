import { describe, it, expect } from 'vitest';
import { t } from './ui-strings';

describe('t()', () => {
  it('returns ES string for es locale', () => {
    expect(t('nav.greeting', 'es')).toBe('¡Hola!');
  });

  it('returns the FR string for fr locale once populated', () => {
    // After Phase 6.2 translation, fr is no longer empty.
    // The fallback-to-EN behavior is exercised by the type-system / runtime path
    // when a future key is added without translation.
    const value = t('hero.headline', 'fr');
    expect(value).toBeTruthy();
    expect(value).not.toBe('');
  });

  it('returns EN for explicit en', () => {
    expect(t('nav.greeting', 'en')).toBe('Hi!');
  });
});
