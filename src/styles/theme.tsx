import { FC } from 'react'

import { MantineProvider, type MantineThemeOverride } from '@mantine/core'

import { FontsProvider } from '@/styles'

type MantineCustomProvider = {
  children: JSX.Element
}

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  focusRing: 'never',
  loader: 'dots',
  respectReducedMotion: false,

  fontFamily: 'Inter, sans-serif',

  other: {
    fontWeights: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
}

const MantineCustomProvider: FC<MantineCustomProvider> = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <FontsProvider />
      {children}
    </MantineProvider>
  )
}

export { MantineCustomProvider as MantineProvider }
