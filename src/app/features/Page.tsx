import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { CommentsView } from './Comments/CommentsView'
import { CreateComment } from './Comments/CreateComment/CreateComment'
import { Footer } from './Footer'

export function Page() {
  return (
    <>
      <Header />
      <Outlet />
      <CommentsView />
      <CreateComment />
      <Footer />
    </>
  )
}
