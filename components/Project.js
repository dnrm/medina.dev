import React from "react";
import { Stack, Heading, Text, Link, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Project = (props) => {

    const border = useColorModeValue("gray.300", "gray.600")

    return (
        <Stack
            borderWidth="2px"
            borderColor={border}
            p={2}
            rounded="md"
            pb={6}
            minHeight={28}
        >
            { props.image && (
                <Image borderRadius="md" className="" src={props.image} alt={props.title} />
            )}
            <Heading
                pt={1}
                fontWeight="regular"
                fontSize={{ base: "0.9em", md: "1em" }}
            >
                {props.url ? (
                    <Link href={props.url} target="_blank" rel="noreferrer">
                        {props.title}
                    </Link>
                ) : (
                    props.title
                )}
            </Heading>
            <Text
                textColor="gray.500"
                fontSize={{ base: "0.8em", md: "0.9em" }}
            >
                {props.description}
            </Text>
        </Stack>
    );
};

export default Project;
