import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tic-tac-toe/',
  plugins: [react()],
  build: {
    outDir: 'build', // This is the directory where the build files will go
  }
})
