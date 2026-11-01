import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import Certification from "../../../components/Certification";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/Footer";
import { certifications } from "../../../lib/certifications";
import { MotionDiv } from "../../../components/ui/MotionDiv";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.certifications" });
  return { title: t("title"), description: t("description"), ...pageSeo(locale, "/certifications") };
}

export default async function Certifications({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("certifications");
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
          <p className="mb-4 text-muted-foreground">{t("subtitle")}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {certifications.map((cert) => {
              return (
                <Certification
                  key={cert.title}
                  title={cert.title}
                  href={cert.href}
                  src={cert.src}
                >
                  {t(`items.${cert.id}`)}
                </Certification>
              );
            })}
          </div>
        </div>
        <div className="page pb-10">
          <Separator />
        </div>
        <Footer />
      </MotionDiv>
    </div>
  );
}
