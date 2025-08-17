import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "../styles/globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Medina - Web Developer",
    template: "%s | Daniel Medina",
  },
  description:
    "My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel.",
  keywords: [
    "Daniel Medina",
    "Web Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "AWS",
    "Vercel",
  ],
  authors: [{ name: "Daniel Medina" }],
  creator: "Daniel Medina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medina.dev/",
    title: "Daniel Medina - Web Developer",
    description:
      "My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel.",
    images: [
      {
        url: "/dm.png",
        width: 1200,
        height: 630,
        alt: "Daniel Medina - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Medina - Web Developer",
    description:
      "My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel.",
    images: ["/dm.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QTFWKHLPEV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QTFWKHLPEV');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
