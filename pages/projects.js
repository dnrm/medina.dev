import Head from "next/head";
import { width } from "../lib/width";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { getAllProjects } from "../lib/projects";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Container, Heading, Grid, Divider, Text } from "@chakra-ui/react";

const padding = 6;

const Projects = ({ projects }) => {
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <div>
      <Head>
        <title>Projects | Daniel Medina - Web Developer</title>
        <meta
          name="description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey..."
        />
        <meta property="og:url" content="https://medina.dev/" />
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
            My Projects 🔧
          </Heading>
          <Text mb={4} textColor="gray.400">
            These are the projects that have defined my career.
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  title={project.title}
                  icon={project.icon}
                  slug={project.slug}
                  description={project.description}
                  excerpt={project.excerpt}
                  image={project.image}
                />
              );
            })}
          </Grid>
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Container maxW={width} px={padding}>
          <Footer />
        </Container>
      </motion.div>
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = getAllProjects([
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
    "excerpt",
  ]);

  return {
    props: {
      projects,
    },
  };
}
