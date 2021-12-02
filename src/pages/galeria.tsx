/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Image } from '@chakra-ui/image'
import { Flex, HStack, SimpleGrid, Text } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/react'
import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import { Link, useLocation } from 'react-router-dom'

import { artistsCards } from '../data'
import artistsImages from '../data/artistsImages'

const Participante = () => {
  const location = useLocation()

  console.log(location)
  const artistName = location?.pathname?.split('/')[2]

  const artistIndex = artistsCards.findIndex(artist => artist?.id === artistName)

  const prevArtist = artistIndex === 0
    ? artistsCards[artistsCards.length - 1]
    : (
        artistsCards[artistIndex - 1]
      )

  const nextArtist = artistIndex === artistsCards.length - 1
    ? artistsCards[0]
    : (
        artistsCards[artistIndex + 1]
      )

  return (
    <Flex maxW="container.lg" mr="auto" mx="60px" flexDirection="column">
      <Text fontSize="md" fontWeight="bold" mb={1}>/ {artistsCards.find(artist => artist?.id === artistName)?.artistName}</Text>
      <Text fontSize="md" mb={10}>{artistsCards.find(artist => artist?.id === artistName)?.description}</Text>

      <SimpleGrid columns={[1, 2]} w="full" mx="auto" spacingY={5} spacingX={5}>
        {artistsImages.filter(artist => artist?.id === artistName)[0]?.images?.map(image => (
          <GridItem key={image.src}>
            <Zoom wrapStyle={{
              width: '100%'
            }}>
              <Image src={image.src} w="full" />
            </Zoom>
          </GridItem>
        ))}
      </SimpleGrid>

      <HStack justifyContent="space-between">
        <Link to={`/galeria/${prevArtist?.id}`}>
          <Text cursor="pointer" my="5" d="flex" alignItems="center">
            <BsArrowLeftShort style={{ marginRight: 5 }} />
            {prevArtist?.artistName}
          </Text>
        </Link>
        <Link to={`/galeria/${nextArtist?.id}`}>
          <Text cursor="pointer" my="5" d="flex" alignItems="center">
            {nextArtist?.artistName}
            <BsArrowRightShort style={{ marginLeft: 5 }} />
          </Text>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Participante
