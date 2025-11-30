import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Levelup-Deploy/', // 👈 NOMBRE EXACTO DEL REPO
  plugins: [react()],
  test: {
     ui: true,
globals: true,
environment: "jsdom",
setupFiles: "./tests/setup.js",
coverage: {
provider: "v8",
reporter: ["text", "html"],
},
}
})
