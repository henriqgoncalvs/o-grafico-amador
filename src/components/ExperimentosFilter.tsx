import { Flex } from '@chakra-ui/layout'
import { Select as ChakraSelect } from '@chakra-ui/react'
import React from 'react'

const Select = (props: any) => (
  <ChakraSelect placeholder="Todos" p={0} textTransform="uppercase" fontFamily="heading" w="fit-content" mr={3} border="0" rounded="0" {...props} />
)

export const ExperimentosFilter = ({ setFilter }: { setFilter: any }) => {
  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} mx="60px" alignItems="center" mt={-1}>
      <Select my={0} placeholder="Participante" onChange={(e: { target: { value: any } }) => setFilter((prev: any) => ({ ...prev, participacao: e.target.value }))}>
        <option value="artista">Artistas</option>
        <option value="designer">Designers</option>
        <option value="estudante">Estudantes</option>
      </Select>

      <Select placeholder="Papel" onChange={(e: { target: { value: any } }) => setFilter((prev: any) => ({ ...prev, papel: e.target.value }))}>
        <option value="branco">Branco</option>
        <option value="kraft">Kraft</option>
        <option value="laranja">Laranja</option>
        <option value="preto">Preto</option>
        <option value="cinza">Cinza</option>
        <option value="transparente">Transparente</option>
      </Select>

      <Select placeholder="Composição" onChange={(e: { target: { value: any } }) => setFilter((prev: any) => ({ ...prev, composicao: e.target.value }))}>
        <option value="tipos">Tipos</option>
        <option value="clichê">Clichês</option>
        <option value="ornamentos">Ornamentos</option>
        <option value="fios">Fios</option>
      </Select>

      <Select placeholder="Intervenção" onChange={(e: { target: { value: any } }) => setFilter((prev: any) => ({ ...prev, intervencao: e.target.value }))}>
        <option value="carimbo">Carimbo</option>
        <option value="nanquim">Nanquim</option>
        <option value="digital">Digital</option>
        <option value="estêncil">Estêncil</option>
      </Select>

      <Select placeholder="Matriz" onChange={(e: { target: { value: any } }) => setFilter((prev: any) => ({ ...prev, matriz: e.target.value }))}>
        <option value="tipos">Tipos</option>
        <option value="cliche">Clichê</option>
      </Select>
    </Flex>
  )
}
