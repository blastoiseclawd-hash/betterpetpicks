import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.brand.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.colors.light,
    theme_color: siteConfig.colors.dark,
    icons: [
      {
        src: siteConfig.brand.faviconSvg,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
