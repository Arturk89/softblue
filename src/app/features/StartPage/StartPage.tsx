import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { CommentsView } from '../Comments/comments-view/CommentsView'
import { CreateComment } from '../Comments/create-comment/CreateComment'
import { CommentProvider } from 'features/Comments/context/CommentContext'
import { Footer } from '../Footer'

export function StartPage() {
  return (
    <>
      <Header />
      <Outlet />
      <CommentProvider>
        <CommentsView />
        <CreateComment />
      </CommentProvider>
      <Footer />
    </>
  )
}
