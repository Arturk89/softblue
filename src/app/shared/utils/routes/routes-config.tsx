import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { withSuspense } from 'shared/HOC/withSuspense'
import { StartPage } from 'features/StartPage/StartPage'

export const routesConfig = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: routes.HOME.path,
        element: withSuspense(routes.HOME.component)
      },
      {
        path: routes.EXPERIENCE.path,
        element: withSuspense(routes.EXPERIENCE.component)
      },
      {
        path: routes.SERVICES.path,
        element: withSuspense(routes.SERVICES.component)
      }
    ]
  }
])
