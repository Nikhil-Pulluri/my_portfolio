import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Allow Vite to handle node_modules imports
        additionalData: `@import 'codemirror/lib/codemirror.css'; @import 'codemirror/theme/dracula.css';`
      }
    }
  }
})
