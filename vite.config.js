import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configura la carpeta de archivos estáticos
    fs: {
      strict: false
    }
  }
})
