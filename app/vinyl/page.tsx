import type { Metadata } from 'next'
import { Container, Heading, Separator, Text, Grid } from "@chakra-ui/react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/Footer";
import { width, padding } from "@/lib/constants";
import VinylRecord from "@/components/VinylRecord";
import { MotionDiv } from "@/components/ui/MotionDiv";

export const metadata: Metadata = {
  title: 'Vinyl Collection',
  description: 'My personal vinyl record collection featuring various artists and genres.',
}

const collection = [
  {
    title: "Charm",
    artist: "Clairo",
    cover: "https://i.scdn.co/image/ab67616d0000b273193c2fafdce8f116b5ca0a78",
    link: "https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i?si=JMcDLizsQXinLKCLXH4eiw",
  },
  {
    title: "Immunity",
    artist: "Clairo",
    cover: "https://i.scdn.co/image/ab67616d0000b27333ccb60f9b2785ef691b2fbc",
    link: "https://open.spotify.com/album/4kkVGtCqE2NiAKosri9Rnd?si=TLMIbGtrREKH53zzPDMwHg",
  },
  {
    title: "Definitely Maybe",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273d86a1e021e7acc7c07c7d668",
    link: "https://open.spotify.com/album/50xG9YujTzMGaLHfJTskBy?si=05PZTYgtRY2npzMCBXKepA",
  },
  {
    title: "Be Here Now",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273aeda362a434f01d0eff70b4e",
    link: "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV?si=roj9rrKaTHOy4tgMe_ttgA",
  },
  {
    title: "A Rush of Blood to the Head ",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40",
    link: "https://open.spotify.com/album/0RHX9XECH8IVI3LNgWDpmQ?si=rNn19WQ7QC-rVcLKLvzLpQ",
  },
  {
    title: "A Head Full of Dreams",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    link: "https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw?si=494e3052096c4594",
  },
  {
    title: "Different Class",
    artist: "Pulp",
    cover: "https://i.scdn.co/image/ab67616d0000b273fd952bece8f049dbcd7df93f",
    link: "https://open.spotify.com/album/3ly9T2L4pqTZijFgQssd3x?si=D-OEbo_eQQegg3loECpEcg",
  },
  {
    title: "(What's The Story) Morning Glory?",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b2737a4c8c59851c88f6794c3cbf",
    link: "https://open.spotify.com/album/1VW1MFNstaJuygaoTPkdCk?si=IsrKBGb9QrCohwV8Irn45A",
  },
  {
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    cover: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
    link: "https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp?si=UGHhEai3QAatUqFEobVm9Q",
  },
  {
    title: "Double Fantasy",
    artist: "John Lennon & Yoko Ono",
    cover: "https://i.scdn.co/image/ab67616d0000b2730488a5c4e21edc24526652ae",
    link: "https://open.spotify.com/album/1NWA2fPLUAW5df7UGI5thp?si=20d588db7c97488b",
  },
  {
    title: "Christmas Lights",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b2734b3f858e8ace8ca943695ace",
    link: "https://open.spotify.com/track/4MJmHcZn440Wf7oIeMbhD1",
  },
  {
    title: "Music of the Spheres",
    artist: "Coldplay",
    cover: "https://i.scdn.co/image/ab67616d0000b273ec10f247b100da1ce0d80b6d",
    link: "https://open.spotify.com/album/06mXfvDsRZNfnsGZvX2zpb?si=DvYDXUIuTdmPL5ZR6Vp7dQ",
  },
  {
    title: "Optimist",
    artist: "FINNEAS",
    cover: "https://i.scdn.co/image/ab67616d0000b2733bfed0974a996bfd87ea1c9a",
    link: "https://open.spotify.com/album/3KChz6qdEH9AfHE6VCBshZ",
  },
  {
    title: "Sgt Pepper's Lonely Hearts Club Band",
    artist: "The Beatles",
    cover: "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
    link: "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW?si=aef5c1e422674634",
  },
  {
    title: "I Want To Hold Your Hand / I Saw Her Standing There",
    artist: "The Beatles",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/I_saw_her_standing_there_single.png",
    link: "https://open.spotify.com/playlist/0ccS4zrSTfYKFSBN3PbKzR",
  },
  {
    title: "The Dark Side Of The Moon",
    artist: "Pink Floyd",
    cover: "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe",
    link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=DOAhHbkfRoaPefNbT0RVCA",
  },
  {
    title: "Rubber Soul",
    artist: "The Beatles",
    cover: "https://i.scdn.co/image/ab67616d0000b273ed801e58a9ababdea6ac7ce4",
    link: "https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm?si=k9_Qg-LURyGGDPIRImUUuQ",
  },
  {
    title: "Sling",
    artist: "Clairo",
    cover: "https://i.scdn.co/image/ab67616d0000b2732624442cf48e4962d1422da8",
    link: "https://open.spotify.com/track/0HAqq2GcQKyi3s87GuN7jU",
  },
  {
    title: "The Masterplan",
    artist: "Oasis",
    cover: "https://i.scdn.co/image/ab67616d0000b273b54b7ab11f1779ca09769e7a",
    link: "https://open.spotify.com/album/1avl9iL9ZRN2O0Z1831cKw?si=3340c35400b649d1",
  },
  {
    title: "Cigarettes After Sex",
    artist: "Cigarettes After Sex",
    cover: "https://i.scdn.co/image/ab67616d0000b2736b701428ed4c6e053902174a",
    link: "https://open.spotify.com/album/5bP82ZIls6rzhpf5Qu6AzC?si=2CSB0_BJQcKFLCvsNBgQAQ",
  },
  {
    title: "Christmas (Deluxe Special Edition)",
    artist: "Michael Bublé",
    cover: "https://i.scdn.co/image/ab67616d0000b273119e4094f07a8123b471ac1d",
    link: "https://open.spotify.com/album/7uVimUILdzSZG4KKKWToq0?si=G9xAbibxQcOvl1D9jhI5Jg",
  },
  {
    title: "Midnights",
    artist: "Taylor Swift",
    cover: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
    link: "https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=b7ya_PwbTo6kpbfoIHkD7A",
  },
  {
    title: "Evermore",
    artist: "Taylor Swift",
    cover: "https://i.scdn.co/image/ab67616d0000b27390fd9741e1838115cd90b3b6",
    link: "https://open.spotify.com/album/6AORtDjduMM3bupSWzbTSG?si=NUQhbVv1TLOUWxNMAllVyg",
  },
  {
    title: "When We All Fall Asleep, Where Do We Go?",
    artist: "Billie Eilish",
    cover: "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
    link: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh?si=Mt3i4OhsQqG9bY6tJgrg3A",
  },
];

export default function Vinyl() {
  return (
    <div>
      <Navbar />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <Container pt={{ base: "12", md: "16" }} maxW={width} px={padding} mb={4}>
          <Heading
            fontSize={{ base: "2.3em", md: "3em" }}
          >
            My Vinyl Collection 🎧
          </Heading>
        </Container>
        <Container pt={4} maxW={width} px={padding}>
          <Text fontWeight="bold" color="gray.400">
            {collection.length} Records in total
          </Text>
        </Container>
        <Container pt={2} maxW={width} px={padding} pb={16}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {collection.map(({ title, cover, link, artist }) => {
              return (
                <VinylRecord
                  key={title}
                  title={title}
                  cover={cover}
                  link={link}
                  artist={artist}
                />
              );
            })}
          </Grid>
        </Container>
        <Container pb={10} maxW={width} px={padding}>
          <Separator />
        </Container>
        <Container maxW={width} px={padding}>
          <Footer />
        </Container>
      </MotionDiv>
    </div>
  );
}
