import React from "react";
import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from 'next/image'

const Certification = ({ title, src, children, href }) => {
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <Stack rounded="md" borderWidth="2px" borderColor={border}>
      <Image
        src={src}
        height={40}
        width={80}
        objectFit={"cover"}
        alt="Certification Image"
        loading="lazy"
        layout="responsive"
        blurDataURL="/cert_placeholder.jpeg"
        placeholder="blur"
      />
      <Stack px={4} pb={4} pt={2}>
        <Heading fontWeight="regular" fontSize={{ base: "0.9em", md: "1em" }}>
          <Link href={href}>{title}</Link>
        </Heading>
        <Text fontWeight="regular" fontSize={{ base: "0.8em", md: "0.9em" }}>
          {children}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Certification;
