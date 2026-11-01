"use client";

import Image from "next/legacy/image";
import { useTranslations } from "next-intl";

const VinylRecord = ({ title, artist, cover, link }) => {
  const t = useTranslations("vinyl");
  return (
    <div className="w-full rounded-lg bg-muted">
      <div className="min-w-24">
        <a target="_blank" rel="noreferrer" href={cover}>
          <Image
            src={cover}
            alt={t("coverAlt", { title, artist })}
            height="1000"
            width="1000"
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/album.png"
          />
        </a>
      </div>
      <div className="flex w-full flex-col p-4">
        <h3 className="block text-[1em] font-bold tracking-tighter md:text-[1.5em]">
          <a className="block" href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default VinylRecord;
