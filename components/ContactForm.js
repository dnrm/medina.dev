import React from "react";
import {
  Container,
  Text,
  Heading,
  Stack,
  Image,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const ContactForm = ({ width, border }) => {
  const toast = useToast();
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        address: address,
        emailContent: message,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      toast({
        title: "Email sent!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setAddress("");
      setMessage("");
    } else {
      toast({
        title: "Error sending email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container pt={8} px={6} maxW={width}>
      <Heading fontFamily={"Work Sans, sans serif"}>Hire Me 🏢</Heading>
      <Text textColor="gray.500" mb={2}>
        Are you interested in hiring me? Send me a message!
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack borderWidth={2} borderColor={border} borderRadius={"lg"}>
          <Image
            alt="a"
            src="/DSC09430-min.png"
            height={48}
            w={"100%"}
            objectFit="cover"
          />
          <Stack pb={6} pt={2} px={5} className="input-elements">
            <Stack className="email">
              <Text fontSize={{ base: "0.8em", md: "1.2em" }}>Your Email</Text>
              <Stack>
                <Input
                  type="email"
                  variant={"filled"}
                  placeholder="john@doe.com"
                  value={address}
                  onChange={handleAddressChange}
                />
              </Stack>
            </Stack>
            <Stack className="message">
              <Text fontSize={{ base: "0.8em", md: "1.2em" }}>Message</Text>
              <Stack>
                <Textarea
                  placeholder="john@doe.com"
                  variant={"filled"}
                  value={message}
                  onChange={handleMessageChange}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Button
          textAlign="center"
          type="submit"
          h={"auto"}
          fontWeight="normal"
          backgroundColor="transparent"
          w={"100%"}
          borderWidth={2}
          borderColor={border}
          _hover={{ backgroundColor: "gray.600", textDecor: "underline" }}
          mx={"auto"}
          display="block"
          borderRadius={"lg"}
          py={3}
          px={8}
          mt={4}
        >
          Send Email →
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
