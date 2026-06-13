import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // User site repo (jiyaul123.github.io) is served from the root
  base: '/',
  plugins: [react(), tailwindcss()],
})
