import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Heading,
  Grid,
  Stack,
  Text,
  Box,
  Link as StyledLink,
} from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Posts = (props) => {
  const { width, padding } = props;
  const [posts, setPosts] = useState();

  const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "dnrm") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

  useEffect(() => {
    const get = async (query, variables) => {
      const response = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      const json = await response.json();
      setPosts(json.data.user.publication.posts);
    };

    get(GET_USER_ARTICLES, { page: 0 });
  }, [GET_USER_ARTICLES]);

  const border = useColorModeValue("gray.300", "gray.600");

  return (
    <Container pt={16} pb={0} maxW={width} px={padding}>
      <Heading pb={2} fontFamily="Work Sans, sans-serif">
        Blog Posts
      </Heading>
      {posts ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          {posts.map((i) => {
            return (
              <StyledLink
                href={`https://blog.medina.dev/${i.slug}`}
                target="_blank"
                rel="noreferrer"
                key={i.title}
              >
                <Stack
                  borderWidth="2px"
                  borderColor={border}
                  rounded="md"
                  p={2.5}
                >
                  <Stack position={"relative"} h={48} rounded="xl">
                    <Box rounded="lg">
                      <Image
                        src={i.coverImage}
                        h={48}
                        layout="fill"
                        objectFit="cover"
                        alt="Cover"
                      />
                    </Box>
                  </Stack>
                  <Heading
                    fontWeight="regular"
                    fontSize={{ base: "1em", md: "1.1em" }}
                  >
                    {i.title}
                  </Heading>
                  <Text
                    fontSize={{
                      base: "0.8em",
                      md: "0.9em",
                    }}
                    textColor="gray.500"
                  >
                    {i.brief}
                  </Text>
                </Stack>
              </StyledLink>
            );
          })}
        </Grid>
      ) : (
        <Heading>Loading...</Heading>
      )}
      <StyledLink
        textAlign="center"
        backgroundColor="transparent"
        maxW={"100%"}
        borderWidth={2}
        borderColor={border}
        _hover={{ backgroundColor: "gray.600", textDecor: "underline" }}
        mx={"auto"}
        display="block"
        borderRadius={"lg"}
        py={3}
        px={8}
        href="https://blog.medina.dev"
        target={"_blank"}
        rel="noreferrer"
        mt={4}
      >
        Visit Blog ???
      </StyledLink>
    </Container>
  );
};

export default Posts;
