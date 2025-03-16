import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/rock-paper-scissor/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
