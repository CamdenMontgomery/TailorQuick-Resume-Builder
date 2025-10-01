import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        { src: "manifest.json", dest: "." },      // copy manifest
        { src: "src/assets", dest: "src" },      // copy icons, etc.
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: "src/popup/index.html",
        options: "src/webpage/index.html",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: (chunk) => {
          // make sure background builds to background.js (must match manifest.json)
          if (chunk.name === "background") {
            return "background.js";
          }
          return "assets/[name].js";
        },
      },
    },
  },
});