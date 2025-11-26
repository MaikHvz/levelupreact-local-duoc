import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Levelup-Deploy/', // 👈 NOMBRE EXACTO DEL REPO
  plugins: [react()],
})
