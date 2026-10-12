import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of peregrineproductions.studio, so the default base of '/' is correct.
export default defineConfig({
  plugins: [react()],
})
