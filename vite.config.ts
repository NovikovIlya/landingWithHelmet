import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Уберите base: "./" для Vercel
  // base: "./", 
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  // Добавьте настройки для статических файлов
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
  },
   optimizeDeps: {
    include: ['react-helmet-async'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
