import { createContext, useContext, useState, SetStateAction } from 'react'
import { CommentType } from '../data-access/get-all-comments'

export const CommentContext = createContext<CommentType[]>([])
export const ActionContext = createContext<
  React.Dispatch<SetStateAction<CommentType[]>>
>(() => null)

export const CommentProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [comments, setComments] = useState<CommentType[]>([])

  return (
    <ActionContext.Provider value={setComments}>
      <CommentContext.Provider value={comments}>
        {children}
      </CommentContext.Provider>
    </ActionContext.Provider>
  )
}

export function useComments() {
  const comments = useContext(CommentContext)
  if (!comments) {
    throw new Error('useComments must be used within CommentProvider')
  }
  return comments
}

export function useCommentAction() {
  const action = useContext(ActionContext)
  if (!action) {
    throw new Error('useCommentAction must be used within CommentProvider')
  }
  return action
}
