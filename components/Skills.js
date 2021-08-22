import React from "react";
import { Container, Heading, Flex, Badge } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Skills = ({ padding, width }) => {

    const color = useColorModeValue("blackAlpha", "gray")

    return (
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
                    colorScheme={color}
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
                    colorScheme={color}
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
    );
};

export default Skills;
