import {
  ChakraProvider
} from '@chakra-ui/react'
import * as React from 'react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Routes } from './Routes'
import { Fonts, theme } from './styles'

export const App = () => {
  return (
    <>
      <Fonts />
      <ChakraProvider resetCSS theme={theme}>
        <Navbar />
        <Routes />
        <Footer />
      </ChakraProvider>
    </>
  )
}
