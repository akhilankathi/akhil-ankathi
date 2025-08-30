import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: "protfilo",
    remotes: {
      music: "http://localhost:4173/assets/remoteEntry.js",
    },
    shared: ["react" , "react-dom"],
  }), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://portfolio-backend-app-pvvf.onrender.com/", // NestJS API
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: './',
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
})