import { FC } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryProviderProps = {
  children: JSX.Element
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: false,
        retryOnMount: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
      mutations: {
        cacheTime: 0,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export { QueryProvider }
