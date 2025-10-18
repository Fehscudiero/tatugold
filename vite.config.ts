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
    react(), // Usa React com SWC (compilação mais rápida que Babel)
    visualizer({ // Gera um gráfico interativo do bundle após build
      filename: "bundle-report.html",
      open: mode === "production", // Abre automaticamente só em produção
      gzipSize: true,
      brotliSize: true,
    }),
    viteCompression({ // Ativa compressão Brotli/Gzip nos arquivos gerados
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Permite usar @/ para importar da pasta src
    },
  },
  build: {
    sourcemap: mode === "development", // Gera sourcemaps só em dev
    chunkSizeWarningLimit: 1000, // Avisa se algum chunk passar de 1MB
  },
}));
