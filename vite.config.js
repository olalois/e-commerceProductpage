import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // for Google Fonts
        myfont: ['MyFont', 'sans-serif'], // for local font
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
