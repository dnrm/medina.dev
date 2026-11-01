"use client";

import Project from "./Project";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Projects = ({ projects }) => {
  const t = useTranslations("projects");
  const filteredProjects = projects.filter((project) => project.landingpage !== false).slice(0, 4); // 2x2 grid

  return (
    <section className="section">
      <h2 className="section-title mb-8">{t("heading")}</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Project
            key={project.slug}
            title={project.title}
            slug={project.slug}
            excerpt={project.excerpt}
            image={project.image}
          />
        ))}
      </div>
      <Link href="/work" className="group mt-12 inline-flex items-center gap-2 text-lg font-medium">
        {t("seeAll")}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </section>
  );
};

export default Projects;
