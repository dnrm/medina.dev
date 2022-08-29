import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import { width, padding } from "../lib/constants";
import { Container, Heading, Text, Grid } from "@chakra-ui/react";

import { Business, Enterprise, StaticWebsite } from "../lib/icons";

const Services = () => {
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
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            Services 🔧
          </Heading>
          <Text textColor="gray.400">
            Check out the services I offer and their pricing.
          </Text>
        </Container>
        <Container pt={4} maxW={width} px={padding} pb={10}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            <Service
              backgroundImage={"/static-website.jpeg"}
              icon={<StaticWebsite />}
              title={"Static Website ⭐️"}
              description={
                "This service includes a static website. The website will be online with a custom domain and hosting set up."
              }
              features={[
                "Static website",
                "Custom domain",
                "Web hosting",
                "10 Revision tickets",
              ]}
              price={250}
            />
            <Service
              backgroundImage={"/enterprise.jpeg"}
              icon={<Enterprise />}
              title={"Full Stack 💻"}
              description={
                "My most advanced package. It consists of a full-stack website with a custom CMS. This package is perfect for e-commerce websites and web-apps that require big control over the data."
              }
              features={[
                "Dynamic website",
                "Custom domain",
                "Web hosting",
                "15 Revision tickets",
                "Minimal CMS",
              ]}
              price={1000}
            />
            <Service
              backgroundImage={"/small-business.jpeg"}
              icon={<Business />}
              title={"Dynamic Website ✍️"}
              description={
                "This package consists of a static website with dynamic elements such as a blog. It's an intermediate between static and full-stack."
              }
              features={[
                "Dynamic website",
                "Custom domain",
                "Web hosting",
                "15 Revision tickets",
                "Minimal CMS",
              ]}
              price={500}
            />
          </Grid>
        </Container>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Services;
