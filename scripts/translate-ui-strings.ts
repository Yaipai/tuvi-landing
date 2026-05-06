#!/usr/bin/env tsx
// Translate UI_STRINGS missing locales (empty value '') from ES via Anthropic API.
// Idempotent: skips keys that already have a non-empty value for the target locale.
//
// Usage: ANTHROPIC_API_KEY=sk-... npx tsx scripts/translate-ui-strings.ts

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = join(__dirname, '../src/i18n/ui-strings.ts');

const TARGET_LOCALES = ['ca', 'gl', 'eu', 'fr', 'de', 'pt', 'zh', 'hi', 'ja', 'it'] as const;
type Target = (typeof TARGET_LOCALES)[number];

const LOCALE_NAMES: Record<Target, string> = {
  ca: 'Catalan',
  gl: 'Galician',
  eu: 'Basque',
  fr: 'French',
  de: 'German',
  pt: 'Portuguese',
  zh: 'Mandarin Chinese (simplified)',
  hi: 'Hindi',
  ja: 'Japanese',
  it: 'Italian',
};

interface KeyBlock {
  key: string;
  startLine: number;
  endLine: number;
  esValue: string | null;
  perLocale: Record<Target, { lineIdx: number; value: string } | null>;
}

function escapeForSingleQuoted(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function unescapeFromSingleQuoted(s: string): string {
  return s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

function parseUIStrings(content: string): { lines: string[]; blocks: KeyBlock[] } {
  const lines = content.split('\n');
  const blocks: KeyBlock[] = [];
  let current: KeyBlock | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openMatch = line.match(/^\s*'([a-zA-Z0-9._]+)':\s*\{\s*$/);
    if (openMatch) {
      if (current) blocks.push(current);
      current = {
        key: openMatch[1],
        startLine: i,
        endLine: -1,
        esValue: null,
        perLocale: {
          ca: null, gl: null, eu: null, fr: null, de: null, pt: null,
          zh: null, hi: null, ja: null, it: null,
        },
      };
      continue;
    }

    if (!current) continue;

    const esMatch = line.match(/^\s*es:\s*'([^']*(?:\\'[^']*)*)',?\s*$/);
    if (esMatch) {
      current.esValue = unescapeFromSingleQuoted(esMatch[1]);
      continue;
    }

    const pairRe = /([a-z]{2}):\s*'((?:[^'\\]|\\.)*)'/g;
    let m: RegExpExecArray | null;
    while ((m = pairRe.exec(line)) !== null) {
      const loc = m[1];
      if ((TARGET_LOCALES as readonly string[]).includes(loc)) {
        const v = unescapeFromSingleQuoted(m[2]);
        current.perLocale[loc as Target] = { lineIdx: i, value: v };
      }
    }

    if (line.match(/^\s*\},?\s*$/)) {
      current.endLine = i;
      blocks.push(current);
      current = null;
    }
  }
  if (current) blocks.push(current);
  return { lines, blocks };
}

async function translate(
  client: Anthropic,
  source: string,
  targetLocale: Target,
): Promise<string> {
  const result = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 200,
    messages: [
      {
        role: 'user',
        content: `Translate this UI string from Spanish to ${LOCALE_NAMES[targetLocale]}. Output ONLY the translation as a single line, no quotes, no commentary, no markdown. Preserve emojis and special characters as-is. Keep proper nouns (Tuvi, App Store, Google Play) untranslated.\n\nSource: ${source}`,
      },
    ],
  });
  const text = result.content[0].type === 'text' ? result.content[0].text : '';
  return text.trim();
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY required');
  const client = new Anthropic({ apiKey });

  const original = readFileSync(FILE_PATH, 'utf-8');
  const { lines, blocks } = parseUIStrings(original);

  const updates: Array<{ key: string; locale: Target; lineIdx: number; translation: string; esValue: string }> = [];

  for (const b of blocks) {
    if (!b.esValue) continue;
    for (const loc of TARGET_LOCALES) {
      const slot = b.perLocale[loc];
      if (slot && slot.value === '') {
        updates.push({ key: b.key, locale: loc, lineIdx: slot.lineIdx, translation: '', esValue: b.esValue });
      }
    }
  }

  console.log(`Found ${updates.length} empty entries to translate.`);

  let translated = 0;
  for (const u of updates) {
    process.stdout.write(`  ${u.key} -> ${u.locale} (${LOCALE_NAMES[u.locale]}) ... `);
    try {
      u.translation = await translate(client, u.esValue, u.locale);
      console.log(`OK`);
      translated++;
    } catch (e) {
      console.log(`FAIL: ${(e as Error).message}`);
    }
  }
  console.log(`Translated ${translated}/${updates.length}.`);

  const byLine: Record<number, Array<{ locale: Target; translation: string }>> = {};
  for (const u of updates) {
    if (!u.translation) continue;
    (byLine[u.lineIdx] ??= []).push({ locale: u.locale, translation: u.translation });
  }

  for (const [lineIdxStr, perLine] of Object.entries(byLine)) {
    const lineIdx = Number(lineIdxStr);
    let line = lines[lineIdx];
    for (const { locale, translation } of perLine) {
      const escaped = escapeForSingleQuoted(translation);
      const re = new RegExp(`(\\b${locale}:\\s*)''`);
      const before = line;
      line = line.replace(re, `$1'${escaped}'`);
      if (line === before) {
        console.warn(`WARN: could not patch ${locale} on line ${lineIdx + 1}: ${before}`);
      }
    }
    lines[lineIdx] = line;
  }

  const newContent = lines.join('\n');
  writeFileSync(FILE_PATH, newContent, 'utf-8');
  console.log(`Done. ${FILE_PATH} updated.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
