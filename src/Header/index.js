import { Box, Flex, Heading } from "@chakra-ui/react";

export function HeaderApp() {
   return (
         <Box
         w="100%"
         h="100vh"
         p="5"
         bg="gray.700"
      >
         {/* Importar informacoes do github | Alinha o conteudo numa caixa no centro da pagina*/}
         <Box
            w="100%"
            h="100%"
         >
            <Flex
            mt="50%"
            align="center"
            justify="center"
         >
            <Heading>Oi</Heading>
         </Flex>
         </Box>
      </Box>
   )
}