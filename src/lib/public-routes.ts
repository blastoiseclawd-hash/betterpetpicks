import fs from "node:fs";
import path from "node:path";

import { pageTargets } from "@/data/keyword-map";
import { siteConfig } from "@/config/site";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

export interface PublicRouteEntry {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified: string;
}

const TRUST_ROUTES = new Set(["/about", "/disclosure", "/how-we-review", "/privacy", "/terms", "/ai-disclosure"]);

function collectRoutesFromApp(appDir: string): Array<{ route: string; pagePath: string }> {
  const routes: Array<{ route: string; pagePath: string }> = [];
  const seen = new Set<string>();

  function visit(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    const pageFile = entries.find((entry) => entry.isFile() && entry.name === "page.tsx");
    if (pageFile) {
      const relativeDir = path.relative(appDir, currentDir);
      const routeSegments = relativeDir
        .split(path.sep)
        .filter(Boolean)
        .filter((segment) => !segment.startsWith("("))
        .filter((segment) => !segment.startsWith("["))
        .filter((segment) => segment !== "api");

      const route = routeSegments.length === 0 ? "/" : `/${routeSegments.join("/")}`;
      if (!seen.has(route)) {
        seen.add(route);
        routes.push({ route, pagePath: path.join(currentDir, "page.tsx") });
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }
      if (entry.name === "api" || entry.name.startsWith("(")) {
        continue;
      }
      visit(path.join(currentDir, entry.name));
    }
  }

  visit(appDir);
  return routes.sort((a, b) => a.route.localeCompare(b.route));
}

function routeMetadata(routePath: string): Pick<PublicRouteEntry, "changeFrequency" | "priority"> {
  if (routePath === "/") {
    return { changeFrequency: "weekly", priority: 1 };
  }

  if (TRUST_ROUTES.has(routePath)) {
    return { changeFrequency: "monthly", priority: 0.5 };
  }

  const slug = routePath.slice(1);
  const target = pageTargets.find((entry) => entry.slug === slug);

  switch (target?.type) {
    case "hub":
      return { changeFrequency: "weekly", priority: 0.9 };
    case "spoke":
    case "review":
      return { changeFrequency: "weekly", priority: 0.8 };
    case "guide":
      return { changeFrequency: "monthly", priority: 0.7 };
    case "trust":
      return { changeFrequency: "monthly", priority: 0.5 };
    default:
      return { changeFrequency: "weekly", priority: 0.7 };
  }
}

function pageMtime(pagePath: string): string {
  try {
    return fs.statSync(pagePath).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export function getPublicPageRoutes(): PublicRouteEntry[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = collectRoutesFromApp(appDir);

  return routes.map(({ route, pagePath }) => ({
    path: route,
    lastModified: pageMtime(pagePath),
    ...routeMetadata(route),
  }));
}

export function buildPublicSitemapEntries() {
  return getPublicPageRoutes().map((entry) => ({
    url: entry.path === "/" ? siteConfig.url : `${siteConfig.url}${entry.path}`,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
