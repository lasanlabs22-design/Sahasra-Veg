import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...nav.map((n) => n.href), "/privacy-policy", "/terms-and-conditions", "/photo-credits"].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
