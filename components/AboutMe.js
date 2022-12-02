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
import { useColorModeValue } from "@chakra-ui/react";

const AboutMe = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const border = useColorModeValue("gray.300", "gray.100");

  return (
    <>
      <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
        <Avatar
          borderWidth="6px"
          borderColor={border}
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
        <Text textColor={textColor}>
          I&apos;m a web developer and designer who specializes in helping
          businesses and individuals build their online presence.
        </Text>
      </Container>
      <Container pt={16} maxW={width} px={padding}>
        <Heading fontFamily="Work Sans, sans-serif">About Me 👨‍💻</Heading>
        <Text
          textColor={textColor}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          I am Daniel Medina a freelance web developer and designer from Mexico.
          I specialize in helping anyone from individuals to businesses achieve
          their desired online presence by providing high-quality{" "}
          <Link href="/vinyl" passHref legacyBehavior>
            <StyledLink
              _hover={{ color: "teal.400" }}
              textDecor="underline"
              aria-label="Link to my services page"
            >
              services
            </StyledLink>
          </Link>
          . I offer web development plans and online store development plans. I
          am more than glad to work with your company and give it the treatment
          it deserves.
        </Text>
        <br />
        <Text
          textColor={textColor}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          My areas of expertise include the <strong>MERN</strong> stack, which
          includes <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
          <strong>MongoDB</strong>, and <strong>Node.js</strong> as my primary
          technologies. I work with a wide variety of other tools as well and
          work from the initial design of the product until the final deployment
          stage. I use <strong>Figma</strong> to carefully craft my designs
          before making them a reality.
        </Text>
        <br />
        <Text
          textColor={textColor}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          I am also a proud member of FRC team 6647{" "}
          <StyledLink
            _hover={{ color: "teal.400" }}
            textDecor="underline"
            aria-label="Link to my services page"
            href="https://www.instagram.com/voltecrobotics6647/"
            target="_blank"
            rel="noreferrer"
          >
            VOLTEC Robotics
          </StyledLink>{" "}
          where I am lead of marketing and digital design. During the last year,
          I have worked on many projects regarding the team, which include
          leading the team&apos;s media coverage team, design of digital
          resources for events and campaigns, and most recently the branding of
          the event titled &quot;Women of Tomorrow&quot;. I am also a member of
          the engineering department where I have worked developing the
          team&apos;s website and online store, as well as other digital
          systems.
        </Text>
        <br />
      </Container>
    </>
  );
};

export default AboutMe;
