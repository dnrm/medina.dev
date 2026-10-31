"use client";

import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Certification = ({ title, src, children, href }) => {
  const t = useTranslations("certifications");
  return (
    <Stack rounded="md" borderWidth="2px" borderColor="border.emphasized">
      <Image
        src={src}
        height={400}
        width={800}
        alt={t("imageAlt")}
        loading="lazy"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "25vh",
          borderRadius: "5px 5px 0 0",
        }}
        blurDataURL="/cert_placeholder.jpeg"
        placeholder="blur"
      />
      <Stack px={4} pb={4} pt={2}>
        <Heading
          fontWeight="bold"
          letterSpacing={"tighter"}
          fontSize={{ base: "1.3em", md: "1.3em" }}
        >
          <Link href={href}>{title}</Link>
        </Heading>
        <Text
          fontWeight="regular"
          color={{ base: "gray.600", _dark: "gray.400" }}
          fontSize={{ base: "0.8em", md: "0.9em" }}
        >
          {children}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Certification;
