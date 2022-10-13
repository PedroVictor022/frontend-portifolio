import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Link from "../../Utils/NextLink";

function Header() {
   return (
      <React.Fragment>
         <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pedro Victor - Homepage</title>
         </Head>

         <Container pt="10">
            <Box
               bg="red"
               color="whiteAlpha.900"
               fontWeight="semibold"
               p={3}
               mb={6}
               align="center"
               borderRadius="lg"
               
            >
               Hello I&apos;m a front-end developer
            </Box>
            <Box display={{ md: 'flex' }}>
               <Box flexGrow={1}
                  color="whiteAlpha.800"
               >
                  <Heading>My name</Heading>
                  <Text>Frontend developer - ReactJS | NextJS | Node | Dart</Text>
               </Box>
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;