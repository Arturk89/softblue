import { z } from 'zod'
import { collectionName } from './consts'
import { getHttpClient } from 'shared/http-client/http-client'

const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  id: z.string()
})

export const servicesSchema = z.array(serviceSchema)

export type ServiceType = z.infer<typeof serviceSchema>

export const getAllServices = () =>
  getHttpClient()
    .getAll(collectionName)
    .then((res) => {
      if (servicesSchema.parse(res)) {
        return res
      }
      Promise.reject()
    })
    .catch((err) => {
      if (err instanceof z.ZodError) {
        console.log('error from ZOD ', err)
      }
    })
