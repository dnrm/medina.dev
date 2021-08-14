import React from 'react'
import { Container, Text, Grid, Stack } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Container h={'20vh'}>
            <Grid templateColumns={'repeat(3, 1fr)'} textColor="gray.500">
                <Stack>
                    <Text>Twitter</Text>
                    <Text>Github</Text>
                    <Text>Youtube</Text>
                </Stack>
            </Grid>
        </Container>
    )
}

export default Footer
