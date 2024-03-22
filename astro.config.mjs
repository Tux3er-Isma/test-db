import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});