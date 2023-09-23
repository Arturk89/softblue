import { z } from 'zod'
import { collectionName } from './consts'
import { getHttpClient } from 'shared/http-client/http-client'

const commentSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  content: z.string(),
  createdAt: z.string()
})

export const commentsSchema = z.array(commentSchema)

export type CommentType = z.infer<typeof commentSchema>

export const getAllComments = () =>
  getHttpClient()
    .getAll(collectionName)
    .then((res) => {
      if (commentsSchema.parse(res)) {
        return res
      }
      Promise.reject()
    })
    .catch((err) => {
      if (err instanceof z.ZodError) {
        console.log('error from ZOD ', err)
      }
    })
