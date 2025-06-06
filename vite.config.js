import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default defineConfig({
  base: "/exfil/",
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        attributions_en: resolve(__dirname, "attributions/en.html"),
        attributions_es: resolve(__dirname, "attributions/es.html"),
        attributions_ua: resolve(__dirname, "attributions/ua.html"),
        northwoods: resolve(__dirname, "maps/northwoods.html"),
        renegade_oil: resolve(__dirname, "maps/renegade_oil.html"),
      },
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [vitePluginFaviconsInject("./favicon.ico")],
});
