import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'analyze' && visualizer({
      open: true,
      filename: 'bundle-analyzer.html',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "public"),
    },
  },
  root: ".",
  publicDir: "public",
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === 'development',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html')
      }
    },
    terserOptions: {
      compress: {
        drop_console: mode !== 'development',
        drop_debugger: mode !== 'development',
      },
    },
  },
}));
