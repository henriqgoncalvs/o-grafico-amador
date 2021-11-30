import { css, Global } from '@emotion/react'

const globalFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');

  @font-face {
    font-family: 'Grotesca';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/GrotescaReforma-MagraCondensada.otf') format('opentype'),
  }
  
  @font-face {
    font-family: 'Grotesca';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/GrotescaReforma-NegritoCondensada.otf') format('opentype'),
  }

`

export const Fonts = () => <Global styles={globalFonts} />
