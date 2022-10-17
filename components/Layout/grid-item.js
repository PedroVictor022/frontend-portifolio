import NextLink from "../Utils/NextLink"
import { Global } from "@emotion/react"
import { Box, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"

export const GridItem = ({ children, herf, title, thumbnail }) => {
   return (
      <Box w="100%" align="center">
         <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur"
               loading="lazy"
            />
            <Text mt={2}>{title}</Text>
            <Text fontSize={14}>
               {children}
            </Text>
         </LinkBox>
      </Box>
   )
};

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
   return (
      <Box w="100%" align="center">

         <LinkBox>
            <Box p={2} bg={useColorModeValue('#ffffff40', '#20202380')}>
               <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
               <Text cursor="pointer" mt={2} fontSize={20}>{title}</Text>
               <Text fontSize={14}>{children}</Text>
            </Box>
         </LinkBox>
      </Box>
   )
}

export const GridItemStyle = () => {
   <Global
      styles={`
         .grid-item-thumbnail {
            border-radius: 12px;
            width: 180px;
            height: 150px;
         }
      `}
   />
}