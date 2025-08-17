"use client";

import Image from "next/image";
import { width } from "../../../lib/constants";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/Footer";
import {
  Container,
  Button,
  Separator,
  Box,
  Image as StyledImage,
} from "@chakra-ui/react";
import { Prose } from "@/components/ui/prose";
import { MotionDiv } from "../../../components/ui/MotionDiv";
import { Project } from "../../../types/project";

interface ProjectClientProps {
  project: Project;
  content: string;
}

export default function ProjectClient({
  project,
  content,
}: ProjectClientProps) {
  const padding = 6;

  return (
    <>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container maxW={width} px={padding} pb={2} mt={10} w="full">
          <Prose w="full" maxW="full" textAlign="justify">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Prose>
        </Container>
        <Container maxW={width} px={padding} pb={2}>
          <Box
            borderColor={{ base: "gray.300", _dark: "gray.600" }}
            borderWidth={2}
            borderRadius="lg"
            p={2}
          >
            <Box position={"relative"} w="full" h={"full"}>
              <StyledImage height={"full"} asChild>
                <Image
                  src={project.image}
                  width={1500}
                  height={1000}
                  alt="Project"
                />
              </StyledImage>
            </Box>
          </Box>
        </Container>
        {project.address ? (
          <Container pt={4} maxW={width} px={padding - 1} pb={8}>
            <a href={project.address} target="_blank" rel="noopener noreferrer">
              <Button variant={"solid"} w={"full"}>
                Visit Website
              </Button>
            </a>
          </Container>
        ) : null}
        <Container pb={10} maxW={width} px={padding - 1}>
          <Separator />
        </Container>
        <Footer />
      </MotionDiv>
    </>
  );
}
