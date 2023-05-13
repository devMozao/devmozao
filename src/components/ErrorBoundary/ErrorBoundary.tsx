import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('An error ocurred. ERROR:00 #%d', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error 500: Internal Server Error.</h1>
          <h2>Something went wrong with the server. Try again later.</h2>
        </>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
