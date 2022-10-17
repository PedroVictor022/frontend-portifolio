import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/Layout/section/section";
import { WorkGridItem } from "../components/Layout/grid-item"

import Port from "../assets/port.jpg"
import Layout from "../components/Layout/article";

const Projects = () => {
   return (
     <Layout title="Projects">
       <Container pt={10}>
         <Section delay={0.5} pt={10}>
            <Heading as="h2" fontSize={24} mb={4}>Projects</Heading>
            <Section delay={0.8}>
               <SimpleGrid columns={[1, 1, 2]} gap={6}>
                  <Section>
                     <WorkGridItem id="old_portifolio" title="First Portifolio" thumbnail={Port}>
                        This is my old Portifolio
                     </WorkGridItem>
                  </Section>
                  <Section>
                     <WorkGridItem id="old_portifolio" title="First Portifolio" thumbnail={Port}>
                        This is my old Portifolio
                     </WorkGridItem>
                  </Section>
                  <Section>
                     <WorkGridItem id="old_portifolio" title="First Portifolio" thumbnail={Port}>
                        This is my old Portifolio
                     </WorkGridItem>
                  </Section>
                  <Section>
                     <WorkGridItem id="old_portifolio" title="First Portifolio" thumbnail={Port}>
                        This is my old Portifolio
                     </WorkGridItem>
                  </Section>
               </SimpleGrid>
            </Section>
         </Section>
      </Container>
     </Layout>
   )
}

export default Projects;