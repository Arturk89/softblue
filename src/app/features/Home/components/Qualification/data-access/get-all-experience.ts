import { z } from 'zod'
import { collectionName } from './consts'
import { getHttpClient } from 'shared/http-client/http-client'

const experienceSchema = z.object({
  id: z.number(),
  company: z.string(),
  description: z.string(),
  from: z.string(),
  to: z.string().nullable()
})

export const experiencesSchema = z.array(experienceSchema)

export type ExperienceType = z.infer<typeof experienceSchema>

export const getAllExperiences = () =>
  getHttpClient()
    .getAll<ExperienceType[]>(collectionName)
    .then((res) => {
      if (experiencesSchema.parse(res)) {
        return res
      }
      Promise.reject()
    })
    .catch((err) => {
      if (err instanceof z.ZodError) {
        console.log('error from ZOD ', err)
      }
    })
