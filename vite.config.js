import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [ react()],
  base: "/OC_Projet-12/",
  server: {
    port: 3001,
  }, 
});
