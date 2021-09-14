import Head from "next/head";
import { Container, Heading, Grid, Divider, Text } from "@chakra-ui/react";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useColorModeValue } from "@chakra-ui/color-mode";

const width = "90ch";
const padding = 6;

const certificationsObj = [
  {
    title: "Certified Javascript Developer | W3Schools",
    description:
      "This certification was given to me by W3Schools. Upon passing their exam.",
    href: "https://courses.w3schools.com/certificates/certified-javascript-developer-539.pdf",
    src: "/w3-javascript.png",
  },
  {
    href: "https://www.coursera.org/account/accomplishments/verify/8ZFVH8NHQFLX",
    src: "/coursera_google.jpeg",
    title: "Technical Support Fundamentals | W3Schools",
    description:
      "I got this certification by completing the Technical Support Fundamentals course by Google on Coursera.",
  },
  {
    href: "https://www.udemy.com/certificate/UC-afc022c3-548f-4018-9066-d47db483e6a4/",
    src: "/udemy_js.jpg",
    title:
      "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS | Victor Robles",
    description:
      "This certifies the completion of the Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS course by Victor Robles.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/responsive-web-design",
    src: "/fcc_responsive.png",
    title: "Responsive Web Design Certification | freeCodeCamp",
    description:
      "I got this certification by completing the Responsive Web Design course.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/javascript-algorithms-and-data-structures",
    src: "/fcc_js.png",
    title: "Javascript Algorithms and Data Structures",
    description:
      "This certifies completion of the Javascript Algorithms and Data Structures course.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/front-end-libraries",
    src: "/fcc_frontend.png",
    title: "Front End Libraries Certification",
    description:
      "I was awarded this certification upon completion of the Front End Libraries course offered by freeCodeCamp",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/apis-and-microservices",
    src: "/fcc_microservices.png",
    title: "APIs and Microservices",
    description:
      "I got this certification for successfully submitting all 5 projects required in the APIs and Microservices course by freeCodeCamp.",
  },
];

const Certifications = () => {

  const border = useColorModeValue("gray.300", "gray.600")

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
      <Container pt={16} maxW={width} px={padding} pb={16}>
        <Heading fontFamily="Work Sans, sans-serif">
          My Certifications 🥇
        </Heading>
        <Text mb={4} textColor="gray.500">These are most of the certifications I&apos;ve gotten since starting my career.</Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          {certificationsObj.map((i) => {
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
      <Container maxW={width} px={padding}>
        <Footer />
      </Container>
    </div>
  );
};

export default Certifications;
