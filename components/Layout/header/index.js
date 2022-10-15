import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../navbar";

function Header() {
   return (
      <React.Fragment>
         <Container pt="10">
            <Box
               bg="red"
               color="whiteAlpha.900"
               fontWeight="semibold"
               p={3}
               mb={5}
               align="center"
               borderRadius="lg"
               
            >
               Hello I&apos;m a front-end developer
            </Box>
            <Box display={{ md: 'flex' }}>
               <Box flexGrow={1}
               >
                  <Heading>Pedro Victor</Heading>
                  <Text>Frontend developer - Javascript | ReactJS | NextJS | Node | Dart</Text>
               </Box>
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;