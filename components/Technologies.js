"use client";

import Technology from "./Technology";
import { useTranslations } from "next-intl";
import { width, padding } from "../lib/constants";
import { Grid, Container, Heading } from "@chakra-ui/react";

const technologies = [
  {
    id: "nextjs",
    name: "Next.js",
    src: "/nextjs.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    src: "/mongodb.svg",
  },
  {
    id: "react",
    name: "React",
    src: "/react.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    src: "/tailwind.svg",
  },
  {
    id: "vercel",
    name: "Vercel",
    src: "/vercel.png",
  },
  {
    id: "github",
    name: "GitHub",
    src: "/github.png",
  },
  {
    id: "aws",
    name: "AWS",
    src: "/aws.svg",
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    src: "/vscode.svg",
  },
  {
    id: "iterm",
    name: "iTerm 2",
    src: "/iterm2.svg",
  },
  {
    id: "figma",
    name: "Figma",
    src: "/figma.png",
  },
];

const Technologies = () => {
  const t = useTranslations("technologies");
  return (
    <Container pt={16} pb={10} maxW={width} px={padding}>
      <Heading pb={2}>
        {t("heading")}
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "50% 50%" }}
        gap={2}
        mt={2}
        color="fg.muted"
      >
        {technologies.map((i) => {
          return (
            <Technology
              title={i.name}
              key={i.name}
              src={i.src}
              description={t(`items.${i.id}`)}
              alt={t("logoAlt")}
              fontSize={{ base: "0.8em", md: "0.9em" }}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Technologies;
