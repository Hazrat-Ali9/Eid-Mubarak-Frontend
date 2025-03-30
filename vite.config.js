import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Vite Config
// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Ensure all relevant file types are included
  ],
  plugins: 
  [
    tailwindcss(),
    react()
  ],
})
