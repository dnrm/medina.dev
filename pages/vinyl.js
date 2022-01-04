import React from "react";
import {
  Container,
  Heading,
  Stack,
  Flex,
  Divider,
  Text,
  Link
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const width = "90ch";
const padding = 6;

const collection = [
  {
    title: "Definitely Maybe (Remastered)",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273d86a1e021e7acc7c07c7d668",
    link: "https://open.spotify.com/album/50xG9YujTzMGaLHfJTskBy?si=05PZTYgtRY2npzMCBXKepA"
  },
  {
    title: "Be Here Now (Remastered)",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273aeda362a434f01d0eff70b4e",
    link: "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV?si=roj9rrKaTHOy4tgMe_ttgA"
  },
  {
    title: "A Rush of Blood to the Head 1xLP",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40",
    link: "https://open.spotify.com/album/0RHX9XECH8IVI3LNgWDpmQ?si=rNn19WQ7QC-rVcLKLvzLpQ"
  },
  {
    title: "A Head Full of Dreams 2xLP Black",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    link: "https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw?si=494e3052096c4594"
  },
  {
    title: "Different Class 1xLP",
    artist: "Pulp",
    cover: "https://i.scdn.co/image/ab67616d0000b273fd952bece8f049dbcd7df93f",
    link: "https://open.spotify.com/album/3ly9T2L4pqTZijFgQssd3x?si=D-OEbo_eQQegg3loECpEcg"
  },
  {
    title: "(What's The Story) Morning Glory? 2xLP",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b2737a4c8c59851c88f6794c3cbf",
    link: "https://open.spotify.com/album/1VW1MFNstaJuygaoTPkdCk?si=IsrKBGb9QrCohwV8Irn45A"
  },
  {
    title: "Happier Than Ever 2xLP, Black",
    artist: "Billie Eilish",
    cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
    link: "https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp?si=UGHhEai3QAatUqFEobVm9Q"
  },
  {
    title: "Double Fantasy (Original 1980 Geffen Records Mexican Pressing)",
    artist: "John Lennon & Yoko Ono",
    cover: "https://i.scdn.co/image/ab67616d0000b2730488a5c4e21edc24526652ae",
    link: "https://open.spotify.com/album/1NWA2fPLUAW5df7UGI5thp?si=20d588db7c97488b"
  },
  {
    title: "Christmas Lights Blue 7\" Single 2020",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b2734b3f858e8ace8ca943695ace",
    link: "https://open.spotify.com/track/4MJmHcZn440Wf7oIeMbhD1"
  },
  {
    title: "Music of the Spheres 2xLP Recycled Colored Vinyl",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b273ec10f247b100da1ce0d80b6d",
    link: "https://open.spotify.com/album/06mXfvDsRZNfnsGZvX2zpb?si=DvYDXUIuTdmPL5ZR6Vp7dQ"
  },
  {
    title: "Optimist 1xLP Walmart Exclusive",
    artist: "FINNEAS",
    cover: "https://i.scdn.co/image/ab67616d0000b2733bfed0974a996bfd87ea1c9a",
    link: "https://open.spotify.com/album/3KChz6qdEH9AfHE6VCBshZ"
  },
  {
    title: "Sgt Pepper's Lonely Hearts Club Band (Original Capitol Records '67 Pressing)",
    artist: "The Beatles",
    cover: "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
    link: "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW?si=aef5c1e422674634"
  },
  {
    title: "I Want To Hold Your Hand / I Saw Her Standing There (Original 1963 Capitol Records Pressing)",
    artist: "The Beatles",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/bf/I_saw_her_standing_there_single.png",
    link: "https://open.spotify.com/playlist/0ccS4zrSTfYKFSBN3PbKzR"
  }
];

const Vinyl = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <div>
      <Head>
        <title>Vinyl | Daniel Medina - Web Developer</title>
      </Head>
      <Navbar width={width} padding={padding} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding}>
          <Heading
            fontFamily="Work Sans, sans-serif"
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            My Vinyl Collection
          </Heading>
        </Container>
          <Container pt={4} maxW={width} px={padding}>
            <Text fontWeight="bold" textColor="gray.400">{collection.length} Records in total</Text>
          </Container>
        <Container pt={2} maxW={width} px={padding} pb={16}>
          {collection.map((i) => {
            return (
              <Flex
                key={i.title}
                bgColor={bg}
                h={32}
                justifyContent="start"
                alignItems="center"
                my={2}
                p={4}
                rounded="md"
              >
                <Stack mr={3} minW="24">
                  <a target="_blank" rel="noreferrer" href={i.cover}>
                    <Image
                      src={i.cover}
                      alt={`${i.title} by ${i.artist}`}
                      height="1000"
                      width="1000"
                      layout="responsive"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="/album.png"
                    />
                  </a>
                </Stack>
                <Flex direction="column">
                  <Heading
                    fontWeight="bold"
                    fontSize={{ base: "1.4em", md: "1.6em" }}
                    letterSpacing="tighter"
                  >
                    <Link href={i.link} target="_blank" rel="noreferrer">
                      {i.title}
                    </Link>
                  </Heading>
                  <Text>{i.artist}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Divider />
        </Container>
        <Container maxW={width} px={padding}>
          <Footer />
        </Container>
      </motion.div>
    </div>
  );
};

export default Vinyl;
