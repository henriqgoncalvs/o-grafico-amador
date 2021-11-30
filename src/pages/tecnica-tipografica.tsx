import { Box, Flex } from '@chakra-ui/layout'
import { css } from '@emotion/react'
import ReactPlayer from 'react-player/youtube'

const TecnicaTipografica = () => {
  return (
    <Flex maxW="container.lg" mx="auto" pb={10} flexDirection="column">
      {/* <Text fontSize="xl" mb={10} mr="auto">
        / A técnica tipográfica
      </Text> */}

      <Box mx="60px" css={css`
          max-width: calc(100% - 120px);

        .player-wrapper {
          position: relative;
          padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
          max-width: 100%;
        }

        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }

        & > div {
          max-width: 100%;
        }

        @media (min-width: 1200px) {
          transform: scale(1.2);
          margin-top: 40px;
        }
      `}>
        <ReactPlayer url='https://youtu.be/ZsV--UI9de0' style={{
          width: '100%',
          margin: '0 auto'
        }} />
      </Box>
    </Flex>
  )
}

export default TecnicaTipografica
