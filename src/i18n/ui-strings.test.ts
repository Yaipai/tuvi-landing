import { describe, it, expect } from 'vitest';
import { t } from './ui-strings';

describe('t()', () => {
  it('returns ES string for es locale', () => {
    expect(t('nav.greeting', 'es')).toBe('¡Hola!');
  });

  it('falls back to EN if locale value is empty', () => {
    expect(t('hero.headline', 'fr')).toBe('Plan your classes in minutes, not hours.');
  });

  it('returns EN for explicit en', () => {
    expect(t('nav.greeting', 'en')).toBe('Hi!');
  });
});
