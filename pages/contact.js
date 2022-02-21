import React from "react";
import {
  Container,
  Heading,
  Text,
  Grid,
  Divider,
  Link,
  Avatar,
  Flex,
  Icon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Footer from '../components/Footer'

const socials = [
  {
    name: "Twitter 🐦",
    href: "https://twitter.com/_dnrm",
    description: "Check out my latest tweets!",
  },
  {
    name: "GitHub 👨‍💻",
    href: "https://github.com/dnrm",
    description: "See all of my projects and code.",
  },
  {
    name: "Dev.to 📓",
    href: "https://dev.to/dnrm",
    description: "Read some of my blog posts.",
  },
  {
    name: "Youtube 🎥",
    href: "https://www.youtube.com/channel/UC38r0XbtKBC98yW42c3cQZA",
    description: "Watch old videos i've done.",
  },
  {
    name: "Hashnode 📕",
    href: "https://blog.medina.dev",
    description:
      "Read every single one of my blog posts as soon as they come out!",
  },
  {
    name: "Email ✉️",
    href: "mailto:daniel@medina.com",
    description: "Send me an email. Wether you're a client or a fan!",
  },
];

const Contact = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const width = "90ch";
  const padding = 6;

  return (
    <div>
      <Head>
        <title>Daniel Medina - Web developer</title>
        <meta
          name="description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey..."
        />
        <meta property="og:url" content="https://danielmedina.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Medina - Web developer" />
        <meta
          property="og:description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey..."
        />
        <meta
          property="og:image"
          content="https://source.unsplash.com/collection/94997000/"
        ></meta>
        <link
          rel="shortcut icon"
          href="https://cdn.medina.dev/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={"90ch"} px={6} pb={4}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            Contact Me 🌱
          </Heading>
        </Container>
        <Container maxW={"90ch"} px={6}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {socials.map((i) => {
              return (
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  py={3}
                  px={4}
                  bgColor={bg}
                  flexDir="column"
                  key={i.name}
                >
                  <Link href={i.href} target="_blank" w={"full"}>
                    <Flex
                      rounded="md"
                      justifyContent="space-between"
                      alignItems="start"
                      w={"full"}
                    >
                      <Heading fontFamily="Work Sans, sans-serif">
                        {i.name}
                      </Heading>
                      <Icon viewBox="0 0 24 24" fontSize="3xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Icon>
                    </Flex>
                  </Link>
                  <Text textColor="gray.400">{i.description}</Text>
                </Flex>
              );
            })}
          </Grid>
        </Container>
        <Container maxW={width} px={padding} py={8}>
          <Text textColor="gray.400" fontSize="1.1em">Feel free to contact me through any of these links!</Text>
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

export default Contact;
