"use client";

import {
  GridItem,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Stack,
  Button,
} from "@chakra-ui/react";

const Service = ({
  title,
  description,
  features,
  price,
  backgroundImage,
  icon,
}) => {
  return (
    <GridItem
      placeItems="start"
      backgroundColor={{ base: "gray.100", _dark: "gray.700" }}
      gap={2}
      rounded={"lg"}
      h={"min"}
    >
      <Box
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        roundedTop="lg"
        display="grid"
        placeItems={{ base: "left", md: "center" }}
        w="100%"
        py={8}
        px={2}
      >
        <Box
          h={"28"}
          w={"28"}
          position={"relative"}
          top={"14"}
          textAlign="center"
          backgroundColor={{ base: "gray.300", _dark: "gray.600" }}
          rounded="full"
          color={{ base: "gray.600", _dark: "gray.300" }}
          p={2}
        >
          <Box p={4} rounded="full" backgroundColor={"teal.500"}>
            {icon}
          </Box>
        </Box>
      </Box>
      <Stack p={4} pt={8}>
        <Box w="100%">
          <Heading
            textAlign={"left"}
            w="100%"
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            ${price}
            <Text
              display={"inline"}
              fontSize={"xl"}
              pl={1}
            >
              USD
            </Text>
          </Heading>
          <Heading
            pt={2}
            textAlign={"left"}
            w="100%"
            fontSize={{ base: "lg", md: "2xl" }}
          >
            {title}
          </Heading>
        </Box>
        {/* Description box */}
        <Box
          className="text"
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          pb={2}
        >
          <Text color={{ base: "gray.600", _dark: "gray.300" }} textAlign={"left"} pb={4}>
            {description}
          </Text>
          <Text color={{ base: "gray.600", _dark: "gray.300" }} textAlign={"left"}>
            Features:
          </Text>
          <List
            color={{ base: "gray.600", _dark: "gray.300" }}
            textAlign={"justify"}
            listStyleType="initial"
            listStylePos={"inside"}
          >
            {features.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
            ))}
          </List>
        </Box>
        <Button mt={{ base: 6, md: 2 }} w={"100%"} backgroundColor={{ base: "gray.300", _dark: "gray.600" }}>
          Purchase
        </Button>
      </Stack>
    </GridItem>
  );
};

export default Service;
