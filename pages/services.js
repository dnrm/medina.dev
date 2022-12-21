import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import { width, padding } from "../lib/constants";
import {
  Container,
  Heading,
  Text,
  Grid,
  Divider,
  Link as StyledLink,
} from "@chakra-ui/react";

import {
  Business,
  Enterprise,
  StaticWebsite,
  Ticket,
  Shop,
} from "../lib/icons";

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
            Check out the services I offer and their pricing. If you&apos;d like
            a custom package feel free to{" "}
            <Link passHref href="/contact" legacyBehavior>
              <StyledLink textColor={"teal.500"} fontWeight="bold">
                contact
              </StyledLink>
            </Link>{" "}
            me at and I&apos;ll be happy to help.
          </Text>
        </Container>
        <Container pt={8} maxW={width} px={padding}>
          <Heading pb={2} fontFamily={"Work Sans, sans-serif"}>
            Web Development Plans
          </Heading>
          <Divider />
        </Container>
        <Container pt={4} maxW={width} px={padding} pb={4}>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            <Service
              backgroundImage={"/service-1.jpg"}
              icon={<StaticWebsite />}
              title={"Static Website ⭐️"}
              description={
                "This service includes a static website. The website will be online with a custom domain and hosting set up. This package is perfect for personal portfolios, informative websites, and event websites."
              }
              features={[
                "Static website",
                "Custom domain",
                "Web hosting",
                "10 Revision tickets",
              ]}
              price={200}
            />
            <Service
              backgroundImage={"/service-2.jpg"}
              icon={<Shop />}
              title={"Online Store 🏬"}
              description={
                "Do you want to start earning money with your work? This package includes an online store built with Shopify. It suits small and big businesses alike. It includes a custom domain and hosting."
              }
              features={[
                "High quality design",
                "Custom domain",
                "Web hosting",
                "Shopify store",
                "15 Revision tickets",
                "Product administration panel",
                "Payment gateway integration",
              ]}
              price={250}
            />
            <Service
              backgroundImage={"/service-3.jpg"}
              icon={<Business />}
              title={"Dynamic Website ✍️"}
              description={
                "This package consists of a static website with dynamic elements such as a blog. It's an intermediate between static and full-stack. It is perfect for small businesses and content creators."
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
        <Container pt={8} maxW={width} px={padding}>
          <Heading pb={2} fontFamily={"Work Sans, sans-serif"}>
            Enterprise Plans
          </Heading>
          <Divider />
        </Container>
        <Container pt={4} maxW={width} px={padding} pb={10}>
          <Service
            backgroundImage={"/service-2.jpg"}
            icon={<Enterprise />}
            title={"Full Stack 💻"}
            description={
              "My most advanced package. It consists of a full-stack website with a custom CMS. This package is perfect for e-commerce websites and web-apps that require big control over the data. This is perfect for startups and growing businesses."
            }
            features={[
              "Fully dynamic website",
              "Custom domain",
              "Web hosting",
              "25 Revision tickets",
              "Custom CMS",
              "Custom API",
              "Dedicated database",
            ]}
            price={1000}
          />
        </Container>
        <Container pt={8} maxW={width} px={padding}>
          <Heading pb={2} fontFamily={"Work Sans, sans-serif"}>
            Revision Ticket Packages
          </Heading>
          <Divider />
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
              backgroundImage={"/tickets.jpg"}
              icon={<Ticket />}
              price={25}
              title={"5 Extra Revision Tickets"}
              description={
                "This package includes 5 extra revision tickets for your website."
              }
              features={["5 Revision tickets"]}
            />
            <Service
              backgroundImage={"/tickets.jpg"}
              icon={<Ticket />}
              price={50}
              title={"10 Extra Revision Tickets"}
              description={
                "This package includes 10 extra revision tickets for your website."
              }
              features={["10 Revision tickets"]}
            />
            <Service
              backgroundImage={"/tickets.jpg"}
              icon={<Ticket />}
              price={75}
              title={"15 Extra Revision Tickets"}
              description={
                "This package includes 15 extra revision tickets for your website."
              }
              features={["15 Revision tickets"]}
            />
          </Grid>
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Services;
