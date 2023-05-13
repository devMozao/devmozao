import { FC, Suspense } from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import { Root } from '@/pages'

const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" element={<Root />} />

        <Route path="*" element={<div>Not Found - 404</div>} />
      </Switch>
    </Suspense>
  )
}

export { Routes }
