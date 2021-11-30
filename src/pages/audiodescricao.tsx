import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

import { artistsCards } from '../data'

const AudioDescricao = () => {
  return (
    <Flex maxW="container.md" mr="auto" mx="60px" flexDirection="column">
      {/* <Heading fontSize="4xl" mb={10} mx="auto">O Projeto</Heading> */}
      <Text fontSize="md" fontWeight="bold" mr="auto" mb={5}>
        Experimentando tipos em homenagem a&#39;O Gráfico Amador
      </Text>
      <Text fontSize="md" mb={10}>
      Todas as obras de artes gráficas foram impressas em papel branco na técnica
      tipográfica com texto em tipos móveis de metal e figuras que variam de material
      como MDF, linóleo, barbante, PVC expandido, nanquim, a própria digital e
      estêncil.
      Tipos móveis de metal são peças com caracteres em alto relevo que são
      organizadas em linhas para serem prensadas.
      </Text>

      {artistsCards.map(artist => (
        <Box key={artist.artistName} d="flex" flexDirection="column" mb={5}>
          <Image src={artist.bgImg} w="md" />
          <Box fontWeight="light" mt="5" textAlign="justify">
            <Text d="inline" fontWeight="bold" mr={1}>{artist.artistName}.</Text>
            <Text d="inline" dangerouslySetInnerHTML={{ __html: artist.audioDescription }}/>
          </Box>
        </Box>
      ))}

      <Text fontSize="md" mt={5}>
        <Text fontWeight="bold">Créditos</Text>
          Audiodescrição: Com Acessibilidade Comunicacional <br />
          Roteiro: Bruna Cortez <br />
          Consultoria: Michelle Alheiros <br />
          Revisão: Liliana Tavares <br />
      </Text>
    </Flex>
  )
}

export default AudioDescricao
