import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/webpack';

export default defineConfig({
  plugins: [react(), {
    name: 'svgr',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'vite-plugin-svgr') {
        return id;
      }
    },
    async load(id) {
      if (id === 'vite-plugin-svgr') {
        return svgr();
      }
    }
  }],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
