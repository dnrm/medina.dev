import React from "react";
import Image from "next/legacy/image";
import { width, padding } from "../lib/constants";
import { useColorModeValue } from "@chakra-ui/react";
import { Container, Heading, Text, Grid } from "@chakra-ui/react";

const Hobbies = () => {
  const border = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading pb={2} fontFamily="Work Sans, sans-serif">
        Hobbies 🎧
      </Heading>
      <Text
        textColor={textColor}
        fontSize={{ base: "0.9em", md: "1em" }}
        textAlign={"justify"}
      >
        I love coffee. I like to try different brewing methods and recipes. My
        favourite drinks are lattes and pour over coffee. Another thing I really
        enjoy doing is collecting vinyl records. My favourite music genres are
        rock and pop. I enjoy music from{" "}
        <b>
          <i>
            Clairo, The Midnight, Natalia Lafourcade, Ladyhawke, Coldplay,
            Sabrina Carpenter
          </i>
        </b>
        , and more. I have a pet dog called Toby, he&apos;s a Golden Doodle.
      </Text>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        h={{ base: "120vh", md: "35vh" }}
        gap={4}
      >
        <Container
          position="relative"
          borderColor={border}
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/coffee.jpeg"
              layout="fill"
              alt="Espresso cup"
              blurDataURL="/breville.min.jpeg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          borderColor={border}
          borderWidth={2}
          padding={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/IMG_6059.JPG"
              layout="fill"
              alt="Cold brew glass"
              blurDataURL="/cold-brew.min.jpg"
              placeholder="blur"
            />
          </Container>
        </Container>
        <Container
          position="relative"
          borderColor={border}
          borderWidth={2}
          p={2.5}
          rounded="lg"
        >
          <Container pos="relative" w="full" h="full">
            <Image
              objectFit="cover"
              src="/toby.jpeg"
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
