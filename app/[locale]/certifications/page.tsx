import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container, Heading, Grid, Separator, Text } from "@chakra-ui/react";
import Certification from "../../../components/Certification";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/Footer";
import { width } from "../../../lib/constants";
import { certifications } from "../../../lib/certifications";
import { MotionDiv } from "../../../components/ui/MotionDiv";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.certifications" });
  return { title: t("title"), description: t("description") };
}

const padding = 6;

export default async function Certifications({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("certifications");
  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={width} px={padding} pb={12}>
          <Heading fontSize={{ base: "2.3em", md: "3em" }} letterSpacing={"-1px"} mb={4}>
            {t("heading")}
          </Heading>
          <Text mb={4} color="fg.muted">
            {t("subtitle")}
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {certifications.map((cert) => {
              return (
                <Certification
                  key={cert.title}
                  title={cert.title}
                  href={cert.href}
                  src={cert.src}
                >
                  {t(`items.${cert.id}`)}
                </Certification>
              );
            })}
          </Grid>
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Separator />
        </Container>
        <Footer />
      </MotionDiv>
    </div>
  );
}
