import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "../../styles/globals.css";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";

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
    keywords: [
      "Daniel Medina",
      "Web Developer",
      "React",
      "Next.js",
      "MERN Stack",
      "AWS",
      "Vercel",
    ],
    authors: [{ name: "Daniel Medina" }],
    creator: "Daniel Medina",
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: { en: "/", es: "/es" },
    },
    openGraph: {
      type: "website",
      locale: t("ogLocale"),
      url: "https://medina.dev/",
      title: t("title"),
      description: t("description"),
      images: [{ url: "/dm.png", width: 1200, height: 630, alt: t("title") }],
    },
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

  return (
    <html lang={locale} className={geist.variable} suppressHydrationWarning>
      <head>
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
