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
        { src: "src/components/cover/Cover.css", dest: "." },
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
        bridge: "src/bridge.ts",
        inject: "src/inject.tsx"
      },
      output: {
        entryFileNames: (chunk) => {
          // make sure background builds to background.js (must match manifest.json)
          if (chunk.name === "background") {
            return "background.js";
          }if (chunk.name === "inject") {
            return "inject.js";
          }if (chunk.name === "bridge") {
            return "bridge.js";
          }
          return "assets/[name].js";
        },
      },
    },
  },
});