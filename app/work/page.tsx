import type { Metadata } from 'next'
import { width } from "../../lib/constants";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import { getAllProjects } from "../../lib/projects";
import { Container, Heading, Grid, Separator, Text } from "@chakra-ui/react";
import { MotionDiv } from "../../components/ui/MotionDiv";

export const metadata: Metadata = {
  title: 'My Work',
  description: 'Projects that have defined my career as a web developer.',
}

const padding = 6;

export default async function Projects() {
  const projects = getAllProjects([
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
    "excerpt",
    "order",
  ]).sort((a, b) => {
    const orderA = a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
    const orderB = b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={16} maxW={width} px={padding} pb={12}>
          <Heading
            fontSize={{ base: "2.3em", md: "3em" }}
            mb={4}
            letterSpacing={"-1px"}
          >
            My Work 🔧
          </Heading>
          <Text mb={4} color="gray.400">
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
          <Separator />
        </Container>
        <Container maxW={width} px={padding}>
          <Footer />
        </Container>
      </MotionDiv>
    </div>
  );
}
