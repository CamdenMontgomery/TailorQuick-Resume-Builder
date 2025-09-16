import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "manifest.json", dest: "." },      // copy manifest
        { src: "public/*", dest: "assets" },      // copy icons, etc.
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