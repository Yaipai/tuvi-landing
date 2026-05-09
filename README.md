# Tuvi Landing

Public landing for Tuvi — mobile-first, multi-locale (12 idiomas).

**Domain:** https://tuvi.education (apex + www)
**Repo:** Yaipai/tuvi-landing
**CF Pages project name:** `tuvi-education` (NO coincide con el nombre del repo)
**Spec original:** `tuvi-mercury/docs/superpowers/specs/2026-05-06-tuvi-landing-design.md` v3 (single-frame). Superada el 9-may al añadir 4 ejes + FAQ — ver historial git para evolución.

## Local dev

```bash
npm install
npm run dev   # http://localhost:4321
```

## Deploy a producción

> **No hay auto-deploy sobre push to main.** El proyecto Cloudflare Pages `tuvi-education` no está conectado al repo Git. Cualquier merge a `main` requiere deploy manual con wrangler.

```bash
npm run build
npx wrangler pages deploy dist --project-name tuvi-education --branch main --commit-dirty=true
```

Esto publica simultáneamente a `tuvi.education`, `www.tuvi.education` y `tuvi-education.pages.dev`. El comando devuelve un preview URL `https://<hash>.tuvi-education.pages.dev` para verificar antes; cuando `--branch main`, la promoción a producción es inmediata.

**Auth:** wrangler está autenticado con `alfonso@gippini.com` (Account ID `7cb9658a493dac56a8921e9238066448`). Verificar con `npx wrangler whoami` si algo falla.

**Para activar auto-deploy de verdad** (a futuro): Cloudflare dashboard → Workers & Pages → tuvi-education → Settings → Builds & deployments → Source → Connect to Git → `Yaipai/tuvi-landing`, branch `main`. Hasta entonces, deploy manual cada vez que se mergea.

## Verificar deploy

```bash
curl -s https://tuvi.education/ | grep -oE '<h1[^>]*>[^<]+</h1>'
curl -s -o /dev/null -w "%{http_code}\n" https://tuvi.education/faq
```

Ambos comandos confirman que el último deploy llegó (H1 esperado y `/faq` → 200).

## Estructura

- `src/pages/index.astro` y `src/pages/[locale]/index.astro` — home con 4 ejes (currículos, idiomas, personalización, centros) + FAQ teaser.
- `src/pages/faq.astro` y `src/pages/[locale]/faq.astro` — FAQ completa con 15 preguntas en 4 categorías.
- `src/pages/m/[shortId].astro`, `src/pages/s/[publicId].astro`, `src/pages/r/[code].astro` — deeplinks a la app móvil.
- `src/pages/[locale]/legal/{terms,privacy,notice}.astro` — páginas legales por locale.
- `src/i18n/ui-strings.ts` — fuente única de strings traducidos a los 12 locales.
