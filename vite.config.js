import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createVuePlugin as vue2 } from "vite-plugin-vue2";
// @ts-ignore
import vueTemplateBabelCompiler from "vue-template-babel-compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2({
      vueTemplateOptions: {
        compiler: vueTemplateBabelCompiler,
      },
    }),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
