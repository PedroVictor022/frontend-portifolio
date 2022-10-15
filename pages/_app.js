import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout/main";

import theme from "../libs/theme"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}

export default Website;