import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '',
    plugins: [react(), viteTsconfigPaths()],
    // server: {    
    //     open: true,
    //     port: 3000, 
    // },
    // new:
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    server: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8888/.netlify/functions',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },




    css: {
        postcss: {
          plugins: [tailwindcss()],
        },
      }
})
