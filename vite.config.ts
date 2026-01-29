import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // use a repo-relative base on production so GitHub Pages serves assets correctly
  base: mode === "development" ? "/" : "/portfolio-2-want-de-vorige-hebben-ze-verwijderd/",
  // output to `docs` when building for production so Pages can serve from `main/docs`
  build: {
    outDir: mode === "development" ? "dist" : "docs",
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
