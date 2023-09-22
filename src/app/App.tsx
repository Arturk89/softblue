import { MainLayout } from './layouts/MainLayout'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from 'shared/utils/routes/routes-config'

function App() {
  return (
    <MainLayout>
      <RouterProvider router={routesConfig} />
    </MainLayout>
  )
}

export default App
