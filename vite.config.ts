import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Repo is served from https://<user>.github.io/New_Portfolio/
  base: '/New_Portfolio/',
  plugins: [react(), tailwindcss()],
})
