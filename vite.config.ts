import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
      layouts: path.resolve(__dirname, './src/app/layouts'),
      shared: path.resolve(__dirname, './src/app/shared'),
      assets: path.resolve(__dirname, './src/assets'),
      features: path.resolve(__dirname, './src/app/features')
    }
  }
})
