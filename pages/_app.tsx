import {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }:AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App





/*
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/