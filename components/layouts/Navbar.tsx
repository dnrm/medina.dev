"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", key: "home" },
  { href: "/work", key: "work" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar({ floating = false }: { floating?: boolean }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale = locale === "en" ? "es" : "en";
  return (
    <div
      className={cn(
        "page pt-12 md:pt-28",
        floating && "absolute inset-x-0 top-0 z-[2]"
      )}
    >
      <div className="flex items-center justify-between">
        <nav className="flex">
          {links.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="px-2 text-[0.8em] text-muted-foreground first:pl-0 hover:underline md:text-[1em]"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
        <div
          className={cn(
            "flex items-center gap-1",
            floating && "rounded-lg border border-border bg-background/80 p-0.5 backdrop-blur-sm"
          )}
        >
          <Button
            variant="ghost"
            size="sm"
            className="px-2 font-semibold"
            aria-label={t("switchLanguage")}
            onClick={() => router.replace(pathname, { locale: otherLocale })}
          >
            {t("otherLanguage")}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
