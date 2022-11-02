import Head from "next/head";
import { Container, Heading, Grid, Divider, Text } from "@chakra-ui/react";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { width } from "../lib/width";
import { certifications } from "../lib/certifications";

const padding = 6;

const Certifications = () => {
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <div>
      <Head>
        <title>Certifications | Daniel Medina - Web Developer</title>
        <meta
          name="description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey..."
        />
        <meta property="og:url" content="https://danielmedina.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Medina - Web developer" />
        <meta
          property="og:description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey..."
        />
        <meta
          property="og:image"
          content="https://source.unsplash.com/collection/94997000/"
        ></meta>
        <link
          rel="shortcut icon"
          href="https://cdn.medina.dev/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <Navbar width={width} padding={padding} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={width} px={padding} pb={12}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            My Certifications 🥇
          </Heading>
          <Text mb={4} textColor="gray.400">
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
            {certifications.map((i) => {
              return (
                <Certification
                  key={i.title}
                  title={i.title}
                  href={i.href}
                  src={i.src}
                >
                  {i.description}
                </Certification>
              );
            })}
          </Grid>
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Certifications;
