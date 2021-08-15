import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

const Project = (props) => {
    return (
        <Stack
            borderWidth="2px"
            borderColor="gray.300"
            p={2}
            rounded="md"
            pb={6}
            minHeight={28}
        >
            <Heading
                pt={1}
                fontWeight="regular"
                fontSize={{ base: "0.9em", md: "1em" }}
            >
                {props.title}
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