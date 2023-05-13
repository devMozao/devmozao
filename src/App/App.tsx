import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/components'
import { QueryProvider } from '@/contexts'
import { Routes } from '@/routes'
import { MantineProvider } from '@/styles'

const App: FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider>
        <QueryProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryProvider>
      </MantineProvider>
    </ErrorBoundary>
  )
}

export { App }
