import { ComponentType, Suspense } from 'react'

export function withSuspense(Component: ComponentType) {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}
