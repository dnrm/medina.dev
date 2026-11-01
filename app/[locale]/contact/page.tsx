import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactClient from "./ContactClient";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return { title: t("title"), description: t("description"), ...pageSeo(locale, "/contact") };
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactClient />;
}
