import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ← trocado aqui
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // ← usando o plugin padrão do React
    visualizer({
      filename: "bundle-report.html",
      open: mode === "production",
      gzipSize: true,
      brotliSize: true,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {

    sourcemap: true,
    chunkSizeWarningLimit: 1000,

  },
}));
