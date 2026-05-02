import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://grupointegral.it',
  integrations: [tailwind()],
});
