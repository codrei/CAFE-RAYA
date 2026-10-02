// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// On Vercel, use the project's real production domain — and a custom domain
// automatically, once Café Raya has one — so the link-preview image and the
// canonical URLs always point at the right address.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// https://astro.build/config
export default defineConfig({
  site: productionHost ? `https://${productionHost}` : 'https://cafe-raya.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
