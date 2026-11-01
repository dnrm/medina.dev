import { routing } from "@/i18n/routing";

export const SITE_URL = "https://medina.dev";

const localePath = (locale: string, path: string) =>
  locale === routing.defaultLocale ? path || "/" : `/${locale}${path}`;

/** Canonical + hreflang (incl. x-default) + og:url for a page path like "" or "/work". */
export function pageSeo(locale: string, path = "") {
  return {
    alternates: {
      canonical: localePath(locale, path),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localePath(l, path)])),
        "x-default": localePath(routing.defaultLocale, path),
      },
    },
    openGraph: { url: localePath(locale, path) },
  };
}
