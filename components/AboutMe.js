"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AsciiHero from "./AsciiHero";
import ScrambleText from "./ScrambleText";

export default function AboutMe() {
  const t = useTranslations("about");
  return (
    <>
      <div className="relative h-svh w-full cursor-crosshair overflow-hidden">
        <AsciiHero alt={t("asciiAlt")} />
        {/* scrim so the text stays readable over the ASCII */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="page pointer-events-none absolute inset-0 flex flex-col items-start justify-center text-left">
          <Image
            src="/me.jpg"
            alt={t("photoAlt")}
            width={600}
            height={800}
            priority
            className="mb-6 size-[120px] rounded-full border-2 border-border object-cover object-[50%_45%] md:size-[150px]"
          />
          <h1 className="pointer-events-auto mb-2 cursor-default text-[2.3em] font-semibold tracking-[-0.05em] md:text-[3em]">
            <ScrambleText text={t("greeting")} />
          </h1>
          <p className="mb-4 text-sm font-medium text-foreground/80 md:text-base">{t("position")}</p>
          <p className="max-w-[52ch] text-muted-foreground">{t("intro")}</p>
        </div>
      </div>
      <section className="section grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="section-title">{t("heading")}</h2>
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </section>
    </>
  );
}
