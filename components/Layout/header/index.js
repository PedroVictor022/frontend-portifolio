/* eslint-disable jsx-a11y/alt-text */
import { Box, Container, Flex, Heading, useColorModeValue, Image, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";

function Header() {
   const [avatar, setAvatar] = useState();

   const profileLink = 'https://api.github.com/users/PedroVictor022';
   const getDataProfile = async (url) => {
      const dataFetch = await fetch(url);
      const resData = await dataFetch.json();
      console.log(resData.avatar_url);
      setAvatar(resData.avatar_url);
   }

   useEffect(() => {
      getDataProfile(profileLink);
   }, [])

   return (
      <React.Fragment>
         <Container pt="10">
            <Box
               bg={useColorModeValue("red.500", "whiteAlpha.200")}
               color={useColorModeValue("white", "glassTeal")}
               fontWeight="semibold"
               p={3}
               mb={5}
               align="center"
               borderRadius="lg"

            >
               Hello I&apos;m a front-end developer based in Brazil
            </Box>
            <Box display={{ md: 'flex' }}>
               <Box flexGrow={1}
               >
                  <Heading>Pedro Victor</Heading>
                  <Text>Frontend developer - Javascript | ReactJS | NextJS | Node | Dart</Text>
               </Box>
               <Box
                  flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center"
               >
                  
                  <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth={{base: '100px', md: '120px'}} display="inline-block" borderRadius="full" src={avatar}/>
               </Box>
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;