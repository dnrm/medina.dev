"use client";

import Technology from "./Technology";
import { useTranslations } from "next-intl";

const technologies = [
  { id: "claudecode", name: "Claude Code", src: "/claude-code.gif" },
  { id: "nextjs", name: "Next.js", src: "/nextjs.svg" },
  { id: "aws", name: "AWS", src: "/aws.svg" },
  { id: "postgresql", name: "PostgreSQL", src: "/postgresql.svg" },
  { id: "vercel", name: "Vercel", src: "/vercel.png" },
  { id: "tailwind", name: "TailwindCSS", src: "/tailwind.svg" },
];

const Technologies = () => {
  const t = useTranslations("technologies");
  return (
    <section className="section pb-10">
      <h2 className="section-title mb-8">{t("heading")}</h2>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        {technologies.map((i) => (
          <Technology
            title={i.name}
            key={i.name}
            src={i.src}
            description={t(`items.${i.id}`)}
            alt={t("logoAlt")}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
