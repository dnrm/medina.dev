"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/dnrm", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/dnrm/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://twitter.com/_dnrm", label: "Twitter", Icon: Twitter },
  { href: "mailto:daniel@medina.com", label: "Email", Icon: Mail },
];

const linkClass = "underline-offset-4 transition-colors hover:text-foreground hover:underline";

const Footer = () => {
  const t = useTranslations("footer");
  const [playing, setPlaying] = useState();
  const [notes, setNotes] = useState([]);
  const last = useRef(0);

  const spawnNote = (e) => {
    const now = Date.now();
    if (now - last.current < 90) return; // throttle
    last.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const note = {
      id: now,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      c: ["♪", "♫", "♩", "♬"][Math.floor(Math.random() * 4)],
      dx: Math.round(Math.random() * 40 - 20),
      r: Math.round(Math.random() * 60 - 30),
    };
    setNotes((n) => [...n, note]);
  };

  useEffect(() => {
    const get = async () => {
      const response = await fetch("/api/spotify");
      const json = await response.json();
      setPlaying(json);
    };

    get();
  }, []);

  return (
    <footer className="page pb-16">
      <div
        onMouseMove={spawnNote}
        className="relative flex items-center gap-3 rounded-2xl bg-muted px-4 py-3 text-muted-foreground"
      >
        {notes.map((n) => (
          <span
            key={n.id}
            aria-hidden
            onAnimationEnd={() => setNotes((all) => all.filter((x) => x.id !== n.id))}
            className="pointer-events-none absolute z-10 text-xl text-foreground"
            style={{
              left: n.x,
              top: n.y,
              "--dx": `${n.dx}px`,
              "--r": `${n.r}deg`,
              animation: "note-float 0.9s ease-out forwards",
            }}
          >
            {n.c}
          </span>
        ))}
        <div className="size-5 shrink-0">
          <svg viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            ></path>
          </svg>
        </div>
        {playing ? (
          <p>
            {playing?.isPlaying == true ? (
              <a
                className={`${linkClass} disco`}
                href={playing.songUrl}
                target="_blank"
                rel="noreferrer"
              >
                {playing.title}
              </a>
            ) : (
              t("notPlaying")
            )}{" "}
            - {playing?.isPlaying == true ? playing.artist : "Spotify"}
          </p>
        ) : (
          <div className="h-4 w-48 animate-pulse rounded bg-foreground/10" aria-label="Loading" />
        )}
      </div>
      <div className="grid gap-10 pt-12 sm:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-lg font-semibold text-foreground">dnrm.dev</Link>
          <p className="max-w-xs text-muted-foreground">{t("tagline")}</p>
          <div className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <h3 className="mb-1 text-sm font-medium text-foreground">{t("explore")}</h3>
          <Link className={linkClass} href="/work">{t("projects")}</Link>
          <Link className={linkClass} href="/certifications">{t("certifications")}</Link>
          <Link className={linkClass} href="/vinyl">{t("vinyl")}</Link>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <h3 className="mb-1 text-sm font-medium text-foreground">{t("connect")}</h3>
          <Link className={linkClass} href="/contact">{t("contact")}</Link>
          <a className={linkClass} href="https://open.spotify.com/user/dany.mm" target="_blank" rel="noreferrer">Spotify</a>
          <a className={linkClass} href="https://www.linkedin.com/in/dnrm/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t("rights")}
      </div>
    </footer>
  );
};

export default Footer;
