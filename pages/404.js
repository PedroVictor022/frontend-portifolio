import NextLink from "../components/Utils/NextLink";
import { Box, Heading, Container, Divider, Button, Text, useColorModeValue } from "@chakra-ui/react";


const NotFoundPage = () => {
   return (
      <Container mt="50%">
         <Heading>Not Found</Heading>
         <Text>Page not found, return this Home!!!</Text>
         <Box my={6}>
            <NextLink href="/">
               <Button colorScheme={useColorModeValue("red", "teal")}>Return this Home</Button>
            </NextLink>
         </Box>
      </Container>
   )
}

export default NotFoundPage;