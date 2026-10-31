"use client";

import Image from "next/legacy/image";
import { width, padding } from "../lib/constants";
import { Container, Heading, Text, Grid } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const Hobbies = () => {
  const t = useTranslations("hobbies");
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading pb={2}>
        {t("heading")}
      </Heading>
      <Text
        color={{ base: "gray.700", _dark: "gray.500" }}
        fontSize={{ base: "0.9em", md: "1em" }}
        textAlign={"justify"}
      >
        {t.rich("text", {
          artists: (chunks) => (
            <b>
              <i>{chunks}</i>
            </b>
          ),
        })}
      </Text>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        h={{ base: "120vh", md: "50vh" }}
        gap={4}
      >
        <Container
          position="relative"
          borderColor="border.emphasized"
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/nn-cup.jpeg"
              layout="fill"
              alt={t("espressoAlt")}
              blurDataURL="/breville.min.jpeg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          borderColor="border.emphasized"
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/sf.jpeg"
              layout="fill"
              alt={t("coldBrewAlt")}
              blurDataURL="/cold-brew.min.jpg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          position="relative"
          borderColor="border.emphasized"
          borderWidth={2}
          p={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/dogs.jpeg"
              layout="fill"
              alt={t("dogAlt")}
              blurDataURL="/toby-min.jpeg"
              placeholder="blur"
            />
          </Container>
        </Container>
      </Grid>
    </Container>
  );
};

export default Hobbies;
