import { Container, Heading, SimpleGrid, Badge, useColorModeValue, Link, Text } from "@chakra-ui/react";
import Section from "../components/Layout/section/section";
import { WorkGridItem } from "../components/Layout/grid-item"

import Port from "../assets/port.jpg"
import Todo from "../assets/todo.png"
import Meme from "../assets/meme.jpg"
import Calc from "../assets/calc.png"

import Layout from "../components/Layout/article";

const UsedTech = ({ text, color1, color2 }) => {
   return (
      <Badge colorScheme={useColorModeValue(`${color1}`, `${color2}`)} m={2} p={2}>
         {text}
      </Badge>
   )
}

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
                           <Text>This is my old Portifolio</Text>
                           <Text>LINK TO REPO <Link href="https://github.com/PedroVictor022/portifolio">https://github.com/PedroVictor022/portifolio</Link></Text>
                        </WorkGridItem>
                     </Section>
                     <Section>
                        <WorkGridItem id="todolist" title="Todo App" thumbnail={Todo}>
                           <Text>LINK TO REPO <Link href="https://github.com/PedroVictor022/todo_list_reactjs">https://github.com/PedroVictor022/todo_list_reactjs</Link></Text>
                        </WorkGridItem>
                     </Section>
                     <Section>
                        <WorkGridItem id="MemeMaker" title="MemeMaker" thumbnail={Meme}>
                           <Text>LINK TO REPO <Link href="https://github.com/PedroVictor022/MemeMaker">https://github.com/PedroVictor022/MemeMaker</Link></Text>
                        </WorkGridItem>
                     </Section>
                     <Section>
                        <WorkGridItem id="old_portifolio" title="First Portifolio" thumbnail={Calc}>
                           <Text>LINK TO REPO <Link href="https://github.com/PedroVictor022/Calculator-reactjs">https://github.com/PedroVictor022/Calculator-reactjs</Link></Text>
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