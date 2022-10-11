import { Box, Flex, Heading } from "@chakra-ui/react";

export function HeaderApp() {
   return (
         <Box
         w="100%"
         height="100%"
         minH="100vh"
         bg="gray.700"
      >
         {/* Importar informacoes do github | Alinha o conteudo numa caixa no centro da pagina*/}
         <Box
            w="100%"
            h="100%"
         >
            <Flex
            align="center"
            justify="center"
         >
            <Heading>Oi</Heading>
         </Flex>
         </Box>
      </Box>
   )
}