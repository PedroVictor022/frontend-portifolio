import { Badge, Box, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SkillSection = styled(Box)`
   margin-left: 5px;
   width: 80%;
   display: flex;
   align-items: center;
   gap:2px;
   flex-wrap: wrap;
`
export const SkillBadge = ({text, color1, color2}) => {
   return (
      <Badge colorScheme={useColorModeValue(`${color1}`, `${color2}`)} m={2} p={2}>
         {text}
      </Badge>
   )
}