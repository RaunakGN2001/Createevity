import { ChakraProvider, Container } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tabbar from '../components/Tabbar'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/globals.css'



Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


// NProgress.configure({ showSpinner: false })



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxWidth='95%' paddingInline={0}>
        <Navbar />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
