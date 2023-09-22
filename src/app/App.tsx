import { Header } from './features/Header/Header'
import { About } from './features/About/About'
import { CommentsView } from './features/Comments/CommentsView'
import { CreateComment } from './features/Comments/CreateComment/CreateComment'
import { Footer } from './features/Footer/Footer'
import { MainLayout } from './layouts/MainLayout'

import { Experience } from './features/Details/Experience'

function App() {
  return (
    <MainLayout>
      <Header />
      {/* <About /> */}
      <Experience />
      <CommentsView />
      <CreateComment />
      <Footer />
    </MainLayout>
  )
}

export default App
