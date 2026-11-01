"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const photos = [
  { src: "/cafe-taller.jpg", altKey: "espressoAlt", blur: "/cafe-taller-min.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/nyc-window.jpg", altKey: "cityAlt", blur: "/nyc-window-min.jpg", span: "" },
  { src: "/dogs.jpeg", altKey: "dogAlt", blur: "/toby-min.jpeg", span: "" },
];

const Hobbies = () => {
  const t = useTranslations("hobbies");
  return (
    <section className="section">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="section-title">{t("heading")}</h2>
        <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {t.rich("text", {
            artists: (chunks) => <i className="font-medium text-foreground">{chunks}</i>,
          })}
        </p>
      </div>
      <div className="mt-12 grid auto-rows-[16rem] grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-4">
        {photos.map(({ src, altKey, blur, span }) => (
          <div key={src} className={`relative overflow-hidden rounded-2xl bg-muted ${span}`}>
            <Image
              src={src}
              alt={t(altKey)}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              blurDataURL={blur}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
