/**
 * SSG (Static Site Generation) script.
 *
 * Run AFTER `vite build` (client) and `vite build --ssr` (server):
 *   1. vite build                          → dist/client/
 *   2. vite build --ssr src/entry-server.tsx --outDir dist/server
 *   3. node prerender.mjs                  → injects rendered HTML into each route's index.html
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "dist/client");
const serverEntry = path.resolve(__dirname, "dist/server/entry-server.js");

// All static routes to pre-render. Add new routes here when you add pages.
const staticRoutes = [
  "/",
  "/blog",
  "/about",
  "/contact",
  "/games/cricket-betting",
  "/games/teen-patti",
  "/games/aviator",
  "/games/andar-bahar",
];

// Dynamically collect blog post slugs from source
function getBlogSlugs() {
  const postsFile = fs.readFileSync(
    path.resolve(__dirname, "src/blog/posts.ts"),
    "utf-8"
  );
  const slugMatches = [...postsFile.matchAll(/slug:\s*"([^"]+)"/g)];
  return slugMatches.map((m) => `/blog/${m[1]}`);
}

async function prerender() {
  const template = fs.readFileSync(
    path.resolve(clientDir, "index.html"),
    "utf-8"
  );

  // Import the server render function
  const { render } = await import(pathToFileURL(serverEntry).href);

  const blogRoutes = await getBlogSlugs();
  const allRoutes = [...staticRoutes, ...blogRoutes];

  console.log(`Pre-rendering ${allRoutes.length} routes...\n`);

  for (const route of allRoutes) {
    try {
      const { html: appHtml, head } = render(route);

      // Extract JSON-LD scripts from SSR body HTML and move them to <head>
      const ldScripts = [];
      const cleanAppHtml = appHtml.replace(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
        (_match, content) => { ldScripts.push(content); return ""; }
      );

      // Replace the SSR outlet with rendered HTML (JSON-LD removed from body)
      let finalHtml = template.replace("<!--ssr-outlet-->", cleanAppHtml);

      // Replace existing <head> tags with SSR-generated ones from Helmet.
      // This avoids duplicate <title>, <meta>, <link rel="canonical"> etc.
      if (head) {
        // Remove existing tags that Helmet will manage
        finalHtml = finalHtml.replace(/<title>[^<]*<\/title>/, "");
        finalHtml = finalHtml.replace(/<meta\s+name="description"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+name="keywords"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<link\s+rel="canonical"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+property="og:title"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+property="og:description"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+property="og:url"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+property="og:type"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+property="og:image"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+name="twitter:card"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+name="twitter:title"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+name="twitter:description"[^>]*>/g, "");
        finalHtml = finalHtml.replace(/<meta\s+name="twitter:image"[^>]*>/g, "");

        // Build JSON-LD script tags for <head>
        const ldTags = ldScripts
          .map((s) => `<script type="application/ld+json">${s}</script>`)
          .join("\n");

        // Inject SSR head tags + JSON-LD before </head>
        finalHtml = finalHtml.replace("</head>", `${head}\n${ldTags}\n</head>`);
      }

      // Determine output path
      const routePath = route === "/" ? "" : route;
      const outDir = path.resolve(clientDir, routePath.slice(1));
      const outFile = path.resolve(outDir, "index.html");

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, finalHtml);

      console.log(`  ✓ ${route} → ${path.relative(clientDir, outFile)}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    }
  }

  console.log("\nPre-render complete!");
}

prerender();
