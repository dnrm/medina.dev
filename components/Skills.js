"use client";

import { useTranslations } from "next-intl";

const skills = [
  "Next.js", "Supabase", "Typescript", "Javascript", "Prisma", "React", "Node.js", "ShadCN",
  "CSS", "MongoDB", "HTML", "AWS", "Docker", "Sass", "Cursor", "Tailwind CSS",
  "Vercel", "Bootstrap", "Chakra UI", "MySQL", "PostgreSQL", "Angular", "Git", "Figma",
];

// brand colors on hover; near-black brands use a mid grey so they stay visible in dark mode
const colors = {
  "Next.js": "#a1a1aa", Supabase: "#3ecf8e", Typescript: "#3178c6", Javascript: "#f7df1e",
  Prisma: "#2d9cdb", React: "#61dafb", "Node.js": "#68a063", ShadCN: "#a1a1aa",
  CSS: "#2965f1", MongoDB: "#47a248", HTML: "#e34f26", AWS: "#ff9900",
  Docker: "#2496ed", Sass: "#cc6699", Cursor: "#a1a1aa", "Tailwind CSS": "#38bdf8",
  Vercel: "#a1a1aa", Bootstrap: "#7952b3", "Chakra UI": "#319795", MySQL: "#4479a1",
  PostgreSQL: "#336791", Angular: "#dd0031", Git: "#f05032", Figma: "#a259ff",
};

// three rows, alternating direction and speed
const rows = [
  { items: skills.slice(0, 8), dur: "35s", reverse: false },
  { items: skills.slice(8, 16), dur: "45s", reverse: true },
  { items: skills.slice(16), dur: "40s", reverse: false },
];

const Skills = () => {
  const t = useTranslations("skills");
  return (
    <section className="section">
      <h2 className="section-title mb-8">{t("heading")}</h2>
      <div
        className="flex flex-col gap-3 overflow-hidden py-4"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}
      >
        {rows.map(({ items, dur, reverse }, r) => (
          <div key={r} className="marquee-wrap">
            <ul className={`marquee ${reverse ? "reverse" : ""}`} style={{ "--dur": dur }}>
              {[...items, ...items].map((name, i) => (
                <li key={i} aria-hidden={i >= items.length} className="pr-3">
                  <span style={{ "--c": colors[name] }} className="block cursor-default rounded-full border px-5 py-2.5 text-lg text-foreground/80 transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:-rotate-2 hover:border-[var(--c)] hover:bg-[color-mix(in_srgb,var(--c)_12%,transparent)] hover:text-[var(--c)] md:text-2xl">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
