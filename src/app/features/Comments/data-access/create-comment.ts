import { collectionName } from './consts'
import { getHttpClient } from 'shared/http-client/http-client'
import { CommentType } from './get-all-comments'

type CreateComment = Omit<CommentType, 'id' | 'createdAt'>

export const createComment = (comment: CreateComment) =>
  getHttpClient()
    .create<CreateComment>(collectionName, comment)
    .then((res) => res)
    .catch((err) => console.error(err))
