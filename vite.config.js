import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // // Enables SPA fallback in dev
    // historyApiFallback: true,
  },
})
