import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  redirects: {
    '/en/packages/': '/en/services/#packages',
    '/zh/packages/': '/zh/services/#packages',
    '/ms/packages/': '/ms/services/#packages',
  },
  vite: { plugins: [tailwindcss()] },
});
