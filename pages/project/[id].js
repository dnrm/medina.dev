import React from "react";
import Navbar from "../../components/Navbar";
import { connectToDatabase } from "../../lib/mongodb";
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

import { width } from "../../lib/width";

const Project = ({ project }) => {
  console.log(project);
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
          <Text mb={4} textColor={text}>
            {project.excerpt}
          </Text>
        </Container>
        <Container pt={2} maxW={width} px={padding} pb={2}>
          <Box borderColor={border} borderWidth={2} borderRadius="lg" p={2}>
            <Box position={"relative"} w="full" height="xl">
              <Image
                src={"/" + project.image}
                layout="fill"
                objectFit="cover"
                alt="Project"
              />
            </Box>
          </Box>
        </Container>
        <Container pt={2} maxW={width} px={padding} pb={0}>
          <Text mb={4}>{project.description}</Text>
        </Container>
        <Container pt={2} maxW={width} px={padding - 1} pb={8}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant={"solid"} w={"full"}>
              Visit Website
            </Button>
          </a>
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

export default Project;

export async function getStaticPaths() {
  const { client } = await connectToDatabase();

  const db = client.db("medina-dev");

  let projects = await db.collection("projects").find({}).toArray();

  const paths = projects.map((project) => ({
    params: { id: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { client } = await connectToDatabase();

  const db = client.db("medina-dev");
  let project = await db.collection("projects").findOne({ slug: params.id });

  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
    },
  };
}
