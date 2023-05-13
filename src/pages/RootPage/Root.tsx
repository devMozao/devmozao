import { FC, ReactNode, useState } from 'react'

import { Anchor, Box, Center, Container, Flex, Image, Paper } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
} from '@tabler/icons-react'

import { devmozao } from '@/assets/images'

const Root: FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('')

  type SocialIconsProps = {
    children: ReactNode
    url: string
    selectName: string
  }

  const SocialIcons: FC<SocialIconsProps> = ({ children, url, selectName }): JSX.Element => {
    return (
      <Anchor
        underline
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          '&:hover': {
            transform: 'scale(1.2)',
            transition: 'transform 0.25s ease-in-out',
          },
        }}
        onMouseEnter={() => setSelected(selectName)}
        onMouseLeave={() => setSelected('')}
      >
        {children}
      </Anchor>
    )
  }

  return (
    <Container
      fluid
      m={0}
      p={0}
      w="100%"
      h="100%"
      sx={{
        backgroundColor: 'honeydew',
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
            background: 'linear-gradient(45deg, rgba(25,255,244,1) 30%, rgba(174,255,174,1) 100%)',
          }}
        >
          <Center w={'100%'} h={'calc(100% - 50px)'}>
            <Container>
              <Box>
                <Image
                  maw={355}
                  mah={400}
                  src={devmozao}
                  sx={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none',
                  }}
                />
              </Box>
              <Flex display="flex" justify="space-around" m="lg">
                <SocialIcons url="https://www.twitter.com/devMozao/" selectName="twitter">
                  <IconBrandTwitter
                    size={44}
                    stroke={2}
                    color={selected === 'twitter' ? 'hotpink' : 'honeydew'}
                  />
                </SocialIcons>

                <SocialIcons url="https://www.github.com/devMozao" selectName="github">
                  <IconBrandGithub
                    size={44}
                    stroke={2}
                    color={selected === 'github' ? 'hotpink' : 'honeydew'}
                  />
                </SocialIcons>

                <SocialIcons url="https://www.linkedin.com/in/devmozao/" selectName="linkedin">
                  <IconBrandLinkedin
                    size={44}
                    stroke={2}
                    color={selected === 'linkedin' ? 'hotpink' : 'honeydew'}
                  />
                </SocialIcons>

                <SocialIcons url="https://t.me/+wcol5DJoedRkOTAx" selectName="telegram">
                  <IconBrandTelegram
                    size={44}
                    stroke={2}
                    color={selected === 'telegram' ? 'hotpink' : 'honeydew'}
                  />
                </SocialIcons>

                <SocialIcons url="https://www.instagram.com/devmozao" selectName="instagram">
                  <IconBrandInstagram
                    size={44}
                    stroke={2}
                    color={selected === 'instagram' ? 'hotpink' : 'honeydew'}
                  />
                </SocialIcons>
              </Flex>
            </Container>
          </Center>
        </Paper>
      </Center>
    </Container>
  )
}

export { Root }
