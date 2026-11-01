import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/Footer";
import WorkList from "../../../components/WorkList";
import { getAllProjects } from "../../../lib/projects";
import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "../../../components/ui/MotionDiv";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.work" });
  return { title: t("title"), description: t("description"), ...pageSeo(locale, "/work") };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");
  const projects = getAllProjects(locale, [
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
    "excerpt",
    "order",
  ]).sort((a, b) => {
    const orderA = a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
    const orderB = b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <div className="page pb-12 pt-16">
          <h1 className="mb-4 text-[2.3em] font-semibold tracking-[-1px] md:text-[3em]">{t("heading")}</h1>
          <p className="mb-10 text-muted-foreground">{t("subtitle")}</p>
          <WorkList projects={projects.map(({ slug, title, excerpt, image, date }) => ({ slug, title, excerpt, image, date }))} />
        </div>
        <div className="page pb-10">
          <Separator />
        </div>
        <div className="page">
          <Footer />
        </div>
      </MotionDiv>
    </div>
  );
}
