import React from "react";
import { Button, Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Navbar = ({ width, padding }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container pt={{ base: "12", md: "28" }} maxW={width} px={padding}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <Link href="/">
            <StyledLink textColor="gray.600" pr={2}>
              Home
            </StyledLink>
          </Link>
          <Link href="/certifications">
            <StyledLink textColor="gray.600" px={2}>
              Certifications
            </StyledLink>
          </Link>
          <Link href="/uses">
            <StyledLink textColor="gray.600" px={2}>
              Uses
            </StyledLink>
          </Link>
          <Link href="/vinyl">
            <StyledLink textColor="gray.600" pl={2}>
              Vinyl
            </StyledLink>
          </Link>
        </Flex>
        <Flex>
          <Button
            variant="solid"
            w={4}
            onClick={toggleColorMode}
            outlineColor="transparent"
          >
            <SunIcon />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
