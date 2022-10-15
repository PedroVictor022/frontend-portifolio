import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "../../Utils/NextLink";
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "../toggle-theme-button";


export const LinkItem = ({ href, path, children }) => {
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
         style={{ backdropFilter: 'blur(10px' }}
         zIndex={1}
         {...props}
      >
         <Container
            display="flex"
            p={2}
            maxW="container.md"
            wrap="wrap"
            align="center"
            justify="space-between"
         >
            <Flex
               align="center"
               mr={5}
            >
               <Heading
                  as="h1"
                  size="lg"
                  letterSpacing={'tighter'}
               >
                  Render Logo Here
               </Heading>
            </Flex>
            <Stack
               direction={{ base: 'column', md: 'row' }}
               display={{ base: 'none', md: 'flex' }}
               align={{base: 'none', md: 'center'}}
               width={{ base: 'full', md: 'auto' }}
               flexGrow={1}
               mt={{ base: 4, md: 0 }}
            >
               <LinkItem
                  href="/works" path={path}
               >
                  Works
               </LinkItem>
               <LinkItem href="/posts" path={path}>
                  Posts
               </LinkItem>
            </Stack>

            <Box flex={1} align="right">
               <ThemeToggleButton />
               <Box
                  ml={2}
                  display={{ base: 'inline-block', md: 'none' }}
               >
                  <Menu>
                     <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        aria-label="Options"
                     />
                     <MenuList>
                        <NextLink href="/" passHref> 
                           <MenuItem>Home</MenuItem>
                        </NextLink>
                        <NextLink href="/about" passHref>
                           <MenuItem>About</MenuItem>
                        </NextLink>
                        <NextLink href="/projects">
                           <MenuItem>Projects</MenuItem>
                        </NextLink>
                        <NextLink href="https://github.com/PedroVictor022/frontend-portifolio" target="_blank">
                           <MenuItem>View Source Code</MenuItem>
                        </NextLink>
                     </MenuList>
                  </Menu>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}

