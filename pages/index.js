import Head from "next/head";
import Image from "next/image";
import { Container, Heading } from '@chakra-ui/react'

export default function Home() {
    return (
      <Container py={32}>
        <Heading>Hi, I&apos;m Daniel Medina 👋</Heading>
      </Container>
    );
}
