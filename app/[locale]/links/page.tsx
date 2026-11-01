import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

// ponytail: third copy of socials (ContactClient, Footer); extract to lib/socials.ts if a 4th appears
const socials = [
  { name: "GitHub", href: "https://github.com/dnrm", Icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dnrm/", Icon: Linkedin },
  { name: "X", href: "https://twitter.com/_dnrm", Icon: Twitter },
  { name: "Email", href: "mailto:daniel@medina.com", Icon: Mail },
];

const FEATURED = ["studio-kastanien", "mc2-legal", "alfred"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.links" });
  return { title: t("title"), description: t("description"), ...pageSeo(locale, "/links") };
}

export default async function Links({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("links");
  const about = await getTranslations("about");
  const nav = await getTranslations("nav");
  const projects = FEATURED.map((slug) => getProjectBySlug(slug, locale, ["title", "slug", "excerpt", "address"]));

  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center gap-8 px-4 py-12">
      <Link
        href="/links"
        locale={locale === "en" ? "es" : "en"}
        aria-label={nav("switchLanguage")}
        className="absolute right-4 top-4 flex h-10 items-center rounded-full border bg-card px-4 text-sm font-medium transition-colors hover:bg-accent"
      >
        {nav("otherLanguage")}
      </Link>

      <header className="flex flex-col items-center gap-3 text-center">
        <Image
          src="/me.jpg"
          alt={about("photoAlt")}
          width={112}
          height={112}
          priority
          className="size-28 rounded-full object-cover object-[50%_45%]"
        />
        <h1 className="text-3xl font-semibold tracking-tight">Daniel Medina</h1>
        <p className="text-sm text-muted-foreground">{about("position")}</p>
      </header>

      <nav aria-label="Social" className="flex gap-3">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex size-12 items-center justify-center rounded-full border bg-card transition-colors hover:bg-accent"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </nav>

      <Link
        href="/"
        className="flex w-full items-center justify-between rounded-2xl border bg-card p-4 font-heading font-medium transition-colors hover:bg-accent"
      >
        {t("mainSite")}
        <ArrowUpRight className="size-4 shrink-0" />
      </Link>

      <section className="flex w-full flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">{t("recentProjects")}</h2>
        {projects.map((p) => (
          <a
            key={p.slug}
            href={p.address}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-2xl border bg-card p-4 transition-colors hover:bg-accent"
          >
            <span className="min-w-0">
              <span className="block font-heading font-medium">{p.title}</span>
              <span className="line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0" />
          </a>
        ))}
      </section>
    </main>
  );
}
