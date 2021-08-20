import Head from "next/head";
import { Container, Heading, Grid } from "@chakra-ui/react";
import Certification from "../components/Certification";

const width = "90ch";
const padding = 10;

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
    src: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8ZFVH8NHQFLX/CERTIFICATE_LANDING_PAGE~8ZFVH8NHQFLX.jpeg",
    title: "Technical Support Fundamentals | W3Schools",
    description:
      "I got this certification by completing the Technical Support Fundamentals course by Google on Coursera.",
  },
  {
    href: "https://www.udemy.com/certificate/UC-afc022c3-548f-4018-9066-d47db483e6a4/",
    src: "https://udemy-certificate.s3.amazonaws.com/image/UC-afc022c3-548f-4018-9066-d47db483e6a4.jpg?v=1613942510000",
    title:
      "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS | Victor Robles",
    description:
      "This certifies the completion of the Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS course by Victor Robles.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/responsive-web-design",
    src: "https://screenshotapi-dot-net.storage.googleapis.com/www_freecodecamp_org_certification_dnrm_responsive_web_design_cddb55bcf414.png",
    title: "Responsive Web Design Certification | freeCodeCamp",
    description:
      "I got this certification by completing the Responsive Web Design course.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/javascript-algorithms-and-data-structures",
    src: "https://screenshotapi-dot-net.storage.googleapis.com/www_freecodecamp_org_certification_dnrm_javascript_algorithms_and_data_structures_8afc9de8c472.png",
    title: "Javascript Algorithms and Data Structures",
    description:
      "This certifies completion of the Javascript Algorithms and Data Structures course.",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/front-end-libraries",
    src: "https://screenshotapi-dot-net.storage.googleapis.com/www_freecodecamp_org_certification_dnrm_front_end_libraries_27ab5c0936c7.png",
    title: "Front End Libraries Certification",
    description:
      "I was awarded this certification upon completion of the Front End Libraries course offered by freeCodeCamp",
  },
  {
    href: "https://www.freecodecamp.org/certification/dnrm/apis-and-microservices",
    src: "https://screenshotapi-dot-net.storage.googleapis.com/www_freecodecamp_org_certification_dnrm_apis_and_microservices_e2d6069bd391.png",
    title: "APIs and Microservices",
    description:
      "I got this certification for successfully submitting all 5 projects required in the APIs and Microservices course by freeCodeCamp.",
  },
];

const certifications = () => {
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
      <Container pt={24} maxW={width} px={padding} pb={16}>
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
    </div>
  );
};

export default certifications;
