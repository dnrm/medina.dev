import Head from "next/head";
import Image from "next/image";
import {
    Container,
    Heading,
    Text,
    Grid,
    UnorderedList,
    ListItem,
    Divider,
} from "@chakra-ui/react";
import Project from "../components/Project";

export default function Home() {
    return (
        <>
            <Container pt={32}>
                <Heading fontFamily="Work Sans">
                    Hi, I&apos;m Daniel Medina 👋
                </Heading>
                <Text textColor="gray.500">
                    I&apos;m a web developer from Mexico. I love to work with
                    Next.js and AWS. Check out my projects below!
                </Text>
            </Container>
            <Container pt={16}>
                <Heading fontFamily="Work Sans">About Me</Heading>
                <Text
                    textColor="gray.500"
                    fontSize={{ base: "0.8em", md: "0.9em" }}
                >
                    My name is Daniel Medina. I am a high school student at
                    Tecnológico de Monterrey. I started my journey as a web
                    developer in January of 2020. During the COVID-19 pandemic I
                    had a lot of free time therefore I was able to really bump
                    up my skills. I started experimenting with all kinds of
                    technologies and projects. As of August 2021 I have made 4
                    big projects which are listed above. I have also done some
                    small projects which can be found in my Github profile.
                </Text>
                <br />
                <Text
                    textColor="gray.500"
                    fontSize={{ base: "0.8em", md: "0.9em" }}
                >
                    I spend my free time listening and composing music, taking
                    photos, sailing, and coding. I also love collecting vinyl
                    records. I currently have a small collection of them, but
                    plan to expand it indefinitely. Check out my collection
                    here.
                </Text>
            </Container>
            <Container pt={16}>
                <Heading fontFamily="Work Sans" mb={3}>
                    My Projects
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Project
                        title="🌱 Amethyst"
                        description="A user friendly way to manage your API Gateway keys. Built with
                Next.js and the AWS Javascript SDK."
                    />
                    <Project
                        title="🌳 Sapphire"
                        description="A full stack photo gallery app that uses an S3 bucket, user authentication, and resizes uploaded images using a Lambda function."
                    />
                    <Project
                        title="🌵 Crystal"
                        description="Social media website built with Next.js and Tailwind CSS. The backend uses MongoDB and S3 for file uploads."
                    />
                    <Project
                        title="🌲 Crypto Charts"
                        description="Small project where you choose a cryptocurrency and then a graph is shown showing historical prices."
                    />
                </Grid>
            </Container>
            <Container pt={16} pb={10}>
                <Heading fontFamily="Work Sans">
                    My Favourite Technologies
                </Heading>
                <UnorderedList textColor="gray.500">
                    <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                        Next.js
                    </ListItem>
                    <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                        MongoDB
                    </ListItem>
                    <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                        React
                    </ListItem>
                    <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                        Tailwind CSS
                    </ListItem>
                    <ListItem fontSize={{ base: "0.8em", md: "0.9em" }}>
                        Chakra UI
                    </ListItem>
                </UnorderedList>
            </Container>
            <Container pb={10}>
                <Divider />
            </Container>
        </>
    );
}
