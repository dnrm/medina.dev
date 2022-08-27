import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Grid,
  Divider,
  Link as StyledLink,
  Avatar,
} from "@chakra-ui/react";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";
import { width } from "../lib/width";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { getProjects } from "../lib/ghost";

const certifications = [
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
];

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
          href="https://cdn.medina.dev/favicon.png"
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
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Avatar
            borderWidth="6px"
            borderColor="gray.100"
            h={48}
            w={48}
            src="/me.jpg"
            name="Daniel Medina"
          ></Avatar>
        </Container>
        <Container pt={4} maxW={width} px={padding}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            Hi, I&apos;m Daniel Medina 🪴
          </Heading>
          <Text textColor="gray.400">
            I&apos;m a web developer from Mexico. I love to work with Next.js
            and AWS. Check out my projects below!
          </Text>
        </Container>
        <Container pt={16} maxW={width} px={padding}>
          <Heading fontFamily="Work Sans, sans-serif">About Me 👨‍💻</Heading>
          <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }}>
            My name is Daniel Medina. I am a high school student at{" "}
            <StyledLink
              _hover={{ color: "blue.500" }}
              textDecor="underline"
              href="https://tec.mx"
            >
              Tecnológico de Monterrey
            </StyledLink>
            . My areas of expertise include the <strong>MERN</strong> stack, a
            very strong understanding of <strong>Next.js</strong> as well as
            cloud providers like <strong>AWS</strong> and{" "}
            <strong>Vercel</strong>. I started my journey as a web developer in
            January of 2020. During the COVID-19 pandemic I had a lot of free
            time therefore I was able to really bump up my skills. I started
            experimenting with all kinds of technologies and projects. You can
            find all of my projects in{" "}
            <StyledLink
              _hover={{ color: "blue.500" }}
              textDecor="underline"
              href="https://github.com/dnrm"
            >
              my Github
            </StyledLink>{" "}
            profile.
          </Text>
          <br />
          <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }}>
            I spend my free time listening and composing music, taking photos,
            sailing, and coding. I also love collecting vinyl records. I
            currently have a small collection of them, but have been getting
            more and more lately. Check out my collection{" "}
            <Link href="/vinyl" passHref>
              <StyledLink
                _hover={{ color: "blue.500" }}
                textDecor="underline"
                aria-label="Link to my vinyl collection"
              >
                here
              </StyledLink>
            </Link>
            .
          </Text>
        </Container>
        <Skills width={width} padding={padding} />
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
                image={project.feature_image}
              />
            ))}
          </Grid>
        </Container>
        <ContactForm width={width} border={border} />
        <Container pt={16} maxW={width} px={padding}>
          <Heading fontFamily="Work Sans, sans-serif" mb={3}>
            My Certifications 🥇
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            {certifications.map((i) => {
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
          <Link href="/certifications" passHref>
            <StyledLink
              textAlign="center"
              backgroundColor="transparent"
              maxW={"100%"}
              borderWidth={2}
              borderColor={border}
              _hover={{ backgroundColor: "gray.600", textDecor: "underline" }}
              mx={"auto"}
              display="block"
              borderRadius={"lg"}
              py={3}
              px={8}
              mt={4}
            >
              View All →
            </StyledLink>
          </Link>
        </Container>
        <Posts width={width} padding={padding} />
        <Container pt={16} maxW={width} px={padding}>
          <Heading pb={2} fontFamily="Work Sans, sans-serif">
            Hobbies 🎧
          </Heading>
          <Text textColor="gray.400" fontSize={{ base: "0.9em", md: "1em" }}>
            I love to discover and make new types of coffee. My personal
            favourite coffees are cold brew and espresso. Another thing i really
            enjoy doing is collecting vinyl records. My favourite music genre is
            rock. I enjoy music from{" "}
            <b>
              <i>
                Oasis, The Beatles, The Verve, Pulp, Radiohead, and The
                Cranberries
              </i>
            </b>
            . I also like other artists that aren&apos;t rock such as{" "}
            <b>
              <i>Billie Eilish, Cavetown, Conan Gray, FINNEAS, Coldplay</i>
            </b>
            , and more. I have a pet dog called Toby, he&apos;s a Golden Doodle.
          </Text>
          <Grid
            mt={8}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            h={{ base: "120vh", md: "35vh" }}
            gap={4}
          >
            <Container position="relative" border="2px solid white">
              <Image
                objectFit="cover"
                src="/breville.jpeg"
                layout="fill"
                alt="Espresso cup"
                blurDataURL="/breville.min.jpeg"
                placeholder="blur"
              />
            </Container>
            <Container position="relative" border="2px solid white">
              <Image
                objectFit="cover"
                src="/cold-brew.jpg"
                layout="fill"
                alt="Cold brew glass"
                blurDataURL="/cold-brew.min.jpg"
                placeholder="blur"
              />
            </Container>
            <Container position="relative" border="2px solid white">
              <Image
                objectFit="cover"
                src="/toby.jpeg"
                layout="fill"
                alt="Toby"
                blurDataURL="/toby-min.jpeg"
                placeholder="blur"
              />
            </Container>
          </Grid>
        </Container>
        <Container pt={16} pb={10} maxW={width} px={padding}>
          <Heading pb={2} fontFamily="Work Sans, sans-serif">
            My Favourite Technologies ⭐️
          </Heading>
          <Technologies
            items={[
              {
                name: "Next.js",
                description:
                  "Next.js is a framework for building server-rendered applications.",
                src: "/nextjs.svg",
              },
              {
                name: "MongoDB",
                description: "MongoDB is a document-oriented database.",
                src: "/mongodb.svg",
              },
              {
                name: "React",
                description: "React is a library for building user interfaces.",
                src: "/react.svg",
              },
              {
                name: "Tailwind CSS",
                description: "Tailwind CSS is a utility-first CSS framework.",
                src: "/tailwind.svg",
              },
              {
                name: "Strapi",
                description:
                  "Strapi is an open-source content management system.",
                src: "/strapi.webp",
              },
              {
                name: "Vercel",
                description:
                  "Vercel is a hosting platform for static and dynamic websites.",
                src: "/vercel.png",
              },
              {
                name: "GitHub",
                description: "GitHub is a web-based version control system.",
                src: "/github.png",
              },
              {
                name: "AWS",
                description: "AWS is a cloud computing platform.",
                src: "/aws.svg",
              },
              {
                name: "Visual Studio Code",
                description:
                  "VSCode is a very powerful and extensible code editor.",
                src: "/vscode.svg",
              },
              {
                name: "PopSQL",
                description:
                  "PopSQL is a SQL client that supports a wide variety of databases.",
                src: "/popsql.png",
              },
              {
                name: "iTerm 2",
                description: "iTerm 2 is a terminal emulator.",
                src: "/iterm2.svg",
              },
              {
                name: "Notion",
                description:
                  "Notion is a collaborative project management tool.",
                src: "/notion.png",
              },
              {
                name: "Figma",
                description: "Figma is a design tool.",
                src: "/figma.png",
              },
              {
                name: "Xcode",
                description:
                  "Xcode is a development environment for iOS and macOS.",
                src: "/xcode.png",
              },
            ]}
          />
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
}

export async function getServerSideProps({ locale }) {
  try {
    const projects = await getProjects();

    return {
      props: {
        projects,
      },
    };
  } catch (e) {
    return {
      props: {
        error: "Unable to get projects",
      },
    };
  }
}
