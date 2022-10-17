import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "../Utils/NextLink"

export const Title = ({ children, href, titleComponent }) => (
   <Box>
      <NextLink href={href} target="_blank" passHref>
         <Link>{titleComponent}</Link>
      </NextLink>
      <span>
         {' '}
         <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
         {children}
      </Heading>
   </Box>
)

export const Meta = ({ children }) => (
   <Badge colorScheme={useColorModeValue("red", "green")} mr={2}>
      {children}
   </Badge>
)