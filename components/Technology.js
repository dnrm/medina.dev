"use client"

import Image from "next/image";

const Technology = (props) => {
  return (
    <div className="flex items-start gap-4 border-t border-border py-5">
      {props.src && (
        <Image
          width={48}
          height={48}
          src={props.src}
          alt={props.alt || "Technology logo"}
          className="size-12 shrink-0 rounded-xl border border-border bg-white object-contain p-2"
        />
      )}
      <div className="flex flex-col">
        <h3 className="font-semibold tracking-tight">{props.title}</h3>
        <p className="text-pretty text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};

export default Technology;
