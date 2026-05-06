import { describe, it, expect } from 'vitest';
import { pickLocale } from './pickLocale';

describe('pickLocale', () => {
  it('exact tag match', () => {
    expect(pickLocale('es-ES,en;q=0.5', undefined)).toBe('es');
    expect(pickLocale('it-IT,en;q=0.5', 'ES')).toBe('it');
    expect(pickLocale('ca-ES,es;q=0.9,en;q=0.5', undefined)).toBe('ca');
  });

  it('falls back to primary subtag', () => {
    expect(pickLocale('es-MX,en;q=0.5', undefined)).toBe('es');
    expect(pickLocale('zh-CN,en;q=0.5', undefined)).toBe('zh');
    expect(pickLocale('zh-TW,en;q=0.5', undefined)).toBe('zh');
  });

  it('unsupported language falls back to en', () => {
    expect(pickLocale('pl-PL,en;q=0.5', undefined)).toBe('en');
    expect(pickLocale('ru-RU', undefined)).toBe('en');
  });

  it('no Accept-Language uses geo IP', () => {
    expect(pickLocale(null, 'AR')).toBe('es');
    expect(pickLocale(null, 'MX')).toBe('es');
    expect(pickLocale(null, 'GB')).toBe('en');
    expect(pickLocale(null, undefined)).toBe('en');
  });

  it('respects q values ordering', () => {
    expect(pickLocale('en;q=0.5,it;q=0.9', undefined)).toBe('it');
  });
});
