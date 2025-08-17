"use client";

import { Stack, Flex, Heading, Link, Text, GridItem } from "@chakra-ui/react";
import Image from "next/legacy/image";

const VinylRecord = ({ title, artist, cover, link }) => {
  return (
    <GridItem w="full" backgroundColor="gray.100" _dark={{ backgroundColor: "gray.700" }} rounded="lg">
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
