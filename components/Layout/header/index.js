import { Box, Container, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
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
               <Box
                  flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center"
               >
                  {/* Fazer uma request do github com a minha foto */}
                  <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="135px" display="inline-block" borderRadius="full" src={avatar}/>
               </Box>
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;