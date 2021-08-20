import { useEffect, useState } from "react";
import {
    Container,
    Heading,
    Grid,
    Stack,
    Text,
    Image,
    Link,
} from "@chakra-ui/react";

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
            console.log(json.data.user.publication.posts);
        };

        get(GET_USER_ARTICLES, { page: 0 });
    }, []);

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
                        console.log(i);
                        return (
                            <Link
                                href={`https://blog.danielmedina.dev/${i.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                key={i.title}
                            >
                                <Stack
                                    borderWidth="2px"
                                    borderColor="gray.300"
                                    rounded="md"
                                    p={2}
                                >
                                    <Image
                                        src={i.coverImage}
                                        rounded="md"
                                        h={48}
                                        objectFit="cover"
                                        alt="Cover"
                                    ></Image>
                                    <Heading
                                        fontWeight="regular"
                                        fontSize={{ base: "1em", md: "1.1em" }}
                                        textColor="gray.700"
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
                            </Link>
                        );
                    })}
                </Grid>
            ) : (
                <Heading>Loading...</Heading>
            )}
        </Container>
    );
};

export default Posts;
