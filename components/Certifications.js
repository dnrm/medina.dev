import React from "react";
import Link from "next/link";
import { width, padding } from "../lib/constants";
import Certification from "./Certification";
import { Container, Heading, Grid, Link as StyledLink } from "@chakra-ui/react";
import { certifications } from "../lib/certifications";
import { useColorModeValue } from "@chakra-ui/react";

const Certifications = () => {
  const border = useColorModeValue("gray.300", "gray.600");
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading fontFamily="Work Sans, sans-serif" mb={3}>
        My Certifications 🥇
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        {certifications.slice(0, 2).map((i) => {
          return (
            <Certification
              key={i.title}
              title={i.title}
              href={i.href}
              src={i.src}
            >
              {i.description}
            </Certification>
          );
        })}
      </Grid>
      <Link href="/certifications" passHref legacyBehavior>
        <StyledLink
          textAlign="center"
          backgroundColor="transparent"
          maxW={"100%"}
          borderWidth={2}
          borderColor={border}
          _hover={{ backgroundColor: "gray.600", textDecor: "underline" }}
          mx={"auto"}
          display="block"
          borderRadius={"lg"}
          py={3}
          px={8}
          mt={4}
        >
          View All →
        </StyledLink>
      </Link>
    </Container>
  );
};

export default Certifications;
