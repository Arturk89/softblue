import { HttpClient } from 'app/fetch.config'

let instance: HttpClient

export const initHttpClient = (client: HttpClient) => {
  instance = client
}

export const getHttpClient = () => {
  return instance
}
