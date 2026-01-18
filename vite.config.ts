import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
      "next/image": path.resolve(rootDir, "./src/shims/next-image.tsx"),
      "next/script": path.resolve(rootDir, "./src/shims/next-script.tsx"),
    },
    // Prevent duplicate React copies (fixes Radix "useRef of null" crashes)
    dedupe: ["react", "react-dom"],
  },
}));


