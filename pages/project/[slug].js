import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { width } from "../../lib/width";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useColorModeValue } from "@chakra-ui/react";
import markdownToHtml from "../../lib/markdownToHtml";
import Image from "next/image";
import { getAllProjects, getProjectBySlug } from "../../lib/projects";
import { Container, Heading, Button, Divider, Box } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const Project = ({ project, content }) => {
  const padding = 6;
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <>
      <Head>
        <title>{project.title} | Projects</title>
        <meta name="title" content={project.title + " | Projects"} />
        <meta name="description" content={project.excerpt} />
        <meta
          name="keywords"
          content="Project, Technology, Medina, Daniel Medina, Programming, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Daniel Medina" />
      </Head>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={width} px={padding} pb={2}>
          <Box borderColor={border} borderWidth={2} borderRadius="lg" p={2}>
            <Box
              position={"relative"}
              w="full"
            >
              <Image
                src={project.image}
                width={1500}
                height={1000}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="Project"
              />
            </Box>
          </Box>
        </Container>
        <Container maxW={width} px={padding} pb={2}>
          <Prose>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </Prose>
        </Container>
        {project.address ? (
          <Container pt={2} maxW={width} px={padding - 1} pb={8}>
            <a href={project.address} target="_blank" rel="noopener noreferrer">
              <Button variant={"solid"} w={"full"}>
                Visit Website
              </Button>
            </a>
          </Container>
        ) : null}
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};

export default Project;

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
  ]);

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
