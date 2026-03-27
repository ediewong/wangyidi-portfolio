import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const routes = ["", "/work", "/about", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
