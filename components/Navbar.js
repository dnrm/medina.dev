import React from "react";
import { Button, Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { width } from "../lib/width";

const Navbar = ({ padding }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container pt={{ base: "12", md: "28" }} maxW={width} px={padding || 6}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <Link href="/" passHref>
            <StyledLink fontSize={{ base: '0.8em', md: '1em'}} textColor="gray.500" pr={2}>
              Home
            </StyledLink>
          </Link>
          <Link href="/services" passHref>
            <StyledLink fontSize={{ base: '0.8em', md: '1em'}} textColor="gray.500" px={2}>
              Services
            </StyledLink>
          </Link>
          <Link href="/projects" passHref>
            <StyledLink fontSize={{ base: '0.8em', md: '1em'}} textColor="gray.500" px={2}>
              Projects
            </StyledLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledLink fontSize={{ base: '0.8em', md: '1em'}} textColor="gray.500" px={2}>
              Contact
            </StyledLink>
          </Link>
        </Flex>
        <Flex>
          <Button
            variant="solid"
            w={4}
            onClick={toggleColorMode}
            outlineColor="transparent"
            aria-label="Toggle color mode"
          >
            <SunIcon />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
