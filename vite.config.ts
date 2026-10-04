import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/argus-desk/" : "/",
  plugins: [react()],
  // Stoa and the engine are linked from sibling repositories during
  // development and have their own node_modules: without dedupe the app
  // would run two copies of React and fail with "Invalid hook call".
  resolve: { dedupe: ["react", "react-dom", "react-aria-components"] },
  worker: { format: "es" },
  server: { port: 5178, strictPort: true, fs: { allow: [".."] } },
  preview: { port: 4178, strictPort: true },
});
