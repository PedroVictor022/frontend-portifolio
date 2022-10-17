import NextLink from "../components/Utils/NextLink"
import { Container, Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from "../components/Layout/article"

const Contact = () => {
   return (
      <Layout title="My Contact">
         <Container pt={10}>

         </Container>
      </Layout>
   )
}

export default Contact;


export const Title = ({ children }) => (
   <Box>
      <NextLink href="/works" passHref>
         <Link>Works</Link>
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

export const WorkImage = ({ src, alt }) => (
   <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
   <Badge colorScheme="green" mr={2}>
      {children}
   </Badge>
)