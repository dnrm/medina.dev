"use client";

import Technology from "./Technology";
import { width, padding } from "../lib/constants";
import { Grid, Container, Heading } from "@chakra-ui/react";

const technologies = [
  {
    name: "Next.js",
    description:
      "Next.js is a framework for building server-rendered applications.",
    src: "/nextjs.svg",
  },
  {
    name: "MongoDB",
    description: "MongoDB is a document-oriented database.",
    src: "/mongodb.svg",
  },
  {
    name: "React",
    description: "React is a library for building user interfaces.",
    src: "/react.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Tailwind CSS is a utility-first CSS framework.",
    src: "/tailwind.svg",
  },
  {
    name: "Vercel",
    description:
      "Vercel is a hosting platform for static and dynamic websites.",
    src: "/vercel.png",
  },
  {
    name: "GitHub",
    description: "GitHub is a web-based version control system.",
    src: "/github.png",
  },
  {
    name: "AWS",
    description: "AWS is a cloud computing platform.",
    src: "/aws.svg",
  },
  {
    name: "Visual Studio Code",
    description: "VSCode is a very powerful and extensible code editor.",
    src: "/vscode.svg",
  },
  {
    name: "iTerm 2",
    description: "iTerm 2 is a terminal emulator.",
    src: "/iterm2.svg",
  },
  {
    name: "Figma",
    description: "Figma is a design tool.",
    src: "/figma.png",
  },
];

const Technologies = () => {
  return (
    <Container pt={16} pb={10} maxW={width} px={padding}>
      <Heading pb={2}>
        My Favourite Technologies ⭐️
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "50% 50%" }}
        gap={2}
        mt={2}
        textColor="gray.400"
      >
        {technologies.map((i) => {
          return (
            <Technology
              title={i.name}
              key={i.name}
              src={i.src}
              description={i.description}
              fontSize={{ base: "0.8em", md: "0.9em" }}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Technologies;
