import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
const base = process.env.SITE_TEST_URL || "http://localhost:3000";
test("homepage keeps reference section order, catalogue and working brand assets", async () => {
 const response = await fetch(base);
 assert.equal(response.status,200);
 const html = await response.text();
 let previous = -1;
 for (const id of ["home","products","about","founder","mission-vision","values","trust","locations","client-feedback","contact"]) {
  const position = html.indexOf(`id="${id}"`);
  assert(position > previous, `${id} must follow the previous reference section`);
  previous = position;
 }
 for (const text of ["Aluminium Scrap","Copper Scrap","6063 Extrusion","Our Mission","Our Vision","Core Values","Global Scrap Sourcing","Export Documentation","Industrial Buyer Matching","Trade with confidence"]) assert(html.includes(text),text);
 for (const match of html.matchAll(/href="\/#([^"]+)"/g)) assert(html.includes(`id="${match[1]}"`),`Broken home anchor: ${match[1]}`);
 assert(!html.includes("enreachlogo-transparent.png"));
 assert(!html.includes("enreach-global-logo.jpeg"));
 assert(!html.includes("hero-slide-dot"));
 assert(html.includes('aria-roledescription="carousel"'));
 for (const image of ["aluminium-zorba", "copper-wire", "aluminium-ubc", "copper-transformers"]) {
  assert(html.includes(`hero-banner-${image}-v2.jpg`));
  assert.equal((await fetch(new URL(`/assets/hero-carousel/hero-banner-${image}-v2.jpg`,base))).status,200);
 }
 assert(!/brass/i.test(html));
 assert.equal((await fetch(new URL("/what-we-buy/brass",base))).status,404);
 assert(!/brass/i.test(await (await fetch(new URL("/sitemap.xml",base))).text()));
 const logo = await fetch(new URL("/assets/image.png",base));
 assert.equal(logo.status,200);
 assert.deepEqual(Buffer.from(await logo.arrayBuffer()),await readFile(new URL("../public/assets/image.png",import.meta.url)));
 for(const path of ["/what-we-buy","/what-we-buy/aluminium","/what-we-buy/copper","/what-we-buy/aluminium/6063-extrusion","/contact","/blog"]) assert.equal((await fetch(new URL(path,base))).status,200,path);
});
