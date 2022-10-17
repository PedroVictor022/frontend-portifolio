import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/Layout/section/section";

const Projects = () => {
   return (
      <Container pt={10}>
         <Section delay={0.5} pt={10}>
            <Heading as="h2" fontSize={24} mb={4}>Projects</Heading>
         </Section>
      </Container>
   )
}

export default Projects;