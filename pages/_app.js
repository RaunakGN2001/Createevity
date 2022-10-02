import { ChakraProvider, Container } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxWidth='95%' paddingInline={0}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
