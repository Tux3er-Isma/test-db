import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_Dw0f1B7p.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Comment = asDrizzleTable("Comment", { "columns": { "author": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author", "collection": "Comment", "primaryKey": false, "optional": false } }, "body": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "body", "collection": "Comment", "primaryKey": false, "optional": false } } }, "deprecated": false }, false);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const author = formData.get("author");
    const body = formData.get("body");
    if (typeof author === "string" && typeof body === "string") {
      await db.insert(Comment).values({ author, body });
    }
  }
  const comments = await db.select().from(Comment);
  return renderTemplate`${comments.map(({ author, body }) => renderTemplate`${maybeRenderHead()}<article><p>Author: ${author}</p><p>${body}</p></article>`)}<form method="POST" style="display: grid"> <label for="author">Author</label> <input id="author" name="author"> <label for="body">Content</label> <textarea id="body" name="body"></textarea> <button type="submit">Submit</button> </form> <!--render \`comments\`-->`;
}, "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Pruebas/test-github-db/src/pages/index.astro", void 0);

const $$file = "C:/Users/ahamm/OneDrive/Escritorio/Ismail/Pruebas/test-github-db/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
