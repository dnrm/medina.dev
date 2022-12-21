import React from "react";
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
import { useColorModeValue } from "@chakra-ui/react";

const Service = ({
  title,
  description,
  features,
  price,
  backgroundImage,
  icon,
  badge
}) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const text = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("gray.300", "gray.600");

  return (
    <GridItem
      placeItems="start"
      backgroundColor={bg}
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
        <Box position={'absolute'}>hi</Box>
        <Box
          h={"28"}
          w={"28"}
          position={"relative"}
          top={"14"}
          textAlign="center"
          backgroundColor={iconColor}
          rounded="full"
          color={text}
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
            fontFamily="Work Sans, sans-serif"
            textAlign={"left"}
            w="100%"
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            ${price}
            <Text
              display={"inline"}
              fontSize={"xl"}
              fontFamily="Work Sans"
              pl={1}
            >
              USD
            </Text>
          </Heading>
          <Heading
            fontFamily="Work Sans, sans-serif"
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
          <Text color={text} textAlign={"left"} pb={4}>
            {description}
          </Text>
          <Text color={text} textAlign={"left"}>
            Features:
          </Text>
          <List
            color={text}
            textAlign={"justify"}
            listStyleType="initial"
            listStylePos={"inside"}
          >
            {features.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
            ))}
          </List>
        </Box>
        <Button mt={{ base: 6, md: 2 }} w={"100%"} backgroundColor={iconColor}>
          Purchase
        </Button>
      </Stack>
    </GridItem>
  );
};

export default Service;
