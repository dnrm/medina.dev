"use client";

import {
  Container,
  Text,
  Heading,
  Image as StyledImage,
} from "@chakra-ui/react";
import { width, padding } from "../lib/constants";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
        <StyledImage borderColor={{ base: "gray.300", _dark: "gray.600" }} borderWidth={2} mb={4} borderRadius={'full'} height={150} width={150} asChild>
          <Image src="/me.jpg" alt="Daniel Medina" width={250} height={250} />
        </StyledImage>
      </Container>
      <Container pt={4} maxW={width} px={padding}>
        <Heading
          fontSize={{ base: "2.3em", md: "3em" }}
          mb={4}
          letterSpacing={"-1px"}
          fontWeight={'semibold'}
        >
          Hi, I&apos;m Daniel Medina
        </Heading>
        <Text color={{ base: "gray.600", _dark: "gray.400" }}>
          Full-stack developer and Computer Science student at Tecnológico de Monterrey, creating technology solutions that make a real impact.
        </Text>
      </Container>
      <Container pt={16} maxW={width} px={padding}>
        <Heading>About Me 👨‍💻</Heading>
        <Text
          color={{ base: "gray.600", _dark: "gray.400" }}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          I&apos;m a full-stack software developer currently working at SAMLA, MedicFlow, and Blue Bird Consulting, where I bridge technical expertise with business strategy. I specialize in building scalable web applications using React.js, Next.js, and SQL that solve real business challenges through robust backend architecture and intuitive frontend design.
        </Text>
        <br />
        <Text color={{ base: "gray.600", _dark: "gray.400" }}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}>
          My portfolio showcases projects across healthcare, legal, and insurance industries where I&apos;ve delivered measurable impact. From developing HIPAA-compliant AI-powered medical applications to building law firm websites with integrated booking systems, I focus on translating business requirements into production-ready applications that provide genuine value to users and clients.
        </Text>
        <br />
      </Container>
    </>
  );
}
