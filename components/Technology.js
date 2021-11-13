import React from 'react'
import { Flex, Text, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode';

const Technology = (props) => {

    const bg = useColorModeValue("gray.100", "gray.700");
    const text = useColorModeValue("white", "gray.400");

    return (
        <Flex bgColor={bg} p={4} rounded="md" flexDir="column">
            <Heading fontSize="xl" textColor={text} fontWeight="bold">{props.title}</Heading>
            <Text fontSize="md">{props.description}</Text>
        </Flex>
    )
}

export default Technology
