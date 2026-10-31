"use client";

import {
  Box,
  Container,
  Text,
  Heading,
  Image as StyledImage,
} from "@chakra-ui/react";
import { width, padding } from "../lib/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AsciiHero from "./AsciiHero";
import ScrambleText from "./ScrambleText";

export default function AboutMe() {
  const t = useTranslations("about");
  return (
    <>
      <Box
        position="relative"
        w="100%"
        h="100svh"
        overflow="hidden"
        cursor="crosshair"
      >
        <AsciiHero alt={t("asciiAlt")} />
        {/* scrim so the text stays readable over the ASCII */}
        <Box
          position="absolute"
          inset={0}
          pointerEvents="none"
          bgGradient="to-r"
          gradientFrom="bg"
          gradientVia="bg/70"
          gradientTo="transparent"
        />
        <Container
          position="absolute"
          inset={0}
          maxW={width}
          px={padding}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="left"
          pointerEvents="none"
        >
          <StyledImage borderColor="border.emphasized" borderWidth={2} mb={6} borderRadius="full" height={{ base: 120, md: 150 }} width={{ base: 120, md: 150 }} objectFit="cover" objectPosition="50% 45%" asChild>
            <Image src="/me.jpg" alt={t("photoAlt")} width={600} height={800} priority />
          </StyledImage>
          <Heading
            as="h1"
            fontSize={{ base: "2.3em", md: "3em" }}
            mb={4}
            letterSpacing={"-0.05em"}
            fontWeight={'semibold'}
            pointerEvents="auto"
            cursor="default"
          >
            <ScrambleText text={t("greeting")} />
          </Heading>
          <Text color={{ base: "gray.600", _dark: "gray.400" }} maxW="52ch">
            {t("intro")}
          </Text>
        </Container>
      </Box>
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
