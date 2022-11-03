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

  return (
    <Link href={"/project/" + props.slug} target="_blank" rel="noreferrer">
      <Stack
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
          fontWeight="regular"
          fontSize={{ base: "0.9em", md: "1em" }}
          display="flex"
          px={4}
          pt={2.5}
        >
          <Text>{props.icon}</Text>
          <Text
            letterSpacing="tighter"
            fontWeight={"bold"}
            fontSize={{ base: "0.9em", md: "1.5em" }}
          >
            {props.title}
          </Text>
        </Heading>
        <Text
          textColor="gray.400"
          fontSize={{ base: "0.8em", md: "0.9em" }}
          px={4}
          pb={4}
        >
          {props.excerpt.substring(0, 100)}...
        </Text>
      </Stack>
    </Link>
  );
};

export default Project;
