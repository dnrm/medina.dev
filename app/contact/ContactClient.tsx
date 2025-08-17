"use client";

import { width, padding } from "../../lib/constants";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/Footer";
import {
  Container,
  Heading,
  Text,
  Grid,
  Separator,
  Link,
  Flex,
} from "@chakra-ui/react";
import { MotionDiv } from "../../components/ui/MotionDiv";
import ContactForm from "../../components/forms/ContactForm";
import { ExternalLink } from "lucide-react";

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
  // {
  //   name: "Dev.to 📓",
  //   href: "https://dev.to/dnrm",
  //   description: "Read some of my blog posts.",
  // },
  // {
  //   name: "Hashnode 📕",
  //   href: "https://blog.medina.dev",
  //   description:
  //     "Read every single one of my blog posts as soon as they come out!",
  // },
  {
    name: "Email ✉️",
    href: "mailto:daniel@medina.com",
    description: "Send me an email. Whether you're a client or a fan!",
  },
  {
    name: "LinkedIn 💌",
    href: "https://www.linkedin.com/in/dnrm/",
    description:
      "My whole professional profile, including my work experience.",
  },
];

export default function ContactClient() {
  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={width} px={6} pb={4}>
          <Heading fontSize={{ base: "2.3em", md: "3em" }} mb={4} letterSpacing={"-1px"}>
            Contact Me 🌱
          </Heading>
        </Container>
        <Container maxW={width} px={6}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {socials.map((social) => {
              return (
                <Flex
                  key={social.name}
                  justifyContent="start"
                  alignItems="start"
                  py={3}
                  px={4}
                  bgColor={{ base: "gray.100", _dark: "gray.700" }}
                  flexDir="column"
                  borderRadius="md"
                >
                  <Link href={social.href} target="_blank" w={"full"}>
                    <Flex
                      rounded="md"
                      justifyContent="space-between"
                      alignItems="start"
                      w={"full"}
                    >
                      <Heading>{social.name}</Heading>
                      <ExternalLink size={20} />
                    </Flex>
                  </Link>
                  <Text color="gray.400" letterSpacing={"-0.5px"}>
                    {social.description}
                  </Text>
                </Flex>
              );
            })}
          </Grid>
        </Container>
        <ContactForm width={width} />
        <Container py={10} maxW={width} px={padding}>
          <Separator />
        </Container>
        <Footer />
      </MotionDiv>
    </div>
  );
}
