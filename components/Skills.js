"use client";

import { Container, Heading, Flex, Badge } from "@chakra-ui/react";

const skills = [
    { name: "Next.js", colorPalette: "teal" },
    { name: "Supabase", colorPalette: "green" },
    { name: "Typescript", colorPalette: "blue" },
    { name: "Javascript", colorPalette: "yellow" },
    { name: "Prisma", colorPalette: "blackAlpha" },
    { name: "React", colorPalette: "cyan" },
    { name: "Node.js", colorPalette: "green" },
    { name: "ShadCN", colorPalette: "blackAlpha" },
    { name: "CSS", colorPalette: "blue" },
    { name: "MongoDB", colorPalette: "green" },
    { name: "HTML", colorPalette: "gray" },
    { name: "AWS", colorPalette: "orange" },
    { name: "Docker", colorPalette: "blue" },
    { name: "Sass", colorPalette: "pink" },
    { name: "Cursor", colorPalette: "blackAlpha" },
    { name: "Tailwind CSS", colorPalette: "teal" },
    { name: "Vercel", colorPalette: "blackAlpha" },
    { name: "Bootstrap", colorPalette: "purple" },
    { name: "Chakra UI", colorPalette: "teal" },
    { name: "MySQL", colorPalette: "blue" },
    { name: "PostgreSQL", colorPalette: "cyan" },
    { name: "Angular", colorPalette: "red" },
    { name: "Git", colorPalette: "orange" },
    { name: "Figma", colorPalette: "purple" }
];

const Skills = ({ padding, width }) => {
    return (
        <Container pt={16} maxW={width} px={padding}>
            <Heading mb={1}>
                My Skills 💪
            </Heading>
            <Flex
                justifyContent="start"
                alignItems="center"
                direction="row"
                wrap="wrap"
            >
                {skills.map((skill, index) => (
                    <Badge
                        key={index}
                        mx={1}
                        my={1}
                        fontSize={{ base: "0.9em", md: "1em" }}
                        colorPalette={skill.colorPalette}
                    >
                        {skill.name}
                    </Badge>
                ))}
            </Flex>
        </Container>
    );
};

export default Skills;
