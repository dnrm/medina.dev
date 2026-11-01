"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Certification from "./Certification";
import { certifications } from "../lib/certifications";

const Certifications = () => {
  const t = useTranslations("certifications");
  return (
    <section className="section">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="section-title">{t("heading")}</h2>
        <Link
          href="/certifications"
          className="shrink-0 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {t("viewAll")}
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.slice(0, 2).map((i) => (
          <Certification key={i.title} title={i.title} href={i.href} src={i.src}>
            {t(`items.${i.id}`)}
          </Certification>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
