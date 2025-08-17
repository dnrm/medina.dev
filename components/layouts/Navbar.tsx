"use client";

import { Flex, Container, Link as StyledLink } from "@chakra-ui/react";
import Link from "next/link";
import { width, padding } from "../../lib/constants";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Navbar() {
  return (
    <Container pt={{ base: "12", md: "28" }} maxW={width} px={padding}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <StyledLink
            asChild
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            pr={2}
          >
            <Link href="/">Home</Link>
          </StyledLink>
          <StyledLink
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            px={2}
            asChild
          >
            <Link href="/work">My Work</Link>
          </StyledLink>
          <StyledLink
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            px={2}
            asChild
          >
            <Link href="/contact">Contact</Link>
          </StyledLink>
        </Flex>
        <Flex>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Container>
  );
}
