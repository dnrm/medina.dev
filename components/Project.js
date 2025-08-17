"use client";

import { Stack, Heading, Text, Image as StyledImage } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const Project = (props) => {
  return (
    <Link
      href={"/project/" + props.slug}
    >
      <Stack
      spacing="0"
        borderWidth="2px"
        borderColor={{ base: "gray.300", _dark: "gray.600" }}
        rounded="md"
        minHeight={48}
        height={"100%"}
      >
        {props.image && (
          <StyledImage height={'full'} asChild>
            <Image
              placeholder="blur"
              blurDataURL="https://via.placeholder.com/52"
              width={500}
              height={500}
              src={props.image}
              alt={props.title}
            />
          </StyledImage>
        )}
        <Heading
          px={4}
          pt={4}
          letterSpacing="tighter"
          fontWeight={"bold"}
          fontSize={{ base: "1.3em", md: "1.5em" }}
          cursor="pointer"
          _hover={{ textDecor: "underline" }}
        >
          {props.title}
        </Heading>
        <Text
          textColor={{ base: "gray.600", _dark: "gray.400" }}
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
