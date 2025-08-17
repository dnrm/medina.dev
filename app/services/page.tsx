import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/Footer";
import Service from "../../components/Service";
import { width, padding } from "../../lib/constants";
import {
  Container,
  Heading,
  Text,
  Grid,
  Separator,
  Link as StyledLink,
} from "@chakra-ui/react";
import { MotionDiv } from "../../components/ui/MotionDiv";

import {
  Business,
  Enterprise,
  StaticWebsite,
  Ticket,
  Shop,
} from "../../lib/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services and pricing packages for businesses and individuals.",
};

export default function Services() {
  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Heading fontSize={{ base: "2.3em", md: "3em" }}>Services 🔧</Heading>
          <Text color="gray.400">
            Check out the services I offer and their pricing. If you&apos;d like
            a custom package feel free to{" "}
            <StyledLink color={"teal.500"} fontWeight="bold" asChild>
              <Link href="/contact">contact</Link>{" "}
            </StyledLink>
            me and I&apos;ll be happy to help.
          </Text>
        </Container>
        <Container pt={8} maxW={width} px={padding}>
          <Heading pb={2}>Web Development Plans</Heading>
          <Separator />
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
          <Heading pb={2}>Enterprise Plans</Heading>
          <Separator />
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
          <Heading pb={2}>Revision Ticket Packages</Heading>
          <Separator />
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
          <Separator />
        </Container>
        <Footer />
      </MotionDiv>
    </div>
  );
}
