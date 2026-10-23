import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy-policy", "/terms-and-conditions", "/photo-credits"].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
