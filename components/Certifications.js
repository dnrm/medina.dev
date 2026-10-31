"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { width, padding } from "../lib/constants";
import Certification from "./Certification";
import { Container, Heading, Grid, Link as StyledLink } from "@chakra-ui/react";
import { certifications } from "../lib/certifications";

const Certifications = () => {
  const t = useTranslations("certifications");
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading mb={3}>
        {t("heading")}
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        {certifications.slice(0, 2).map((i) => {
          return (
            <Certification
              key={i.title}
              title={i.title}
              href={i.href}
              src={i.src}
            >
              {t(`items.${i.id}`)}
            </Certification>
          );
        })}
      </Grid>
      <StyledLink
        textAlign="center"
        backgroundColor="transparent"
        maxW={"100%"}
        borderWidth={2}
        borderColor="border.emphasized"
        _hover={{ backgroundColor: "bg.muted", textDecor: "underline" }}
        mx={"auto"}
        display="block"
        borderRadius={"lg"}
        py={3}
        px={8}
        mt={4}
        asChild
      >
        <Link href="/certifications">
          {t("viewAll")}
        </Link>
      </StyledLink>
    </Container>
  );
};

export default Certifications;
