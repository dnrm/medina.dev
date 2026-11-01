"use client";

import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/Footer";
import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "../../../components/ui/MotionDiv";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

const EMAIL = "daniel@medina.com";
const socials = [
  { name: "GitHub", handle: "@dnrm", href: "https://github.com/dnrm", key: "github", Icon: Github },
  { name: "LinkedIn", handle: "in/dnrm", href: "https://www.linkedin.com/in/dnrm/", key: "linkedin", Icon: Linkedin },
  { name: "Twitter", handle: "@_dnrm", href: "https://twitter.com/_dnrm", key: "twitter", Icon: Twitter },
];

export default function ContactClient() {
  const t = useTranslations("contact");
  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <div className="page pb-10 pt-16">
          <p className="mb-3 text-muted-foreground">{t("heading")}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="break-all text-[2.2em] font-semibold tracking-[-1.5px] underline-offset-8 transition-colors hover:text-blue-500 hover:underline sm:text-[3.5em] md:text-[4.5em]"
          >
            {EMAIL}
          </a>
        </div>
        <div className="page">
          <div className="divide-y border-y">
            {socials.map(({ name, handle, href, key, Icon }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer"
                className="group flex items-center gap-4 py-5 transition-colors hover:text-blue-500">
                <Icon className="size-6 shrink-0" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{name} <span className="font-normal text-muted-foreground">{handle}</span></h2>
                  <p className="text-muted-foreground">{t(key)}</p>
                </div>
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="page py-10">
          <Separator />
        </div>
        <Footer />
      </MotionDiv>
    </div>
  );
}
