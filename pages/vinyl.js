import React from "react";
import { Container, Heading, Stack, Flex, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const width = "90ch";
const padding = 6;

const collection = [
  {
    title: "Definitely Maybe",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273d86a1e021e7acc7c07c7d668",
  },
  {
    title: "Be Here Now",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273aeda362a434f01d0eff70b4e",
  },
  {
    title: "A Rush of Blood to the Head",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40",
  },
  {
    title: "A Head Full of Dreams",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
  },
  {
    title: "Different Class",
    artist: "Pulp",
    cover: "https://i.scdn.co/image/ab67616d0000b273fd952bece8f049dbcd7df93f",
  },
  {
    title: "(What's The Story) Morning Glory?",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b2737a4c8c59851c88f6794c3cbf",
  },
];

const Vinyl = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <div>
      <Head>
        <title>Vinyl | Daniel Medina - Web Developer</title>
      </Head>
      <Navbar width={width} padding={padding} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            My Vinyl Collection
          </Heading>
        </Container>
        <Container pt={4} maxW={width} px={padding} pb={16}>
          {collection.map((i) => {
            return (
              <Flex
                key={i.title}
                bgColor={bg}
                h={32}
                justifyContent="start"
                alignItems="center"
                my={2}
                p={4}
                rounded="md"
              >
                <Stack mr={3} minW="24">
                  <Image
                    src={i.cover}
                    alt={`${i.title} by ${i.artist}`}
                    height="1000"
                    width="1000"
                    layout="responsive"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/album.png"
                  />
                </Stack>
                <Heading
                  fontWeight="bold"
                  fontSize={{ base: "1.4em", md: "1.6em" }}
                  letterSpacing="tighter"
                >
                  <a href={i.cover} target="_blank" rel="noreferrer">
                    {i.title}
                  </a>
                </Heading>
              </Flex>
            );
          })}
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Container maxW={width} px={padding}>
          <Footer />
        </Container>
      </motion.div>
    </div>
  );
};

export default Vinyl;
