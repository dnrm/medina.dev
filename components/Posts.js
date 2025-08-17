"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Heading,
  Grid,
  Stack,
  Text,
  Link as StyledLink,
} from "@chakra-ui/react";
import Image from "next/image";

const Posts = (props) => {
  const { width, padding } = props;
  const [posts, setPosts] = useState();

  const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "dnrm") {
            posts(pageSize: 8, page: $page) {
              nodes {
                id
                slug
                title
                subtitle
                brief
                coverImage {
                  url
                }
                content {
                  markdown
                }
              }
            }
        }
    }
`;

  useEffect(() => {
    const get = async (query, variables) => {
      const response = await fetch("https://gql.hashnode.com/", {
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
      setPosts(json.data.user.posts.nodes.slice(0, 4));
    };

    get(GET_USER_ARTICLES, { page: 1 });
  }, [GET_USER_ARTICLES]);

  return (
    <Container pt={16} pb={0} maxW={width} px={padding}>
      <Heading pb={2}>
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
                  borderColor={{ base: "gray.300", _dark: "gray.600" }}
                  rounded="md"
                  h="full"
                >
                  <Image
                    src={i.coverImage.url}
                    width={500}
                    height={500}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "22vh",
                      borderRadius: "4px 4px 0 0",
                    }}
                    alt="Cover"
                  />
                  <Heading
                    fontWeight="bold"
                    fontSize={{ base: "1.3em", md: "1.4em" }}
                    letterSpacing={"tighter"}
                    pt={2.5}
                    px={4}
                  >
                    {i.title}
                  </Heading>
                  <Text
                    px={4}
                    pb={5}
                    fontSize={{
                      base: "0.8em",
                      md: "0.9em",
                    }}
                    textColor={{ base: "gray.600", _dark: "gray.400" }}
                  >
                    {i.brief.substring(0, 150)}...
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
        borderColor={{ base: "gray.300", _dark: "gray.600" }}
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
        Visit Blog →
      </StyledLink>
    </Container>
  );
};

export default Posts;
