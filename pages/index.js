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
            <Container pt={16} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif" mb={1}>
                    My Skills 💪
                </Heading>
                <Flex
                    justifyContent="start"
                    alignItems="center"
                    direction="row"
                    wrap="wrap"
                    gap={4}
                >
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="teal"
                    >
                        Next.js
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="messenger"
                    >
                        Typescript
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="yellow"
                    >
                        Javascript
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="red"
                    >
                        Angular
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="cyan"
                    >
                        React
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="green"
                    >
                        Node.js
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="blue"
                    >
                        CSS
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="teal"
                    >
                        HTML
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="orange"
                    >
                        AWS
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="blue"
                    >
                        Docker
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="blackAlpha"
                    >
                        GitHub Actions
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="pink"
                    >
                        Sass
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="teal"
                    >
                        Tailwind CSS
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="facebook"
                    >
                        Chakra UI
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="blackAlpha"
                    >
                        Vercel
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="purple"
                    >
                        Bootstrap
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="green"
                    >
                        MongoDB
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="purple"
                    >
                        FaunaDB
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="yellow"
                    >
                        MySQL
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="cyan"
                    >
                        PostgreSQL
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="orange"
                    >
                        Linux
                    </Badge>
                    <Badge
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorScheme="yellow"
                    >
                        Git
                    </Badge>
                </Flex>
            </Container>
            <Container pt={16} maxW={width} px={padding}>
                <Heading fontFamily="Work Sans, sans-serif" mb={3}>
                    My Projects 🔨
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
