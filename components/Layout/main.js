import { Box, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Navbar } from "./navbar";

const Main = ({ children, router }) => {
   return (
      <Box as="main" pb={8}>
         <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pedro Victor - Homepage</title>
         </Head>

         <Navbar path={router.asPath} />

         <Container maxW="container.md" pt={5}>
            {children}
         </Container>
      </Box>
   )
}
export default Main;