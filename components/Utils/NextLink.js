import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react";

const Link = ({ children, href, ...props}) => {
   return (
      <NextLink href={href} {...props} color={useColorModeValue()}>
         {children}
      </NextLink>
   )
}

export default Link;