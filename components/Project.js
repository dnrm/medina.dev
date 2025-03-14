import React from "react";
import { Stack, Heading, Text, Link as StyledLink, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const Project = (props) => {
  const { colorMode } = useColorMode();
  const border = colorMode === "dark" ? "gray.600" : "gray.300";
  const textColor = colorMode === "dark" ? "gray.400" : "gray.600";

  return (
    <Link
      href={"/project/" + props.slug}
      target="_blank"
      rel="noreferrer"
      legacyBehavior
    >
      <Stack
      spacing="0"
        borderWidth="2px"
        borderColor={border}
        rounded="md"
        minHeight={48}
        height={"100%"}
      >
        {props.image && (
          <Image
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/52"
            width={500}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "100%", overflow: "hidden" }}
            src={props.image}
            alt={props.title}
          />
        )}
        <Heading
          px={4}
          pt={4}
          letterSpacing="tighter"
          fontWeight={"bold"}
          fontFamily="Work Sans, sans-serif"
          fontSize={{ base: "1.3em", md: "1.5em" }}
          cursor="pointer"
          _hover={{ textDecor: "underline" }}
        >
          {props.title}
        </Heading>
        <Text
          textColor={textColor}
          fontSize={{ base: "0.8em", md: "0.9em" }}
          px={4}
          pb={4}
          pt={1}
          lineHeight="normal"
        >
          {props.excerpt.substring(0, 100)}...
        </Text>
      </Stack>
    </Link>
  );
};

export default Project;
