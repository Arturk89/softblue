import { Header } from './features/Header/Header'
import { About } from './features/About/About'
import { CommentsView } from './features/Comments/CommentsView'
import { CreateComment } from './features/Comments/CreateComment/CreateComment'
import { Footer } from './features/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <About />
      <CommentsView />
      <CreateComment />
      <Footer />
    </>
  )
}

export default App
