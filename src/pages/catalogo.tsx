import { Image } from '@chakra-ui/image'
import { Flex, SimpleGrid, Text } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/react'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import catAcrilico1 from '../assets/catalogos/catAcrilico1.jpg'
import catAcrilico2 from '../assets/catalogos/catAcrilico2.jpg'
import catAcrilico3 from '../assets/catalogos/catAcrilico3.jpg'
import catAcrilico4 from '../assets/catalogos/catAcrilico4.jpg'
import catPapel1 from '../assets/catalogos/catPapel1.jpg'
import catPapel2 from '../assets/catalogos/catPapel2.jpg'
import catPapel3 from '../assets/catalogos/catPapel3.jpg'
import catPapel4 from '../assets/catalogos/catPapel4.jpg'

const OCatalogo = () => {
  return (
    <Flex maxW="container.md" mr="auto" mx="60px" flexDirection="column">
      {/* <Heading fontSize="4xl" mb={10} mx="auto">Os Catálogos</Heading> */}

      <Text fontSize="md">
        Optamos por não reproduzir as obras e gerar dois catálogos diferentes com os experimentos originais, uma versão em acrílico e papelão financiada pelo Funcultura e outra com embalagem de papel e dobraduras cujos papéis foram doados pela Fedrigoni.
      </Text>

      <Text fontSize="md" fontWeight="bold" mr="auto" mt={10}>Acrílico</Text>

      <SimpleGrid columns={[1, 2]} w="full" mx="auto" spacingY={5} spacingX={5} mb={5}>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catAcrilico1} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catAcrilico2} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catAcrilico3} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catAcrilico4} w="full" />
          </Zoom>
        </GridItem>
      </SimpleGrid>

      <Text fontSize="md" mr="auto">
        Design gráfico e editorial Isabella Ribeiro Aragão <br />
        Embalagem Isabella Ribeiro Aragão, Silvio Barreto Campello e Raquel Campello <br />
        Papel do miolo Conqueror Connoisseur 100% Cotton Soft White 300g <br />
        Fonte pré-textual Bodoni 12 e fontes dos experimentos Bodoni 10, 12 e 24; Garamond 12, 16,
        29, 24 e 48; Grotesca Normal Clara 8 e 10; Grotesca Normal Meia Preta 12, 16, 20, 36 e 60;
        Monotype No 162 14 <br />
        Tiragem 50
      </Text>

      <Text fontSize="md" fontWeight="bold" mr="auto" mt={10}>Papel</Text>

      <SimpleGrid columns={[1, 2]} w="full" mx="auto" spacingY={5} spacingX={5} mb={5}>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catPapel1} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catPapel2} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catPapel3} w="full" />
          </Zoom>
        </GridItem>
        <GridItem>
          <Zoom wrapStyle={{
            width: '100%'
          }}>
            <Image src={catPapel4} w="full" />
          </Zoom>
        </GridItem>
      </SimpleGrid>

      <Text fontSize="md" mr="auto">
        Design gráfico e editorial Isabella Ribeiro Aragão <br />
        Embalagem Amanda Pereira, Filipe Aca, Maria Júlia Rêgo, Matheus Augusto, Raquel Alcântara e Raquel Campello <br />
        Papel da capa Savile Row Tweed Blue 300g <br />
        Papel do miolo Tintoretto gesso 140g <br />
        Fonte pré-textual Bodoni 12 e fontes dos experimentos Bodoni 10, 12 e 24; Garamond 12, 16,
        29, 24 e 48; Grotesca Normal Clara 8 e 10; Grotesca Normal Meia Preta 12, 16, 20, 36 e 60;
        Monotype No 162 14 <br />
        Tiragem 100
      </Text>
    </Flex>
  )
}

export default OCatalogo
