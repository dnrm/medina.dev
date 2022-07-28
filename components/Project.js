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
    <Link
      href={"/project/" + convertToSlug(props.title)}
      target="_blank"
      rel="noreferrer"
    >
      <a>
        <Stack
          borderWidth="2px"
          borderColor={border}
          p={2.5}
          rounded="md"
          pb={6}
          minHeight={24}
        >
          {props.image && (
            <Stack position={"relative"} height={"56"} borderRadius={"md"} p={2}>
              <Image
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/52"
                objectFit="cover"
                layout="fill"
                src={props.image}
                alt={props.title}
              />
            </Stack>
          )}
          <Heading
            pt={1}
            fontWeight="regular"
            fontSize={{ base: "0.9em", md: "1em" }}
            display="flex"
          >
            <Text pr="1.5">{props.icon}</Text>
            <Text textDecor={"underline"}>{props.title}</Text>
          </Heading>
          <Text textColor="gray.400" fontSize={{ base: "0.8em", md: "0.9em" }}>
            {props.excerpt || props.description}
          </Text>
        </Stack>
      </a>
    </Link>
  );
};

export default Project;
