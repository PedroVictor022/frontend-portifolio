import { extendTheme } from "@chakra-ui/react";

const customTheme = {
   components: {
      Heading: {
         variants: {
            page_title: {
               color: "#fefefe",
               fontWeight: "bold",
            }
         }
      }
   }
}


const theme = extendTheme(customTheme);
export default theme;