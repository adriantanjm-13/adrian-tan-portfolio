import { defineConfig } from 'astro/config';

export default defineConfig({
  root: '.',
  outDir: './dist',
  publicDir: './public',
  markdown: {
    syntaxHighlight: false,
  },
});
