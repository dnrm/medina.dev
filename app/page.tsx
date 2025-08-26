import { Container, Separator } from "@chakra-ui/react";
import { width, padding } from "../lib/constants";

import { getAllProjects } from "../lib/projects";

// Page sections
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Navbar from "../components/layouts/Navbar";
import Hobbies from "../components/Hobbies";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactForm from "../components/forms/ContactForm";
import Technologies from "../components/Technologies";
import Certifications from "../components/Certifications";
import { MotionDiv } from "../components/ui/MotionDiv";

export default async function Home() {
  const projects = getAllProjects([
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
    "excerpt",
    "order",
    "landingpage",  
  ]);

  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <AboutMe />
        <Skills width={width} padding={padding} />
        <Projects projects={projects} />
        <ContactForm width={width} />
        <Certifications />
        <Posts width={width} padding={padding} />
        <Hobbies />
        <Technologies />
        <Container pb={10} maxW={width} px={padding}>
          <Separator />
        </Container>
        <Footer />
      </MotionDiv>
    </div>
  );
}
