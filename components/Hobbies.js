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
      <div className="-mx-6 mt-12 overflow-x-clip md:mx-0 md:overflow-visible">
      <div className="hobbies-pan flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] px-6 md:grid md:auto-rows-[14rem] md:grid-cols-4 md:overflow-visible md:px-0">
        {photos.map(({ src, altKey, blur, span }) => (
          <div key={src} className={`relative h-64 w-[80%] shrink-0 snap-center overflow-hidden rounded-2xl bg-muted md:h-auto md:w-auto ${span}`}>
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
      </div>
    </section>
  );
};

export default Hobbies;
