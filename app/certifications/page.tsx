import type { Metadata } from "next";
import { Container, Heading, Grid, Separator, Text } from "@chakra-ui/react";
import Certification from "../../components/Certification";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/Footer";
import { width } from "../../lib/constants";
import { certifications } from "../../lib/certifications";
import { MotionDiv } from "../../components/ui/MotionDiv";

export const metadata: Metadata = {
  title: "My Certifications",
  description:
    "Professional certifications and credentials I have earned throughout my career.",
};

const padding = 6;

export default function Certifications() {
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
            My Certifications 🥇
          </Heading>
          <Text mb={4} color="gray.400">
            These are most of the certifications I&apos;ve gotten since starting
            my career.
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
                  {cert.description}
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
