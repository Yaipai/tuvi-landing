import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tuvi.education',
  output: 'static',
  adapter: cloudflare({ platformProxy: { enabled: true } }),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    defaultLocale: 'en',
    locales: ['es','en','ca','gl','eu','fr','de','pt','zh','hi','ja','it'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
});
