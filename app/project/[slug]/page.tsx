import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllProjects, getProjectBySlug } from "../../../lib/projects";
import markdownToHtml from "../../../lib/markdownToHtml";
import ProjectClient from "./ProjectClient";

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects(["slug"]);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug, [
      "title",
      "excerpt",
      "image",
    ]);

    return {
      title: project.title,
      description: project.excerpt,
      openGraph: {
        title: project.title,
        description: project.excerpt,
        images: project.image ? [
          {
            url: project.image,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ] : undefined,
      },
    };
  } catch (error) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }
}

export default async function Project({ params }: ProjectPageProps) {
  let project;
  let content = "";
  
  try {
    const { slug } = await params;
    project = getProjectBySlug(slug, [
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
