import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  mono: 'Menlo, monospace',
  heading: 'Oswald, sans-serif',
  body: '\'Bodoni Moda\', sans-serif'
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f3f2ef',
        color: 'black'
      }
    }
  },
  colors: {
    black: '#16161D'
  },
  fonts,
  breakpoints
})

export default theme
