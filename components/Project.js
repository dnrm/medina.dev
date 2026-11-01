"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

const Project = (props) => {
  return (
    <Link href={"/project/" + props.slug} className="group block rounded-2xl outline-offset-4">
      {props.image && (
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            width={800}
            height={600}
            src={props.image}
            alt={props.title}
            className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{props.title}</h3>
        <span
          aria-hidden
          className="mt-1 text-xl text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
        >
          ↗
        </span>
      </div>
      <p className="mt-1 line-clamp-2 text-pretty text-muted-foreground">{props.excerpt}</p>
    </Link>
  );
};

export default Project;
