import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Project } from "../types/project";

const projectsDirectory = join(process.cwd(), "_projects");

// English lives in _projects/*.md; translations in _projects/<locale>/*.md
// override title/excerpt/body and fall back to English for anything missing.
export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory).filter((f) => f.endsWith(".md"));
}

export function getProjectBySlug(
  slug: string,
  locale: string,
  fields: string[] = []
): Project {
  const realSlug = slug.replace(/\.md$/, "");
  const base = matter(
    fs.readFileSync(join(projectsDirectory, `${realSlug}.md`), "utf-8")
  );
  let data = base.data;
  let content = base.content;

  const localized = join(projectsDirectory, locale, `${realSlug}.md`);
  if (locale !== "en" && fs.existsSync(localized)) {
    const tr = matter(fs.readFileSync(localized, "utf-8"));
    data = { ...data, ...tr.data };
    content = tr.content;
  }

  const items: any = {};

  // Gets fields specified in the fields array
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items as Project;
}

export function getAllProjects(locale: string, fields: string[] = []): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, locale, fields))
    // First try to sort by order if it exists
    .sort((a, b) => {
      // If both projects have order, sort by order
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      // If only a has order, a comes first
      if (a.order !== undefined) {
        return -1;
      }
      // If only b has order, b comes first
      if (b.order !== undefined) {
        return 1;
      }
      // If neither has order, sort by date (fallback to original sort)
      if (a.date && b.date) {
        return new Date(a.date) < new Date(b.date) ? -1 : 1;
      }
      return 0;
    });
  return projects;
}
