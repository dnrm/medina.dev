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
          src="/me.png"
          name="Daniel Medina"
        ></Avatar>
      </Container>
      <Container pt={4} maxW={width} px={padding}>
        <Heading
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "2.3em", md: "3em" }}
        >
          Hi, I&apos;m Daniel Medina
        </Heading>
        <Text textColor={textColor}>
          Transforming business visions into elegant digital solutions that deliver measurable results.
        </Text>
      </Container>
      <Container pt={16} maxW={width} px={padding}>
        <Heading fontFamily="Work Sans, sans-serif">About Me 👨‍💻</Heading>
        <Text
          textColor={textColor}
          fontSize={{ base: "0.9em", md: "1em" }}
          textAlign={"justify"}
        >
          I'm a software developer who bridges technical expertise with business understanding. I specialize in delivering robust websites and systems that meet all business needs while delighting end-users.

          I've successfully delivered projects for startups, law firms, and the healthcare industry. Each project has strengthened my ability to communicate effectively across technical and non-technical people. <br /><br />
          My portfolio showcases projects where I've helped clients sell new products, increase brand visibility, and reduce costs through process automation. Whether you're looking for a developer to bring your business vision to life or a technical collaborator for your team, I'd love to discuss how we might work together.
        </Text>
        <br />
      </Container>
    </>
  );
};

export default AboutMe;
