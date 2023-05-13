import { FC } from 'react'

import { Center, Container, Paper, Text } from '@mantine/core'

const Root: FC = (): JSX.Element => {
  return (
    <Container
      fluid
      m={0}
      p={0}
      w="100%"
      h="100%"
      sx={{
        backgroundColor: 'ivory',
        overflow: 'hidden',
      }}
    >
      <Center w={'100vw'} h={'100vh'}>
        <Paper
          withBorder
          radius={'sm'}
          shadow="sm"
          w={'calc(100vw - 20px)'}
          h={'calc(100vh - 20px)'}
          sx={{
            background: 'linear-gradient(225deg, rgba(25,255,244,1) 0%, rgba(174,255,174,1) 100%)',
          }}
        >
          <Center w={'100%'} h={'100%'}>
            <Text>Hello world</Text>
          </Center>
        </Paper>
      </Center>
    </Container>
  )
}

export { Root }
