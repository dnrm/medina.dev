import React from "react";
import {
    Container,
    Text,
    Grid,
    Stack,
    Link as StyledLink,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
    return (
        <Container h={"20vh"}>
            <Grid templateColumns={"repeat(3, 1fr)"} textColor="gray.500">
                <Stack>
                    <StyledLink href="https://twitter.com/_dnrm">
                        Twitter
                    </StyledLink>
                    <StyledLink href="https://github.com/dnrm">
                        Github
                    </StyledLink>
                    <StyledLink href="https://www.youtube.com/channel/UC7nYyV6-jETyDNzvrFkYR_g">
                        Youtube
                    </StyledLink>
                </Stack>
                <Stack>
                    <StyledLink href="https://dev.to/dnrm">Dev.to</StyledLink>
                    <StyledLink href="https://hashnode.com/@dnrm">
                        Hashnode
                    </StyledLink>
                    <StyledLink href="https://open.spotify.com/user/dany.mm">
                        Spotify
                    </StyledLink>
                </Stack>
                <Stack>
                    <Link href="/uses" passHref>
                        <StyledLink>Uses</StyledLink>
                    </Link>
                    <Link href="/vinyl" passHref>
                        <StyledLink>Vinyl Collection</StyledLink>
                    </Link>
                </Stack>
            </Grid>
        </Container>
    );
};

export default Footer;
