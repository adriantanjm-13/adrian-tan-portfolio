import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adriantanjm-13.github.io',
  base: '/adrian-tan-portfolio',
  root: '.',
  outDir: './dist',
  publicDir: './public',
  markdown: {
    syntaxHighlight: false,
  },
});