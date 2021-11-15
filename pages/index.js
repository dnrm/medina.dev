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
import Image from "next/image";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

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

export default function Home() {
  const width = "90ch";
  const padding = 6;

  return (
    <div>
      <Head>
        <title>Daniel Medina - Web developer</title>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Avatar
            borderWidth="6px"
            borderColor="gray.100"
            h={32}
            w={32}
            src="/me.jpg"
          ></Avatar>
        </Container>
        <Container pt={4} maxW={width} px={padding}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            Hi, I&apos;m Daniel Medina 👋
          </Heading>
          <Text textColor="gray.500">
            I&apos;m a web developer from Mexico. I love to work with Next.js
            and AWS. Check out my projects below!
          </Text>
        </Container>
        <Container pt={16} maxW={width} px={padding}>
          <Heading fontFamily="Work Sans, sans-serif">About Me 👨‍💻</Heading>
          <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
            My name is Daniel Medina. I am a high school student at{" "}
            <StyledLink
              _hover={{ color: "blue.500" }}
              textDecor="underline"
              href="https://tec.mx"
            >
              Tecnológico de Monterrey
            </StyledLink>
            . I started my journey as a web developer in January of 2020. During
            the COVID-19 pandemic I had a lot of free time therefore I was able
            to really bump up my skills. I started experimenting with all kinds
            of technologies and projects. As of August 2021 I have made 6 big
            projects which are listed below. I have also done some small
            projects which can be found in{" "}
            <StyledLink
              _hover={{ color: "blue.500" }}
              textDecor="underline"
              href="https://github.com/dnrm"
            >
              my Github
            </StyledLink>{" "}
            a profile.
          </Text>
          <br />
          <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
            I spend my free time listening and composing music, taking photos,
            sailing, and coding. I also love collecting vinyl records. I
            currently have a small collection of them, but have been getting
            more and more lately. Check out my collection{" "}
            <Link href="/vinyl" passHref>
              <StyledLink _hover={{ color: "blue.500" }} textDecor="underline">
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
            <Project
              title="🍀 codingacademy.mx"
              url="https://codingacademy.mx"
              description="A website for a client built using React and Tailwind CSS."
              image="/codingacademy-mx.png"
            />
            <Project
              title="🌱 Amethyst"
              url="https://amethyst.medina.dev"
              description="A user friendly way to manage your API Gateway keys. Built with
                  Next.js and the AWS Javascript SDK."
              image="/amethyst-medina-dev.png"
            />
            <Project
              title="🌵 Crystal"
              url="https://crystal.medina.dev"
              description="Social media website built with Next.js and Tailwind CSS. The backend uses MongoDB and S3 for file uploads."
              image="/crystal-medina-dev.png"
            />
            <Project
              title="🌳  Sapphire"
              description="A full stack photo gallery app that uses an S3 bucket, user authentication, and resizes uploaded images using a Lambda function."
              image="/dnrm-sapphire.png"
            />
            <Project
              title="🌲 Crypto Charts"
              url="https://crypto-charts.netlify.app/"
              description="Small project where you choose a cryptocurrency and then a graph is shown showing historical prices."
              image="/crypto-charts.png"
            />
            <Project
              title="🌿 Something - Official website"
              url="https://prog.dnrm.me/"
              description="Client website built with Next.js to promote a Roblox game. Deployed to Vercel."
              image="something-dnrm-me.png"
            />
          </Grid>
        </Container>
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
              textColor="blue.500"
              textAlign="center"
              w="100%"
              display="block"
              pt={4}
            >
              View All
            </StyledLink>
          </Link>
        </Container>
        <Posts width={width} padding={padding} />
        <Container pt={16} maxW={width} px={padding}>
          <Heading pb={2} fontFamily="Work Sans, sans-serif">
            Hobbies 🎧
          </Heading>
          <Text textColor="gray.500" fontSize={{ base: "0.9em", md: "1em" }}>
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
            . . I also like other artists that aren&apos;t rock such as{" "}
            <b>
              <i>Billie Eilish, Cavetown, Conan Gray, FINNEAS, Coldplay</i>
            </b>
            , and more. I have a pet dog called Toby, he&apos;s a Golden Doodle.
          </Text>
          <Grid
            mt={8}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            h={{ base: "120vh", md: "45vh" }}
            gap={4}
          >
            <Container position="relative" border="2px solid white">
              <Image
                objectFit="cover"
                src="/espresso.jpg"
                layout="fill"
                alt="Espresso cup"
                blurDataURL="/espresso.min.jpg"
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
                src="/toby.jpg"
                layout="fill"
                alt="Toby"
                blurDataURL="/toby.min.jpg"
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
                name: "Chakra UI",
                description: "Chakra UI is a React UI library.",
                src: "/chakra.png",
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
                src: "aws.svg",
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
