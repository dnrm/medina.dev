import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "../../styles/globals.css";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { pageSeo, SITE_URL } from "@/lib/seo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://medina.dev"),
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    keywords: t("keywords").split(", "),
    authors: [{ name: "Daniel Medina" }],
    creator: "Daniel Medina",
    ...pageSeo(locale),
    openGraph: {
      ...pageSeo(locale).openGraph,
      type: "website",
      siteName: "Daniel Medina",
      locale: t("ogLocale"),
      alternateLocale: t("ogLocale") === "en_US" ? "es_MX" : "en_US",
      title: t("title"),
      description: t("description"),
      images: [{ url: "/dm.png", width: 870, height: 435, alt: t("title") }],
    },
    robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/dm.png"],
    },
    icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Daniel Medina",
        url: SITE_URL,
        image: `${SITE_URL}/me.jpg`,
        jobTitle: t("jobTitle"),
        alumniOf: "Tecnológico de Monterrey",
        knowsAbout: t("keywords").split(", "),
        sameAs: ["https://github.com/dnrm", "https://www.linkedin.com/in/dnrm/", "https://twitter.com/_dnrm"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Daniel Medina",
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <html lang={locale} className={geist.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QTFWKHLPEV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QTFWKHLPEV');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
