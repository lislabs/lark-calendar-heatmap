import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { semiTheming } from 'vite-plugin-semi-theming'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    UnoCSS(),
    semiTheming({
      theme: '@semi-bot/semi-theme-feishu-dashboard',
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
