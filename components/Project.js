import React from "react";
import { Stack, Heading, Text, Link as StyledLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const Project = (props) => {
  const border = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");

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
        minHeight={24}
        height={"100%"}
      >
        {props.image && (
          <Image
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/52"
            width={500}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
