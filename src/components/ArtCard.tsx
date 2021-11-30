import { Box, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

export const ArtCard = ({ bgImg, artistName, id, withoutName = false }: { artistName?: string, bgImg: string, id: string, withoutName?: boolean }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10}>
            <SimpleGrid columns={1} spacing={5}>
              {modalImages.map((img, index) => (
                <GridItem key={index}>
                  <Box
                    bgImg={img}
                    w="300px"
                    h="300px"
                    mx="auto"
                    bgSize="contain"
                    bgPos="center"
                  />
                </GridItem>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal> */}

      <Link
        to={`/galeria/${id}`}
      >
        <VStack spacing={{ base: 1, md: 2 }} alignItems="center" w="full">
          <Box
            // onClick={onOpen}
            cursor="pointer"
            w="full"
            h="300px"
            mx="auto"
            d="flex"
            fontSize="md"
            alignItems="center"
            justifyContent="center"
            p={3}
            pos="relative"
            bgImg={bgImg}
            bgPos="center"
            bgSize="contain"
            bgRepeat="no-repeat"
            />

          {!withoutName && (
            <Text cursor="pointer" color="black" transition="all .3s ease-in-out" textAlign="center" fontSize="sm" fontWeight="bold" w="full" mx="auto">
              {artistName}
            </Text>
          )}
        </VStack>
      </Link>
    </>
  )
}
