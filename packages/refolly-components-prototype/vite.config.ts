import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    vanillaExtractPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "refolly-components-prototype",
      formats: ["es"],
      fileName: "index.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
