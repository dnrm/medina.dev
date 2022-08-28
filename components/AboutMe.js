import React from "react";
import Link from "next/link";
import {
  Container,
  Avatar,
  Text,
  Heading,
  Link as StyledLink,
} from "@chakra-ui/react";
import { width, padding } from "../lib/constants";

const AboutMe = () => {
  return (
    <>
      <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
        <Avatar
          borderWidth="6px"
          borderColor="gray.100"
          h={48}
          w={48}
          src="/me.jpg"
          name="Daniel Medina"
        ></Avatar>
      </Container>
      <Container pt={4} maxW={width} px={padding}>
        <Heading
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "2.3em", md: "3em" }}
        >
          Hi, I&apos;m Daniel Medina 🪴
        </Heading>
        <Text textColor="gray.400">
          I&apos;m a web developer from Mexico. I love to work with Next.js and
          AWS. Check out my projects below!
        </Text>
      </Container>
      <Container pt={16} maxW={width} px={padding}>
        <Heading fontFamily="Work Sans, sans-serif">About Me 👨‍💻</Heading>
        <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }} textAlign={'justify'}>
          My name is Daniel Medina. I am a high school student at{" "}
          <StyledLink
            _hover={{ color: "blue.500" }}
            textDecor="underline"
            href="https://tec.mx"
          >
            Tecnológico de Monterrey
          </StyledLink>
          . My areas of expertise include the <strong>MERN</strong> stack, a
          very strong understanding of <strong>Next.js</strong> as well as cloud
          providers like <strong>AWS</strong> and <strong>Vercel</strong>. I
          started my journey as a web developer in January of 2020. During the
          COVID-19 pandemic I had a lot of free time therefore I was able to
          really bump up my skills. I started experimenting with all kinds of
          technologies and projects. You can find all of my projects in{" "}
          <StyledLink
            _hover={{ color: "blue.500" }}
            textDecor="underline"
            href="https://github.com/dnrm"
          >
            my Github
          </StyledLink>{" "}
          profile.
        </Text>
        <br />
        <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }} textAlign={'justify'}>
          I spend my free time listening and composing music, taking photos,
          sailing, and coding. I also love collecting vinyl records. I currently
          have a small collection of them, but have been getting more and more
          lately. Check out my collection{" "}
          <Link href="/vinyl" passHref>
            <StyledLink
              _hover={{ color: "blue.500" }}
              textDecor="underline"
              aria-label="Link to my vinyl collection"
            >
              here
            </StyledLink>
          </Link>
          .
        </Text>
      </Container>
    </>
  );
};

export default AboutMe;
