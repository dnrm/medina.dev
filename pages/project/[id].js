import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useColorModeValue } from "@chakra-ui/react";
import { getProject, getProjects } from "../../lib/ghost";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

import { width } from "../../lib/width";

const Project = ({ project }) => {
  const padding = 6;
  const border = useColorModeValue("gray.300", "gray.600");
  const text = useColorModeValue("gray.600", "gray.300");

  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <meta name="title" content="{project.title}" />
        <meta name="description" content="{project.description}" />
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
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            {project.title} {project.icon}
          </Heading>
        </Container>
        <Container pt={2} maxW={width} px={padding} pb={2}>
          <Box borderColor={border} borderWidth={2} borderRadius="lg" p={2}>
            <Box
              position={"relative"}
              w="full"
              height={{ base: "64", md: "xl" }}
            >
              <Image
                src={project.feature_image}
                layout="fill"
                objectFit="cover"
                alt="Project"
              />
            </Box>
          </Box>
        </Container>
        <Container maxW={width} px={padding} pb={0}>
          <Prose>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </Prose>
        </Container>
        {project.primary_tag ? (
          <Container pt={2} maxW={width} px={padding - 1} pb={8}>
            <a
              href={project.primary_tag.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"solid"} w={"full"}>
                Visit Website
              </Button>
            </a>
          </Container>
        ) : null}
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

export default Project;

export async function getStaticPaths() {
  const projects = await getProjects();

  const paths = projects.map((project) => ({
    params: { id: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.id);

  return {
    props: {
      project,
    },
  };
}
