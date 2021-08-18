import React from "react";
import { Stack, Heading, Text, Image, Link } from "@chakra-ui/react";

const Certification = ({ title, src, children, href }) => {
    return (
        <Stack rounded="md" borderWidth="2px" borderColor="gray.200">
            <Image
                roundedTop="md"
                src={src}
                h={40}
                w={"full"}
                objectFit={"cover"}
                alt="Certification Image"
            />
            <Stack px={4} pb={4} pt={2}>
                <Heading
                    fontWeight="regular"
                    fontSize={{ base: "0.9em", md: "1em" }}
                >
                    <Link href={href}>
                        {title}
                    </Link>
                </Heading>
                <Text
                    fontWeight="regular"
                    fontSize={{ base: "0.8em", md: "0.9em" }}
                >
                    {children}
                </Text>
            </Stack>
        </Stack>
    );
};

export default Certification;
