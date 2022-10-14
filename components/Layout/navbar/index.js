import { Box, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "../../Utils/NextLink";

export const LinkItem = ({ href, path, children}) => {
   const active = path == href;
   const inactiveColor = useColorMode('gray.200', 'whiteAlpha900')

   return (
      <NextLink href={href}
         p={2}
         bg={active ? 'glassTeal' : undefined}
         color={active ? "#202023" : inactiveColor}
      >  
         {children}
      </NextLink>
   )
}

export const Navbar = props => {
   const { path } = props;

   return (
      <Box
         position="fixed"
         as="nav"
         w="100%"
         bg={useColorModeValue('#ffffff40', '#20202380')}
         style={{backdropFilter: 'blur(10px'}}
         zIndex={1}
         {...props}
      >  
         Navbar
      </Box>
   )
}

