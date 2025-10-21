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
        { src: "src/pages/web-page/modal.css", dest: "." }
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        options: "src/pages/options-page/index.html",
        background: "src/background.ts",
        bridge: "src/pages/web-page/utils/bridge.ts",
        inject: "src/pages/web-page/utils/inject.tsx"
      },
      output: {
        entryFileNames: (chunk) => {
          const root = ['background', 'inject', 'bridge'];
          if (root.includes(chunk.name)) {
            return "[name].js";
          }
          else return "assets/[name].js";
        },
      },
    },
  },
});