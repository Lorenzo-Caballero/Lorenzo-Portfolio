import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://github.com/Lorenzo-Caballero/Lorenzo-Portfolio.git",
  server: {
    fs: {
      strict: false
    }
  }
})
