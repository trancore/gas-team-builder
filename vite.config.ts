import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "server/hosting",
  },
  resolve: {
    alias: {
      "~/": path.join(__dirname, "./src/"),
    },
  },
  css: {
    modules: {
      localsConvention: "dashes",
    },
  },
});
