import { MainLayout } from './layouts/main-layout'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from 'shared/utils/routes/routes-config'
import { initHttpClient } from 'shared/http-client/http-client'
import { HttpClientAdapter } from './fetch.config'

initHttpClient(new HttpClientAdapter())

function App() {
  return (
    <MainLayout>
      <RouterProvider router={routesConfig} />
    </MainLayout>
  )
}

export default App
