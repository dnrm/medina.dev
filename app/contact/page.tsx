import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Daniel Medina. Find me on social media or send me a direct message.",
};

export default function Contact() {
  return <ContactClient />;
}
