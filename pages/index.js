import Head from "next/head";
import {
    Container,
    Heading,
    Text,
    Grid,
    Divider,
    Badge,
    Flex,
    Link,
    Avatar,
} from "@chakra-ui/react";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import Skills from "../components/Skills";
import Certification from "../components/Certification";

const certifications = [
    {
        title: "Certified Javascript Developer | W3Schools",
        description:
            "This certification was given to me by W3Schools. Upon passing their exam.",
        href:
            "https://courses.w3schools.com/certificates/certified-javascript-developer-539.pdf",
        src: "/w3-javascript.png",
    },
    {
        href:
            "https://www.coursera.org/account/accomplishments/verify/8ZFVH8NHQFLX",
        src:
            "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8ZFVH8NHQFLX/CERTIFICATE_LANDING_PAGE~8ZFVH8NHQFLX.jpeg",
        title: "Technical Support Fundamentals | W3Schools",
        description:
            "I got this certification by completing the Technical Support Fundamentals course by Google on Coursera.",
    },
    {
        href:
            "https://www.udemy.com/certificate/UC-afc022c3-548f-4018-9066-d47db483e6a4/",
        src:
            "https://udemy-certificate.s3.amazonaws.com/image/UC-afc022c3-548f-4018-9066-d47db483e6a4.jpg?v=1613942510000",
        title:
            "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS | Victor Robles",
        description:
            "This certifies the completion of the Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS course by Victor Robles.",
    },
];

export default function Home() {
    const width = "90ch";
    const padding = 10;

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
                <meta
                    property="og:title"
                    content="Daniel Medina - Web developer"
                />
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
            <Container pt={{ base: "12", md: "28" }} maxW={width} px={padding}>
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
                    I&apos;m a web developer from Mexico. I love to work with
                    Next.js and AWS. Check out my projects below!
                </Text>
            </Container>
            <Container pt={16} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif">
                    About Me 👨‍💻
                </Heading>
                <Text
                    textColor="gray.500"
                    fontSize={{ base: "0.9em", md: "1em" }}
                >
                    My name is Daniel Medina. I am a high school student at{" "}
                    <Link href="https://tec.mx">Tecnológico de Monterrey</Link>.
                    I started my journey as a web developer in January of 2020.
                    During the COVID-19 pandemic I had a lot of free time
                    therefore I was able to really bump up my skills. I started
                    experimenting with all kinds of technologies and projects.
                    As of August 2021 I have made 6 big projects which are
                    listed below. I have also done some small projects which can
                    be found in{" "}
                    <Link href="https://github.com/dnrm">my Github</Link> a
                    profile.
                </Text>
                <br />
                <Text
                    textColor="gray.500"
                    fontSize={{ base: "0.9em", md: "1em" }}
                >
                    I spend my free time listening and composing music, taking
                    photos, sailing, and coding. I also love collecting vinyl
                    records. I currently have a small collection of them, but
                    plan to expand it indefinitely. Check out my collection
                    here.
                </Text>
            </Container>
            <Skills width={width} padding={padding} />
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

            </Container>
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
                    />
                    <Project
                        title="🌱 Amethyst"
                        url="https://aws.medina.dev"
                        description="A user friendly way to manage your API Gateway keys. Built with
                Next.js and the AWS Javascript SDK."
                    />
                    <Project
                        title="🌵 Crystal"
                        url="https://crystal.medina.dev"
                        description="Social media website built with Next.js and Tailwind CSS. The backend uses MongoDB and S3 for file uploads."
                    />
                    <Project
                        title="🌳  Sapphire"
                        description="A full stack photo gallery app that uses an S3 bucket, user authentication, and resizes uploaded images using a Lambda function."
                    />
                    <Project
                        title="🌲 Crypto Charts"
                        url="https://crypto-charts.netlify.app/"
                        description="Small project where you choose a cryptocurrency and then a graph is shown showing historical prices."
                    />
                    <Project
                        title="🌿 Something - Official website"
                        url="https://something-roblox.vercel.app/"
                        description="Client website built with Next.js to promote a Roblox game. Deployed to Vercel."
                    />
                </Grid>
            </Container>
            <Posts width={width} padding={padding} />
            <Container pt={16} pb={10} maxW={width} px={padding}>
                <Heading pb={2} fontFamily="Work Sans, sans-serif">
                    My Favourite Technologies ⭐️
                </Heading>
                <Technologies
                    items={[
                        "Next.js",
                        "MongoDB",
                        "React",
                        "Tailwind CSS",
                        "ChakraUI",
                        "Vercel",
                    ]}
                />
            </Container>
            <Container pb={10} maxW={width} px={padding}>
                <Divider />
            </Container>
            <Container maxW={width} px={padding}>
                <Footer />
            </Container>
        </div>
    );
}
