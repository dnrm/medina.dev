"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Certification = ({ title, src, children, href }) => {
  const t = useTranslations("certifications");
  return (
    <div className="group relative">
      <div className="aspect-[2/1] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={src}
          height={400}
          width={800}
          alt={t("imageAlt")}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          blurDataURL="/cert_placeholder.jpeg"
          placeholder="blur"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {/* stretched link: whole card is clickable */}
        <a href={href} className="after:absolute after:inset-0">
          {title}
        </a>
      </h3>
      <p className="mt-1 text-pretty text-muted-foreground">{children}</p>
    </div>
  );
};

export default Certification;
