import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

const pages = ["", "/work", "/certifications", "/contact", "/vinyl", "/links"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pages,
    ...getAllProjects(routing.defaultLocale, ["slug"]).map((p) => `/project/${p.slug}`),
  ];
  const url = (l: string, p: string) =>
    `${SITE_URL}${l === routing.defaultLocale ? p : `/${l}${p}`}` || SITE_URL;

  return paths.flatMap((p) =>
    routing.locales.map((l) => ({
      url: url(l, p),
      changeFrequency: p === "" ? "monthly" : "yearly",
      priority: p === "" ? 1 : p.startsWith("/project") || p === "/work" ? 0.8 : 0.5,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((x) => [x, url(x, p)])),
      },
    }))
  );
}
