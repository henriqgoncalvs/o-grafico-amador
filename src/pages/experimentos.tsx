import { Box, GridItem, HStack, SimpleGrid, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { ArtCard } from '../components/ArtCard'
import { ExperimentosFilter } from '../components/ExperimentosFilter'
import artistsImages from '../data/artistsImages'

const Experimentos = () => {
  const [artistData, setArtistData] = useState(artistsImages)

  const [filter, setFilter] = useState({
    participacao: '',
    papel: '',
    composicao: '',
    intervencao: '',
    matriz: ''
  })

  useEffect(() => {
    setArtistData(artistsImages)

    Object.entries(filter).forEach(([key, value]) => {
      if (value !== '') {
        if (key === 'participacao') {
          setArtistData(prev => prev.filter(artist => artist[key] === value))
        }

        if (key === 'composicao') {
          setArtistData(prev => prev.filter(artist => artist[key]?.includes(value)))
        }

        if (key === 'intervencao') {
          setArtistData(prev => prev.filter(artist => artist[key]?.includes(value)))
        }

        if (key === 'papel') {
          setArtistData(prev => prev.map(artist => ({ ...artist, images: artist.images?.filter(image => image?.filter?.papel?.includes(value)) })))
        }

        if (key === 'matriz') {
          setArtistData(prev => prev.map(artist => ({ ...artist, images: artist.images?.filter(image => image?.filter?.matriz?.includes(value)) })))
        }
      }
    })
  }, [filter])

  return (
    <Box textAlign="center" fontSize="xl" minH="100vh">
      <ExperimentosFilter setFilter={setFilter} />
      <HStack flexWrap="wrap" mx="60px" fontSize="sm" my={5} spacing={2}>
        {Object.entries(filter).map(([key, value]) => value !== '' && (
          <Text d="flex" alignItems="center" onClick={() => setFilter(prev => ({ ...prev, [key]: '' }))} cursor="pointer">
            {key.charAt(0).toUpperCase() + key.slice(1)}: {' '}{value.charAt(0).toUpperCase() + value.slice(1)} <AiOutlineCloseCircle style={{ marginLeft: 5 }} />
          </Text>
        ))}
      </HStack>
      <SimpleGrid columns={[1, 2, 3, 4]} mx="60px" spacingY={5} spacingX={5}>
        {Object.entries(artistData).map(([, artist]) => artist.images.map(image =>
          <GridItem key={image.src}>
            <ArtCard
              // modalImages={artist.modalImages}
              bgImg={image.src}
              id={artist.id}
              withoutName
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Experimentos
