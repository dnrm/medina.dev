"use client";

import Image from "next/legacy/image";
import { width, padding } from "../lib/constants";
import { Container, Heading, Text, Grid } from "@chakra-ui/react";

const Hobbies = () => {
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading pb={2}>
        Hobbies 🎧
      </Heading>
      <Text
        textColor={{ base: "gray.700", _dark: "gray.500" }}
        fontSize={{ base: "0.9em", md: "1em" }}
        textAlign={"justify"}
      >
        I love coffee. I like to try different brewing methods and recipes. My
        favourite drinks are lattes and pour over coffee. Another thing I really
        enjoy doing is collecting vinyl records. My favourite music genres are
        rock and pop. I enjoy music from{" "}
        <b>
          <i>
            Clairo, The Midnight, Oasis, Fleetwood Mac, Coldplay,
            Sabrina Carpenter
          </i>
        </b>
        , and more. I have two pet dogs called Toby and Milo, they&apos;re both golden doodles.
      </Text>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        h={{ base: "120vh", md: "50vh" }}
        gap={4}
      >
        <Container
          position="relative"
          borderColor={{ base: "gray.300", _dark: "gray.700" }}
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/nn-cup.jpeg"
              layout="fill"
              alt="Espresso cup"
              blurDataURL="/breville.min.jpeg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          borderColor={{ base: "gray.300", _dark: "gray.700" }}
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/sf.jpeg"
              layout="fill"
              alt="Cold brew glass"
              blurDataURL="/cold-brew.min.jpg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          position="relative"
          borderColor={{ base: "gray.300", _dark: "gray.700" }}
          borderWidth={2}
          p={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/dogs.jpeg"
              layout="fill"
              alt="Toby"
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
