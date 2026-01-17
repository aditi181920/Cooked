import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Cooked/', // Change to your repo name
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})