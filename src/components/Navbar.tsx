import { Image } from '@chakra-ui/image'
import { Box, Text, VStack } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/logo.jpg'
import { artistsCards } from '../data'

export const Navbar = () => {
  const location = useLocation()

  return (
    <VStack
      w="full"
      justifyContent="space-between"
      color="black"
      pr="60px"
      pl="60px"
      py={10}
      alignItems="flex-start"
      spacing={5}
    >
      <Link to="/">
        <Box mb={{ base: 5, lg: 0 }} ml="-3" cursor="pointer">
          <Image src={logo} width="259px" />
        </Box>
      </Link>

      <VStack
        spacing={0}
        fontFamily="heading"
        fontSize="sm"
        textTransform="uppercase"
        fontWeight="300"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Link
          to="/audiodescricao"

        >

            <Text
              cursor="pointer"
              textDecoration={location.pathname === '/audiodescricao' ? 'underline' : 'light'}
              fontWeight={location.pathname === '/audiodescricao' ? 'normal' : 'light'}
              transition='all .1s ease-in-out'
              _hover={location.pathname !== '/audiodescricao'
                ? {
                    fontWeight: 'normal',
                    textDecoration: 'underline'
                  }
                : {}}
            >
              Audiodescrição
            </Text>

        </Link>

        <Link
          to="/projeto"

        >

            <Text
              cursor="pointer"
              textDecoration={location.pathname === '/projeto' ? 'underline' : 'light'}
              fontWeight={location.pathname === '/projeto' ? 'normal' : 'light'}
              transition='all .1s ease-in-out'
              _hover={location.pathname !== '/projeto'
                ? {
                    fontWeight: 'normal',
                    textDecoration: 'underline'
                  }
                : {}}
            >
              Projeto
            </Text>

        </Link>
        <Menu>
          <MenuButton as={Text} cursor="pointer" fontWeight="light" d="flex" w="fit-content">
            Galerias
            <MdKeyboardArrowDown style={{ display: 'inline-flex', marginLeft: 5 }} />
          </MenuButton>
          <MenuList bg="white">
            {artistsCards.map(artist => (
              <Link to={`/galeria/${artist.id}`} key={artist.id} >

                  <MenuItem key={artist.artistName}>
                      <Text fontSize="xs">
                        {artist.artistName}
                      </Text>
                  </MenuItem>

              </Link>
            ))}
          </MenuList>
        </Menu>
        {/* <Link
          to="/experimentos"
        >
          <Text
            cursor="pointer"
            textDecoration={location.pathname === '/experimentos' ? 'underline' : 'light'}
            fontWeight={location.pathname === '/experimentos' ? 'normal' : 'light'}
            transition='all .1s ease-in-out'
            _hover={location.pathname !== '/experimentos'
              ? {
                  fontWeight: 'normal',
                  textDecoration: 'underline'
                }
              : {}}
          >
            Experimentos
          </Text>
        </Link> */}
        <Link
          to="/catalogo"

        >

            <Text
              cursor="pointer"
              textDecoration={location.pathname === '/catalogo' ? 'underline' : 'light'}
              fontWeight={location.pathname === '/catalogo' ? 'normal' : 'light'}
              transition='all .1s ease-in-out'
              _hover={location.pathname !== '/catalogo'
                ? {
                    fontWeight: 'normal',
                    textDecoration: 'underline'
                  }
                : {}}
            >
              Catálogos
            </Text>

        </Link>

        <Link
          to="/tecnica-tipografica"

        >

            <Text
              cursor="pointer"
              textDecoration={location.pathname === '/tecnica-tipografica' ? 'underline' : 'light'}
              fontWeight={location.pathname === '/tecnica-tipografica' ? 'normal' : 'light'}
              transition='all .1s ease-in-out'
              _hover={location.pathname !== '/tecnica-tipografica'
                ? {
                    fontWeight: 'normal',
                    textDecoration: 'underline'
                  }
                : {}}
            >
              Técnica tipográfica
            </Text>

        </Link>
      </VStack>
    </VStack>
  )
}
