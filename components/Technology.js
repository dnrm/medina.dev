"use client"

import { Flex, Text, Heading, Image, Grid } from "@chakra-ui/react";

const Technology = (props) => {
  return (
    <Grid
      bgColor={{ base: "gray.100", _dark: "gray.700" }}
      p={3}
      rounded="md"
      gap={3}
      placeItems="stretch"
      templateColumns={props.src ? "1fr 5fr" : "1fr"}
    >
      {props.src && (
        <Image
          w={16}
          borderRadius="30px"
          bgColor={{ base: "gray.200", _dark: "gray.600" }}
          h={16}
          p={2}
          src={props.src}
          alt={props.alt || "Technology logo"} 
          objectFit="contain"
        />
      )}
      <Flex flexDir="column">
        <Heading fontSize="xl" letterSpacing={'tighter'} textColor={{ base: "gray.600", _dark: "gray.400" }} fontWeight="bold">
          {props.title}
        </Heading>
        <Text fontSize="md" textColor={{ base: "gray.600", _dark: "gray.400" }}>{props.description}</Text>
      </Flex>
    </Grid>
  );
};

export default Technology;
