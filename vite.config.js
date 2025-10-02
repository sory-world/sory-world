import path from "node:path";
import { fileURLToPath } from "node:url";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { installGlobals } from "@remix-run/node";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

installGlobals();

const appDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "app"
);

export default defineConfig({
  plugins: [remix(), netlifyPlugin()],
  resolve: {
    alias: {
      "~": appDir,
      "~/": `${appDir}/`,
    },
  },
});
