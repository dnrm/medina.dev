"use client";

import Image from "next/image";
import Navbar from "../../../../components/layouts/Navbar";
import Footer from "../../../../components/Footer";
import { MotionDiv } from "../../../../components/ui/MotionDiv";
import { Project } from "../../../../types/project";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface ProjectClientProps {
  project: Project;
  content: string;
}

// date is "dd-mm-yyyy"
const year = (d?: string) => d?.split("-")[2] ?? "";

export default function ProjectClient({ project, content }: ProjectClientProps) {
  const t = useTranslations("project");
  // the title and excerpt are rendered in the header; drop the markdown's leading <h1>
  const body = content.replace(/^\s*<h1>.*?<\/h1>\s*/s, "");
  const host = project.address?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <header className="page mt-10 md:mt-16">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {t("back")}
          </Link>

          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
            {project.title}
          </h1>
          {project.excerpt && (
            <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">{project.excerpt}</p>
          )}

          <dl className="mt-10 grid grid-cols-2 gap-6 border-y py-5 text-sm md:mt-14">
            <div>
              <dt className="text-muted-foreground">{t("year")}</dt>
              <dd className="mt-1 font-medium tabular-nums">{year(project.date)}</dd>
            </div>
            {project.address && (
              <div>
                <dt className="text-muted-foreground">{t("site")}</dt>
                <dd className="mt-1">
                  <a
                    href={project.address}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("visit")}: ${host}`}
                    className="group inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
                  >
                    {host}
                    <span aria-hidden className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground">↗</span>
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div className="page mt-10 md:mt-14">
          <Image
            src={project.image}
            width={1500}
            height={1000}
            alt={project.title}
            priority
            className="h-auto w-full rounded-xl border"
          />
        </div>

        {body && (
          <div className="page mt-14 md:mt-20">
            <div
              className="prose dark:prose-invert max-w-[65ch] text-pretty prose-p:text-lg prose-a:underline prose-a:underline-offset-4 prose-headings:font-semibold prose-headings:tracking-tight"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
        )}

        <div className="page mt-20 pb-24">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-lg font-medium"
          >
            <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {t("back")}
          </Link>
        </div>
        <Footer />
      </MotionDiv>
    </>
  );
}
