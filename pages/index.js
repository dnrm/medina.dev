import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";
import { width } from "../lib/width";
import { motion } from "framer-motion";
import { getAllProjects } from "../lib/projects";
import { useColorModeValue } from "@chakra-ui/react";

// * Page sections

import Posts from "../components/Posts";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Hobbies from "../components/Hobbies";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Technologies from "../components/Technologies";
import Certifications from "../components/Certifications";

export default function Home({ projects }) {
  const padding = 6;
  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <div>
      <Head>
        <title>Daniel Medina - Web developer</title>
        <meta name="title" content="Daniel Medina - Web developer" />
        <meta
          name="description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medina.dev/" />
        <meta property="og:title" content="Daniel Medina - Web developer" />
        <meta
          property="og:description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel."
        />
        <meta property="og:image" content="/dm.png" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://medina.dev/" />
        <meta
          property="twitter:title"
          content="Daniel Medina - Web developer"
        />
        <meta
          property="twitter:description"
          content="My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. My areas of expertise include the MERN stack, a very strong understanding of Next.js as well as cloud providers like AWS and Vercel."
        />
        <meta property="twitter:image" content="/dm.png" />
        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/x-icon"
        />
        <base target="_blank" />
      </Head>
      <Navbar width={width} padding={padding} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <AboutMe />
        <Skills width={width} padding={padding} />
        <Projects projects={projects} />
        <ContactForm width={width} border={border} />
        <Certifications />
        <Posts width={width} padding={padding} />
        <Hobbies />
        <Technologies />
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Footer />
      </motion.div>
    </div>
  );
}

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
