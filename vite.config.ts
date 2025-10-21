import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Aceita conexões externas (ex: mobile na mesma rede)
    port: 8080, // Porta padrão do seu dev server
  },
  plugins: [
    react({
      fastRefresh: false, // 🔧 Corrige erro de Fast Refresh
    }),
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
    sourcemap: mode === "development",
    chunkSizeWarningLimit: 1000,
  },
}));
