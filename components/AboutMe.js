"use client";

import {
  Container,
  Text,
  Heading,
  Image as StyledImage,
} from "@chakra-ui/react";
import { width, padding } from "../lib/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("about");
  return (
    <>
      <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
        <StyledImage borderColor="border.emphasized" borderWidth={2} mb={4} borderRadius="full" height={150} width={150} objectFit="cover" objectPosition="50% 45%" asChild>
          <Image src="/me.jpg" alt={t("photoAlt")} width={600} height={800} priority />
        </StyledImage>
      </Container>
      <Container pt={4} maxW={width} px={padding}>
        <Heading
          fontSize={{ base: "2.3em", md: "3em" }}
          mb={4}
          letterSpacing={"-0.05em"}
          fontWeight={'semibold'}
        >
          {t("greeting")}
        </Heading>
        <Text color={{ base: "gray.600", _dark: "gray.400" }}>
          {t("intro")}
        </Text>
      </Container>
      <Container pt={16} maxW={width} px={padding}>
        <Heading>{t("heading")}</Heading>
        <Text
          color={{ base: "gray.600", _dark: "gray.400" }}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          {t("p1")}
        </Text>
        <br />
        <Text color={{ base: "gray.600", _dark: "gray.400" }}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}>
          {t("p2")}
        </Text>
        <br />
      </Container>
    </>
  );
}
