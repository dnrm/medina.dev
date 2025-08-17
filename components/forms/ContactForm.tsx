"use client";

import React, { useState } from "react";
import {
  Container,
  Text,
  Heading,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import { Toaster, toaster } from "@/components/ui/toaster";

interface ContactFormProps {
  width: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ width }) => {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: address,
          emailContent: message,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (response.ok) {
        toaster.create({
          title: "Email sent!",
          description: "Email sent successfully",
          type: "success",
        });
        setAddress("");
        setMessage("");
      } else {
        toaster.create({
          title: "Error sending email.",
          description: "Error sending email",
          type: "error",
        });
      }
    } catch (error) {
      toaster.create({
        title: "Error sending email.",
        description: "Error sending email",
        type: "error",
      });
    }
  };

  return (
    <Container pt={8} px={6} maxW={width}>
      <Heading>Hire Me 🏢</Heading>
      <Text color={{ base: "gray.600", _dark: "gray.400" }} mb={2}>
        Are you interested in hiring me? Send me a message!
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack borderWidth={2} borderColor={{ base: "gray.300", _dark: "gray.600" }} borderRadius={"lg"}>
          <Stack position={"relative"} height={48}>
            <Image
              alt="Contact banner"
              src="/banner.png"
              layout="fill"
              objectFit="cover"
            />
          </Stack>
          <Stack pb={6} pt={2} px={5} className="input-elements">
            <Stack className="email">
              <Text fontSize={{ base: "0.8em", md: "1.2em" }}>Your Email</Text>
              <Stack>
                <Input
                  type="email"
                  placeholder="john@doe.com"
                  value={address}
                  onChange={handleAddressChange}
                  required
                />
              </Stack>
            </Stack>
            <Stack className="message">
              <Text fontSize={{ base: "0.8em", md: "1.2em" }}>Message</Text>
              <Stack>
                <Textarea
                  placeholder="Your message here..."
                  value={message}
                  onChange={handleMessageChange}
                  required
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
          color={{ base: "gray.600", _dark: "gray.200" }}
          borderColor={{ base: "gray.300", _dark: "gray.600" }}
          _hover={{ backgroundColor: "gray.100", textDecor: "underline", _dark: { backgroundColor: "gray.800", textDecor: "underline" } }}
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
