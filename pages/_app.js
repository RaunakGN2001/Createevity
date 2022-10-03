import { ChakraProvider, Container } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import '../styles/globals.css'





function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxWidth='95%' paddingInline={0}>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
