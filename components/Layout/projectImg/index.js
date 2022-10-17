import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image";

const ProjectImg = ({ src , title, repo }) => {
   return (
      <Box w="100%" align="center">
         <Box p={2}>
         <Image
            width="220px"
            height="180px"
            src={src}
            alt={title}
         />
         <Text

            cursor="pointer"
            fontSize="20"
         >{title}</Text>
         <Text fontSize="14">Link to Repo - <Link>{repo}</Link></Text>
      </Box>
      </Box>
   )
}

export default ProjectImg;