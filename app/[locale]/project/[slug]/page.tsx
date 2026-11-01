import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageSeo } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { notFound } from 'next/navigation'
import { getAllProjects, getProjectBySlug } from "../../../../lib/projects";
import markdownToHtml from "../../../../lib/markdownToHtml";
import ProjectClient from "./ProjectClient";

interface ProjectPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects(routing.defaultLocale, ["slug"]);

  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  try {
    const { locale, slug } = await params;
    const project = getProjectBySlug(slug, locale, [
      "title",
      "excerpt",
      "image",
    ]);

    return {
      title: project.title,
      description: project.excerpt,
      ...pageSeo(locale, `/project/${slug}`),
      openGraph: {
        ...pageSeo(locale, `/project/${slug}`).openGraph,
        type: "article",
        title: project.title,
        description: project.excerpt,
        images: project.image ? [
          {
            url: project.image,
            alt: project.title,
          },
        ] : undefined,
      },
      twitter: { card: "summary_large_image", title: project.title, description: project.excerpt, images: project.image ? [project.image] : undefined },
    };
  } catch (error) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta.projectNotFound" });
    return { title: t("title"), description: t("description") };
  }
}

export default async function Project({ params }: ProjectPageProps) {
  let project;
  let content = "";
  
  try {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    project = getProjectBySlug(slug, locale, [
      "title",
      "date",
      "slug",
      "address",
      "content",
      "image",
      "excerpt",
    ]);
    
    // Process markdown content if it exists
    if (project.content) {
      content = await markdownToHtml(project.content);
    }
  } catch (error) {
    // If project is not found, use Next.js built-in notFound function
    notFound();
  }

  return <ProjectClient project={project} content={content} />;
}
