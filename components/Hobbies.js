import React from "react";
import Image from "next/image";
import { Container, Heading, Text, Grid } from "@chakra-ui/react";
import { width, padding } from '../lib/constants'

const Hobbies = () => {
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading pb={2} fontFamily="Work Sans, sans-serif">
        Hobbies 🎧
      </Heading>
      <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }} textAlign={'justify'}>
        I love to discover and make new types of coffee. My personal favourite
        coffees are cold brew and espresso. Another thing i really enjoy doing
        is collecting vinyl records. My favourite music genre is rock. I enjoy
        music from{" "}
        <b>
          <i>
            Oasis, The Beatles, The Verve, Pulp, Radiohead, and The Cranberries
          </i>
        </b>
        . I also like other artists that aren&apos;t rock such as{" "}
        <b>
          <i>Billie Eilish, Cavetown, Conan Gray, FINNEAS, Coldplay</i>
        </b>
        , and more. I have a pet dog called Toby, he&apos;s a Golden Doodle.
      </Text>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        h={{ base: "120vh", md: "35vh" }}
        gap={4}
      >
        <Container position="relative" border="2px solid white">
          <Image
            objectFit="cover"
            src="/breville.jpeg"
            layout="fill"
            alt="Espresso cup"
            blurDataURL="/breville.min.jpeg"
            placeholder="blur"
          />
        </Container>
        <Container position="relative" border="2px solid white">
          <Image
            objectFit="cover"
            src="/cold-brew.jpg"
            layout="fill"
            alt="Cold brew glass"
            blurDataURL="/cold-brew.min.jpg"
            placeholder="blur"
          />
        </Container>
        <Container position="relative" border="2px solid white">
          <Image
            objectFit="cover"
            src="/toby.jpeg"
            layout="fill"
            alt="Toby"
            blurDataURL="/toby-min.jpeg"
            placeholder="blur"
          />
        </Container>
      </Grid>
    </Container>
  );
};

export default Hobbies;
