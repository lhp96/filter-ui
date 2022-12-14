import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `[name].css`,
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    brotliSize: true,
    lib: {
      entry: "./src/entry.ts",
      name: "FilterUI",
      fileName: "filter-ui",
      formats: ["esm", "umd", "iife"],
    },
    cssCodeSplit: true,
  },
});
