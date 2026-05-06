#!/usr/bin/env tsx
// Translate legal markdown files from ES to missing locales.
// For each src/content/legal-{notice,privacy,terms}/, generate translations from es.md
// for locales that currently have placeholder content (size < 200 bytes).
// Adds disclaimer footer to non-canonical translations.

import Anthropic from '@anthropic-ai/sdk';
import { writeFileSync, readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../src/content');
const COLLECTIONS = ['legal-notice', 'legal-privacy', 'legal-terms'] as const;
const TARGET_LOCALES = ['fr', 'de', 'pt', 'zh', 'hi', 'ja', 'it'] as const;
type Target = (typeof TARGET_LOCALES)[number];

const LOCALE_NAMES: Record<Target, string> = {
  fr: 'French',
  de: 'German',
  pt: 'Portuguese',
  zh: 'Mandarin Chinese (simplified)',
  hi: 'Hindi',
  ja: 'Japanese',
  it: 'Italian',
};

const DISCLAIMERS: Record<Target, string> = {
  fr: '\n\n---\n*Version indicative. La version contraignante est la version espagnole.*\n',
  de: '\n\n---\n*Hinweisende Version. Verbindlich ist die spanische Fassung.*\n',
  pt: '\n\n---\n*Versão orientativa. A versão vinculante é a espanhola.*\n',
  zh: '\n\n---\n*指示性版本。具有约束力的版本是西班牙语版本。*\n',
  hi: '\n\n---\n*सूचक संस्करण। बाध्यकारी संस्करण स्पैनिश है।*\n',
  ja: '\n\n---\n*参考版です。拘束力のある版はスペイン語版です。*\n',
  it: '\n\n---\n*Versione orientativa. La versione vincolante è quella spagnola.*\n',
};

async function translateLegal(client: Anthropic, source: string, locale: Target): Promise<string> {
  const result = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 8000,
    messages: [
      {
        role: 'user',
        content: `Translate this legal document from Spanish to ${LOCALE_NAMES[locale]}. Preserve markdown formatting (headings #/##/###, bullet lists, **emphasis**). Keep email addresses and proper nouns (Tuvi, Team Banzai S.L.U., CIF B27612951, Anthropic, OpenAI, Google, Resend, Cloudflare) as-is. Output ONLY the translation, no commentary, no code fences.\n\n${source}`,
      },
    ],
  });
  return result.content[0].type === 'text' ? result.content[0].text : '';
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY required');
  const client = new Anthropic({ apiKey });

  for (const collection of COLLECTIONS) {
    const sourcePath = join(ROOT, collection, 'es.md');
    if (!existsSync(sourcePath)) {
      console.warn(`Skip ${collection}: es.md missing`);
      continue;
    }
    const source = readFileSync(sourcePath, 'utf-8');
    if (source.length < 200) {
      console.warn(`Skip ${collection}: es.md is placeholder (length ${source.length})`);
      continue;
    }

    for (const locale of TARGET_LOCALES) {
      const targetPath = join(ROOT, collection, `${locale}.md`);
      if (existsSync(targetPath) && statSync(targetPath).size > 500) {
        console.log(`Skip ${collection}/${locale}.md (already translated, size ${statSync(targetPath).size})`);
        continue;
      }
      process.stdout.write(`Translating ${collection} -> ${locale} (${LOCALE_NAMES[locale]}) ... `);
      try {
        const translation = await translateLegal(client, source, locale);
        const final = translation.trim() + DISCLAIMERS[locale];
        writeFileSync(targetPath, final, 'utf-8');
        console.log(`OK (${final.length} bytes)`);
      } catch (e) {
        console.log(`FAIL: ${(e as Error).message}`);
      }
    }
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
