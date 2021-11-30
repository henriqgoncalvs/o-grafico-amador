import { HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'

export const Footer = () => {
  return (
    <VStack maxW="800px" ml="auto" alignItems="flex-end" px="60px" mt="12">
      <HStack ml="auto" pb={5} fontFamily="heading" fontWeight="light" spacing={5}>
        <Text fontSize="sm">
          &#169; 2021 Laboratório de Práticas Gráficas | <a href="mailto:lpg.design@ufpe.br">lpg.design@ufpe.br</a>
        </Text>
        <a href="https://www.instagram.com/labpraticasgraficas" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.youtube.com/labpraticasgraficas" target="_blank">
          <GrYoutube />
        </a>
      </HStack>
    </VStack>
  )
}
