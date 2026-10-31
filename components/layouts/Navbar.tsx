"use client";

import { Flex, Container, Button, Link as StyledLink } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { width, padding } from "../../lib/constants";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale = locale === "en" ? "es" : "en";
  return (
    <Container pt={{ base: "12", md: "28" }} maxW={width} px={padding}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <StyledLink
            asChild
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            pr={2}
          >
            <Link href="/">{t("home")}</Link>
          </StyledLink>
          <StyledLink
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            px={2}
            asChild
          >
            <Link href="/work">{t("work")}</Link>
          </StyledLink>
          <StyledLink
            target={"_self"}
            fontSize={{ base: "0.8em", md: "1em" }}
            color="gray.500"
            px={2}
            asChild
          >
            <Link href="/contact">{t("contact")}</Link>
          </StyledLink>
        </Flex>
        <Flex alignItems="center" gap={1}>
          <Button
            variant="ghost"
            size="sm"
            px={2}
            fontWeight="semibold"
            aria-label={t("switchLanguage")}
            onClick={() => router.replace(pathname, { locale: otherLocale })}
          >
            {t("otherLanguage")}
          </Button>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Container>
  );
}
