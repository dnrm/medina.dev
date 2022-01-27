import React from "react";
import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Project = (props) => {
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <Stack
      borderWidth="2px"
      borderColor={border}
      p={2}
      rounded="md"
      pb={6}
      minHeight={28}
    >
      {props.image && (
        <Stack position={"relative"} height={"52"} borderRadius={'md'}>
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
      >
        {props.url ? (
          <Link href={props.url} textDecor={'underline'} target="_blank" rel="noreferrer">
            {props.title}
          </Link>
        ) : (
          props.title
        )}
      </Heading>
      <Text textColor="gray.500" fontSize={{ base: "0.8em", md: "0.9em" }}>
        {props.description}
      </Text>
    </Stack>
  );
};

export default Project;
