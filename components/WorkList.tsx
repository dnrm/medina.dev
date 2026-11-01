"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Item = { slug: string; title: string; excerpt?: string; image?: string; date?: string };

// date is "dd-mm-yyyy"
const year = (d?: string) => d?.split("-")[2] ?? "";
// sortable key yyyymmdd
const key = (d?: string) => d?.split("-").reverse().join("") ?? "";

export default function WorkList({ projects: items }: { projects: Item[] }) {
  const t = useTranslations("work");
  const [desc, setDesc] = useState(true); // default: most recent first
  const projects = [...items].sort((a, b) => (desc ? key(b.date).localeCompare(key(a.date)) : key(a.date).localeCompare(key(b.date))));
  const [active, setActive] = useState<string | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  // image trails the cursor; set via ref so mouse moves don't re-render
  const move = (e: React.MouseEvent) => {
    if (preview.current) preview.current.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 110}px)`;
  };

  return (
    <>
    <div className="mb-3 flex justify-end">
      <button
        type="button"
        onClick={() => setDesc((v) => !v)}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {t("sortYear")}: {desc ? t("newest") : t("oldest")} <span aria-hidden>{desc ? "↓" : "↑"}</span>
      </button>
    </div>
    <ul className="border-t" onMouseMove={move} onMouseLeave={() => setActive(null)}>
      {projects.map((p, i) => (
        <li key={p.slug} className="border-b">
          <Link
            href={`/project/${p.slug}`}
            onMouseEnter={() => setActive(p.slug)}
            onFocus={() => setActive(p.slug)}
            onBlur={() => setActive(null)}
            className={`group flex items-center gap-4 py-6 transition-opacity duration-300 md:gap-8 md:py-8 ${
              active && active !== p.slug ? "opacity-30" : ""
            }`}
          >
            <span className="w-8 shrink-0 text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            {p.image && (
              <Image src={p.image} alt="" width={160} height={120} className="aspect-[4/3] w-20 shrink-0 rounded-lg object-cover md:hidden" />
            )}
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-2 md:text-5xl">
                {p.title}
              </h2>
              <p className="mt-1 line-clamp-2 text-pretty text-muted-foreground md:max-w-xl">{p.excerpt}</p>
            </div>
            <span className="hidden text-muted-foreground md:block">{year(p.date)}</span>
            <span aria-hidden className="text-2xl text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground">↗</span>
          </Link>
        </li>
      ))}

      {/* hover preview, desktop only; all images mounted so they're preloaded */}
      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-[220px] w-[290px] will-change-transform md:block"
      >
        {projects.map((p) => p.image && (
          <Image
            key={p.slug}
            src={p.image}
            alt=""
            width={580}
            height={440}
            className={`absolute inset-0 size-full rounded-xl object-cover shadow-2xl transition-all duration-300 ${
              active === p.slug ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          />
        ))}
      </div>
    </ul>
    </>
  );
}
