import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout/main";
import Fonts from "../components/Layout/fonts";
import { AnimatePresence } from "framer-motion";

import theme from "../libs/theme"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website;