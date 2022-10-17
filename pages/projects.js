import { Container, Heading, SimpleGrid, Badge, useColorModeValue, Link, Text } from "@chakra-ui/react";
import Section from "../components/Layout/section/section";

import Port from "../assets/port.jpg"
import Todo from "../assets/todo.png"
import Meme from "../assets/meme.jpg"
import Calc from "../assets/calc.png"
import JSONPLACE from "../assets/jsonplace.png"
import Ecomm from "../assets/ecomm.png"

import Layout from "../components/Layout/article";
import ProjectImg from "../components/Layout/projectImg";

const Projects = () => {
   return (
      <Layout title="Projects">
         <Container pt={10}>
            <Section delay={0.5} pt={10}>
               <Heading as="h2" fontSize={24} mb={4}>Projects</Heading>
               <Section delay={0.8}>
                  <SimpleGrid columns={[1, 1, 2]} gap={6}>
                     <Section>
                        <ProjectImg 
                           src={Calc}
                           title="Calculator Online"
                           repo="https://github.com/PedroVictor022/Calculator-reactjs"
                        >
                        </ProjectImg>
                     </Section>
                     <Section>
                        <ProjectImg 
                           src={Port}
                           title="Old Portifolio"
                           repo="https://github.com/PedroVictor022/portifolio"
                        >
                        </ProjectImg>
                     </Section>
                     <Section>
                        <ProjectImg 
                           src={Meme}
                           title="MemeMaker"
                           repo="https://github.com/PedroVictor022/MemeMaker"
                        >
                        </ProjectImg>
                     </Section>
                     <Section>
                        <ProjectImg 
                           src={Todo}
                           title="Todo List"
                           repo="https://github.com/PedroVictor022/Calculator-reactjs"
                        >
                        </ProjectImg>
                     </Section>
                     <Section>
                        <ProjectImg 
                           src={JSONPLACE}
                           title="Todo List"
                           repo="https://github.com/PedroVictor022/Calculator-reactjs"
                        >
                        </ProjectImg>
                     </Section>
                     <Section>
                        <ProjectImg 
                           src={Ecomm}
                           title="Ecommerce"
                           repo="https://github.com/PedroVictor022/E-commerce"
                        >
                        </ProjectImg>
                     </Section>
                  </SimpleGrid>
               </Section>
            </Section>
         </Container>
      </Layout>
   )
}



export default Projects;