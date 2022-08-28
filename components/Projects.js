import React from "react";
import Project from "./Project";
import { width, padding } from "../lib/constants";
import { Container, Heading, Grid } from "@chakra-ui/react";

const Projects = ({ projects }) => {
  return (
    <Container pt={16} maxW={width} px={padding}>
      <Heading fontFamily="Work Sans, sans-serif" mb={3}>
        Projects 🔨
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            icon={project.icon}
            slug={project.slug}
            description={project.description}
            excerpt={project.excerpt}
            image={project.image}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
