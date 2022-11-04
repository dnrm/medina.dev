import React from "react";
import { Stack, Flex, Heading, Link, Text, GridItem } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { useColorModeValue } from "@chakra-ui/react";

const VinylRecord = ({ title, artist, cover, link }) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <GridItem w="full" backgroundColor={bg} rounded="lg">
      <Stack minW="24">
        <a target="_blank" w="full" h='full' rel="noreferrer" href={cover}>
          <Image
            src={cover}
            alt={`${title} by ${artist}`}
            height="1000"
            width="1000"
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/album.png"
          />
        </a>
      </Stack>
      <Flex direction="column" w='full' p={4}>
        <Heading
          fontWeight="bold"
          fontSize={{ base: "1em", md: "1.5em" }}
          letterSpacing="tighter"
          display={'block'}
        >
          <Link href={link} display="block" target="_blank" rel="noreferrer">
            {title}
          </Link>
        </Heading>
        <Text>{artist}</Text>
      </Flex>
    </GridItem>
  );
};

export default VinylRecord;
