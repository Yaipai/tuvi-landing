import { describe, it, expect } from 'vitest';
import { curriculumBullet } from './curriculumBullet';

describe('curriculumBullet', () => {
  it('Spanish-speaking locales return Spain bullet', () => {
    expect(curriculumBullet('es', undefined)).toBe('17 comunidades autónomas');
    expect(curriculumBullet('ca', undefined)).toBe('17 comunitats autònomes');
    expect(curriculumBullet('gl', undefined)).toBe('17 comunidades autónomas');
    expect(curriculumBullet('eu', undefined)).toBe('17 erkidego autonomo');
  });

  it('Italian returns Italy bullet', () => {
    expect(curriculumBullet('it', undefined)).toBe('Indicazioni nazionali 2025');
  });

  it('English with geo GB returns UK bullet', () => {
    expect(curriculumBullet('en', 'GB')).toBe('UK National Curriculum');
  });

  it('English with geo AU returns Australia bullet', () => {
    expect(curriculumBullet('en', 'AU')).toBe('Australian Curriculum (ACARA)');
  });

  it('English without GB/AU returns intl', () => {
    expect(curriculumBullet('en', 'US')).toBe('International + UK curriculum');
    expect(curriculumBullet('en', undefined)).toBe('International + UK curriculum');
  });

  it('other locales return localized intl bullet', () => {
    expect(curriculumBullet('fr', undefined)).toBe('Curriculum international + britannique');
    expect(curriculumBullet('de', undefined)).toBe('Internationaler + britischer Lehrplan');
  });
});
